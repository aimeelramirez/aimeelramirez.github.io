import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Desk.css';

const Desk: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modal, setModal] = useState<'contact' | 'projects' | null>(null);

  return (
    <div className="scene">
      <div className="desk">
        <div className="monitor">
          <div className="typing-container">Hi, I'm  Aimee.<br/>
          <b>Welcome to aimeelramirez.com</b></div>
        </div>
        <div className="monitor-stand"></div>
        <div className="monitor-base"></div>
        <div className="container-drawer">
        <motion.div
          className="drawer"
          animate={{ y: drawerOpen ? 0 : 50 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <button className="drawer-btn" onClick={() => setModal('projects')}>📁 Projects</button>
        </motion.div>

        <div className="phone" onClick={() => setModal('contact')}>📞</div>

        <AnimatePresence>
          {modal && (
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
            <button className="close-btn" onClick={() => setModal(null)}>✖</button>

            {modal === 'contact' && (
              <div className="modal-content">
                <a href="mailto:support@aimeelramirez.dev" target="_blank" rel="noopener noreferrer">
                  📧 Email Me
                </a>
                <br />
                <a href="https://www.linkedin.com/in/aimeelramirez/" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
              </div>
            )}
            
            {modal === 'projects' && (
              <div className="modal-content">
                <a href="https://aimeelramirez.dev/" target="_blank" rel="noopener noreferrer">
                  📁 Project One
                </a>
                <br />
                <a href="https://github.com/aimeelramirez/loop-detector-app" target="_blank" rel="noopener noreferrer">
                  📁 Project Two
                </a>
              </div>
            )}
            
            </motion.div>
          )}
        </AnimatePresence>

        <button className="toggle-drawer" onClick={() => setDrawerOpen(!drawerOpen)}>
          {drawerOpen ? '🔒 Shut Drawer' : '📂 Open Drawer'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Desk;