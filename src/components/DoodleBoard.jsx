import React, { useRef, useState, useEffect } from 'react';
import { 
    Pencil, Eraser, PaintBucket, Trash2, Download, Square, Circle,
    Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Copy
} from 'lucide-react';
import './DoodleBoard.css';

const DoodleBoard = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState('pencil'); // 'pencil', 'eraser', 'bucket', 'rect', 'circle'
    const [color, setColor] = useState('#4facfe');
    const [brushSize, setBrushSize] = useState(5);
    const snapshotRef = useRef(null);
    const startPosRef = useRef({x: 0, y: 0});
    const editorRef = useRef(null);

    const execCmd = (cmd, value = null) => {
        document.execCommand(cmd, false, value);
    };

    const clearText = () => {
        if (editorRef.current) {
            editorRef.current.innerHTML = '';
        }
    };

    const copyText = () => {
        if (editorRef.current) {
            navigator.clipboard.writeText(editorRef.current.innerText);
        }
    };

    const downloadText = () => {
        if (!editorRef.current) return;
        
        const content = editorRef.current.innerHTML;
        const htmlStr = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Christian Gunawan - Notes</title>
    <style>
        body {
            font-family: sans-serif;
            line-height: 1.6;
            padding: 40px;
            color: #111;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            min-height: 100vh;
        }
        .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-22.5deg);
            font-family: monospace;
            font-size: 80px;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.04);
            pointer-events: none;
            white-space: nowrap;
            z-index: -1;
        }
    </style>
</head>
<body>
    <div class="watermark">Christian Gunawan</div>
    ${content}
