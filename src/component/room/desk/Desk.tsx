import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Desk.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons/faPhoneFlip';
const Desk: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modal, setModal] = useState<'contact' | 'projects' | null>(null);
console.log(JSON.stringify(modal))
  return (
    <div className="scene">
      <div className="container">
        <div className="sticky-note">
      
        </div>
        <div className="monitor">
          <div className="css-typing">
            <p> Welcome to aimeelramirez.com</p>
            <p>Interact with drawer to see projects.</p>
          </div>
        </div>
        <div className="monitor-stand"></div>
        <div className="monitor-base"></div>
        <div className="desk">
          <div className="desk-mask"></div>
          <div className="right-shelf">
            <div className="shelf">
              <div className="container-drawer">
                <motion.div
                  className="drawer"
                  animate={{ y: drawerOpen ? 0 : 50 }}
                  transition={{ type: 'spring', stiffness: 20 }}
                >
                  <button className="drawer-btn" onClick={() => setModal('projects')}>{drawerOpen ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</button>
                </motion.div>

                <div className="phone" onClick={() => setModal('contact')}><FontAwesomeIcon icon={faPhoneFlip} /></div>

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
                  {drawerOpen ? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Desk;