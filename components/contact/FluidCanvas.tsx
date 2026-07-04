"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

// Flowing liquid-chrome / holographic gradient: domain-warped fbm noise,
// iridescent cosine palette, glossy ridge highlights.
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uLight;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.55;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.05;
    a *= 0.5;
  }
  return v;
}

vec3 palette(float t) {
  // deep violet -> royal blue -> cyan -> magenta iridescence
  return 0.5 + 0.5 * cos(6.28318 * (t * vec3(0.9, 0.85, 0.7) + vec3(0.55, 0.35, 0.15)));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * 1.6;
  float t = uTime * 0.045;

  // Domain warping — the "liquid" flow
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t * 0.7));
  vec2 r = vec2(
    fbm(p + 2.6 * q + vec2(1.7, 9.2) + t * 0.6),
    fbm(p + 2.6 * q + vec2(8.3, 2.8) - t * 0.4)
  );
  float v = fbm(p + 2.4 * r);

  vec3 col = palette(v + 0.25 * q.x - 0.15 * r.y);

  // Deep dark folds for chrome-like contrast
  float folds = smoothstep(0.25, 0.75, fbm(p * 1.4 + r * 1.8 - t));
  col *= mix(0.12, 1.15, folds);

  // Glossy specular ridges
  float ridge = abs(fract(v * 4.0 + q.y * 2.0) - 0.5) * 2.0;
  float gloss = pow(1.0 - ridge, 14.0);
  col += vec3(gloss) * 0.7;

  // Saturation lift
  col = pow(col, vec3(0.92));

  // Light theme: lift toward a soft pastel version
  col = mix(col, 1.0 - (1.0 - col) * 0.42, uLight);

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl =
      canvas.getContext("webgl", { antialias: false }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return; // CSS blob fallback stays visible underneath

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uLight = gl.getUniformLocation(program, "uLight");

    let light = document.documentElement.classList.contains("dark") ? 0 : 1;
    const observer = new MutationObserver(() => {
      light = document.documentElement.classList.contains("dark") ? 0 : 1;
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();
    const render = () => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform1f(uLight, light);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
