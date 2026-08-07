
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

// Plug links here when ready.
const LINKS = {
  scryd: '',
  scrydArchive: '',
  scrydStel: '',
  gtYoutube: '',
  frs: '', // Notion/course/payment link later
};

// Plug Substack article URLs here when ready.
const RESEARCH = [
  {
    title: 'FOUNDATIONS',
    tagline: 'Understanding coherent systems.',
    articles: [
      { label: 'CDE Axioms', url: '' },
      { label: 'Constraint-Driven Emergentism', url: '' },
      { label: 'Before-CDE', url: '' },
      { label: 'What Constraint-Driven Emergentism Is Not', url: '' },
      { label: 'Constraint Alignment and the Role of Creativity', url: '' },
    ],
  },
  {
    title: 'OBSERVER',
    tagline: 'How reality becomes recognizable.',
    articles: [
      { label: 'Blue Eye, Red Eye, and Purple Access', url: '' },
      { label: 'Order of Fidelity (OOF)', url: '' },
      { label: 'The Flower That Kept Winning Hide-and-Seek', url: '' },
      { label: 'What Maintains a Village', url: '' },
    ],
  },
  {
    title: 'PARTICIPATION',
    tagline: 'How coherent systems participate once they emerge.',
    articles: [
      { label: 'The Wake Principle', url: '' },
      { label: 'Circle Ray Dot v2', url: '' },
      { label: 'Pumpkin Pie, Swords, and Participation', url: '' },
    ],
  },
];

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
      {page === 'physicals' && <Physicals key="physicals" />}
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
      <button className="tile" onClick={() => setPage('physicals')}>
        <span className="tile-title">PHYSICALS</span>
        <span className="tile-copy">Things that cross into matter.</span>
        <span className="outline-btn">ENTER PHYSICALS</span>
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

function Physicals() {
  return <motion.section className="page inner narrow" {...fade}>
    <h1 className="small-title">Physicals</h1>
    <p className="subline">Things that cross into matter.</p>
    <div className="component-list">
      <Block title="GT1" copy="A modular window system built for movement, adaptation, and changing conditions." />
      <Block title="B1" copy="A physical object emerging from the same operating logic." />
    </div>
    <p className="closing-line">Matter takes longer. Emerging in progress.</p>
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

function SignalLink({ label, url }) {
  if (url) return <button onClick={() => go(url)}>{label}</button>;
  return <span>{label}</span>;
}

function Signal() {
  return <motion.section className="page inner signal-page" {...fade}>
    <h1>SIGNAL</h1>
    <div className="signal-tree">
      <p className="subline signal-origin">Public-facing surfaces.</p>
      <div className="signal-connectors" aria-hidden="true">
        <span className="signal-line signal-line-left" />
        <span className="signal-line signal-line-right" />
      </div>
      <div className="signal-branches">
        <div className="signal-branch">
          <h2 className="signal-branch-title">SCRYD SERIES</h2>
          <div className="link-stack">
            <SignalLink label="Scryd" url={LINKS.scryd} />
            <SignalLink label="Scryd Archive" url={LINKS.scrydArchive} />
            <SignalLink label="Scryd Stel" url={LINKS.scrydStel} />
          </div>
        </div>
        <div className="signal-branch">
          {LINKS.gtYoutube ? (
            <button className="signal-branch-title signal-branch-link" onClick={() => go(LINKS.gtYoutube)}>G/T YOUTUBE</button>
          ) : (
            <h2 className="signal-branch-title">G/T YOUTUBE</h2>
          )}
        </div>
      </div>
    </div>
  </motion.section>
}

function Research() {
  return <motion.section className="page inner research-page" {...fade}>
    <h1>research</h1>
    <p className="subline">Not for most people.</p>
    <div className="research-copy">
      {RESEARCH.map((branch) => (
        <section key={branch.title} className="research-branch">
          <h2>{branch.title}</h2>
          <p className="branch-tagline">{branch.tagline}</p>
          <div className="link-stack">
            {branch.articles.map((article) => (
              <button key={article.label} onClick={() => go(article.url)}>{article.label}</button>
            ))}
          </div>
        </section>
      ))}
    </div>
  </motion.section>
}

function Block({ title, copy }) {
  return <div className="component-block"><h2>{title}</h2><p>{copy}</p></div>
}

createRoot(document.getElementById('root')).render(<App />);
