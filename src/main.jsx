
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
import { CSL_LANGUAGES, DEFAULT_CSL_LANGUAGE, getCSLCopy, getCSLLanguage, selectCSLLanguage } from './csl-language';

// Plug links here when ready.
const LINKS = {
  scryd: 'https://www.instagram.com/s.cryd?igsh=MW1zOGFhemFsNjhrcQ%3D%3D&utm_source=qr',
  scrydArchive: 'https://www.tiktok.com/@scryd.archive?_r=1&_t=ZP-98rV71Dk9Z0',
  scrydStel: '',
  gtYoutube: 'https://youtube.com/@gathertransform?si=XKJIVvHttkCCHanJ',
  houseOfHorror: '',
  frs: 'https://frs-fork-resolution.aaron-2620.chatgpt.site',
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

const STEL_STANZAS = [
  ['river appearing too early in the walk', 'cold movement splitting the earth quietly'],
  ['first instinct', 'straight line', 'cross here', 'force meaning into water'],
  ['current carrying broken sky pieces downstream', 'branches rotating slowly in eddies like unfinished decisions'],
  ['then slight glance rightward', 'barely even a decision', 'more like the body continuing before thought catches up'],
  ['grass flattening in a curve', 'stones already remembering feet', 'the river narrowing somewhere beyond direct attention'],
  ['nothing solved', 'nothing conquered', 'water still speaking in its own language'],
  ['just trajectory loosening enough to remain alive'],
  ['f-line bending around unnecessary collision', 's-line reforming afterward as if it was always obvious'],
  ['the strange embarrassment of realizing', 'the obstacle was partially made from the angle you arrived with'],
  ['small detour', 'small shift in horizon', 'suddenly continuity returns to the world'],
  ['trees opening', 'shoreline softening', 'current no longer opponent-shaped'],
  ['motion keeping itself intact through slight reorientation', 'through not worshipping the first visible barrier'],
  ['river remaining river', 'walker remaining walker'],
  ['path quietly becoming possible between them'],
];

const OCHIAI_ARTIFACT = [
  '~~~~~          ⟍',
  '∿∿∿∿∿           ⟍___',
  '                        □',
  '                         ⟍',
  '                          ⟍',
  '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈',
  '',
  'Δ',
  ' ╲',
  '  ╲',
  '   •~~~~',
  '      ~~~~~',
  '        ╲',
  '         □',
  '          ╲',
  '           →',
  '',
  '~~~~~|~~~~~|~~~~~',
  '      ╲',
  '       ╲',
  '        □',
  '       ╱',
  '     ╱',
  '_____∿_____∿_____',
  '',
  '•',
  ' ~~~~',
  '   ~~~~~~',
  '      ~~~~~',
  '        ⟍',
  '         □',
  '        ⟋',
  '∿∿∿∿∿∿∿∿∿∿∿∿',
].join('\n');

const STEL_DESTINATIONS = [
  { title: 'BLOOD ON THE LEAVES', type: 'novel', url: '' },
  { title: 'AUTOSAVE', type: 'music album', url: '' },
];

const CSL_SEQUENCE = [
  'Reference',
  'Change',
  'Observe Deviation',
  'Adjust Constraint',
  'Re-test',
  'Repeat',
];

const CSL_TRACE_FIELDS = [
  { key: 'reference', label: 'REFERENCE' },
  { key: 'change', label: 'CHANGE' },
  { key: 'deviation', label: 'DEVIATION' },
  { key: 'constraint', label: 'CONSTRAINT' },
  { key: 'adjustment', label: 'ADJUSTMENT' },
  { key: 'retest', label: 'RE-TEST' },
];

const CSL_DISPOSITIONS = [
  { value: 'stable' },
  { value: 'repeat' },
  { value: 'reconsider' },
];

const OTHERS_APPLICATIONS = [
  { name: 'PUBLIC GINSENG', type: 'Public application' },
  { name: 'FICARIA', type: 'Application' },
  { name: 'SOPHIA', type: 'Application' },
  { name: '1000 LIVES', type: 'Application' },
];

const EMPTY_CSL_TRACE = CSL_TRACE_FIELDS.reduce(
  (trace, field) => ({ ...trace, [field.key]: '' }),
  { disposition: '' },
);

function go(url) {
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}

function getInitialPage() {
  const surface = new URLSearchParams(window.location.search).get('surface');
  if (surface === 'interior') return 'home';
  if (surface === 'others') return 'others';
  return 'atlas';
}

function enterFRS() {
  const frs = new URL(LINKS.frs);
  const atlas = new URL(window.location.pathname, window.location.origin);
  const interior = new URL(atlas);
  const others = new URL(atlas);

  interior.searchParams.set('surface', 'interior');
  others.searchParams.set('surface', 'others');
  frs.searchParams.set('atlas_return', interior.toString());
  frs.searchParams.set('atlas_others', others.toString());
  window.location.assign(frs.toString());
}

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.38, ease: 'easeOut' }
};

