
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

// Plug links here when ready.
const LINKS = {
  scryd: 'https://www.instagram.com/s.cryd?igsh=MW1zOGFhemFsNjhrcQ%3D%3D&utm_source=qr',
  scrydArchive: 'https://www.tiktok.com/@scryd.archive?_r=1&_t=ZP-98rV71Dk9Z0',
  scrydStel: '',
  gtYoutube: 'https://youtube.com/@gathertransform?si=XKJIVvHttkCCHanJ',
  houseOfHorror: '',
  frs: '', // Notion/course/payment link later
};

// Plug Substack article URLs here when ready.
const RESEARCH = [
  {
    title: 'FOUNDATIONS',
    tagline: 'Understanding coherent systems.',
    articles: [
      { label: 'CDE Axioms', url: 'https://scryd.substack.com/p/cde-axioms' },
      { label: 'Constraint-Driven Emergentism', url: 'https://scryd.substack.com/p/constraint-driven-emergentism' },
      { label: 'Before-CDE', url: 'https://scryd.substack.com/p/before-cde-the-pulse-of-potential' },
      { label: 'What Constraint-Driven Emergentism Is Not', url: 'https://scryd.substack.com/p/what-cde-is-not' },
      { label: 'Constraint Alignment and the Role of Creativity', url: 'https://scryd.substack.com/p/acceptance-layer-and-the-second-meaning' },
    ],
  },
  {
    title: 'OBSERVER',
    tagline: 'How reality becomes recognizable.',
    articles: [
      { label: 'Blue Eye, Red Eye, and Purple Access', url: 'https://scryd.substack.com/p/blue-eye-red-eye-and-purple-access' },
      { label: 'Order of Fidelity (OOF)', url: 'https://scryd.substack.com/p/order-of-fidelity-oof' },
      { label: 'The Flower That Kept Winning Hide-and-Seek', url: 'https://scryd.substack.com/p/the-flower-that-kept-winning-hide' },
      { label: 'What Maintains a Village', url: 'https://scryd.substack.com/p/village-and-convenience' },
      { label: 'What Does a Giraffe See in a Mirror?', url: 'https://scryd.substack.com/p/what-does-a-giraffe-see-in-a-mirror' },
    ],
  },
  {
    title: 'PARTICIPATION',
    tagline: 'How coherent systems participate once they emerge.',
    articles: [
      { label: 'The Wake Principle', url: 'https://scryd.substack.com/p/the-wake-principle' },
      { label: 'Circle Ray Dot v2', url: 'https://scryd.substack.com/p/circle-ray-dot-v2' },
      { label: 'Pumpkin Pie, Swords, and Participation', url: 'https://scryd.substack.com/p/pumpkin-pie-swords-and-participation' },
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
      {page === 'hardware' && <Hardware key="hardware" />}
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
      <button className="tile" onClick={() => setPage('hardware')}>
        <span className="tile-title">HARDWARE</span>
        <span className="tile-copy">Things that cross into matter.</span>
        <span className="outline-btn">ENTER HARDWARE</span>
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

function Hardware() {
  return <motion.section className="page inner narrow" {...fade}>
    <h1 className="small-title">Hardware</h1>
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
            <div className="signal-node">
              <SignalLink label="Scryd Stel" url={LINKS.scrydStel} />
              <p className="signal-secondary">Music and authored expression.</p>
            </div>
          </div>
        </div>
        <div className="signal-branch">
          <h2 className="signal-branch-title">G/T YouTube</h2>
          <div className="signal-node signal-destination">
            <SignalLink label="Gather / Transform" url={LINKS.gtYoutube} />
          </div>
          <div className="signal-node signal-house-of-horror">
            <SignalLink label="House of Horror" url={LINKS.houseOfHorror} />
            <p className="signal-secondary">Experimental screen and visual works.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
}

function ResearchLink({ label, url }) {
  if (url) return <button className="research-label" onClick={() => go(url)}>{label}</button>;
  return <span className="research-label">{label}</span>;
}

function Research() {
  return <motion.section className="page inner research-page" {...fade}>
    <h1>research</h1>
    <p className="subline">Not for most people.</p>
    <div className="research-threads">
      {RESEARCH.map((branch) => (
        <section
          key={branch.title}
          className={`research-thread research-thread-${branch.title.toLowerCase()}`}
        >
          <h2 className="research-doorway">{branch.title}</h2>
          <p className="research-tagline">{branch.tagline}</p>
          <div className="research-string">
            {branch.articles.map((article) => (
              <div key={article.label} className="research-node">
                <span className="research-tick" aria-hidden="true" />
                <ResearchLink label={article.label} url={article.url} />
              </div>
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
