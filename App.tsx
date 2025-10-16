import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// A class to manage a single firework, from launch to explosion.
class Firework {
    private scene: THREE.Scene;
    private particles: THREE.Points | null = null;
    private velocities: THREE.Vector3[] = [];
    private gravity = new THREE.Vector3(0, -0.02, 0);
    private lifespan: number = 1.0;
    public done = false;

    private state: 'LAUNCH' | 'EXPLODE' = 'LAUNCH';
    private rocket: THREE.Points;
    private rocketVelocity: THREE.Vector3;
    private color: THREE.Color;
    private particleCount: number;

    constructor(scene: THREE.Scene, startPosition: THREE.Vector3, color: THREE.Color, particleCount = 200) {
        this.scene = scene;
        this.color = color;
        this.particleCount = particleCount;

        // --- LAUNCH PHASE SETUP ---
        const rocketGeometry = new THREE.BufferGeometry();
        rocketGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([startPosition.x, startPosition.y, startPosition.z]), 3));
        
        const rocketMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 3,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        this.rocket = new THREE.Points(rocketGeometry, rocketMaterial);
        this.scene.add(this.rocket);

        const launchSpeed = 1.6 + Math.random() * 0.4;
        this.rocketVelocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            launchSpeed,
            (Math.random() - 0.5) * 0.5
        );
    }

    private explode(position: THREE.Vector3) {
        this.state = 'EXPLODE';
        this.scene.remove(this.rocket);
        this.rocket.geometry.dispose();
        (this.rocket.material as THREE.PointsMaterial).dispose();
        
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        
        const explosionSpeed = 1 + Math.random() * 1.5;

        for (let i = 0; i < this.particleCount; i++) {
            positions.set([position.x, position.y, position.z], i * 3);

            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const x = Math.sin(phi) * Math.cos(theta);
            const y = Math.sin(phi) * Math.sin(theta);
            const z = Math.cos(phi);

            const velocity = new THREE.Vector3(x, y, z);
            velocity.multiplyScalar(explosionSpeed * (0.5 + Math.random() * 0.5));
            this.velocities.push(velocity);

            const colorVariation = (Math.random() - 0.5) * 0.3;
            colors.set([
                this.color.r + colorVariation,
                this.color.g + colorVariation,
                this.color.b + colorVariation,
            ], i * 3);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }


    update() {
        if (this.done) return;

        if (this.state === 'LAUNCH') {
            const rocketPos = this.rocket.geometry.attributes.position.array as Float32Array;
            this.rocketVelocity.add(this.gravity);
            
            rocketPos[0] += this.rocketVelocity.x;
            rocketPos[1] += this.rocketVelocity.y;
            rocketPos[2] += this.rocketVelocity.z;
            this.rocket.geometry.attributes.position.needsUpdate = true;

            if (this.rocketVelocity.y <= 0) {
                this.explode(new THREE.Vector3(rocketPos[0], rocketPos[1], rocketPos[2]));
            }

        } else if (this.state === 'EXPLODE' && this.particles) {
            this.lifespan -= 0.01;
            if (this.lifespan <= 0) {
                this.dispose();
                return;
            }

            (this.particles.material as THREE.PointsMaterial).opacity = this.lifespan > 0.5 ? 1.0 : this.lifespan * 2;

            const positions = this.particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < this.velocities.length; i++) {
                this.velocities[i].add(this.gravity);
                
                positions[i * 3] += this.velocities[i].x;
                positions[i * 3 + 1] += this.velocities[i].y;
                positions[i * 3 + 2] += this.velocities[i].z;
            }
            this.particles.geometry.attributes.position.needsUpdate = true;
        }
    }

    dispose() {
        this.done = true;
        if (this.state === 'LAUNCH' && this.rocket) {
            this.scene.remove(this.rocket);
            this.rocket.geometry.dispose();
            (this.rocket.material as THREE.PointsMaterial).dispose();
        }
        if (this.state === 'EXPLODE' && this.particles) {
            this.scene.remove(this.particles);
            this.particles.geometry.dispose();
            (this.particles.material as THREE.PointsMaterial).dispose();
        }
    }
}


function createRangoliTexture(size: number): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(0,0,0,0)'; // Transparent background
    ctx.fillRect(0, 0, size, size);

    const center = { x: size / 2, y: size / 2 };

    const drawPetals = (radius: number, petals: number, length: number, width: number, color: string) => {
        ctx.fillStyle = color;
        for (let i = 0; i < petals; i++) {
            const angle = (i / petals) * Math.PI * 2;
            const x1 = center.x + Math.cos(angle) * radius;
            const y1 = center.y + Math.sin(angle) * radius;
            const x2 = center.x + Math.cos(angle) * (radius + length);
            const y2 = center.y + Math.sin(angle) * (radius + length);

            ctx.save();
            ctx.translate((x1 + x2) / 2, (y1 + y2) / 2);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, length / 2, width, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    };
    
    const drawCircle = (radius: number, color: string) => {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.stroke();
    };

    // Layered design
    drawPetals(size * 0.39, 12, size * 0.1, size * 0.04, '#f06292'); // Outer pink
    drawPetals(size * 0.31, 12, size * 0.09, size * 0.035, '#4fc3f7');  // Light blue
    
    ctx.lineWidth = size * 0.015;
    drawCircle(size * 0.27, '#fff59d'); // Yellow circle
    
    drawPetals(size * 0.175, 8, size * 0.1, size * 0.03, '#ff8a65'); // Orange
    
    ctx.fillStyle = '#a5d6a7'; // Center green
    ctx.beginPath();
    ctx.arc(center.x, center.y, size * 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#ffd54f'; // Center yellow
    ctx.beginPath();
    ctx.arc(center.x, center.y, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}


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
        fontLoader.load('https://unpkg.com/three@0.165.0/examples/fonts/gentilis_bold.typeface.json', (font) => {
            const textGeometry = new TextGeometry('Happy Diwali', {
                font: font,
                size: 15,
                height: 2,
                curveSegments: settings.textQuality.curveSegments,
                bevelEnabled: true,
                bevelThickness: 0.3,
                bevelSize: 0.2,
                bevelOffset: 0,
                bevelSegments: settings.textQuality.bevelSegments,
            });

            textGeometry.computeBoundingBox();
            if (textGeometry.boundingBox) {
                 const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
                 textGeometry.translate(-textWidth / 2, 0, 0);
            }
           
            const textMaterial = new THREE.MeshStandardMaterial({
                color: 0xffe066,
                emissive: 0xff9900,
                emissiveIntensity: 1.2,
                metalness: 0.9,
                roughness: 0.3,
            });

            textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.y = 20;
            textMesh.castShadow = true;
            scene.add(textMesh);
        });

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


const App: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-black text-white">
      <DiwaliScene />
    </main>
  );
};

export default App;