function App() {
  const [page, setPage] = useState(getInitialPage);
  return <main className={`shell stel-threshold${page === 'stel' ? ' stel-threshold-active' : ''}`}>
    {page !== 'atlas' && <button className="brand" onClick={() => setPage('home')}>gather / transform</button>}
    <AnimatePresence mode="wait">
      {page === 'atlas' && <Atlas key="atlas" onEnter={() => setPage('home')} />}
      {page === 'home' && <Home key="home" setPage={setPage} />}
      {page === 'system' && <System key="system" setPage={setPage} onEnterFRS={enterFRS} />}
      {page === 'others' && <Others key="others" setPage={setPage} onEnterFRS={enterFRS} />}
      {page === 'signal' && <Signal key="signal" setPage={setPage} />}
      {page === 'stel' && <ScrydStel key="stel" />}
      {page === 'research' && <Research key="research" />}
      {page === 'window' && <WindowKit key="window" />}
      {page === 'hardware' && <Hardware key="hardware" />}
      {page === 'csl' && <CSL key="csl" />}
    </AnimatePresence>
  </main>
}

function Atlas({ onEnter }) {
  return <motion.section className="page atlas-threshold" {...fade}>
    <span className="atlas-threshold-brand">gather / transform</span>
    <h1>ATLAS</h1>
    <button className="atlas-enter" onClick={onEnter}>ENTER →</button>
  </motion.section>
}

function Home({ setPage }) {
  return <motion.section className="home page" {...fade}>
    <div className="dot" />
    <div className="mark">GATHER / TRANSFORM</div>
    <nav className="home-nav" aria-label="Primary">
      <button className="home-link system-link" onClick={() => setPage('system')}>SYSTEM</button>
      <button className="home-link signal-link" onClick={() => setPage('signal')}>SIGNAL</button>
      <button className="home-link research-link" onClick={() => setPage('research')}>research</button>
      <button className="home-link others-link" onClick={() => setPage('others')}>OTHERS</button>
    </nav>
    <p className="footer-line">CENTRAL GRAVITY. LOW FORCE. SELF-SELECTION.</p>
  </motion.section>
}

function Others({ setPage, onEnterFRS }) {
  return <motion.section className="page inner others-page" {...fade}>
    <button className="others-return" onClick={() => setPage('home')}>← RETURN TO G/T</button>
    <header className="others-header">
      <h1>OTHERS</h1>
      <p>Other usable entries.</p>
    </header>

    <section className="others-section" aria-labelledby="others-systems">
      <h2 id="others-systems">SYSTEMS</h2>
      <div className="others-list">
        <button className="others-entry" onClick={onEnterFRS}>
          <span className="others-entry-code">FRS</span>
          <span className="others-entry-description">
            <strong>Fork Resolution System</strong>
            <small>Resolve a fork without surrendering the choice.</small>
          </span>
          <span className="others-entry-action">ENTER →</span>
        </button>
        <button className="others-entry" onClick={() => setPage('csl')}>
          <span className="others-entry-code">CSL</span>
          <span className="others-entry-description">
            <strong>Coherence Stabilization Loop</strong>
            <small>Detect drift before failure.</small>
          </span>
          <span className="others-entry-action">ENTER →</span>
        </button>
      </div>
    </section>

    <section className="others-section others-applications" aria-labelledby="others-applications">
      <h2 id="others-applications">APPLICATIONS</h2>
      <div className="others-list">
        {OTHERS_APPLICATIONS.map((application) => (
          <div className="others-entry others-entry-inactive" key={application.name}>
            <span className="others-entry-description">
              <strong>{application.name}</strong>
              <small>{application.type}</small>
            </span>
            <span className="others-entry-action" aria-disabled="true">ENTER →</span>
          </div>
        ))}
      </div>
    </section>
  </motion.section>
}

