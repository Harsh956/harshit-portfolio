'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Palette, RotateCcw, Sparkles } from 'lucide-react';

type FinishColor = 'titanium' | 'obsidian' | 'sapphire' | 'emerald';

const FINISHES: Record<FinishColor, { name: string; hex: number; bodyColor: string; accent: string }> = {
  titanium: { name: 'Natural Titanium', hex: 0x94a3b8, bodyColor: '#1e293b', accent: '#38bdf8' },
  obsidian: { name: 'Space Obsidian', hex: 0x0f172a, bodyColor: '#090d16', accent: '#f59e0b' },
  sapphire: { name: 'Deep Sapphire', hex: 0x1e3a8a, bodyColor: '#0b1936', accent: '#60a5fa' },
  emerald: { name: 'Emerald Velvet', hex: 0x064e3b, bodyColor: '#062820', accent: '#10b981' },
};

export default function AndroidPhone3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFinish, setActiveFinish] = useState<FinishColor>('titanium');
  const chassisMeshRef = useRef<THREE.Mesh | null>(null);
  const backMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 580;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 15);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting (Studio Key + Rim + Fill Setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const studioKeyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    studioKeyLight.position.set(8, 12, 10);
    scene.add(studioKeyLight);

    const rimLightBlue = new THREE.DirectionalLight(0x38bdf8, 3.5);
    rimLightBlue.position.set(-10, -6, 6);
    scene.add(rimLightBlue);

    const rimLightAmber = new THREE.PointLight(0xf59e0b, 2.5, 25);
    rimLightAmber.position.set(6, -8, 8);
    scene.add(rimLightAmber);

    const topSoftLight = new THREE.PointLight(0xffffff, 1.8, 20);
    topSoftLight.position.set(0, 10, 2);
    scene.add(topSoftLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Sleek Flagship Smartphone Dimensions
    const phoneWidth = 4.8;
    const phoneHeight = 9.9;
    const phoneDepth = 0.42;
    const phoneRadius = 0.65;

    // Create rounded chassis shape
    const shape = new THREE.Shape();
    const x = -phoneWidth / 2;
    const y = -phoneHeight / 2;
    const w = phoneWidth;
    const h = phoneHeight;
    const r = phoneRadius;

    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + h - r);
    shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    shape.lineTo(x + r, y + h);
    shape.quadraticCurveTo(x, y + h, x, y + h - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);

    const extrudeSettings = {
      depth: phoneDepth,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    const chassisGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    chassisGeo.center();

    // Brushed Titanium Frame Material
    const chassisMat = new THREE.MeshStandardMaterial({
      color: FINISHES[activeFinish].hex,
      metalness: 0.94,
      roughness: 0.22,
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    chassisMeshRef.current = chassisMesh;
    rootGroup.add(chassisMesh);

    // Frosted Back Plate
    const backGeo = new THREE.PlaneGeometry(phoneWidth - 0.25, phoneHeight - 0.25);
    const backMat = new THREE.MeshStandardMaterial({
      color: FINISHES[activeFinish].hex,
      metalness: 0.4,
      roughness: 0.35,
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -phoneDepth / 2 - 0.105;
    backMesh.rotation.y = Math.PI;
    backMeshRef.current = backMesh;
    rootGroup.add(backMesh);

    // 2. High-End Triple Camera Module on Back
    const cameraIslandGeo = new THREE.BoxGeometry(1.8, 2.4, 0.2);
    const cameraIslandMat = new THREE.MeshStandardMaterial({
      color: 0x050814,
      metalness: 0.9,
      roughness: 0.15,
    });
    const cameraIsland = new THREE.Mesh(cameraIslandGeo, cameraIslandMat);
    cameraIsland.position.set(-1.15, 3.2, -phoneDepth / 2 - 0.18);
    rootGroup.add(cameraIsland);

    // 3 Camera Lenses with Metallic Rings
    const lensPositions = [
      { x: -1.15, y: 3.8 },
      { x: -1.15, y: 2.8 },
      { x: -0.65, y: 3.3 },
    ];

    lensPositions.forEach((pos) => {
      // Ring
      const ringGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.12, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xc0c8d4,
        metalness: 0.96,
        roughness: 0.1,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(pos.x, pos.y, -phoneDepth / 2 - 0.26);
      rootGroup.add(ring);

      // Glass Lens
      const glassGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.05, 32);
      glassGeo.rotateX(Math.PI / 2);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x00f0ff,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.9,
        ior: 1.5,
      });
      const glass = new THREE.Mesh(glassGeo, glassMat);
      glass.position.set(pos.x, pos.y, -phoneDepth / 2 - 0.3);
      rootGroup.add(glass);
    });

    // Flash Ring
    const flashGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 16);
    flashGeo.rotateX(Math.PI / 2);
    const flashMat = new THREE.MeshStandardMaterial({
      color: 0xfff3d4,
      emissive: 0xfff3d4,
      emissiveIntensity: 0.6,
    });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.position.set(-0.65, 2.5, -phoneDepth / 2 - 0.22);
    rootGroup.add(flash);

    // 3. Dynamic Screen Texture (Executive UI)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 600;
    screenCanvas.height = 1240;
    const ctx = screenCanvas.getContext('2d')!;

    const renderScreen = (time: number) => {
      // Sleek Dark OLED Gradient Background
      const bg = ctx.createLinearGradient(0, 0, 600, 1240);
      bg.addColorStop(0, '#060a17');
      bg.addColorStop(0.4, '#030712');
      bg.addColorStop(1, '#020409');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 600, 1240);

      // Top Status Bar
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 22px Inter, sans-serif';
      ctx.fillText('9:41', 48, 54);

      // Dynamic Island Pill
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.roundRect(220, 36, 160, 34, 17);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inside Dynamic Island: Camera & Notification dot
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(245, 53, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(355, 53, 4, 0, Math.PI * 2);
      ctx.fill();

      // Battery Icon
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(505, 40, 38, 20);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(508, 43, 26, 14);
      ctx.fillRect(544, 46, 3, 8);

      // Hero Profile Card on Screen
      const cardGrad = ctx.createLinearGradient(36, 110, 564, 270);
      cardGrad.addColorStop(0, 'rgba(30, 41, 59, 0.7)');
      cardGrad.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
      ctx.fillStyle = cardGrad;
      ctx.beginPath();
      ctx.roundRect(36, 110, 528, 175, 28);
      ctx.fill();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Verified Badge Pill
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.beginPath();
      ctx.roundRect(56, 134, 220, 32, 16);
      ctx.fill();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.stroke();

      ctx.fillStyle = '#34d399';
      ctx.font = '600 13px Inter, sans-serif';
      ctx.fillText('● GOOGLE PLAY VERIFIED', 72, 155);

      // Name & Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 30px Inter, sans-serif';
      ctx.fillText('Harshit Saxena', 56, 210);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 17px Inter, sans-serif';
      ctx.fillText('Senior Android & Mobile Architect', 56, 244);

      // Executive Metrics Row
      const metrics = [
        { val: '14+', label: 'PLAY STORE APPS', color: '#38bdf8' },
        { val: '7+ YRS', label: 'EXPERIENCE', color: '#f59e0b' },
        { val: '99.9%', label: 'CRASH-FREE', color: '#10b981' },
      ];

      metrics.forEach((m, idx) => {
        const mx = 36 + idx * 182;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
        ctx.beginPath();
        ctx.roundRect(mx, 310, 165, 96, 20);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = m.color;
        ctx.font = 'bold 30px Inter, sans-serif';
        ctx.fillText(m.val, mx + 20, 355);

        ctx.fillStyle = '#64748b';
        ctx.font = '600 12px Inter, sans-serif';
        ctx.fillText(m.label, mx + 20, 385);
      });

      // Interactive Architecture Code Block
      ctx.fillStyle = 'rgba(10, 15, 30, 0.9)';
      ctx.beginPath();
      ctx.roundRect(36, 430, 528, 430, 24);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Window Header
      ctx.fillStyle = '#ff5f56'; ctx.beginPath(); ctx.arc(65, 460, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ffbd2e'; ctx.beginPath(); ctx.arc(85, 460, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#27c93f'; ctx.beginPath(); ctx.arc(105, 460, 6, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 14px monospace';
      ctx.fillText('AppArchitecture.kt (Kotlin & Flow)', 130, 465);

      const code = [
        { t: '@HiltViewModel', c: '#a855f7' },
        { t: 'class ProductionViewModel @Inject constructor(', c: '#f8fafc' },
        { t: '    private val repository: AppRepository,', c: '#94a3b8' },
        { t: '    private val dispatchers: CoroutineDispatchers', c: '#94a3b8' },
        { t: ') : ViewModel() {', c: '#f8fafc' },
        { t: '    val uiState: StateFlow<UiState> = repository', c: '#38bdf8' },
        { t: '        .observeAppsStream()', c: '#38bdf8' },
        { t: '        .map { UiState.Success(it) }', c: '#34d399' },
        { t: '        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), Loading)', c: '#fbbf24' },
        { t: '}', c: '#f8fafc' },
      ];

      code.forEach((line, i) => {
        ctx.fillStyle = line.c;
        ctx.font = '500 15px monospace';
        ctx.fillText(line.t, 55, 510 + i * 32);
      });

      // Active System Waveform / 60 FPS Gauge
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.beginPath();
      ctx.roundRect(36, 885, 528, 240, 24);
      ctx.fill();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('Production Performance: 60 FPS Locked', 60, 930);

      ctx.fillStyle = '#64748b';
      ctx.font = '13px Inter, sans-serif';
      ctx.fillText('Zero UI jank • Coroutine-driven background threads', 60, 955);

      // Animated Wave
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let px = 60; px < 540; px += 5) {
        const py = 1030 + Math.sin(px * 0.03 + time * 3) * 22;
        if (px === 60) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Home Indicator Bar
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.roundRect(220, 1205, 160, 6, 3);
      ctx.fill();
    };

    renderScreen(0);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;

    // Screen Mesh
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.28, phoneHeight - 0.35);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneDepth / 2 + 0.105;
    rootGroup.add(screenMesh);

    // Subtle Ground Shadow Plane for Depth
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -5.8;
    shadowMesh.rotation.x = -Math.PI / 2;
    scene.add(shadowMesh);

    // Interaction / Drag Rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = 0.25;
    let targetRotX = 0.08;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        targetRotY += dx * 0.008;
        targetRotX += dy * 0.008;
        prevX = e.clientX;
        prevY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = nx * 0.6;
        targetRotX = -ny * 0.6;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch support
    let touchX = 0;
    let touchY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const dx = e.touches[0].clientX - touchX;
        const dy = e.touches[0].clientY - touchY;
        targetRotY += dx * 0.006;
        targetRotX += dy * 0.006;
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };

    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    dom.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.02;

      // Gentle floating bob
      rootGroup.position.y = Math.sin(time * 1.6) * 0.25;

      // Smooth inertia rotation
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.06;

      if (!isDragging) {
        targetRotY += 0.003;
      }

      // Live update screen
      if (Math.floor(time * 60) % 2 === 0) {
        renderScreen(time);
        screenTexture.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('touchstart', handleTouchStart);
      dom.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      chassisGeo.dispose();
      chassisMat.dispose();
      backGeo.dispose();
      backMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Update finish colors dynamically
  useEffect(() => {
    if (chassisMeshRef.current && backMeshRef.current) {
      const finish = FINISHES[activeFinish];
      (chassisMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(finish.hex);
      (backMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(finish.hex);
    }
  }, [activeFinish]);

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Titanium Finish Switcher Overlay */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1.5 rounded-full luxury-glass border border-white/10 shadow-xl">
        {(Object.keys(FINISHES) as FinishColor[]).map((key) => {
          const item = FINISHES[key];
          const isSelected = activeFinish === key;
          return (
            <button
              key={key}
              onClick={() => setActiveFinish(key)}
              title={item.name}
              className={`w-6 h-6 rounded-full transition-transform ${
                isSelected ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-950' : 'hover:scale-110 opacity-70'
              }`}
              style={{ backgroundColor: item.bodyColor, border: '1px solid rgba(255,255,255,0.2)' }}
            />
          );
        })}
      </div>

      {/* Floating Status Pill */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
        <div className="luxury-glass px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive 3D Flagship • Drag to Rotate</span>
        </div>
      </div>
    </div>
  );
}
