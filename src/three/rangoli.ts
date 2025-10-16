import * as THREE from 'three';

export function createRangoliTexture(size: number): THREE.CanvasTexture {
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
