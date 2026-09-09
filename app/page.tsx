import type { CSSProperties } from 'react'

/* buildgallery.ai — four load-bearing signals.
   All colour flows through CSS custom properties defined per theme; no
   component below hardcodes a hex. Figtree for words, DM Mono for data. */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

.stage{
  --ink:#ECECF1; --ink2:#8E8E9A; --ink-line:#26262e;
  min-height:100vh; background:#0d0e12; color:var(--ink);
  font-family:'Figtree',system-ui,sans-serif;
  padding:32px 20px 96px;
}
.stage *{box-sizing:border-box}
.stage-head{max-width:1200px;margin:0 auto 28px}
.stage-title{font-size:22px;font-weight:600;letter-spacing:-0.01em;margin:0}
.stage-sub{margin:8px 0 0;font-size:15px;line-height:1.5;color:var(--ink2);max-width:64ch}

.grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:20px}
@media (min-width:960px){.grid{grid-template-columns:1fr 1fr}}

.panel{border-radius:16px;padding:24px;background:var(--bg);color:var(--text);border:1px solid var(--ink-line)}
.panel-tag{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--text2);margin:0 0 20px}

.sect{padding:18px 0;border-top:1px solid var(--line)}
.sect:first-of-type{border-top:none;padding-top:4px}
.sect-label{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:.05em;color:var(--text2);margin:0 0 14px}
.sub{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.04em;color:var(--text2);margin:16px 0 8px}
.cap{font-family:'DM Mono',monospace;font-size:11px;color:var(--text2);margin:6px 0 0}
.stack{display:flex;flex-direction:column;gap:12px}
.wrap{display:flex;flex-wrap:wrap;gap:10px;align-items:center}

