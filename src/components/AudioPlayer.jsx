import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, X } from 'lucide-react';
import audioFile from '../assets/johnny joined, Lynxie - i still hear your voice [NCS Release] (1).mp3';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [volume, setVolume] = useState(0.1);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audio
        if (audioRef.current) {
            audioRef.current.volume = volume;
            // Attempt to autoplay
            const playPromise = audioRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((e) => {
                        // Autoplay blocked by browser, wait for user interaction
                        console.log("Autoplay blocked by browser. User must click play.");
                        setIsPlaying(false);
                    });
            }
        }
    }, []);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div 
            className="floating-audio-player"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <audio ref={audioRef} src={audioFile} loop />
            
            <div className={`audio-info ${showInfo ? 'show' : ''}`}>
                <div className="audio-info-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <a href="http://ncs.lnk.to/istillhearyourvoiceAT/youtube" target="_blank" rel="noopener noreferrer" className="audio-title">
                            Song: Lynxie, johnny joined - i still hear your voice
                        </a>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setShowInfo(false); }}
                            style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '0', display: 'flex' }}
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <p>Music provided by NoCopyrightSounds</p>
                    <div className="audio-links">
                        <a href="http://ncs.io/istillhearyourvoice" target="_blank" rel="noopener noreferrer">Download/Stream</a>
                        <span className="separator">•</span>
                        <a href="http://ncs.lnk.to/istillhearyourvoiceAT/youtube" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                    </div>
                    
                    <div className="volume-control">
                        <span className="volume-label">Volume</span>
                        <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.01" 
                            value={volume} 
                            onChange={handleVolumeChange} 
                            className="volume-slider"
                            aria-label="Volume slider"
                        />
                    </div>
                </div>
            </div>

            <button 
                className={`audio-btn ${isPlaying ? 'playing' : ''}`} 
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause background music" : "Play background music"}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="play-icon" />}
            </button>

            <style>{`
                .floating-audio-player {
                    position: fixed;
                    bottom: 30px;
                    right: 90px; /* Positioned to the left of the BackToTop button */
                    left: auto;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 1rem;
                }

                .audio-btn {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    background: rgba(20, 20, 20, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                }

                .audio-btn:hover {
                    transform: scale(1.1);
                    background: rgba(30, 30, 30, 0.95);
                    border-color: rgba(255, 255, 255, 0.4);
                }
                
                .audio-btn.playing {
                    animation: pulseGlow 2.5s infinite;
                }

                .play-icon {
                    margin-left: 3px; /* visual center for play button */
                }

                .audio-info {
                    position: absolute;
                    bottom: 0;
                    right: 100%;
                    margin-right: 1.5rem;
                    background: rgba(10, 10, 10, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.2rem;
                    border-radius: 16px;
                    width: 320px;
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    opacity: 0;
                    transform: translateX(10px) scale(0.95);
                    pointer-events: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                    transform-origin: center right;
                }

                /* Invisible bridge to prevent hover loss between button and tooltip */
                .audio-info::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -1.5rem;
                    width: 1.5rem;
                    height: 100%;
                }

                .audio-info.show {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                    pointer-events: auto;
                }

                .audio-info-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.4;
                }

                .audio-title {
                    color: white;
                    font-weight: 700;
                    font-size: 0.95rem;
                    margin: 0;
                    letter-spacing: -0.01em;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .audio-title:hover {
                    color: #00f2fe;
                }

                .audio-links {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }
                
                .separator {
                    color: rgba(255, 255, 255, 0.3);
                }

                .audio-info-content p {
                    margin: 0;
                }

                .audio-info-content a {
                    color: #4facfe;
                    text-decoration: none;
                    transition: color 0.2s;
                    display: inline-block;
                    font-weight: 500;
                }

                .audio-info-content a:hover {
                    color: #00f2fe;
                    text-decoration: underline;
                }

                .volume-control {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-top: 0.5rem;
                    padding-top: 0.8rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .volume-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-weight: 600;
                }

                .volume-slider {
                    flex: 1;
                    -webkit-appearance: none;
                    appearance: none;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    outline: none;
                }

                .volume-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #fff;
                    cursor: pointer;
                    transition: transform 0.1s;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                }

                .volume-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.3);
                }

                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.15); }
                    70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                
                @media (max-width: 768px) {
                    .floating-audio-player {
                        bottom: 20px;
                        right: 80px;
                        left: auto;
                    }
                    .audio-info {
                        width: 280px;
                    }
                }
            `}</style>
        </div>
    );
};

export default AudioPlayer;
