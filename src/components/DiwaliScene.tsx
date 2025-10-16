import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { Firework } from '../three/Firework';
import { createRangoliTexture } from '../three/rangoli';

const DiwaliScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const fireworksRef = useRef<Firework[]>([]);
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef<{ listener: THREE.AudioListener, sound: THREE.Audio } | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // --- Quality Settings based on device ---
        const isMobile = window.innerWidth <= 768;

        const settings = {
            pixelRatio: Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
            shadowMapSize: isMobile ? 512 : 1024,
            rangoliSize: isMobile ? 512 : 1024,
            numDiyas: isMobile ? 30 : 60,
            numLanterns: isMobile ? 10 : 20,
            bloomStrength: isMobile ? 0.9 : 1.0,
            fireworkParticles: isMobile ? 100 : 200,
            cameraZ: isMobile ? 140 : 120,
            textQuality: {
                curveSegments: isMobile ? 6 : 12,
                bevelSegments: isMobile ? 3 : 5,
            }
        };

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a1a);
        scene.fog = new THREE.Fog(0x0a0a1a, 100, 300);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.set(0, 40, settings.cameraZ);

        // Audio
        const listener = new THREE.AudioListener();
        camera.add(listener);
        const sound = new THREE.Audio(listener);
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load('https://cdn.pixabay.com/audio/2022/11/14/audio_2c2d3621c1.mp3', function(buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            audioRef.current = { listener, sound };
        });

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(settings.pixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        currentMount.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 50;
        controls.maxDistance = 200;
        controls.maxPolarAngle = Math.PI / 2 - 0.1;

        // Post-processing (Bloom)
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight), settings.bloomStrength, 0.4, 0.85);
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffd488, 0.1);
        scene.add(ambientLight);

        const spotlight = new THREE.SpotLight(0xffffff, 0.8, 0, Math.PI / 4, 0.5);
        spotlight.position.set(0, 80, 0);
        spotlight.target.position.set(0, 0, 0);
        spotlight.castShadow = true;
        spotlight.shadow.mapSize.width = settings.shadowMapSize;
        spotlight.shadow.mapSize.height = settings.shadowMapSize;
        spotlight.shadow.camera.near = 50;
        spotlight.shadow.camera.far = 150;
        scene.add(spotlight);
        scene.add(spotlight.target);

        // Ground with Rangoli
        const rangoliTexture = createRangoliTexture(settings.rangoliSize);
        const groundGeometry = new THREE.PlaneGeometry(200, 200);
        const groundMaterial = new THREE.MeshLambertMaterial({
            color: 0x333333,
            map: rangoliTexture,
            emissive: 0xffd488,
            emissiveMap: rangoliTexture,
            emissiveIntensity: 0.8,
            transparent: true
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Diyas (Lamps)
        const diyaGeometry = new THREE.ConeGeometry(1.5, 1, 16);
        const diyaMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.6 });
        const flameGeometry = new THREE.SphereGeometry(0.5, 8, 8);
        const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xffd488 });

        const diyas: { mesh: THREE.Group, light: THREE.PointLight }[] = [];
        const radius = 60;
        for (let i = 0; i < settings.numDiyas; i++) {
            const angle = (i / settings.numDiyas) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            const diya = new THREE.Mesh(diyaGeometry, diyaMaterial);
            diya.position.set(0, 0.5, 0);

            const flame = new THREE.Mesh(flameGeometry, flameMaterial);
            flame.position.set(0, 1.2, 0);

            const diyaGroup = new THREE.Group();
            diyaGroup.add(diya);
            diyaGroup.add(flame);
            diyaGroup.position.set(x, 0, z);
            diyaGroup.scale.set(1.5, 1.5, 1.5);

            const pointLight = new THREE.PointLight(0xffaa33, 1, 30, 2);
            pointLight.position.set(x, 3, z);
            pointLight.castShadow = false;

            scene.add(diyaGroup);
            scene.add(pointLight);
            diyas.push({ mesh: diyaGroup, light: pointLight });
        }

        // Add a central Diya
        const centerDiyaGroup = new THREE.Group();
        const centerDiya = new THREE.Mesh(diyaGeometry, diyaMaterial);
        centerDiya.position.set(0, 0.5, 0);
        const centerFlame = new THREE.Mesh(flameGeometry, flameMaterial);
        centerFlame.position.set(0, 1.2, 0);
        centerDiyaGroup.add(centerDiya);
        centerDiyaGroup.add(centerFlame);
        centerDiyaGroup.position.set(0, 0, 0);
        centerDiyaGroup.scale.set(2.0, 2.0, 2.0);
        const centerPointLight = new THREE.PointLight(0xffaa33, 1.5, 40, 2);
        centerPointLight.position.set(0, 3, 0);
        centerPointLight.castShadow = false;
        scene.add(centerDiyaGroup);
        scene.add(centerPointLight);
        diyas.push({ mesh: centerDiyaGroup, light: centerPointLight });


        // 3D Text
        let textMesh: THREE.Mesh | null = null;
        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://unpkg.com/three@0.165.0/examples/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const textGeometry = new TextGeometry('Happy Diwali', {
                    font: font,
                    size: 15,
                    depth: 3.8, // thinner text
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.02,
                    bevelSize: 0.01,
                    bevelSegments: 3,
                });

                textGeometry.center();

                const textMaterial = new THREE.MeshPhysicalMaterial({
                    color: 0xffc107,
                    emissive: 0xff6f00,
                    emissiveIntensity: 1.3,
                    metalness: 0.9,
                    roughness: 0.35,
                    clearcoat: 1.0,
                    clearcoatRoughness: 0.1,
                });

                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(0, 20, 0);
                textMesh.castShadow = true;
                scene.add(textMesh);
            }
        );


        // Floating Lanterns
        const lanterns: THREE.Mesh[] = [];
        const lanternGeo = new THREE.CylinderGeometry(2, 2.5, 5, 12);
        const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffa500, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
        for (let i = 0; i < settings.numLanterns; i++) {
            const lantern = new THREE.Mesh(lanternGeo, lanternMat);
            lantern.position.set(
                (Math.random() - 0.5) * 200,
                Math.random() * 100,
                (Math.random() - 0.5) * 200 - 50
            );
            scene.add(lantern);
            lanterns.push(lantern);
        }

        // Clock for animation
        const clock = new THREE.Clock();

        const fireworkColors = [
            new THREE.Color(0xff4444), new THREE.Color(0x44ff44), new THREE.Color(0x4444ff),
            new THREE.Color(0xffff44), new THREE.Color(0xff44ff), new THREE.Color(0x44ffff),
            new THREE.Color(0xffffff),
        ];

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            if (textMesh) {
                textMesh.position.y = 20 + Math.sin(elapsedTime * 0.5) * 2;
                textMesh.lookAt(new THREE.Vector3(camera.position.x, textMesh.position.y, camera.position.z));
            }

            diyas.forEach((diya) => {
                const flicker = Math.sin(elapsedTime * 5 + diya.mesh.position.x) * 0.1 + 0.95;
                diya.light.intensity = flicker;
            });

            lanterns.forEach(lantern => {
                lantern.position.y += 0.05;
                lantern.position.x += Math.sin(elapsedTime + lantern.position.z) * 0.05;
                if (lantern.position.y > 150) {
                    lantern.position.y = -20;
                    lantern.position.x = (Math.random() - 0.5) * 200;
                }
            });

            if (Math.random() < 0.015) {
                const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
                const position = new THREE.Vector3(
                    (Math.random() - 0.5) * 180,
                    1,
                    (Math.random() - 0.5) * 180
                );
                fireworksRef.current.push(new Firework(scene, position, color, settings.fireworkParticles));
            }

            fireworksRef.current = fireworksRef.current.filter(fw => {
                fw.update();
                return !fw.done;
            });

            controls.update();
            composer.render();
        };
        animate();

        const handleResize = () => {
            if (currentMount) {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
                composer.setSize(currentMount.clientWidth, currentMount.clientHeight);
                bloomPass.resolution.set(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            fireworksRef.current.forEach(fw => fw.dispose());
            fireworksRef.current = [];

            if (audioRef.current && audioRef.current.sound.isPlaying) {
                audioRef.current.sound.stop();
            }

            if (renderer.domElement.parentElement === currentMount) {
                currentMount.removeChild(renderer.domElement);
            }

            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    const handleStart = () => {
        if (audioRef.current) {
            // Ensure audio context is running
            if (audioRef.current.listener.context.state === 'suspended') {
                audioRef.current.listener.context.resume();
            }
            if (!audioRef.current.sound.isPlaying) {
                audioRef.current.sound.play();
            }
        }
        setIsStarted(true);
    };

    return (
        <div className="relative w-screen h-screen cursor-grab active:cursor-grabbing">
            <div ref={mountRef} className="w-full h-full" />
            {!isStarted && (
                <div
                    className="absolute inset-0 bg-black/70 flex justify-center items-center z-10 cursor-pointer backdrop-blur-sm"
                    onClick={handleStart}
                >
                    <div className="text-center text-white p-8 rounded-lg">
                        <h2 className="text-4xl font-bold mb-4 animate-pulse" style={{ textShadow: '0 0 10px #fff, 0 0 20px #ffc, 0 0 30px #ff8c00' }}>Happy Diwali!</h2>
                        <p className="text-lg">Click or Tap to begin the celebration</p>
                    </div>
                </div>
            )}
            {isStarted && (
                <div className="absolute bottom-4 left-4 text-white/50 text-xs font-mono select-none">
                    Drag/Swipe to explore
                </div>
            )}
        </div>
    );
};

export default DiwaliScene;
