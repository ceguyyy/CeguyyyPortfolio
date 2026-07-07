import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !desc.trim()) return;

    // Build the message: "hallo {name-field} {desc} from portfolio website"
    const message = `Hallo ${name}, ${desc} from portfolio website`;
    const encodedMessage = encodeURIComponent(message);
    
    // Using the number provided by the user with country code
    const waNumber = '6285157449632';
    
    const url = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
    
    setIsOpen(false);
    setName('');
    setDesc('');
  };

  return (
    <div className="whatsapp-widget-container">
      {isOpen && (
        <div className="whatsapp-form-panel">
          <div className="whatsapp-header">
            <h3>Let's Chat!</h3>
            <button className="close-btn" onClick={toggleOpen} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <form className="whatsapp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="wa-name">Name</label>
              <input 
                id="wa-name"
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="wa-desc">Description</label>
              <textarea 
                id="wa-desc"
                placeholder="What would you like to discuss?" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                rows={3}
              ></textarea>
            </div>
            <button type="submit" className="wa-submit-btn">
              <Send size={16} />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </div>
      )}
      
      <button 
        className={`whatsapp-fab ${isOpen ? 'open' : ''}`} 
        onClick={toggleOpen}
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
