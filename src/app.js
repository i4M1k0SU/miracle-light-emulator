// ---- Signal definitions (derived from miracle-light-controller/src/mlc.ts) ----
// miracle-light-controller is a reference only; this file has no dependency on it.

const SIGNAL_HZ = [18500, 18750, 19000, 19250, 19500];

const COLORS = {
  red:    '#F44336',
  orange: '#FF9800',
  pink:   '#F48FB1',
  yellow: '#FFEB3B',
  green:  '#4CAF50',
  cyan:   '#00BCD4',
  blue:   '#2196F3',
  purple: '#9C27B0',
  white:  '#FAFAFA',
  black:  '#424242',
};

// All commands with defined patterns, derived from miracle-light-controller/src/mlc.ts.
// Named entries use the labels from insertControl calls; others use auto-generated labels.
const ALL_PATTERNS = [
  // ---- named (from insertControl) ----
  { command: '3212341', name: 'off',             pattern: [10,  'black'] },
  { command: '3234321', name: 'red',             pattern: [10,  'red'] },
  { command: '3214321', name: 'orange',          pattern: [10,  'orange'] },
  { command: '3434321', name: 'pink',            pattern: [10,  'pink'] },
  { command: '1212323', name: 'yellow',          pattern: [10,  'yellow'] },
  { command: '1412321', name: 'green',           pattern: [10,  'green'] },
  { command: '1432321', name: 'cyan',            pattern: [10,  'cyan'] },
  { command: '3434121', name: 'blue',            pattern: [10,  'blue'] },
  { command: '3432123', name: 'purple',          pattern: [10,  'purple'] },
  { command: '3212141', name: 'white',           pattern: [10,  'white'] },
  { command: '3414143', name: 'red-50',          pattern: [50,  'red',    'black'] },
  { command: '3232123', name: 'orange-50',       pattern: [50,  'orange', 'black'] },
  { command: '3434143', name: 'pink-50',         pattern: [50,  'pink',   'black'] },
  { command: '3414341', name: 'yellow-50',       pattern: [50,  'yellow', 'black'] },
  { command: '3214341', name: 'green-50',        pattern: [50,  'green',  'black'] },
  { command: '1234141', name: 'cyan-50',         pattern: [50,  'cyan',   'black'] },
  { command: '1232341', name: 'blue-50',         pattern: [50,  'blue',   'black'] },
  { command: '3432341', name: 'purple-50',       pattern: [50,  'purple', 'black'] },
  { command: '3234343', name: 'white-50',        pattern: [50,  'white',  'black'] },
  { command: '3432343', name: 'red-60',          pattern: [60,  'red',    'black'] },
  { command: '1232343', name: 'orange-60',       pattern: [60,  'orange', 'black'] },
  { command: '3414343', name: 'pink-60',         pattern: [60,  'pink',   'black'] },
  { command: '3412323', name: 'yellow-60',       pattern: [60,  'yellow', 'black'] },
  { command: '1234143', name: 'green-60',        pattern: [60,  'green',  'black'] },
  { command: '3412343', name: 'cyan-60',         pattern: [60,  'cyan',   'black'] },
  { command: '1214143', name: 'blue-60',         pattern: [60,  'blue',   'black'] },
  { command: '1214123', name: 'purple-60',       pattern: [60,  'purple', 'black'] },
  { command: '1232323', name: 'white-60',        pattern: [60,  'white',  'black'] },
  { command: '3234141', name: 'three hearts',    pattern: [55,  'pink',   'yellow', 'cyan'] },
  { command: '3412143', name: 'kawaii',          pattern: [80,  'pink',   'pink',   'pink',   'red'] },
  { command: '1212123', name: 'nakayoku',        pattern: [65,  'yellow', 'yellow', 'yellow', 'green'] },
  { command: '3212143', name: 'omoiyari',        pattern: [80,  'cyan',   'cyan',   'cyan',   'yellow'] },
  { command: '1434123', name: 'dark fast',       pattern: [100, 'purple', 'blue'] },
  { command: '1412121', name: 'dark slow',       pattern: [50,  'purple', 'blue'] },
  { command: '1434323', name: '誰でもが持ってる', pattern: [80,  'white',  'white',  'white',  'green'] },
  { command: '1414141', name: 'you believe',     pattern: [50,  'pink',   'yellow', 'cyan'] },
  { command: '3414123', name: 'rainbow',
    pattern: [100, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  { command: '1234123', name: 'miracle gift',
    pattern: [50,  'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  // ---- remaining commands with defined patterns (from commands array in mlc.ts) ----
  // strawberry: true = devices: ['strawberry'] in mlc.ts
  { command: '1212121', pattern: [65,  'red',    'red',    'red',    'green'] },
  { command: '3212121', pattern: [50,  'red',    'green'] },
  { command: '3232121', pattern: [10,  'black'],  strawberry: true },
  { command: '1432121',
    pattern: [100, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'], strawberry: true },
  { command: '3432121', pattern: [65,  'white',  'white',  'white',  'green'] },
  { command: '3214121', pattern: [65,  'cyan',   'cyan',   'cyan',   'yellow'] },
  { command: '1414121', pattern: [65,  'pink',   'pink',   'pink',   'red'] },
  { command: '1234121',
    pattern: [60,  'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '3212321', pattern: [80,  'cyan',   'cyan',   'cyan',   'yellow'], strawberry: true },
  { command: '1232321', pattern: [80,  'pink',   'pink',   'pink',   'red'],    strawberry: true },
  { command: '3232321', pattern: [10,  'purple'], strawberry: true },
  { command: '1414321', pattern: [10,  'yellow'], strawberry: true },
  { command: '1234321', pattern: [10,  'blue'],   strawberry: true },
  { command: '3412141', pattern: [10,  'green'],  strawberry: true },
  { command: '1232141', pattern: [10,  'cyan'],   strawberry: true },
  { command: '3232141', pattern: [10,  'orange'], strawberry: true },
  { command: '3432141', pattern: [65,  'blue',   'blue',   'blue',   'yellow'] },
  { command: '1214141', pattern: [80,  'blue',   'blue',   'blue',   'yellow'] },
  { command: '3434141', pattern: [65,  'pink',   'pink',   'pink',   'yellow'] },
  { command: '1212341', pattern: [75,  'pink',   'pink',   'pink',   'yellow'] },
  { command: '1412341', pattern: [50,  'pink',   'pink',   'cyan'] },
  { command: '3412341', pattern: [60,  'pink',   'pink',   'cyan'] },
  { command: '1432341', pattern: [10,  'red'],    strawberry: true },
  { command: '3432341', pattern: [50,  'purple', 'black'] },
  { command: '1414341', pattern: [65,  'yellow', 'yellow', 'yellow', 'white'] },
  { command: '3414341', pattern: [50,  'yellow', 'black'] },
  { command: '3234341', pattern: [10,  'pink'],   strawberry: true },
  { command: '1434341', pattern: [10,  'black'] },
  { command: '3434341', pattern: [65,  'white',  'white',  'white',  'red'] },
  { command: '3212123', pattern: [95,  'red',    'green'] },
  { command: '1412123', pattern: [10,  'white'],  strawberry: true },
  { command: '3412123', pattern: [60,  'yellow', 'black'],  strawberry: true },
  { command: '3234123', pattern: [60,  'orange', 'black'],  strawberry: true },
  { command: '3434123',
    pattern: [60,  'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  { command: '1412323', pattern: [60,  'red',    'black'],  strawberry: true },
  { command: '1432323', pattern: [60,  'green',  'black'],  strawberry: true },
  { command: '3432323', pattern: [80,  'red',    'red',    'red',    'green'] },
  { command: '1214323',
    pattern: [100, 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange', 'pink'] },
  { command: '3214323', pattern: [60,  'red',    'green'] },
  { command: '3414323', pattern: [60,  'purple', 'blue'] },
  { command: '3234323', pattern: [80,  'yellow', 'yellow', 'yellow', 'white'] },
  { command: '3434323',
    pattern: [100, 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '1212143', pattern: [60,  'cyan',   'black'],  strawberry: true },
  { command: '1412143',
    pattern: [50,  'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '1432143',
    pattern: [60,  'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red'] },
  { command: '3432143',
    pattern: [50,  'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red'] },
  { command: '3414143', pattern: [50,  'red',    'black'] },
  { command: '3234143', pattern: [60,  'pink',   'yellow', 'cyan'], strawberry: true },
  { command: '3434143', pattern: [50,  'pink',   'black'] },
  { command: '3212343', pattern: [65,  'yellow', 'yellow', 'yellow', 'green'], strawberry: true },
  { command: '3432343', pattern: [60,  'red',    'black'] },
  { command: '1214343', pattern: [10,  'black'] },
  { command: '3214343', pattern: [60,  'pink',   'black'],  strawberry: true },
  { command: '1414343', pattern: [60,  'white',  'black'],  strawberry: true },
];

// Auto-generate name from pattern colors for entries without an explicit name
function autoName(pattern) {
  const colors = pattern.slice(1);
  const runs = [];
  let prev = null, count = 0;
  for (const c of colors) {
    if (c === prev) { count++; }
    else { if (prev) runs.push(count > 1 ? `${prev}×${count}` : prev); prev = c; count = 1; }
  }
  if (prev) runs.push(count > 1 ? `${prev}×${count}` : prev);
  return runs.join('/');
}

// Deduplicate: named entries win; later duplicates are dropped.
// Append 🍓 to names of entries that have devices: ['strawberry'] in mlc.ts.
const _seen = new Set();
const NAMED_PATTERNS = ALL_PATTERNS
  .map(e => ({ ...e, name: (e.name ?? autoName(e.pattern)) + (e.strawberry ? ' 🍓' : '') }))
  .filter(e => { if (_seen.has(e.command)) return false; _seen.add(e.command); return true; });

const COMMAND_MAP = new Map(NAMED_PATTERNS.map(p => [p.command, p]));

// ---- Signal timing ----
const SLOT_INTERVAL              = 0.10;
const TOTAL_SLOTS                = 7;
const SLOT_FIRST_CENTER_FROM_END = 0.060; // 60ms after start tone falling edge

// ---- State machine ----
const STATE_IDLE       = 0;
const STATE_START_TONE = 1;
const STATE_RECEIVING  = 2;

let state             = STATE_IDLE;
let startToneBeganAt  = 0;
let startToneEndedAt  = 0;
let slotReadings      = [];

// ---- Audio nodes ----
let audioCtx    = null;
let analyser    = null;
let freqData    = null;
let signalBins  = [];
let animFrameId = null;

// ---- Pattern animation ----
let patternTimer      = null;
let patternColorIndex = 0;

// ---- Peak hold for debug display ----
// Each entry: { value: number, at: DOMHighResTimeStamp }
const PEAK_HOLD_MS = 800;
let peakHold = SIGNAL_HZ.map(() => ({ value: -Infinity, at: 0 }));

// ---- Decode log ----
const MAX_LOG = 6;
let decodeLog = []; // strings

// ---- Threshold (dB) — adjustable via slider ----
let signalThresholdDb = -90;

// ---- DOM refs ----
const body         = document.body;
const patternLabel = document.getElementById('pattern-label');
const debugEl      = document.getElementById('debug');
const thresholdEl  = document.getElementById('threshold');
const thresholdVal = document.getElementById('threshold-val');
const logEl        = document.getElementById('decode-log');
const toolbar      = document.getElementById('toolbar');
const debugPanel   = document.getElementById('debug-panel');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const debugBtn     = document.getElementById('debug-btn');

// ---- Helpers ----

function freqToBin(hz) {
  const nyquist  = audioCtx.sampleRate / 2;
  const binWidth = nyquist / analyser.frequencyBinCount;
  return Math.round(hz / binWidth);
}

function peakNear(binIndex) {
  let max = -Infinity;
  for (let d = -2; d <= 2; d++) {
    const i = binIndex + d;
    if (i >= 0 && i < freqData.length && freqData[i] > max) max = freqData[i];
  }
  return max;
}

function strongestSignalIndex() {
  let best = -1, bestVal = signalThresholdDb;
  for (let i = 0; i < signalBins.length; i++) {
    const v = peakNear(signalBins[i]);
    if (v > bestVal) { bestVal = v; best = i; }
  }
  return best;
}

// ---- Pattern display ----

function stopPattern() {
  if (patternTimer !== null) { clearInterval(patternTimer); patternTimer = null; }
}

function applyColor(name) {
  body.style.backgroundColor = COLORS[name] ?? '#111';
}

function showPattern(entry) {
  stopPattern();
  patternLabel.textContent   = entry.name;
  patternLabel.style.display = 'block';

  const colorNames = entry.pattern.slice(1);
  if (colorNames.length === 0) { applyColor('black'); return; }

  const bpm        = entry.pattern[0];
  // Each color step = 1 beat at the given BPM.
  // red-50 (50 BPM) → (60/50) × 1000 = 1200 ms per step → 50 on/off cycles/min.
  const intervalMs = (60 / bpm) * 1000;
  patternColorIndex = 0;
  applyColor(colorNames[0]);

  patternTimer = setInterval(() => {
    patternColorIndex = (patternColorIndex + 1) % colorNames.length;
    applyColor(colorNames[patternColorIndex]);
  }, intervalMs);
}

// ---- Debug overlay ----

function updateDebug(levels) {
  if (!debugEl) return;

  const now = performance.now();

  // Update peak hold
  levels.forEach((v, i) => {
    if (v > peakHold[i].value) {
      peakHold[i].value = v;
      peakHold[i].at    = now;
    } else if (now - peakHold[i].at > PEAK_HOLD_MS) {
      peakHold[i].value = v; // decay
    }
  });

  // Build bar display
  const BAR_MAX = -30, BAR_MIN = -90, BAR_LEN = 20;
  const stateNames = ['IDLE', 'START', 'RECV'];
  const rows = SIGNAL_HZ.map((hz, i) => {
    const cur  = levels[i];
    const peak = peakHold[i].value;
    const fill = Math.round(Math.max(0, (cur - BAR_MIN) / (BAR_MAX - BAR_MIN)) * BAR_LEN);
    const bar  = '█'.repeat(fill) + '░'.repeat(BAR_LEN - fill);
    const aboveThreshold = peak > signalThresholdDb ? '●' : '○';
    return `${hz} ${aboveThreshold} [${bar}] ${cur.toFixed(1).padStart(6)} / peak ${peak.toFixed(1).padStart(6)}`;
  });
  debugEl.textContent = rows.join('\n') + `\n[${stateNames[state]}]`;
}

function addDecodeLog(msg) {
  decodeLog.unshift(msg);
  if (decodeLog.length > MAX_LOG) decodeLog.length = MAX_LOG;
  if (logEl) logEl.textContent = decodeLog.join('\n');
}

// ---- Main decode loop ----

function decode() {
  analyser.getFloatFrequencyData(freqData);
  const now    = audioCtx.currentTime;
  const levels = signalBins.map(b => peakNear(b));

  updateDebug(levels);

  const startLevel  = levels[0];
  const isStartTone = startLevel > signalThresholdDb;

  switch (state) {
    case STATE_IDLE:
      if (isStartTone) {
        state            = STATE_START_TONE;
        startToneBeganAt = now;
        slotReadings     = Array.from({ length: TOTAL_SLOTS }, () => []);
      }
      break;

    case STATE_START_TONE:
      // Do NOT wait for the falling edge: Tone.js Synth has a release envelope that
      // causes 18500 Hz to linger well past the intended 190 ms, which would shift all
      // slot windows forward. Instead, use a fixed timer from onset detection.
      if (!isStartTone && now - startToneBeganAt < 0.080) {
        // Signal vanished within 80 ms → was noise, not a real start tone
        state = STATE_IDLE;
      } else if (now >= startToneBeganAt + 0.190) {
        // 190 ms elapsed since onset → start tone should be done
        startToneEndedAt = startToneBeganAt + 0.190;
        state            = STATE_RECEIVING;
      }
      break;

    case STATE_RECEIVING: {
      const elapsed    = now - startToneEndedAt;
      const slotIdx    = Math.round((elapsed - SLOT_FIRST_CENTER_FROM_END) / SLOT_INTERVAL);
      const slotCenter = SLOT_FIRST_CENTER_FROM_END + slotIdx * SLOT_INTERVAL;
      const slotDelta  = Math.abs(elapsed - slotCenter);

      if (slotIdx >= 0 && slotIdx < TOTAL_SLOTS && slotDelta <= 0.040) {
        const idx = strongestSignalIndex();
        if (idx >= 1) slotReadings[slotIdx].push(idx);
      }

      const lastCenter = SLOT_FIRST_CENTER_FROM_END + (TOTAL_SLOTS - 1) * SLOT_INTERVAL;
      if (elapsed > lastCenter + 0.06) {
        tryDecodeCommand();
        state = STATE_IDLE;
      }

      if (elapsed > 1.2) {
        state = STATE_IDLE;
      }
      break;
    }
  }

  animFrameId = requestAnimationFrame(decode);
}

function tryDecodeCommand() {
  const digits = slotReadings.map(readings => {
    if (readings.length === 0) return null;
    const counts = {};
    for (const r of readings) counts[r] = (counts[r] ?? 0) + 1;
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  });

  // Per-slot detail: show actual readings (e.g. "1:111" = slot1 read '1' three times)
  const slotDetail = slotReadings.map((r, i) => `${i}:${r.join('')||'-'}`).join(' ');
  const command    = digits.every(d => d !== null) ? digits.join('') : null;
  const entry      = command ? COMMAND_MAP.get(command) : null;
  const label      = entry ? `✓ ${entry.name}` : (command ? `? ${command}` : `✗ ${JSON.stringify(digits)}`);
  addDecodeLog(`${label}\n  ${slotDetail}`);

  if (entry) showPattern(entry);
}

// ---- Startup ----

async function startEmulator() {
  document.getElementById('start-btn').remove();

  // Show toolbar
  toolbar.style.display = 'flex';

  // Fullscreen button: show only if supported
  if (document.documentElement.requestFullscreen) {
    fullscreenBtn.style.display = 'inline-block';
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Debug button toggles debug panel
  thresholdEl.value = String(signalThresholdDb);
  thresholdVal.textContent = `${signalThresholdDb} dB`;
  thresholdEl.addEventListener('input', () => {
    signalThresholdDb = Number(thresholdEl.value);
    thresholdVal.textContent = `${signalThresholdDb} dB`;
  });
  debugBtn.addEventListener('click', () => {
    const visible = debugPanel.style.display === 'block';
    debugPanel.style.display = visible ? 'none' : 'block';
  });

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl:  false,
        channelCount:     1,
      },
    });
  } catch {
    body.style.background = '#300';
    body.innerHTML = '<p style="color:#fff;padding:2em">マイクへのアクセスが拒否されました</p>';
    return;
  }

  audioCtx = new AudioContext();
  analyser = audioCtx.createAnalyser();
  // fftSize=2048 → analysis window ≈ 43ms at 48kHz, 47ms at 44.1kHz.
  // Must be shorter than each 90ms slot to avoid adjacent-slot interference.
  analyser.fftSize               = 2048;
  analyser.smoothingTimeConstant = 0.1;

  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);

  freqData   = new Float32Array(analyser.frequencyBinCount);
  signalBins = SIGNAL_HZ.map(freqToBin);

  animFrameId = requestAnimationFrame(decode);
}
