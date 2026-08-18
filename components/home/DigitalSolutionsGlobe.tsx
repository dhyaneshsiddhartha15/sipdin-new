"use client";

/**
 * DigitalSolutionsGlobe — Premium 3D globe visualization
 * Dark globe with blue glowing edges, orbital lines, and animated nodes
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DigitalSolutionsGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0e1a,
      transparent: true,
      opacity: 0.9
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Create wireframe overlay with blue glow
    const wireframeGeometry = new THREE.SphereGeometry(1.51, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4169E1,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Create orbital rings
    const rings: THREE.Mesh[] = [];
    const ringConfigurations = [
      { radius: 1.8, rotation: { x: Math.PI / 3, y: 0, z: 0 } },
      { radius: 2.1, rotation: { x: Math.PI / 6, y: Math.PI / 4, z: 0 } },
      { radius: 2.3, rotation: { x: -Math.PI / 4, y: Math.PI / 6, z: Math.PI / 8 } }
    ];

    ringConfigurations.forEach(config => {
      const ringGeometry = new THREE.TorusGeometry(config.radius, 0.008, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x4169E1,
        transparent: true,
        opacity: 0.3
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = config.rotation.x;
      ring.rotation.y = config.rotation.y;
      ring.rotation.z = config.rotation.z;
      scene.add(ring);
      rings.push(ring);
    });

    // Create orbital nodes/particles
    const nodes: THREE.Mesh[] = [];
    const nodeCount = 12;

    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.04, 16, 16);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00B8FF,
        transparent: true,
        opacity: 0.8
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

      // Position nodes on different orbital paths
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 1.8 + (i % 3) * 0.3;
      const height = Math.sin(angle * 2) * 0.5;

      node.position.x = Math.cos(angle) * radius;
      node.position.z = Math.sin(angle) * radius;
      node.position.y = height;

      scene.add(node);
      nodes.push(node);
    }

    // Create connection lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4169E1,
      transparent: true,
      opacity: 0.2
    });

    for (let i = 0; i < 6; i++) {
      const points = [];
      const startAngle = (i / 6) * Math.PI * 2;
      const endAngle = startAngle + Math.PI / 3;

      for (let j = 0; j <= 20; j++) {
        const t = j / 20;
        const angle = startAngle + (endAngle - startAngle) * t;
        const radius = 2.0;
        const height = Math.sin(angle * 3) * 0.3;

        points.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ));
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }

    // Ambient glow effect
    const glowGeometry = new THREE.SphereGeometry(1.6, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x4169E1,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation following mouse
      targetRotationY = mouseX * 0.3;
      targetRotationX = mouseY * 0.2;

      globe.rotation.y += 0.002;
      wireframe.rotation.y += 0.002;

      // Add mouse influence with smooth damping
      globe.rotation.y += (targetRotationY - globe.rotation.y * 0.1) * 0.05;
      globe.rotation.x += (targetRotationX - globe.rotation.x * 0.1) * 0.05;

      // Animate rings
      rings.forEach((ring, i) => {
        ring.rotation.x += 0.001 * (i + 1) * 0.5;
        ring.rotation.y += 0.001 * (i + 1) * 0.3;
      });

      // Animate nodes along orbital paths
      nodes.forEach((node, i) => {
        const speed = 0.0003 * (i % 3 + 1);
        const radius = 1.8 + (i % 3) * 0.3;
        const angle = elapsedTime * speed + (i / nodeCount) * Math.PI * 2;

        node.position.x = Math.cos(angle) * radius;
        node.position.z = Math.sin(angle) * radius;
        node.position.y = Math.sin(angle * 2) * 0.5;

        // Pulse effect
        const scale = 1 + Math.sin(elapsedTime * 2 + i) * 0.2;
        node.scale.set(scale, scale, scale);
      });

      // Subtle glow pulsing
      glow.material.opacity = 0.05 + Math.sin(elapsedTime) * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
}