</body>
</html>`;
        
        const blob = new Blob([htmlStr], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Christian_Gunawan_Notes.html';
        link.click();
    };

    // Helper: Draw background with watermark
    const drawBackground = (ctx, width, height) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'; // Extremely faint to allow flood fill over it
        ctx.font = 'bold 80px "Space Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.translate(width / 2, height / 2);
        ctx.rotate(-Math.PI / 8); // slight angle
        ctx.fillText('Christian Gunawan', 0, 0);
        ctx.restore();
    };

    // Initialize Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const resizeCanvas = () => {
            const ctx = canvas.getContext('2d');
            
            // Match canvas internal resolution to its CSS layout size
            canvas.width = container.clientWidth;
            canvas.height = 500; // fixed height matching css

            drawBackground(ctx, canvas.width, canvas.height);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    // Helper: get accurate canvas coordinates
    const getPos = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
        const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (e) => {
        const pos = getPos(e);
        
        if (tool === 'bucket') {
            floodFill(pos.x, pos.y, color);
            return;
        }

        setIsDrawing(true);
        startPosRef.current = pos;
        const ctx = canvasRef.current.getContext('2d');
        snapshotRef.current = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

        ctx.beginPath();
        if (tool === 'pencil' || tool === 'eraser') {
            ctx.moveTo(pos.x, pos.y);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
            ctx.lineWidth = brushSize;
        }
    };

    const draw = (e) => {
        if (!isDrawing || tool === 'bucket') return;
        
        if (e.cancelable) {
            e.preventDefault(); // prevent scrolling on touch if possible
        }
        const pos = getPos(e);
        const ctx = canvasRef.current.getContext('2d');
        
        if (tool === 'pencil' || tool === 'eraser') {
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        } else if (tool === 'rect' || tool === 'circle') {
            ctx.putImageData(snapshotRef.current, 0, 0);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = color;
            ctx.lineWidth = brushSize;
            
            if (tool === 'rect') {
                const width = pos.x - startPosRef.current.x;
                const height = pos.y - startPosRef.current.y;
                ctx.rect(startPosRef.current.x, startPosRef.current.y, width, height);
            } else if (tool === 'circle') {
                const radius = Math.sqrt(Math.pow(pos.x - startPosRef.current.x, 2) + Math.pow(pos.y - startPosRef.current.y, 2));
                ctx.arc(startPosRef.current.x, startPosRef.current.y, radius, 0, 2 * Math.PI);
            }
            ctx.stroke();
        }
    };

    const stopDrawing = () => {
        if (isDrawing) {
            const ctx = canvasRef.current.getContext('2d');
            if (tool === 'pencil' || tool === 'eraser') {
                ctx.closePath();
            }
            setIsDrawing(false);
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawBackground(ctx, canvas.width, canvas.height);
    };

    const downloadCanvas = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'my-doodle.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    // Hex to RGBA array
    const hexToRgba = (hex) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        if (hex.length === 4) { // handle short hex #abc
            r = parseInt(hex[1]+hex[1], 16);
            g = parseInt(hex[2]+hex[2], 16);
            b = parseInt(hex[3]+hex[3], 16);
        }
        return [r, g, b, 255];
    };

    // Check if pixel colors match within a small tolerance to handle anti-aliasing slightly
    const matchStartColor = (pixelPos, pixelData, startR, startG, startB) => {
        const r = pixelData[pixelPos];
        const g = pixelData[pixelPos + 1];
        const b = pixelData[pixelPos + 2];
        return Math.abs(r - startR) < 15 && Math.abs(g - startG) < 15 && Math.abs(b - startB) < 15;
    };

    // Standard BFS Flood Fill algorithm
    const floodFill = (startX, startY, fillColorHex) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        startX = Math.round(startX);
        startY = Math.round(startY);

        if (startX < 0 || startX >= width || startY < 0 || startY >= height) return;

        const imgData = ctx.getImageData(0, 0, width, height);
        const pixelData = imgData.data;

        const startPos = (startY * width + startX) * 4;
        const startR = pixelData[startPos];
        const startG = pixelData[startPos + 1];
        const startB = pixelData[startPos + 2];

        const fillColor = hexToRgba(fillColorHex);

        // If clicking on same color, do nothing
        if (Math.abs(startR - fillColor[0]) < 5 && 
            Math.abs(startG - fillColor[1]) < 5 && 
            Math.abs(startB - fillColor[2]) < 5) {
            return; 
        }

        const pixelStack = [[startX, startY]];

        while (pixelStack.length) {
            const newPos = pixelStack.pop();
            const x = newPos[0];
            let y = newPos[1];

            let pixelPos = (y * width + x) * 4;
            
            // Go up as long as color matches
            while (y >= 0 && matchStartColor(pixelPos, pixelData, startR, startG, startB)) {
                y--;
                pixelPos -= width * 4;
            }
            
            pixelPos += width * 4;
            y++;
            
            let reachLeft = false;
            let reachRight = false;
            
            // Go down
            while (y < height && matchStartColor(pixelPos, pixelData, startR, startG, startB)) {
                
                // Color pixel
                pixelData[pixelPos] = fillColor[0];
                pixelData[pixelPos + 1] = fillColor[1];
                pixelData[pixelPos + 2] = fillColor[2];
                pixelData[pixelPos + 3] = 255;

                if (x > 0) {
                    if (matchStartColor(pixelPos - 4, pixelData, startR, startG, startB)) {
                        if (!reachLeft) {
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                        }
                    } else if (reachLeft) {
                        reachLeft = false;
                    }
                }

                if (x < width - 1) {
                    if (matchStartColor(pixelPos + 4, pixelData, startR, startG, startB)) {
                        if (!reachRight) {
                            pixelStack.push([x + 1, y]);
                            reachRight = true;
                        }
                    } else if (reachRight) {
                        reachRight = false;
                    }
                }

                y++;
                pixelPos += width * 4;
            }
        }
        ctx.putImageData(imgData, 0, 0);
    };

    return (
        <section id="doodle" className="section doodle-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Creative Space.</h2>
                    <p className="section-subtitle">A digital sandbox to brainstorm, sketch, and jot down ideas. Enjoy this fully functional MS Paint and Word clone!</p>
                </div>
                
                <div className="workspace-grid">
                    {/* Left: Drawing Board */}
                    <div className="doodle-container" ref={containerRef}>
                        <div className="doodle-toolbar">
                            <div className="toolbar-group">
                                <button 
                                    className={`tool-btn ${tool === 'pencil' ? 'active' : ''}`}
                                    onClick={() => setTool('pencil')}
                                    title="Pencil"
                                >
                                    <Pencil size={20} />
                                </button>
                                <button 
                                    className={`tool-btn ${tool === 'bucket' ? 'active' : ''}`}
                                    onClick={() => setTool('bucket')}
                                    title="Paint Bucket"
                                >
                                    <PaintBucket size={20} />
                                </button>
                                <button 
                                    className={`tool-btn ${tool === 'eraser' ? 'active' : ''}`}
                                    onClick={() => setTool('eraser')}
                                    title="Eraser"
                                >
                                    <Eraser size={20} />
                                </button>
                                <button 
                                    className={`tool-btn ${tool === 'rect' ? 'active' : ''}`}
                                    onClick={() => setTool('rect')}
                                    title="Rectangle"
                                >
                                    <Square size={20} />
                                </button>
                                <button 
                                    className={`tool-btn ${tool === 'circle' ? 'active' : ''}`}
                                    onClick={() => setTool('circle')}
                                    title="Circle"
                                >
                                    <Circle size={20} />
                                </button>
                            </div>
                            
                            <div className="toolbar-divider"></div>
                            
                            <div className="toolbar-group">
                                <input 
                                    type="color" 
                                    value={color} 
                                    onChange={(e) => setColor(e.target.value)}
                                    className="color-picker"
                                    title="Choose Color"
                                />
                                
                                <div className="brush-size-container">
                                    <div 
                                        className="brush-preview"
                                        style={{ 
                                            width: Math.min(brushSize, 24), 
                                            height: Math.min(brushSize, 24), 
                                            backgroundColor: tool === 'eraser' ? '#ccc' : color 
                                        }}
                                    ></div>
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="50" 
                                        value={brushSize} 
                                        onChange={(e) => setBrushSize(parseInt(e.target.value))}
                                        className="size-slider"
                                        title="Brush Size"
                                    />
                                </div>
                            </div>

                            <div className="toolbar-divider"></div>

                            <div className="toolbar-group ml-auto">
                                <button className="tool-btn action-btn" onClick={clearCanvas} title="Clear Canvas">
                                    <Trash2 size={20} />
                                    <span>Clear</span>
                                </button>
                                <button className="tool-btn action-btn" onClick={downloadCanvas} title="Download Drawing">
                                    <Download size={20} />
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="canvas-wrapper">
                            <canvas
                                ref={canvasRef}
                                onMouseDown={startDrawing}
                                onMouseMove={draw}
                                onMouseUp={stopDrawing}
                                onMouseOut={stopDrawing}
                                onTouchStart={startDrawing}
                                onTouchMove={draw}
                                onTouchEnd={stopDrawing}
                                className={`doodle-canvas cursor-${tool}`}
                            />
                        </div>
                    </div>

                    {/* Right: Text Editor */}
                    <div className="doodle-container editor-container">
                        <div className="doodle-toolbar">
                            <div className="toolbar-group">
                                <button className="tool-btn" onClick={() => execCmd('bold')} title="Bold">
                                    <Bold size={18} />
                                </button>
                                <button className="tool-btn" onClick={() => execCmd('italic')} title="Italic">
                                    <Italic size={18} />
                                </button>
                                <button className="tool-btn" onClick={() => execCmd('underline')} title="Underline">
                                    <Underline size={18} />
                                </button>
                            </div>
                            
                            <div className="toolbar-divider"></div>
                            
                            <div className="toolbar-group">
                                <button className="tool-btn" onClick={() => execCmd('justifyLeft')} title="Align Left">
                                    <AlignLeft size={18} />
                                </button>
                                <button className="tool-btn" onClick={() => execCmd('justifyCenter')} title="Align Center">
                                    <AlignCenter size={18} />
                                </button>
                                <button className="tool-btn" onClick={() => execCmd('justifyRight')} title="Align Right">
                                    <AlignRight size={18} />
                                </button>
                            </div>

                            <div className="toolbar-divider"></div>

                            <div className="toolbar-group">
                                <button className="tool-btn" onClick={() => execCmd('insertUnorderedList')} title="Bullet List">
                                    <List size={18} />
                                </button>
                                <button className="tool-btn" onClick={() => execCmd('insertOrderedList')} title="Numbered List">
                                    <ListOrdered size={18} />
                                </button>
                            </div>

                            <div className="toolbar-divider"></div>

                            <div className="toolbar-group ml-auto">
                                <button className="tool-btn action-btn" onClick={clearText} title="Clear Text">
                                    <Trash2 size={18} />
                                </button>
                                <button className="tool-btn action-btn" onClick={copyText} title="Copy Text">
                                    <Copy size={18} />
                                </button>
                                <button className="tool-btn action-btn" onClick={downloadText} title="Download HTML">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="editor-wrapper">
                            <div 
                                className="rich-text-editor" 
                                ref={editorRef}
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                spellCheck={false}
                            >
                                <h2>Christian Gunawan - Portfolio Summary</h2>
                                <ul>
                                    <li><b>Role:</b> Solution Architect & Web Developer</li>
                                    <li><b>Current Company:</b> Cekat.AI</li>
                                </ul>
                                <h3>Key Expertise</h3>
                                <p>I specialize in designing and implementing scalable enterprise solutions. My core skills include <b>System Architecture</b> (PAAS), <b>Agentic AI Systems</b>, and <b>Frontend & Mobile Development</b> (React, iOS).</p>
                                <h3>Professional Experience</h3>
                                <ul>
                                    <li><b>Cekat.AI:</b> Solution Architect. Designed and implemented agentic AI systems and CRM integrations for multi-channel communication (Meta/WhatsApp).</li>
                                    <li><b>Mekari:</b> Enterprise Solution Architect. Designed scalable PAAS solutions and optimized infrastructure.</li>
                                    <li><b>Siloam Hospitals:</b> Digital Product Manager for MySiloam app and website.</li>
                                    <li><b>Apple Developer Academy:</b> Mobile Developer for innovative iOS applications.</li>
                                </ul>
                                <p><i>Feel free to edit these notes, draw some diagrams on the left, and download this document when you're done!</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoodleBoard;