function System({ setPage, onEnterFRS }) {
  return <motion.section className="page inner" {...fade}>
    <h1>SYSTEM</h1>
    <p className="subline">A usable entry.</p>
    <div className="system-grid">
      <button className="tile" onClick={onEnterFRS}>
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

function CSLTraceField({ field, value, onChange }) {
  const id = `csl-${field.key}`;
  return <div className="csl-trace-field">
    <label htmlFor={id}>{field.label}</label>
    <p>{field.prompt}</p>
    <textarea
      id={id}
      name={field.key}
      value={value}
      placeholder={field.example}
      onChange={(event) => onChange(field.key, event.target.value)}
      rows="3"
    />
  </div>
}

function CSL() {
  const [traceOpen, setTraceOpen] = useState(false);
  const [trace, setTrace] = useState(EMPTY_CSL_TRACE);
  const [clearPending, setClearPending] = useState(false);
  const [language, setLanguage] = useState(DEFAULT_CSL_LANGUAGE);
  const copy = getCSLCopy(language);
  const traceFields = CSL_TRACE_FIELDS.map((field) => ({
    ...field,
    prompt: copy.prompts[field.key],
    example: copy.examples[field.key],
  }));
  const hasTraceContent = CSL_TRACE_FIELDS.some((field) => trace[field.key].trim()) || trace.disposition;

  function changeLanguage(code) {
    const selection = selectCSLLanguage(code, trace);
    setLanguage(selection.language);
  }

  function updateTrace(key, value) {
    setClearPending(false);
    setTrace((current) => ({
      ...current,
      [key]: value,
      ...(key === 'retest' && !value.trim() ? { disposition: '' } : {}),
    }));
  }

  function clearTrace() {
    setTrace(EMPTY_CSL_TRACE);
    setClearPending(false);
  }

  function requestClear() {
    if (hasTraceContent) setClearPending(true);
    else clearTrace();
  }

  return <motion.section className="page inner csl-page" lang={getCSLLanguage(language).htmlLang} {...fade}>
    <label className="csl-language-selector">
      <span className="csl-visually-hidden">{copy.language}</span>
      <select aria-label={copy.language} value={language} onChange={(event) => changeLanguage(event.target.value)}>
        {CSL_LANGUAGES.map((option) => <option value={option.code} key={option.code}>{option.label}</option>)}
      </select>
    </label>
    <header className="csl-header">
      <p className="csl-kicker">{copy.coreSystem}</p>
      <h1>CSL</h1>
      <p className="csl-name">{copy.name}</p>
      <p className="csl-lead">{copy.lead}</p>
    </header>

    {!traceOpen ? <div className="csl-overview">
      <ol className="csl-recognition" aria-label={copy.name}>
        {copy.recognition.map((prompt, index) => <li key={CSL_TRACE_FIELDS[index].key}>
          <span className="csl-recognition-prompt">{prompt}</span>
          <span className="csl-recognition-canonical"><small>{copy.canonicalLabel}</small>{CSL_TRACE_FIELDS[index].label}</span>
        </li>)}
      </ol>

      <p className="csl-definition">{copy.definition}</p>

      <ol className="csl-sequence" aria-label={`${copy.name} — CSL`}>
        {CSL_SEQUENCE.map((step) => <li key={step}>{step}</li>)}
      </ol>

      <div className="csl-substance">
        {copy.substance.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <section className="csl-guardrails" aria-labelledby="csl-guardrails-title">
        <h2 id="csl-guardrails-title">{copy.distinctionsTitle}</h2>
        <ul>
          {copy.guardrails.map((guardrail) => <li key={guardrail}>{guardrail}</li>)}
        </ul>
      </section>

      <blockquote className="csl-principle">{copy.principle}</blockquote>
      <button className="outline-btn csl-enter" onClick={() => setTraceOpen(true)}>{copy.enterTrace}</button>
    </div> : <form className="csl-trace" onSubmit={(event) => event.preventDefault()}>
      <div className="csl-trace-heading">
        <div>
          <p className="csl-trace-label">{copy.traceLabel}</p>
          <p>{copy.traceIntro}</p>
        </div>
        <button type="button" className="csl-text-button" onClick={() => setTraceOpen(false)}>{copy.returnChamber}</button>
      </div>

      {traceFields.map((field) => (
        <CSLTraceField
          key={field.key}
          field={field}
          value={trace[field.key]}
          onChange={updateTrace}
        />
      ))}

      <fieldset className="csl-disposition">
        <legend>{copy.disposition}</legend>
        <p>{copy.dispositionPrompt}</p>
        <div className="csl-disposition-options">
          {CSL_DISPOSITIONS.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="disposition"
                value={option.value}
                checked={trace.disposition === option.value}
                disabled={!trace.retest.trim()}
                onChange={(event) => updateTrace('disposition', event.target.value)}
              />
              <span>{copy.dispositions[option.value]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {trace.disposition && <p className="csl-disposition-note" aria-live="polite">{copy.dispositionNotes[trace.disposition]}</p>}

      <div className="csl-clear">
        <button type="button" className="csl-text-button" onClick={requestClear}>{copy.clearTrace}</button>
        {clearPending && <div className="csl-clear-confirm" role="group" aria-label={copy.clearQuestion}>
          <span>{copy.clearQuestion}</span>
          <button type="button" onClick={clearTrace}>{copy.confirmClear}</button>
          <span aria-hidden="true">/</span>
          <button type="button" onClick={() => setClearPending(false)}>{copy.cancel}</button>
        </div>}
      </div>
    </form>}
  </motion.section>
}

function SignalLink({ label, url, onSelect }) {
  if (onSelect) return <button onClick={onSelect}>{label}</button>;
  if (url) return <button onClick={() => go(url)}>{label}</button>;
  return <span>{label}</span>;
}

function Signal({ setPage }) {
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
              <SignalLink label="Scryd Stel" onSelect={() => setPage('stel')} />
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

function StelDestination({ title, type, url }) {
  const content = <><span className="stel-exit-title">{title}</span><span className="stel-exit-type">{type}</span></>;
  if (url) return <button className="stel-exit" onClick={() => go(url)}>{content}</button>;
  return <div className="stel-exit">{content}</div>;
}

function ScrydStel() {
  return <motion.section className="page inner stel-page" {...fade}>
    <header className="stel-header">
      <h1>SCRYD STEL</h1>
      <p className="stel-series">TWIN ARTIFACT</p>
      <div className="stel-artifact-heading">
        <p>First artifact:</p>
        <h2 id="overflow-title">Overflow</h2>
      </div>
    </header>

    <article className="stel-poem" aria-labelledby="overflow-title">
      {STEL_STANZAS.map((stanza, stanzaIndex) => (
        <p key={stanzaIndex}>
          {stanza.map((line, lineIndex) => (
            <React.Fragment key={line}>
              {line}{lineIndex < stanza.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      ))}
    </article>

    <section className="stel-ochiai" aria-labelledby="ochiai-title">
      <h2 id="ochiai-title">Twin Artifact: (Ochiai)</h2>
      <p>Below language, discarded heat.</p>
      <div className="stel-ochiai-scroll">
        <pre>{OCHIAI_ARTIFACT}</pre>
      </div>
    </section>

    <section className="stel-exits" aria-label="Emerging Scryd Stel destinations">
      {STEL_DESTINATIONS.map((destination) => (
        <StelDestination key={destination.title} {...destination} />
      ))}
    </section>
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
