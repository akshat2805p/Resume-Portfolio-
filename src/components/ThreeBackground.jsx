import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ isDark = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Constellation & Telemetry Nodes
    const particleCount = prefersReducedMotion ? 40 : 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const range = 65;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range * 1.6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range * 0.8;

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.02
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material
    const particleColor = isDark ? 0x10b981 : 0x059669;
    const particleMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 1.6,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Dynamic Connection Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x10b981 : 0x059669,
      transparent: true,
      opacity: isDark ? 0.16 : 0.1,
      blending: THREE.AdditiveBlending
    });

    const linesGeometry = new THREE.BufferGeometry();
    const maxConnections = particleCount * 6;
    const linePositions = new Float32Array(maxConnections * 6);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Floating 3D Geometric Tech Solids
    const geoGroup = new THREE.Group();
    scene.add(geoGroup);

    // Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x10b981 : 0x059669,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.18 : 0.12
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-24, 8, -10);
    geoGroup.add(icosahedron);

    // Wireframe Torus
    const torusGeo = new THREE.TorusGeometry(8, 1.8, 12, 36);
    const torusMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x34d399 : 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.12 : 0.08
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(26, -10, -15);
    geoGroup.add(torus);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Interactive Mouse Coordinates
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Reaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax camera rotation
      camera.position.x = mouse.x * 4;
      camera.position.y = mouse.y * 3 - (scrollY * 0.015);
      camera.lookAt(0, 0, 0);

      // Rotate 3D solids
      icosahedron.rotation.x = elapsedTime * 0.15;
      icosahedron.rotation.y = elapsedTime * 0.2;
      torus.rotation.x = elapsedTime * 0.1;
      torus.rotation.y = elapsedTime * 0.12;

      // Update particle positions
      const pos = geometry.attributes.position.array;
      let lineIndex = 0;
      const linePos = linesGeometry.attributes.position.array;
      const connectDistance = 14;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        if (!prefersReducedMotion) {
          pos[i3] += velocities[i].x;
          pos[i3 + 1] += velocities[i].y;
          pos[i3 + 2] += velocities[i].z;

          // Boundary bouncing
          if (Math.abs(pos[i3]) > range * 0.8) velocities[i].x *= -1;
          if (Math.abs(pos[i3 + 1]) > range * 0.5) velocities[i].y *= -1;
          if (Math.abs(pos[i3 + 2]) > range * 0.4) velocities[i].z *= -1;
        }

        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDistance && lineIndex < linePositions.length - 6) {
            linePos[lineIndex++] = pos[i3];
            linePos[lineIndex++] = pos[i3 + 1];
            linePos[lineIndex++] = pos[i3 + 2];

            linePos[lineIndex++] = pos[j3];
            linePos[lineIndex++] = pos[j3 + 1];
            linePos[lineIndex++] = pos[j3 + 2];
          }
        }
      }

      // Clear remaining line points
      for (let k = lineIndex; k < linePositions.length; k++) {
        linePos[k] = 0;
      }

      geometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="three-canvas-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: isDark ? 0.95 : 0.6
      }}
      aria-hidden="true"
    />
  );
}
