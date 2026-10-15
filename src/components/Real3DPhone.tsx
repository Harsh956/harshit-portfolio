'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import appScreenshotsData from '@/data/appScreenshots.json';
import {
  Sparkles,
  Rotate3d,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Sprout,
  Ticket,
  Target,
  Trophy,
  Play,
  Pause,
  Camera,
  Layers,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface AppPreview {
  id: string;
  name: string;
  shortName: string;
  category: string;
  themeColor: string;
  rating: string;
  installs: string;
  playStoreUrl: string;
  screenshots: string[];
  captions: string[];
  featureTitle: string;
  featureDesc: string;
  tag: string;
}

const PREVIEW_APPS: AppPreview[] = [
  {
    id: 'rapagra',
    name: 'Rapagra Smart Agri',
    shortName: 'Rapagra',
    category: 'IoT & AI AgriTech',
    themeColor: '#059669',
    rating: '4.8',
    installs: '10K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    screenshots: appScreenshotsData['rapagra'] || ['/screenshots/rapagra-2.webp'],
    captions: [
      'Crop Foliage Health Diagnosis & Disease Risk Scanning',
      'Real-Time IoT Soil Moisture & Temperature Sensor Telemetry',
      'Field Scouting Logs & Farm Plot Satellite Mapping',
      'Pesticide Spray Optimization & Chemical Cost Reduction',
      'Offline Local Data Caching via Android Room Database'
    ],
    featureTitle: 'Real-Time Crop Disease Risk Detection',
    featureDesc: 'TFLite edge intelligence & IoT BLE soil probe syncing',
    tag: 'Production ML / BLE'
  },
  {
    id: 'immortal-seats',
    name: 'Immortal Seats',
    shortName: 'Immortal Seats',
    category: '360° Live Arena Ticketing',
    themeColor: '#0284c7',
    rating: '4.9',
    installs: '50K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    screenshots: appScreenshotsData['immortal-seats'] || ['/screenshots/immortal-seats-2.webp'],
    captions: [
      'Interactive 360° MetLife Arena Seating Chart',
      'Real-Time Seat View & Row Availability Matrix',
      'VIP Golden Circle Pass & Dynamic Pricing',
      'Digital Ticket Pass with QR Barcode Scanner',
      'Instant Booking Confirmation & Push Notifications'
    ],
    featureTitle: 'Interactive 360° Stadium Seating Chart',
    featureDesc: 'Live arena seat views & instant Google Pay checkout',
    tag: 'High Concurrency'
  },
  {
    id: 'meetgoals',
    name: 'MeetGoals Focus',
    shortName: 'MeetGoals',
    category: 'Pomodoro Productivity & Habit',
    themeColor: '#7c3aed',
    rating: '4.8',
    installs: '5K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    screenshots: appScreenshotsData['meetgoals'] || ['/screenshots/meetgoals-2.webp'],
    captions: [
      'Deep Focus Pomodoro Block & Habit Streaks',
      'Task Prioritization Matrix & Priority Flow',
      'Daily Productivity Analytics & Weekly Burn-Down',
      'Custom Ambient Soundscape & Timer Presets',
      'Offline-First Room DB Architecture'
    ],
    featureTitle: 'Deep Focus Pomodoro Block & Habit Streaks',
    featureDesc: 'WorkManager background service & Room DB analytics',
    tag: 'Clean MVVM'
  },
  {
    id: 'starting-5',
    name: 'Starting 5',
    shortName: 'Starting 5',
    category: 'Youth Basketball Coaching (Flutter)',
    themeColor: '#db2777',
    rating: '4.7',
    installs: '5K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    screenshots: appScreenshotsData['starting-5'] || ['/screenshots/starting-5-2.webp'],
    captions: [
      'Youth Basketball Tactical Court Player',
      'Animated Playbook Diagrams & 60 FPS Drills',
      'Shooting Form Metrics & Player Accuracy Tracking',
      'Team Roster Management & Coach Evaluation Notes',
      'Custom Training Routines & Video Uploads'
    ],
    featureTitle: 'Tactical Playbook Video Coaching (60 FPS)',
    featureDesc: 'Cross-platform Flutter custom player & drill scoring',
    tag: 'Flutter Engine'
  },
];

export default function Real3DPhone() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [viewAngle, setViewAngle] = useState<'perspective' | 'front' | 'back'>('perspective');
  const [isLoaded, setIsLoaded] = useState(false);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const phoneGroupRef = useRef<THREE.Group | null>(null);
  const screenMeshRef = useRef<THREE.Mesh | null>(null);
  const textureCacheRef = useRef<Map<string, THREE.Texture>>(new Map());
  const shadowMeshRef = useRef<THREE.Mesh | null>(null);

  // Angles & interpolation targets
  const targetRotationY = useRef(0.28);
  const targetRotationX = useRef(0.08);
  const currentRotationY = useRef(0.28);
  const currentRotationX = useRef(0.08);
  const isPointerDown = useRef(false);
  const pointerStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

  const currentApp = PREVIEW_APPS[activeAppIndex];
  const totalSlides = currentApp.screenshots.length;
  const safeSlideIndex = currentSlideIndex < totalSlides ? currentSlideIndex : 0;
  const currentScreenshotUrl = currentApp.screenshots[safeSlideIndex] || currentApp.screenshots[0];
  const currentCaption = currentApp.captions[safeSlideIndex] || currentApp.featureTitle;

  // Helper to create rounded rectangle shape
  const createRoundedRectShape = (width: number, height: number, radius: number) => {
    const shape = new THREE.Shape();
    const x = -width / 2;
    const y = -height / 2;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);
    return shape;
  };

  // Helper to load or fetch texture from cache
  const loadAppTexture = useCallback((url: string): THREE.Texture => {
    if (textureCacheRef.current.has(url)) {
      return textureCacheRef.current.get(url)!;
    }
    const loader = new THREE.TextureLoader();
    const texture = loader.load(url);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    textureCacheRef.current.set(url, texture);
    return texture;
  }, []);

  // Update screen texture when active app or slide changes
  useEffect(() => {
    if (!screenMeshRef.current) return;
    const texture = loadAppTexture(currentScreenshotUrl);
    const material = screenMeshRef.current.material as THREE.MeshBasicMaterial;
    if (material) {
      material.map = texture;
      material.needsUpdate = true;
    }
  }, [currentScreenshotUrl, loadAppTexture]);

  // Three.js Scene Setup (Runs strictly on client)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 560;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    rendererRef.current = renderer;

    container.replaceChildren(renderer.domElement);

    // 4. Lights: Calibrated Studio Key, Fill, Rim & Floor Ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.45);
    scene.add(ambientLight);

    // Key Light (warm studio white)
    const keyLight = new THREE.DirectionalLight(0xfffdfa, 2.3);
    keyLight.position.set(5.5, 7.5, 7.5);
    scene.add(keyLight);

    // Fill Light (soft cool daylight)
    const fillLight = new THREE.DirectionalLight(0xecfdf5, 1.3);
    fillLight.position.set(-6, -2, 5);
    scene.add(fillLight);

    // Rim Light (luxury purple/indigo reflection on metallic chassis)
    const rimLight = new THREE.DirectionalLight(0x818cf8, 2.4);
    rimLight.position.set(-5, 6, -5.5);
    scene.add(rimLight);

    // Secondary Cyan Rim on opposite edge
    const cyanRim = new THREE.DirectionalLight(0x06b6d4, 1.4);
    cyanRim.position.set(5, -5, -4.5);
    scene.add(cyanRim);

    // 5. Phone Group Hierarchy
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    // Phone Model Dimensions (Ultra-Realistic Flagship Proportion)
    const phoneWidth = 3.32;
    const phoneHeight = 6.92;
    const phoneThickness = 0.32;
    const cornerRadius = 0.62;

    // A. Main Titanium Chassis
    const chassisShape = createRoundedRectShape(phoneWidth, phoneHeight, cornerRadius);
    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: phoneThickness,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
      curveSegments: 20
    };
    const chassisGeo = new THREE.ExtrudeGeometry(chassisShape, extrudeSettings);
    chassisGeo.center();

    // Dark Brushed Titanium Chassis Material
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1b1e23,
      roughness: 0.28,
      metalness: 0.88
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    phoneGroup.add(chassisMesh);

    // B. Polished Metallic Side Rim Band
    const rimSettings: THREE.ExtrudeGeometryOptions = {
      depth: phoneThickness * 0.95,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
      curveSegments: 20
    };
    const rimGeo = new THREE.ExtrudeGeometry(chassisShape, rimSettings);
    rimGeo.center();
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x2e333d,
      roughness: 0.16,
      metalness: 0.96
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.scale.set(1.008, 1.008, 1.0);
    phoneGroup.add(rimMesh);

    // Antenna Bands (4 subtle dark lines on edges)
    const antennaMat = new THREE.MeshBasicMaterial({ color: 0x0f1115 });
    const antennaPositions = [
      { x: phoneWidth / 2 + 0.05, y: 1.8, z: 0 },
      { x: phoneWidth / 2 + 0.05, y: -1.8, z: 0 },
      { x: -phoneWidth / 2 - 0.05, y: 1.8, z: 0 },
      { x: -phoneWidth / 2 - 0.05, y: -1.8, z: 0 }
    ];
    antennaPositions.forEach((pos) => {
      const antGeo = new THREE.BoxGeometry(0.04, 0.08, phoneThickness * 1.02);
      const antMesh = new THREE.Mesh(antGeo, antennaMat);
      antMesh.position.set(pos.x, pos.y, pos.z);
      phoneGroup.add(antMesh);
    });

    // C. Front Screen Mesh
    const screenWidth = phoneWidth - 0.16;
    const screenHeight = phoneHeight - 0.16;
    const screenShape = createRoundedRectShape(screenWidth, screenHeight, cornerRadius - 0.08);
    const screenGeo = new THREE.ShapeGeometry(screenShape, 24);

    // Map screen UVs perfectly to the image texture
    const pos = screenGeo.attributes.position;
    const uvs = [];
    for (let i = 0; i < pos.count; i++) {
      const u = (pos.getX(i) + screenWidth / 2) / screenWidth;
      const v = (pos.getY(i) + screenHeight / 2) / screenHeight;
      uvs.push(u, v);
    }
    screenGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const initialTexture = loadAppTexture(currentScreenshotUrl);
    const screenMat = new THREE.MeshBasicMaterial({
      map: initialTexture
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneThickness / 2 + 0.053;
    phoneGroup.add(screenMesh);
    screenMeshRef.current = screenMesh;

    // D. Front Protective Glass Layer with Realistic Light Reflection
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.86,
      opacity: 0.16,
      transparent: true,
      roughness: 0.04,
      metalness: 0.06,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04
    });
    const glassMesh = new THREE.Mesh(screenGeo, glassMat);
    glassMesh.position.z = phoneThickness / 2 + 0.056;
    phoneGroup.add(glassMesh);

    // E. Dynamic Island Pill at Top Center of Screen
    const islandShape = createRoundedRectShape(0.88, 0.22, 0.11);
    const islandGeo = new THREE.ShapeGeometry(islandShape, 16);
    const islandMat = new THREE.MeshBasicMaterial({ color: 0x050608 });
    const islandMesh = new THREE.Mesh(islandGeo, islandMat);
    islandMesh.position.set(0, phoneHeight / 2 - 0.38, phoneThickness / 2 + 0.058);
    phoneGroup.add(islandMesh);

    // Selfie Camera Lens Dot inside Dynamic Island
    const lensDotGeo = new THREE.CircleGeometry(0.045, 16);
    const lensDotMat = new THREE.MeshBasicMaterial({ color: 0x0d1824 });
    const lensDotMesh = new THREE.Mesh(lensDotGeo, lensDotMat);
    lensDotMesh.position.set(-0.25, 0, 0.002);
    islandMesh.add(lensDotMesh);

    // Privacy Indicator Green Dot
    const greenDotGeo = new THREE.CircleGeometry(0.02, 12);
    const greenDotMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const greenDotMesh = new THREE.Mesh(greenDotGeo, greenDotMat);
    greenDotMesh.position.set(0.3, 0, 0.002);
    islandMesh.add(greenDotMesh);

    // Speaker Grill Cutout at Top Bezel
    const speakerShape = createRoundedRectShape(0.48, 0.04, 0.02);
    const speakerGeo = new THREE.ShapeGeometry(speakerShape, 8);
    const speakerMat = new THREE.MeshBasicMaterial({ color: 0x141416 });
    const speakerMesh = new THREE.Mesh(speakerGeo, speakerMat);
    speakerMesh.position.set(0, phoneHeight / 2 - 0.09, phoneThickness / 2 + 0.054);
    phoneGroup.add(speakerMesh);

    // F. Side Physical Hardware Buttons
    const buttonMat = new THREE.MeshStandardMaterial({
      color: 0x22262b,
      metalness: 0.92,
      roughness: 0.18
    });

    // Power Button (Right Side)
    const powerGeo = new THREE.BoxGeometry(0.05, 0.8, 0.14);
    const powerMesh = new THREE.Mesh(powerGeo, buttonMat);
    powerMesh.position.set(phoneWidth / 2 + 0.05, 0.7, 0);
    phoneGroup.add(powerMesh);

    // Volume Up (Left Side)
    const volUpGeo = new THREE.BoxGeometry(0.05, 0.58, 0.14);
    const volUpMesh = new THREE.Mesh(volUpGeo, buttonMat);
    volUpMesh.position.set(-phoneWidth / 2 - 0.05, 1.15, 0);
    phoneGroup.add(volUpMesh);

    // Volume Down (Left Side)
    const volDownGeo = new THREE.BoxGeometry(0.05, 0.58, 0.14);
    const volDownMesh = new THREE.Mesh(volDownGeo, buttonMat);
    volDownMesh.position.set(-phoneWidth / 2 - 0.05, 0.45, 0);
    phoneGroup.add(volDownMesh);

    // Action Button (Left Top Side)
    const actionGeo = new THREE.BoxGeometry(0.05, 0.32, 0.14);
    const actionMesh = new THREE.Mesh(actionGeo, buttonMat);
    actionMesh.position.set(-phoneWidth / 2 - 0.05, 1.85, 0);
    phoneGroup.add(actionMesh);

    // G. Back Plate with Frosted Matte AG Glass Finish
    const backShape = createRoundedRectShape(screenWidth, screenHeight, cornerRadius - 0.08);
    const backGeo = new THREE.ShapeGeometry(backShape, 24);
    const backMat = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.42,
      metalness: 0.35
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -phoneThickness / 2 - 0.053;
    backMesh.rotation.y = Math.PI;
    phoneGroup.add(backMesh);

    // Subtle Architect Monogram on Back Plate
    const logoShape = createRoundedRectShape(0.42, 0.42, 0.1);
    const logoGeo = new THREE.ShapeGeometry(logoShape, 16);
    const logoMat = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      metalness: 0.85,
      roughness: 0.25
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, 0, -phoneThickness / 2 - 0.055);
    logoMesh.rotation.y = Math.PI;
    phoneGroup.add(logoMesh);

    // H. Raised Triple Pro Camera Module on Back
    const cameraIslandShape = createRoundedRectShape(1.42, 1.48, 0.34);
    const cameraIslandSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.03,
      bevelThickness: 0.03,
      curveSegments: 16
    };
    const cameraIslandGeo = new THREE.ExtrudeGeometry(cameraIslandShape, cameraIslandSettings);
    cameraIslandGeo.center();
    const cameraIslandMat = new THREE.MeshStandardMaterial({
      color: 0x13161a,
      roughness: 0.28,
      metalness: 0.88
    });
    const cameraIslandMesh = new THREE.Mesh(cameraIslandGeo, cameraIslandMat);
    cameraIslandMesh.position.set(
      -phoneWidth / 2 + 1.02,
      phoneHeight / 2 - 1.12,
      -phoneThickness / 2 - 0.125
    );
    cameraIslandMesh.rotation.y = Math.PI;
    phoneGroup.add(cameraIslandMesh);

    // 3 Individual Camera Lenses with Polished Titanium Rings & Sapphire Elements
    const lensRingGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 28);
    lensRingGeo.rotateX(Math.PI / 2);
    const lensRingMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.95,
      roughness: 0.14
    });

    const lensGlassGeo = new THREE.CircleGeometry(0.19, 24);
    const lensGlassMat = new THREE.MeshStandardMaterial({
      color: 0x07111e,
      roughness: 0.05,
      metalness: 0.25
    });

    const lensPositions = [
      { x: -0.32, y: 0.36 },
      { x: -0.32, y: -0.36 },
      { x: 0.34, y: 0.0 }
    ];

    lensPositions.forEach((pos) => {
      const ring = new THREE.Mesh(lensRingGeo, lensRingMat);
      ring.position.set(pos.x, pos.y, 0.08);

      const glass = new THREE.Mesh(lensGlassGeo, lensGlassMat);
      glass.position.set(0, 0, 0.042);
      ring.add(glass);

      // Deep optical pupil reflection
      const pupilGeo = new THREE.CircleGeometry(0.09, 16);
      const pupilMat = new THREE.MeshBasicMaterial({ color: 0x1e3a8a });
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.set(0.02, 0.02, 0.002);
      glass.add(pupil);

      cameraIslandMesh.add(ring);
    });

    // Flash LED on Camera Module
    const flashGeo = new THREE.CircleGeometry(0.1, 16);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const flashMesh = new THREE.Mesh(flashGeo, flashMat);
    flashMesh.position.set(0.34, 0.44, 0.08);
    cameraIslandMesh.add(flashMesh);

    // LiDAR Sensor
    const lidarGeo = new THREE.CircleGeometry(0.065, 16);
    const lidarMat = new THREE.MeshBasicMaterial({ color: 0x09090b });
    const lidarMesh = new THREE.Mesh(lidarGeo, lidarMat);
    lidarMesh.position.set(0.34, -0.44, 0.08);
    cameraIslandMesh.add(lidarMesh);

    // I. Realistic Ground Contact Floor Shadow Plane (Underneath Phone)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d')!;
    const gradient = shadowCtx.createRadialGradient(128, 128, 12, 128, 128, 120);
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0.42)');
    gradient.addColorStop(0.35, 'rgba(15, 23, 42, 0.20)');
    gradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.05)');
    gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
    shadowCtx.fillStyle = gradient;
    shadowCtx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(5.4, 5.4);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -3.95;
    scene.add(shadowMesh);
    shadowMeshRef.current = shadowMesh;

    // Set Initial Angle
    phoneGroup.rotation.y = 0.28;
    phoneGroup.rotation.x = 0.08;

    setIsLoaded(true);

    // 6. Animation Loop (60 FPS Smooth Floating & Rotation)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous Idle Float and Sway
      const floatOffsetY = Math.sin(elapsedTime * 1.5) * 0.12;
      phoneGroup.position.y = floatOffsetY;

      // Contact shadow responds naturally to float elevation
      if (shadowMeshRef.current) {
        const shadowScale = 1 - floatOffsetY * 0.35;
        shadowMeshRef.current.scale.set(shadowScale, shadowScale, 1);
        const sMat = shadowMeshRef.current.material as THREE.MeshBasicMaterial;
        sMat.opacity = 0.58 - floatOffsetY * 0.7;
      }

      // Auto-Orbit Mode
      if (isAutoRotating && !isPointerDown.current) {
        targetRotationY.current += 0.006;
      }

      // Smooth Lerp Towards Target Rotation
      const lerpFactor = 0.065;
      currentRotationY.current += (targetRotationY.current - currentRotationY.current) * lerpFactor;
      currentRotationX.current += (targetRotationX.current - currentRotationX.current) * lerpFactor;

      phoneGroup.rotation.y = currentRotationY.current;
      phoneGroup.rotation.x = currentRotationX.current;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 8. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      chassisGeo.dispose();
      rimGeo.dispose();
      screenGeo.dispose();
      cameraIslandGeo.dispose();
      shadowGeo.dispose();
    };
  }, [loadAppTexture, currentScreenshotUrl]);

  // Pointer & Drag Handlers for 360° Real 3D Rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true;
    setIsDragging(true);
    setIsAutoRotating(false);
    pointerStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: currentRotationX.current,
      rotY: currentRotationY.current
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isPointerDown.current) {
      const deltaX = (e.clientX - pointerStart.current.x) * 0.012;
      const deltaY = (e.clientY - pointerStart.current.y) * 0.012;

      targetRotationY.current = pointerStart.current.rotY + deltaX;
      targetRotationX.current = Math.max(-0.65, Math.min(0.65, pointerStart.current.rotX + deltaY));
    } else {
      // Subtle parallax hover tilt when hovering without dragging
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (viewAngle === 'front') {
        targetRotationY.current = nx * 0.22;
        targetRotationX.current = -ny * 0.16;
      } else if (viewAngle === 'perspective') {
        targetRotationY.current = 0.28 + nx * 0.24;
        targetRotationX.current = 0.08 - ny * 0.16;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isPointerDown.current = false;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // View Angle Presets
  const setPresetAngle = (preset: 'perspective' | 'front' | 'back') => {
    setViewAngle(preset);
    setIsAutoRotating(false);
    if (preset === 'front') {
      targetRotationY.current = 0;
      targetRotationX.current = 0;
    } else if (preset === 'perspective') {
      targetRotationY.current = 0.32;
      targetRotationX.current = 0.1;
    } else if (preset === 'back') {
      targetRotationY.current = Math.PI;
      targetRotationX.current = 0.08;
    }
  };

  // Screenshot Slide Navigation
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleSelectApp = (index: number) => {
    setActiveAppIndex(index);
    setCurrentSlideIndex(0);
    // Subtle spin accent on app switch
    targetRotationY.current += 0.35;
  };

  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[440px] mx-auto select-none py-1">
      
      {/* Dynamic Ambient Luxury Glow matching the App Theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[390px] h-[520px] rounded-full blur-[95px] opacity-35 pointer-events-none transition-colors duration-700 -z-10"
        style={{ backgroundColor: currentApp.themeColor }}
      />

      {/* Floating 3D Badge: Drag to Rotate */}
      <div className="absolute top-2 left-2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-stone-200/90 shadow-md backdrop-blur-md text-xs font-mono font-bold text-slate-800 pointer-events-none">
        <Rotate3d className="w-4 h-4 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Real 3D Phone</span>
        <span className="text-slate-400">•</span>
        <span className="text-indigo-600">Drag 360°</span>
      </div>

      {/* Camera View Angle Selector (Top Right) */}
      <div className="absolute top-2 right-2 z-30 flex items-center gap-1 p-1 rounded-full bg-white/95 border border-stone-200/90 shadow-md backdrop-blur-md">
        <button
          onClick={() => setPresetAngle('front')}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
            viewAngle === 'front'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
          }`}
          title="Front Screen View"
        >
          Screen
        </button>
        <button
          onClick={() => setPresetAngle('perspective')}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
            viewAngle === 'perspective'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
          }`}
          title="3D Isometric Perspective"
        >
          3D Angle
        </button>
        <button
          onClick={() => setPresetAngle('back')}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all flex items-center gap-1 ${
            viewAngle === 'back'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
          }`}
          title="Back Triple Camera View"
        >
          <Camera className="w-3 h-3" />
          <span>Camera</span>
        </button>
      </div>

      {/* Three.js Interactive WebGL Canvas Container */}
      <div
        ref={mountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`relative w-full h-[510px] sm:h-[570px] cursor-grab active:cursor-grabbing touch-none transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ perspective: 1200 }}
      >
        {/* Fallback skeleton if WebGL initializes */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
          </div>
        )}
      </div>

      {/* Floating Screenshot Slide Navigation Controls Directly Over Canvas Bottom */}
      <div className="flex items-center justify-between px-2 -mt-6 mb-2 z-20 relative">
        {/* Prev Screenshot Button */}
        <button
          onClick={handlePrevSlide}
          className="w-9 h-9 rounded-full bg-white/95 border border-stone-200/90 shadow-md text-slate-800 flex items-center justify-center hover:bg-stone-50 active:scale-95 transition"
          aria-label="Previous In-App Screen"
          title="Previous Screenshot"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>

        {/* Screenshot Slide Indicator Dots & Auto-Orbit Toggle */}
        <div className="flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-full border border-stone-200/90 shadow-md">
          <div className="flex items-center gap-1">
            {currentApp.screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === safeSlideIndex
                    ? 'w-4 bg-indigo-600'
                    : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-slate-400">|</span>
          <button
            onClick={() => setIsAutoRotating((prev) => !prev)}
            className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-700 hover:text-indigo-600"
            title={isAutoRotating ? 'Pause Orbit' : 'Auto Orbit 360°'}
          >
            {isAutoRotating ? (
              <>
                <Pause className="w-3 h-3 text-indigo-600" />
                <span className="text-indigo-600">Orbiting</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-slate-500" />
                <span>Orbit</span>
              </>
            )}
          </button>
        </div>

        {/* Next Screenshot Button */}
        <button
          onClick={handleNextSlide}
          className="w-9 h-9 rounded-full bg-white/95 border border-stone-200/90 shadow-md text-slate-800 flex items-center justify-center hover:bg-stone-50 active:scale-95 transition"
          aria-label="Next In-App Screen"
          title="Next Screenshot"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      {/* Real App Selection Pill Tabs */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap px-2 mb-3">
        {PREVIEW_APPS.map((app, idx) => (
          <button
            key={app.id}
            onClick={() => handleSelectApp(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              idx === activeAppIndex
                ? 'bg-slate-900 text-white shadow-md scale-105'
                : 'bg-white/90 text-slate-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: app.themeColor }}
            />
            <span>{app.shortName}</span>
          </button>
        ))}
      </div>

      {/* Live Production Details Card (from CV & Google Play Store) */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-stone-200/90 shadow-md backdrop-blur-md text-left transition-all">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                {currentApp.rating}
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                {currentApp.installs} Downloads
              </span>
              <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/80 hidden sm:inline-block">
                Screen {safeSlideIndex + 1} of {totalSlides}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight truncate">
              {currentCaption}
            </h4>
            <p className="text-xs text-slate-600 font-mono mt-0.5 leading-snug truncate">
              {currentApp.featureDesc}
            </p>
          </div>

          <a
            href={currentApp.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-white shadow-sm hover:shadow-md transition hover:scale-105 shrink-0 flex items-center justify-center"
            style={{ backgroundColor: currentApp.themeColor }}
            title="Open Verified App on Google Play Store"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Helpful Hint */}
      <div className="mt-2 text-center">
        <p className="text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-indigo-600" />
          <span>Interactive 3D WebGL • Real Play Store Screen Mapped to 3D Glass</span>
        </p>
      </div>

    </div>
  );
}
