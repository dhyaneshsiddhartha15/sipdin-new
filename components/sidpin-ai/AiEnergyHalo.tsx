"use client";

/**
 * AiEnergyHalo — the hero visualization. One giant procedural energy arc:
 * a GPU-driven particle field (flowing/noise-displaced in the vertex shader,
 * not a sphere/globe/ring) plus a thin fresnel-glow TubeGeometry conduit
 * tracing the same open arc, with traveling light pulses. No imported
 * models, no closed rings, no wireframe geometry — everything is generated
 * and animated procedurally.
 *
 * Glow is done with layered additive sprites rather than a post-processing
 * bloom pass (EffectComposer/UnrealBloomPass) — the multi-render-target
 * bloom technique behaves very differently (blows out to solid white) on
 * software/CPU WebGL renderers (e.g. SwiftShader), and sprites are a much
 * more universally reliable way to get the same soft-glow look.
 */

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

export type AiEnergyHaloHandle = {
  /** Imperative scroll-driven drift — avoids React re-renders per scroll tick. */
  setScrollProgress: (t: number) => void;
};

// Ashima Arts / Ian McEwan classic 3D simplex noise (public domain) — drives the
// organic "flow field" displacement so particles/tube ripple instead of spin.
const SNOISE_GLSL = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

const PARTICLE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uFlow;
  attribute float aRandom;
  attribute float aReveal;
  attribute float aSize;
  varying float vRandom;
  varying float vAlpha;

  ${SNOISE_GLSL}

  void main() {
    vec3 pos = position;

    // organic flow-field displacement — GPU-side, no per-frame CPU buffer writes
    // Single noise sample (cheap), reused with phase offsets for the other axes —
    // keeps the vertex shader light across tens of thousands of points.
    float n1 = snoise(pos * 0.6 + vec3(0.0, 0.0, uTime * 0.05));
    float n2 = sin(n1 * 3.1 + aRandom * 6.2831 + uTime * 0.2);
    vec3 flow = vec3(n1, n2, n1 * n2) * uFlow;
    pos += flow;

    vRandom = aRandom;
    vAlpha = smoothstep(aReveal - 0.12, aReveal, uReveal);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float pulse = 0.75 + 0.35 * sin(uTime * 0.5 + aRandom * 6.2831);
    gl_PointSize = uSize * aSize * pulse * uPixelRatio * (240.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const PARTICLE_FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vRandom;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c) * 2.0;
    float soft = 1.0 - smoothstep(0.4, 1.0, d);
    if (soft <= 0.001) discard;
    vec3 color = mix(uColorA, uColorB, vRandom);
    // Slightly dampened so dense overlaps (many additive points per pixel)
    // stay glowy without fully flattening to white.
    gl_FragColor = vec4(color * soft * 0.6, soft * vAlpha * 0.9);
  }
`;

const TUBE_VERT = /* glsl */ `
  varying vec3 vNormalV;
  varying vec3 vViewDirV;
  varying vec2 vUvV;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vNormalV = normalize(normalMatrix * normal);
    vViewDirV = normalize(-mvPosition.xyz);
    vUvV = uv;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const TUBE_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vNormalV;
  varying vec3 vViewDirV;
  varying vec2 vUvV;

  void main() {
    float fresnel = pow(1.0 - max(dot(normalize(vNormalV), normalize(vViewDirV)), 0.0), 2.0);
    float pulse = smoothstep(0.78, 1.0, sin(vUvV.x * 14.0 - uTime * 0.6) * 0.5 + 0.5);
    vec3 base = mix(uColorA, uColorB, vUvV.x);
    vec3 color = base * (0.22 + fresnel * 0.65) + base * pulse * 1.1;
    float alpha = clamp(0.1 + fresnel * 0.4 + pulse * 0.45, 0.0, 1.0);
    gl_FragColor = vec4(color, alpha);
  }
