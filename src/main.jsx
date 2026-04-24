
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

// Plug links here when ready.
const LINKS = {
  personalIG: '',
  youtubeShorts: '',
  rednote: '',
  substack: '',
  frs: '', // Notion/course/payment link later
};

function go(url) {
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.38, ease: 'easeOut' }
};

function App() {
  const [page, setPage] = useState('home');
  return <main className="shell">
    <button className="brand" onClick={() => setPage('home')}>gather / transform</button>
    <AnimatePresence mode="wait">
      {page === 'home' && <Home key="home" setPage={setPage} />}
      {page === 'system' && <System key="system" setPage={setPage} />}
      {page === 'signal' && <Signal key="signal" />}
      {page === 'research' && <Research key="research" />}
      {page === 'window' && <WindowKit key="window" />}
      {page === 'frs' && <FRS key="frs" />}
    </AnimatePresence>
  </main>
}

function Home({ setPage }) {
  return <motion.section className="home page" {...fade}>
    <div className="dot" />
    <div className="mark">GATHER / TRANSFORM</div>
    <nav className="home-nav" aria-label="Primary">
      <button className="home-link system-link" onClick={() => setPage('system')}>SYSTEM</button>
      <button className="home-link signal-link" onClick={() => setPage('signal')}>SIGNAL</button>
      <button className="home-link research-link" onClick={() => setPage('research')}>research</button>
    </nav>
    <p className="footer-line">CENTRAL GRAVITY. LOW FORCE. SELF-SELECTION.</p>
  </motion.section>
}

function System({ setPage }) {
  return <motion.section className="page inner" {...fade}>
    <h1>SYSTEM</h1>
    <p className="subline">A usable entry.</p>
    <div className="system-grid">
      <button className="tile" onClick={() => setPage('frs')}>
        <span className="tile-title">FRS</span>
        <span className="tile-copy">Immediate application under real conditions.</span>
        <span className="outline-btn">ENTER FRS</span>
      </button>
      <button className="tile" onClick={() => setPage('window')}>
        <span className="tile-title">WINDOW KIT</span>
        <span className="tile-copy">Built for movement, pressure, and clarity.</span>
        <span className="outline-btn">ENTER WINDOW KIT</span>
      </button>
    </div>
  </motion.section>
}

function WindowKit() {
  return <motion.section className="page inner narrow" {...fade}>
    <h1 className="small-title">Window Kit</h1>
    <p className="sublime">The Sublime</p>
    <p className="subline">Built for movement, pressure, and clarity.</p>
    <div className="component-list">
      <Block title="Cloak" copy="Designed for movement, not resistance." />
      <Block title="Vest" copy="Hidden. Stable. Always ready." />
      <Block title="Devices" copy="Feedback and expression." />
    </div>
    <p className="closing-line">Clarity emerges in use.</p>
  </motion.section>
}

function FRS() {
  return <motion.section className="page inner narrow" {...fade}>
    <h1>FRS</h1>
    <p className="subline">Immediate application under real conditions.</p>
    <div className="frs-body">
      <p>Notice the pressure.</p>
      <p>Reduce what is unnecessary.</p>
      <p>Act only where action restores options.</p>
    </div>
    <button className="outline-btn standalone" onClick={() => go(LINKS.frs)}>ENTER FRS</button>
  </motion.section>
}

function Signal() {
  return <motion.section className="page inner" {...fade}>
    <h1>SIGNAL</h1>
    <p className="subline">Public-facing surfaces.</p>
    <div className="link-stack">
      <button onClick={() => go(LINKS.personalIG)}>Personal IG</button>
      <button onClick={() => go(LINKS.youtubeShorts)}>YouTube Shorts</button>
      <button onClick={() => go(LINKS.rednote)}>Rednote</button>
    </div>
  </motion.section>
}

function Research() {
  return <motion.section className="page inner research-page" {...fade}>
    <h1>research</h1>
    <p className="subline">Not for most people.</p>
    <div className="research-copy">
      <section>
        <h2>Before-CDE</h2>
        <p>Perfection means no contrast, no need, no motion. Motion appears only after difference. Persistence is stability in motion.</p>
      </section>
      <section>
        <h2>CDE fundamentals</h2>
        <p>Constraint limits possible configurations. Allowance is what remains viable. Coherence is degree of viability within constraint.</p>
      </section>
    </div>
    <button className="text-link" onClick={() => go(LINKS.substack)}>Substack</button>
  </motion.section>
}

function Block({ title, copy }) {
  return <div className="component-block"><h2>{title}</h2><p>{copy}</p></div>
}

createRoot(document.getElementById('root')).render(<App />);