/* ---------- 1. Plaque ---------- */
.plaque{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.repro{display:inline-flex;align-items:baseline;gap:6px;border-radius:8px;
  background:var(--evidence-fill);color:var(--evidence-on);
  padding:5px 10px;font-family:'Figtree',sans-serif;font-weight:500;font-size:13px;line-height:1}
.repro .n{font-family:'DM Mono',monospace;font-variant-numeric:tabular-nums;font-weight:500;font-size:13px}
.repro--none{background:var(--recess);color:var(--text2)}
.fresh{display:inline-flex;align-items:center;gap:8px;
  font-family:'DM Mono',monospace;font-variant-numeric:tabular-nums;font-size:12px;color:var(--text)}
.fresh--stale{color:var(--text2)}
.lamp{width:11px;height:8px;border-radius:50%;background:var(--amber);flex:none;
  box-shadow:0 0 7px 1px color-mix(in srgb,var(--amber) 70%,transparent),0 0 2px var(--amber)}
.fresh--stale .lamp{background:color-mix(in srgb,var(--amber) 60%,transparent);box-shadow:none;opacity:.7}

.plaque--header .repro{font-size:16px;padding:7px 13px}
.plaque--header .repro .n{font-size:16px}
.plaque--header .fresh{font-size:13px}
.plaque--row{gap:10px}
.plaque--row .repro{font-size:12px;padding:3px 8px}
.plaque--row .repro .n{font-size:12px}
.plaque--row .fresh{font-size:12px}

.card{border:1px solid var(--line);border-radius:12px;background:var(--glass);padding:14px;display:flex;flex-direction:column;gap:12px}
.card-title{font-family:'Figtree',sans-serif;font-weight:500;font-size:16px;color:var(--text)}
.pageheader{display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid var(--line);border-radius:12px;background:var(--glass)}
.ph-title{font-family:'Figtree',sans-serif;font-size:20px;font-weight:600;color:var(--text)}
.listrow{display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:10px 12px;background:var(--recess);border-radius:8px;border:1px solid var(--line)}
.listrow-name{font-family:'DM Mono',monospace;font-size:13px;color:var(--text)}

/* ---------- 2. Rebuild credit ---------- */
.credit{border:1px solid var(--line);border-left:2px solid var(--action);border-radius:12px;
  background:var(--recess);padding:13px 15px;display:flex;flex-direction:column;gap:9px}
.credit-lead{font-family:'Figtree',sans-serif;font-size:16px;line-height:1.45;color:var(--text)}
.credit a{color:var(--action);text-decoration:underline;text-underline-offset:2px;text-decoration-thickness:1px}
.credit-lead .gone{color:var(--text2);font-family:'DM Mono',monospace;font-size:13px}
.delta{font-family:'DM Mono',monospace;font-variant-numeric:tabular-nums;font-size:13px;line-height:1.5;color:var(--text2)}
.delta .d{color:var(--text)}

/* ---------- 3. Category chips ---------- */
.chip{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:5px 9px;
  font-family:'DM Mono',monospace;font-size:12px;line-height:1;color:var(--cat);
  background:color-mix(in srgb,var(--cat) 12%,transparent);
  border:1px solid color-mix(in srgb,var(--cat) 22%,transparent)}
.chip--sel{background:color-mix(in srgb,var(--cat) 22%,transparent);border-color:var(--cat)}
.chip-count{font-variant-numeric:tabular-nums;padding-left:8px;
  border-left:1px solid color-mix(in srgb,currentColor 32%,transparent)}
.chip--overflow{color:var(--text2);background:var(--recess);border:1px solid var(--line);font-variant-numeric:tabular-nums}

/* ---------- 4. Gap marker ---------- */
.gapcard{border:1.5px dashed var(--cat-breakage);border-radius:12px;padding:14px;
  background:var(--glass);display:flex;flex-direction:column;gap:10px}
.gapcard--solved{border-style:solid;border-color:var(--evidence)}
.gap-mono{font-family:'DM Mono',monospace;font-variant-numeric:tabular-nums;font-size:13px;color:var(--text2)}
.gaprow{border-left:1.5px dashed var(--cat-breakage);padding:11px 13px;display:flex;align-items:center;gap:12px;
  background:var(--recess);border-radius:0 8px 8px 0}
.gaprow--solved{border-left-style:solid;border-left-color:var(--evidence)}
.gaprow-text{font-family:'Figtree',sans-serif;font-size:15px;color:var(--text)}
.gappanel{border:1.5px dashed var(--cat-breakage);border-radius:12px;padding:18px;
  background:var(--glass);display:flex;flex-direction:column;gap:14px}
.gappanel--solved{border-style:solid;border-color:var(--evidence)}
.gap-problem{font-family:'Figtree',sans-serif;font-size:16px;line-height:1.45;color:var(--text)}
.gap-meta{display:flex;gap:20px;flex-wrap:wrap;align-items:center;font-family:'DM Mono',monospace;
  font-variant-numeric:tabular-nums;font-size:13px}
.gap-meta .k{color:var(--text2);margin-right:6px}
.gap-meta .v{color:var(--text)}
.reward{display:inline-flex;align-items:center;gap:6px;border-radius:8px;background:var(--amber);
  color:var(--amber-on);padding:4px 9px;font-family:'DM Mono',monospace;font-variant-numeric:tabular-nums;
  font-size:13px;font-weight:500}
.action-btn{border:none;border-radius:12px;background:var(--action);color:var(--action-on);
  font-family:'Figtree',sans-serif;font-weight:500;font-size:14px;padding:11px 18px;min-height:44px;cursor:pointer;align-self:flex-start}
.solvedby{display:inline-flex;align-items:center;gap:7px;color:var(--evidence);
  font-family:'DM Mono',monospace;font-size:13px}
.solvedby .lamp-e{width:8px;height:8px;border-radius:50%;background:var(--evidence)}
`

const EXHIBITION: CSSProperties = {
  ['--bg' as string]: '#E4E6E8',
  ['--recess' as string]: '#D3D7DB',
  ['--text' as string]: '#1B2026',
  ['--text2' as string]: '#565E66',
  ['--line' as string]: '#C6CBD1',
  ['--glass' as string]: 'rgba(255,255,255,.55)',
  ['--glass-border' as string]: 'rgba(255,255,255,.80)',
  ['--action' as string]: '#9E4B2C',
  ['--action-on' as string]: '#F7F8F9',
  ['--evidence' as string]: '#0F6E63',
  ['--evidence-fill' as string]: '#BFE3DC',
  ['--evidence-on' as string]: '#1B2026',
  ['--amber' as string]: '#D9A441',
  ['--amber-on' as string]: '#1B2026',
  ['--cat-instruction' as string]: '#9C3E12',
  ['--cat-configuration' as string]: '#0F6B31',
  ['--cat-data' as string]: '#1D4ED8',
  ['--cat-artefact' as string]: '#8F4309',
  ['--cat-evidence' as string]: '#0E635C',
  ['--cat-narrative' as string]: '#565B63',
  ['--cat-agents' as string]: '#6D28D9',
  ['--cat-breakage' as string]: '#B91C1C',
  ['--cat-media' as string]: '#BE185D',
}

const DUSK: CSSProperties = {
  ['--bg' as string]: '#1F1B2B',
  ['--recess' as string]: '#372F4A',
  ['--text' as string]: '#EEEAF4',
  ['--text2' as string]: '#B3ABC6',
  ['--line' as string]: '#4B4362',
  ['--glass' as string]: 'rgba(72,63,104,.42)',
  ['--glass-border' as string]: 'rgba(238,234,244,.14)',
  ['--action' as string]: '#D98C6B',
  ['--action-on' as string]: '#241B1A',
  ['--evidence' as string]: '#86BDD3',
  ['--evidence-fill' as string]: 'rgba(134,189,211,.16)',
  ['--evidence-on' as string]: '#86BDD3',
  ['--amber' as string]: '#D9A441',
  ['--amber-on' as string]: '#241B1A',
  ['--cat-instruction' as string]: '#F0865A',
  ['--cat-configuration' as string]: '#5CCB7C',
  ['--cat-data' as string]: '#6AA1FF',
  ['--cat-artefact' as string]: '#F5B83D',
  ['--cat-evidence' as string]: '#86BDD3',
  ['--cat-narrative' as string]: '#A8A6A3',
  ['--cat-agents' as string]: '#A78BFA',
  ['--cat-breakage' as string]: '#F26D6D',
  ['--cat-media' as string]: '#F472B6',
}

/* ---------------- 1. The plaque ---------------- */
type PlaqueState = 'healthy' | 'stale' | 'never'
type PlaqueSize = 'card' | 'header' | 'row'

function ReproTag({ state, count }: { state: PlaqueState; count: number }) {
  if (state === 'never') {
    return <span className="repro repro--none">not yet reproduced</span>
  }
  return (
    <span className="repro">
      <span className="n">{count}</span> reproduced
    </span>
  )
}

function Freshness({ state, ago, model }: { state: PlaqueState; ago: string; model: string }) {
  if (state === 'never') return null
  return (
    <span className={`fresh${state === 'stale' ? ' fresh--stale' : ''}`}>
      <span className="lamp" aria-hidden="true" />
      <span>
        confirmed {ago}, on {model}
      </span>
    </span>
  )
}

function Plaque({
  size,
  state,
  count = 41,
  ago,
  model = 'sonnet-4.5',
}: {
  size: PlaqueSize
  state: PlaqueState
  count?: number
  ago: string
  model?: string
}) {
  return (
    <div className={`plaque plaque--${size}`}>
      <ReproTag state={state} count={count} />
      <Freshness state={state} ago={ago} model={model} />
    </div>
  )
}

/* ---------------- 2. Rebuild credit line ---------------- */
function summarize(changes: string[]) {
  const KEEP = 5
  if (changes.length <= 6) return { shown: changes, more: 0 }
  return { shown: changes.slice(0, KEEP), more: changes.length - KEEP }
}

function RebuildCredit({
  buildName,
  handle,
  changes,
  deleted = false,
}: {
  buildName: string
  handle: string
  changes: string[]
  deleted?: boolean
}) {
  const { shown, more } = summarize(changes)
  return (
    <div className="credit">
      <div className="credit-lead">
        Rebuilt from{' '}
        {deleted ? (
          <span>
            {buildName} <span className="gone">(no longer available)</span>
          </span>
        ) : (
          <a href="#build">{buildName}</a>
        )}{' '}
        by <a href="#handle">@{handle}</a>
      </div>
      <div className="delta">
        <span className="d">Δ</span> {shown.join(' · ')}
        {more > 0 ? ` · and ${more} more` : ''}
      </div>
    </div>
  )
}

/* ---------------- 3. Category chips ---------------- */
type Cat =
  | 'instruction'
  | 'configuration'
  | 'data'
  | 'artefact'
  | 'evidence'
  | 'narrative'
  | 'agents'
  | 'breakage'
  | 'media'

const ALL_CATS: Cat[] = [
  'instruction',
  'configuration',
  'data',
  'artefact',
  'evidence',
  'narrative',
  'agents',
  'breakage',
  'media',
]

function Chip({
  cat,
  count,
  selected,
}: {
  cat: Cat
  count?: number
  selected?: boolean
}) {
  return (
    <span
      className={`chip${selected ? ' chip--sel' : ''}`}
      style={{ ['--cat' as string]: `var(--cat-${cat})` }}
    >
      <span>{cat}</span>
      {count != null && <span className="chip-count">{count}</span>}
    </span>
  )
}

function OverflowChip({ n }: { n: number }) {
  return <span className="chip chip--overflow">{`+${n}`}</span>
}

/* ---------------- 4. The gap marker ---------------- */
function GapCard({ funded, solved }: { funded?: boolean; solved?: boolean }) {
  return (
    <div className={`gapcard${solved ? ' gapcard--solved' : ''}`}>
      <div className="card-title">Ayo&apos;s intake agent</div>
      {solved ? (
        <span className="solvedby">
          <span className="lamp-e" aria-hidden="true" />
          solved by @priya
        </span>
      ) : (
        <span className="gap-mono">1 part unsolved{funded ? ' · £150' : ''}</span>
      )}
    </div>
  )
}

function GapRow({ solved }: { solved?: boolean }) {
  return (
    <div className={`gaprow${solved ? ' gaprow--solved' : ''}`}>
      <Chip cat="configuration" />
      {solved ? (
        <span className="solvedby">
          <span className="lamp-e" aria-hidden="true" />
          solved by @priya
        </span>
      ) : (
        <span className="gaprow-text">missing: retry &amp; backoff policy for tool calls</span>
      )}
    </div>
  )
}

function GapPanel({ state }: { state: 'unsolved' | 'funded' | 'solved' }) {
  const solved = state === 'solved'
  return (
    <div className={`gappanel${solved ? ' gappanel--solved' : ''}`}>
      <div className="gap-problem">
        The retrieval step has no retry or backoff policy. A solver needs to make tool calls resilient
        to rate limits without changing the agent&apos;s output contract.
      </div>
      <div className="gap-meta">
        {state === 'funded' ? (
          <span className="reward">£150 reward</span>
        ) : state === 'unsolved' ? (
          <span>
            <span className="k">reward</span>
            <span className="v">none set</span>
          </span>
        ) : (
          <span className="reward">£150 paid</span>
        )}
        <span>
          <span className="k">deadline</span>
          <span className="v">{state === 'unsolved' ? 'open' : '14 Oct 2026'}</span>
        </span>
        <span>
          <span className="k">solutions</span>
          <span className="v">{solved ? '5' : '3'}</span>
        </span>
      </div>
      {solved ? (
        <span className="solvedby">
          <span className="lamp-e" aria-hidden="true" />
          solved by @priya
        </span>
      ) : (
        <button type="button" className="action-btn">
          Offer a solution
        </button>
      )}
    </div>
  )
}

/* ---------------- Showcase (rendered once per theme) ---------------- */
const THREE_CHANGES = ['model → llama-3-70b', '+1 retrieval step', '−2 prompts']
const NINE_CHANGES = [
  'model → llama-3-70b',
  '+1 retrieval step',
  '−2 prompts',
  'cost £42/mo → £0',
  '+ vector store',
  '− legacy reranker',
  '+2 evals',
  'temperature 0.7 → 0.2',
  '+ system guardrails',
]

function Showcase() {
  return (
    <>
      {/* 1. Plaque */}
      <section className="sect">
        <p className="sect-label">01 · plaque — reproduction + freshness</p>

        <p className="sub">on a card — healthy / stale / never</p>
        <div className="stack">
          <div className="card">
            <div className="card-title">Support triage bot</div>
            <Plaque size="card" state="healthy" ago="3 days ago" />
          </div>
          <div className="card">
            <div className="card-title">Invoice extractor</div>
            <Plaque size="card" state="stale" ago="8 months ago" />
          </div>
          <div className="card">
            <div className="card-title">Meeting summariser</div>
            <Plaque size="card" state="never" count={0} ago="" />
          </div>
        </div>

        <p className="sub">on a build page header</p>
        <div className="pageheader">
          <div className="ph-title">Ayo&apos;s intake agent</div>
          <Plaque size="header" state="healthy" ago="3 days ago" />
        </div>

        <p className="sub">inline in a dense list row</p>
        <div className="stack">
          <div className="listrow">
            <span className="listrow-name">intake-agent/config.yaml</span>
            <Plaque size="row" state="healthy" ago="3 days ago" />
          </div>
          <div className="listrow">
            <span className="listrow-name">legacy/classifier.json</span>
            <Plaque size="row" state="stale" ago="8 months ago" />
          </div>
          <div className="listrow">
            <span className="listrow-name">draft/router.ts</span>
            <Plaque size="row" state="never" count={0} ago="" />
          </div>
        </div>
      </section>

      {/* 2. Rebuild credit */}
      <section className="sect">
        <p className="sect-label">02 · rebuild credit line</p>

        <p className="sub">three changes</p>
        <RebuildCredit buildName="Ayo's intake agent" handle="ayo" changes={THREE_CHANGES} />

        <p className="sub">nine changes — truncates</p>
        <div style={{ marginTop: 4 }}>
          <RebuildCredit buildName="Ayo's intake agent" handle="ayo" changes={NINE_CHANGES} />
        </div>

        <p className="sub">original deleted</p>
        <div style={{ marginTop: 4 }}>
          <RebuildCredit
            buildName="Ayo's intake agent"
            handle="ayo"
            changes={THREE_CHANGES}
            deleted
          />
        </div>
      </section>

      {/* 3. Category chips */}
      <section className="sect">
        <p className="sect-label">03 · category chips — nine hues, meaning only</p>

        <p className="sub">the nine categories</p>
        <div className="wrap">
          {ALL_CATS.map((c) => (
            <Chip key={c} cat={c} />
          ))}
        </div>

        <p className="sub">single chip</p>
        <div className="wrap">
          <Chip cat="agents" />
        </div>

        <p className="sub">a row of five with overflow</p>
        <div className="wrap">
          <Chip cat="instruction" />
          <Chip cat="configuration" />
          <Chip cat="data" />
          <Chip cat="evidence" />
          <Chip cat="narrative" />
          <OverflowChip n={3} />
        </div>

        <p className="sub">selectable — unselected / selected</p>
        <div className="wrap">
          <Chip cat="data" />
          <Chip cat="data" selected />
        </div>

        <p className="sub">with a count</p>
        <div className="wrap">
          <Chip cat="evidence" count={24} />
          <Chip cat="breakage" count={2} />
        </div>
      </section>

      {/* 4. Gap marker */}
      <section className="sect">
        <p className="sect-label">04 · gap marker — deliberately unsolved</p>

        <p className="sub">on a card — unsolved / funded / solved</p>
        <div className="stack">
          <GapCard />
          <GapCard funded />
          <GapCard solved />
        </div>

        <p className="sub">inline in a part list — unsolved / solved</p>
        <div className="stack">
          <GapRow />
          <GapRow solved />
        </div>

        <p className="sub">as a panel — unsolved</p>
        <div style={{ marginTop: 4 }}>
          <GapPanel state="unsolved" />
        </div>
        <p className="sub">as a panel — unsolved &amp; funded</p>
        <div style={{ marginTop: 4 }}>
          <GapPanel state="funded" />
        </div>
        <p className="sub">as a panel — solved</p>
        <div style={{ marginTop: 4 }}>
          <GapPanel state="solved" />
        </div>
      </section>
    </>
  )
}

export default function Page() {
  return (
    <main className="stage">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="stage-head">
        <h1 className="stage-title">buildgallery.ai — four signals</h1>
        <p className="stage-sub">
          The plaque, the rebuild credit line, the category chips and the gap marker — rendered in
          both themes, every state. Reproduction count is the headline metric; the amber is only ever
          light, never lettering.
        </p>
      </div>
      <div className="grid">
        <div className="panel" style={EXHIBITION}>
          <p className="panel-tag">Exhibition · light</p>
          <Showcase />
        </div>
        <div className="panel" style={DUSK}>
          <p className="panel-tag">Dusk · dark</p>
          <Showcase />
        </div>
      </div>
    </main>
  )
}