`;

function buildArcPoints(radius: number, startDeg: number, endDeg: number, segments: number) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const deg = startDeg + (endDeg - startDeg) * t;
    const rad = (deg * Math.PI) / 180;
    pts.push(new THREE.Vector3(Math.cos(rad) * radius, Math.sin(rad) * radius, 0));
  }
  return pts;
}

const AiEnergyHalo = forwardRef<AiEnergyHaloHandle, { className?: string }>(function AiEnergyHalo(
  { className },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);

  useImperativeHandle(ref, () => ({
    setScrollProgress(t: number) {
      scrollRef.current = t;
    },
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const particleCount = isMobile ? 6000 : isTablet ? 16000 : 34000;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    const baseCameraZ = isMobile ? 9.5 : 7.6;
    camera.position.set(0, 0.2, baseCameraZ);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const haloGroup = new THREE.Group();
    haloGroup.position.y = 0.55;
    scene.add(haloGroup);

    // Open arc (~250°), gap centered at the bottom — an arch/halo hovering above,
    // deliberately not a closed ring/torus/globe.
    const ARC_START = -35;
    const ARC_END = 215;
    const ARC_RADIUS = 2.6;
    const TUBE_THICKNESS = 0.55;

    // GPU particle field along the arc, with volumetric thickness
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount);
    const reveals = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      const deg = ARC_START + (ARC_END - ARC_START) * t;
      const rad = (deg * Math.PI) / 180;
      const radialJitter = (Math.random() - 0.5) * TUBE_THICKNESS;
      const depthJitter = (Math.random() - 0.5) * TUBE_THICKNESS * 0.7;
      const r = ARC_RADIUS + radialJitter;

      positions[i * 3] = Math.cos(rad) * r;
      positions[i * 3 + 1] = Math.sin(rad) * r;
      positions[i * 3 + 2] = depthJitter;

      randoms[i] = Math.random();
      reveals[i] = Math.random();
      sizes[i] = 0.5 + Math.random() * 1.1;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));
    particleGeometry.setAttribute("aReveal", new THREE.BufferAttribute(reveals, 1));
    particleGeometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uReveal: { value: 0 },
        uPixelRatio: { value: dpr },
        uSize: { value: isMobile ? 9 : 12 },
        uFlow: { value: 0.35 },
        uColorA: { value: new THREE.Color(0x5d7cff) },
        uColorB: { value: new THREE.Color(0x8fb5ff) },
      },
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    haloGroup.add(particles);

    // Thin fresnel-glow energy conduit tracing the same arc
    const curve = new THREE.CatmullRomCurve3(buildArcPoints(ARC_RADIUS, ARC_START, ARC_END, 40));
    const tubeGeometry = new THREE.TubeGeometry(curve, 200, 0.035, 10, false);
    const tubeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color(0x5d7cff) },
        uColorB: { value: new THREE.Color(0x8fb5ff) },
      },
      vertexShader: TUBE_VERT,
      fragmentShader: TUBE_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    haloGroup.add(tube);

    // Soft lens-glow sprites at a few points along the arc (cheap, no lights needed)
    function makeSoftDotTexture() {
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(180,210,255,0.55)");
      grad.addColorStop(1, "rgba(120,160,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }
    const dotTexture = makeSoftDotTexture();
    const lensGlows: THREE.Sprite[] = [];
    const lensSpriteMaterials: THREE.SpriteMaterial[] = [];
    const glowBaseOpacity: number[] = [];
    const glowBaseZ: number[] = [];

    // A few brighter "lens glow" accents at key points along the arc.
    [-20, 90, 200].forEach((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const baseOpacity = i === 1 ? 0.35 : 0.2;
      const mat = new THREE.SpriteMaterial({
        map: dotTexture,
        color: i === 1 ? 0x8fb5ff : 0x5d7cff,
        transparent: true,
        opacity: baseOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      const scale = i === 1 ? 2.6 : 1.8;
      sprite.scale.set(scale, scale, 1);
      sprite.position.set(Math.cos(rad) * ARC_RADIUS, Math.sin(rad) * ARC_RADIUS, 0.3);
      haloGroup.add(sprite);
      lensGlows.push(sprite);
      lensSpriteMaterials.push(mat);
      glowBaseOpacity.push(baseOpacity);
      glowBaseZ.push(0.3);
    });

    // Broad, soft "backdrop bloom" sprites strung along the whole arc — this
    // simulates the wide soft glow a post-processing bloom pass would give,
    // using plain additive sprites instead so it renders reliably on every
    // GPU (including software/CPU renderers where a multi-pass bloom does not).
    const backdropCount = prefersReducedMotion ? 5 : 9;
    const backdropBaseOpacity = 0.09;
    for (let i = 0; i < backdropCount; i++) {
      const t = i / (backdropCount - 1);
      const deg = ARC_START + (ARC_END - ARC_START) * t;
      const rad = (deg * Math.PI) / 180;
      const mat = new THREE.SpriteMaterial({
        map: dotTexture,
        color: 0x6f8fff,
        transparent: true,
        opacity: backdropBaseOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(3.4, 3.4, 1);
      sprite.position.set(Math.cos(rad) * ARC_RADIUS, Math.sin(rad) * ARC_RADIUS, -0.4);
      haloGroup.add(sprite);
      lensGlows.push(sprite);
      lensSpriteMaterials.push(mat);
      glowBaseOpacity.push(backdropBaseOpacity);
      glowBaseZ.push(-0.4);
    }

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    // Very subtle mouse parallax — luxury, not a rotation ride
    const mouseTarget = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      mouseTarget.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseTarget.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!prefersReducedMotion) window.addEventListener("pointermove", onPointerMove);

    const clock = new THREE.Clock();
    let raf = 0;
    const currentRot = { x: 0, y: 0 };
    const currentDrift = { z: 0 };

    // Entrance reveal driven by this component's own clock (not an external ref
    // call) so it can never get stuck if a parent's timeline ticks before this
    // dynamically-imported component has mounted. Reduced motion skips straight to 1.
    const REVEAL_SECONDS = 2;
    particleMaterial.uniforms.uReveal.value = prefersReducedMotion ? 1 : 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      particleMaterial.uniforms.uTime.value = elapsed;
      tubeMaterial.uniforms.uTime.value = elapsed;

      if (!prefersReducedMotion) {
        const revealT = Math.min(1, elapsed / REVEAL_SECONDS);
        particleMaterial.uniforms.uReveal.value = 1 - Math.pow(1 - revealT, 3);

        // breathing scale, never spinning
        const breathe = 1 + Math.sin(elapsed * 0.15) * 0.015;
        haloGroup.scale.setScalar(breathe);

        currentRot.x += (mouseTarget.y * 0.045 - currentRot.x) * 0.02;
        currentRot.y += (mouseTarget.x * 0.06 - currentRot.y) * 0.02;
        haloGroup.rotation.x = currentRot.x;
        haloGroup.rotation.y = currentRot.y;

        currentDrift.z += (scrollRef.current * 0.7 - currentDrift.z) * 0.04;
        haloGroup.rotation.z = scrollRef.current * 0.12;
        camera.position.z = baseCameraZ - currentDrift.z;
        particleMaterial.uniforms.uFlow.value = 0.35 + scrollRef.current * 0.25;

        // "Light changes" on scroll — glow sprites brighten slightly instead of a bloom strength uniform.
        const glowBoost = 1 + scrollRef.current * 0.5;
        lensGlows.forEach((sprite, i) => {
          sprite.position.z = glowBaseZ[i] + Math.sin(elapsed * 0.2 + i) * 0.3;
          lensSpriteMaterials[i].opacity = glowBaseOpacity[i] * glowBoost;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      particleGeometry.dispose();
      particleMaterial.dispose();
      tubeGeometry.dispose();
      tubeMaterial.dispose();
      lensSpriteMaterials.forEach((m) => m.dispose());
      dotTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
});

export default AiEnergyHalo;
