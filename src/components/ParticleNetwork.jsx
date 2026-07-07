import React, { useEffect, useRef } from 'react';

const ParticleNetwork = ({ 
    particleCount = 60, 
    connectionDistance = 150, 
    color = '#ffffff',
    lineWidth = 1.5,
    zIndex = 0
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = [];
        let mouse = { x: -1000, y: -1000 };

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                radius: Math.random() * 3 + 1.5
            });
        }

        const resize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            // Check if mouse is hovering over the canvas area
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            } else {
                mouse.x = -1000;
                mouse.y = -1000;
            }
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        // HTML5 Drag suppresses mousemove, so we must listen to dragover to track cursor while dragging!
        window.addEventListener('dragover', handleMouseMove); 

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = color;
            ctx.lineWidth = lineWidth;
            
            // 1. Get centers of all Bento Cards dynamically
            const cardElements = document.querySelectorAll('.magic-bento-card');
            const canvasRect = canvas.getBoundingClientRect();
            const cardNodes = Array.from(cardElements).map(el => {
                const rect = el.getBoundingClientRect();
                return {
                    x: (rect.left + rect.width / 2) - canvasRect.left,
                    y: (rect.top + rect.height / 2) - canvasRect.top
                };
            });

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.globalAlpha = 0.9;
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.globalAlpha = (1 - (dist / connectionDistance)) * 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Connect floating particles to the static Bento Cards
                cardNodes.forEach(cardNode => {
                    const dxCard = p.x - cardNode.x;
                    const dyCard = p.y - cardNode.y;
                    const distCard = Math.sqrt(dxCard * dxCard + dyCard * dyCard);
                    if (distCard < connectionDistance * 1.5) {
                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.globalAlpha = (1 - (distCard / (connectionDistance * 1.5))) * 0.3; // subtle
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(cardNode.x, cardNode.y);
                        ctx.stroke();
                        
                        // Gravitate particles slightly towards the centers of cards
                        p.x -= dxCard * 0.005;
                        p.y -= dyCard * 0.005;
                    }
                });

                // Connect to mouse and attract
                const dxMouse = p.x - mouse.x;
                const dyMouse = p.y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                
                if (distMouse < connectionDistance * 1.5) {
                    ctx.beginPath();
                    ctx.strokeStyle = color;
                    ctx.globalAlpha = (1 - (distMouse / (connectionDistance * 1.5))) * 0.9;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    
                    // Subtle magnetic attraction to mouse
                    p.x -= dxMouse * 0.02;
                    p.y -= dyMouse * 0.02;
                }
            }
            
            // 2. Connect the dragged mouse (the card) to all other static cards with "rubber bands"
            cardNodes.forEach(cardNode => {
                const dx = mouse.x - cardNode.x;
                const dy = mouse.y - cardNode.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < connectionDistance * 2.5) {
                    ctx.beginPath();
                    ctx.strokeStyle = color;
                    ctx.globalAlpha = (1 - (dist / (connectionDistance * 2.5))) * 0.6; 
                    ctx.lineWidth = lineWidth * 1.2;
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(cardNode.x, cardNode.y);
                    ctx.stroke();
                    ctx.lineWidth = lineWidth; // reset
                }
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('dragover', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleCount, connectionDistance, color, lineWidth]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: zIndex
            }}
        />
    );
};

export default ParticleNetwork;
