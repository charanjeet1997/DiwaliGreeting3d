import * as THREE from 'three';

// A class to manage a single firework, from launch to explosion.
export class Firework {
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
