// ========== Kwara Life Game Client ==========
const LOCATIONS = [
  { id: 'home', name: 'Your Home', emoji: '🏠', desc: 'Rest & recover' },
  { id: 'mosque', name: 'Central Mosque', emoji: '🕌', desc: 'Worship & peace' },
  { id: 'palace', name: "Emir's Palace", emoji: '🏛️', desc: 'Tradition' },
  { id: 'unilorin', name: 'Unilorin', emoji: '🎓', desc: 'Campus life' },
  { id: 'sobi', name: 'Sobi Hill', emoji: '⛰️', desc: 'Hike & views' },
  { id: 'ojaoba', name: 'Oja Oba', emoji: '🛒', desc: 'Market & trade' },
  { id: 'owu', name: 'Owu Falls', emoji: '💦', desc: 'Nature escape' },
  { id: 'stadium', name: 'Kwara Stadium', emoji: '🏟️', desc: 'Sports' },
  { id: 'pottery', name: 'Dada Pottery', emoji: '🏺', desc: 'Crafts' },
  { id: 'park', name: 'Metro Park', emoji: '🌳', desc: 'Relax' },
  { id: 'hospital', name: 'Hospital', emoji: '🏥', desc: 'Health' },
  { id: 'library', name: 'State Library', emoji: '📚', desc: 'Study' },
  { id: 'lounge', name: 'Lounge', emoji: '🍸', desc: 'Nightlife' },
  { id: 'amala', name: 'Amala Spot', emoji: '🍲', desc: 'Eat well' },
];

const ACTIONS = {
  home: [
    { id: 'sleep', label: 'Sleep (3h)', cost: 0, time: 3, effects: { energy: 40, hunger: -10, bladder: -5 } },
    { id: 'shower', label: 'Shower', cost: 0, time: 0.5, effects: { hygiene: 50, energy: -5 } },
    { id: 'toilet', label: 'Use toilet', cost: 0, time: 0.2, effects: { bladder: 80 } },
    { id: 'eat_home', label: 'Eat leftovers', cost: 200, time: 0.5, effects: { hunger: 35 } },
  ],
  mosque: [
    { id: 'pray', label: 'Pray', cost: 0, time: 0.5, effects: { fun: 15, social: 10, energy: -5 } },
    { id: 'chat_mosque', label: 'Greet people', cost: 0, time: 0.5, effects: { social: 20 } },
  ],
  palace: [
    { id: 'visit_palace', label: 'Visit grounds', cost: 0, time: 1, effects: { fun: 10, knowledge: 10 } },
  ],
  unilorin: [
    { id: 'study', label: 'Study (2h)', cost: 0, time: 2, effects: { knowledge: 15, energy: -20, fun: -10 } },
    { id: 'lecture', label: 'Attend lecture', cost: 0, time: 1.5, effects: { knowledge: 10, energy: -15 } },
    { id: 'campus_chat', label: 'Hang with students', cost: 0, time: 1, effects: { social: 25, fun: 15 } },
  ],
  sobi: [
    { id: 'hike', label: 'Hike to top', cost: 0, time: 2, effects: { fitness: 20, energy: -30, fun: 25, hygiene: -15 } },
    { id: 'view', label: 'Enjoy the view', cost: 0, time: 0.5, effects: { fun: 20, energy: -5 } },
  ],
  ojaoba: [
    { id: 'buy_food', label: 'Buy street food', cost: 800, time: 0.5, effects: { hunger: 45, fun: 5 } },
    { id: 'trade', label: 'Hustle / Trade', cost: 0, time: 2, effects: { naira: 1500, energy: -25, work: 10 } },
    { id: 'window_shop', label: 'Browse market', cost: 0, time: 1, effects: { fun: 15, social: 10 } },
  ],
  owu: [
    { id: 'swim', label: 'Swim at falls', cost: 500, time: 2, effects: { fun: 40, hygiene: 30, energy: -20, fitness: 10 } },
    { id: 'picnic', label: 'Picnic', cost: 1000, time: 1.5, effects: { hunger: 20, fun: 25, social: 15 } },
  ],
  stadium: [
    { id: 'workout', label: 'Work out', cost: 0, time: 1.5, effects: { fitness: 25, energy: -30, hygiene: -20 } },
    { id: 'watch_match', label: 'Watch football', cost: 300, time: 2, effects: { fun: 35, social: 15 } },
  ],
  pottery: [
    { id: 'learn_pottery', label: 'Learn pottery', cost: 500, time: 2, effects: { knowledge: 10, fun: 20, energy: -15 } },
    { id: 'buy_pot', label: 'Buy souvenir', cost: 2000, time: 0.5, effects: { fun: 10 } },
  ],
  park: [
    { id: 'relax', label: 'Relax in park', cost: 0, time: 1, effects: { energy: 15, fun: 20 } },
    { id: 'meet_people', label: 'Meet people', cost: 0, time: 1, effects: { social: 30, fun: 10 } },
  ],
  hospital: [
    { id: 'checkup', label: 'Quick checkup', cost: 1500, time: 1, effects: { energy: 10, hygiene: 10 } },
  ],
  library: [
    { id: 'read', label: 'Read books', cost: 0, time: 2, effects: { knowledge: 20, energy: -10, fun: 5 } },
  ],
  lounge: [
    { id: 'drink', label: 'Have a drink', cost: 1200, time: 1, effects: { fun: 30, social: 20, energy: -10, bladder: -15 } },
    { id: 'dance', label: 'Dance', cost: 0, time: 1, effects: { fun: 35, energy: -20, fitness: 5 } },
  ],
  amala: [
    { id: 'eat_amala', label: 'Eat Amala + Gbegiri', cost: 1500, time: 1, effects: { hunger: 70, fun: 15, bladder: -10 } },
  ],
};

const JOBS = [
  { id: 'trader', name: 'Market Trader', pay: 2500, time: 3, energy: -35, skill: 'work', levelReq: 0 },
  { id: 'okada', name: 'Okada Rider', pay: 1800, time: 2, energy: -30, skill: 'fitness', levelReq: 0 },
  { id: 'food', name: 'Food Seller', pay: 2200, time: 3, energy: -25, skill: 'cooking', levelReq: 1 },
  { id: 'potter', name: 'Pottery Helper', pay: 2000, time: 3, energy: -20, skill: 'knowledge', levelReq: 1 },
  { id: 'teacher', name: 'Teacher', pay: 4000, time: 4, energy: -25, skill: 'knowledge', levelReq: 3 },
  { id: 'lecturer', name: 'Unilorin Lecturer', pay: 6000, time: 4, energy: -20, skill: 'knowledge', levelReq: 5 },
  { id: 'civil', name: 'Civil Servant', pay: 3500, time: 4, energy: -15, skill: 'work', levelReq: 2 },
];

// State
let state = null;
let userId = null;
let username = null;
let socket = null;
let currentLocation = 'home';
let autoSaveTimer = null;

// ---------- Auth ----------
function showRegister() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('auth-title').textContent = 'Create Account';
  document.getElementById('auth-error').classList.add('hidden');
}
function showLogin() {
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('auth-title').textContent = 'Welcome to Kwara Life';
  document.getElementById('auth-error').classList.add('hidden');
}

async function doRegister() {
  const u = document.getElementById('reg-user').value.trim();
  const e = document.getElementById('reg-email').value.trim();
  const p = document.getElementById('reg-pass').value;
  if (!u || !p) return showError('Username and password required');
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: u, email: e, password: p })
    });
    const data = await res.json();
    if (!res.ok) return showError(data.error || 'Registration failed');
    userId = data.userId;
    username = data.username;
    localStorage.setItem('kwara_userId', userId);
    localStorage.setItem('kwara_username', username);
    startGame(data);
  } catch (err) {
    showError('Network error. Is the server running?');
  }
}

async function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  if (!u || !p) return showError('Enter username and password');
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: u, password: p })
    });
    const data = await res.json();
    if (!res.ok) return showError(data.error || 'Login failed');
    userId = data.userId;
    username = data.username;
    localStorage.setItem('kwara_userId', userId);
    localStorage.setItem('kwara_username', username);
    startGame(data);
  } catch (err) {
    showError('Network error. Is the server running?');
  }
}

function showError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ---------- Game start ----------
function startGame(data) {
  document.getElementById('auth-modal').classList.add('hidden');
  state = data.progress || createLocalStarter();
  state.naira = data.naira || state.naira || 5000;
  username = data.username || username;
  document.getElementById('player-name').textContent = username;

  renderMap();
  renderNeeds();
  renderInfo();
  renderJobs();
  updateHeader();
  selectLocation('home');

  // Socket for chat
  socket = io();
  socket.emit('join-chat', { username, userId });
  socket.on('chat-message', addChatMessage);
  socket.on('online-count', (n) => {
    // optional: show somewhere
  });

  // Auto-save every 60s
  autoSaveTimer = setInterval(saveNow, 60000);

  // Needs decay every 30s of real time (simulates time passing slowly)
  setInterval(decayNeeds, 30000);
}

function createLocalStarter() {
  return {
    naira: 5000,
    day: 1,
    time: 8,
    needs: { hunger: 80, energy: 90, fun: 70, social: 60, hygiene: 85, bladder: 70 },
    skills: { cooking: 1, work: 1, charm: 1, fitness: 1, knowledge: 1 },
    career: null,
    home: 'face-me-face-you',
    location: 'home'
  };
}

// ---------- Rendering ----------
function renderMap() {
  const area = document.getElementById('map-area');
  area.innerHTML = LOCATIONS.map(loc => `
    <div class="loc-card ${loc.id === currentLocation ? 'active' : ''}" onclick="selectLocation('${loc.id}')">
      <span class="emoji">${loc.emoji}</span>
      <div class="name">${loc.name}</div>
      <div class="desc">${loc.desc}</div>
    </div>
  `).join('');
}

function selectLocation(id) {
  currentLocation = id;
  if (state) state.location = id;
  renderMap();
  const actions = ACTIONS[id] || [];
  const panel = document.getElementById('action-panel');
  if (actions.length === 0) {
    panel.innerHTML = '<span style="color:var(--muted);font-size:0.85rem">No special actions here yet</span>';
    return;
  }
  panel.innerHTML = actions.map(a => `
    <button class="action-btn" onclick="doAction('${a.id}')">${a.label}${a.cost ? ' · ₦' + a.cost : ''}</button>
  `).join('');
}

function renderNeeds() {
  const bar = document.getElementById('needs-bar');
  const needs = state.needs;
  const labels = { hunger: '🍔', energy: '⚡', fun: '🎉', social: '💬', hygiene: '🚿', bladder: '🚽' };
  bar.innerHTML = Object.keys(needs).map(k => {
    const v = Math.max(0, Math.min(100, needs[k]));
    const cls = v > 60 ? 'good' : v > 30 ? 'mid' : 'low';
    return `
      <div class="need" title="${k}: ${Math.round(v)}">
        <span>${labels[k]}</span>
        <div class="need-bar"><div class="need-fill ${cls}" style="width:${v}%"></div></div>
      </div>
    `;
  }).join('');
}

function updateHeader() {
  document.getElementById('naira-display').textContent = '₦' + (state.naira || 0).toLocaleString();
  const h = Math.floor(state.time);
  const m = Math.round((state.time % 1) * 60);
  document.getElementById('time-display').textContent = `Day ${state.day} · ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}

function renderInfo() {
  document.getElementById('info-username').textContent = username || '—';
  document.getElementById('info-home').textContent = state.home || 'Face-me-I-face-you';
  document.getElementById('info-career').textContent = state.career || 'Unemployed';
  const skills = state.skills || {};
  document.getElementById('info-skills').innerHTML = Object.entries(skills)
    .map(([k, v]) => `${k}: ${v}`).join(' · ') || '—';
}

function renderJobs() {
  const list = document.getElementById('jobs-list');
  list.innerHTML = JOBS.map(j => `
    <div class="info-block">
      <strong>${j.name}</strong>
      <div style="color:var(--muted);font-size:0.85rem;margin:0.3rem 0">
        ₦${j.pay} · ${j.time}h · Needs ${j.skill} ${j.levelReq}+
      </div>
      <button class="action-btn" style="width:100%" onclick="doJob('${j.id}')">Work this job</button>
    </div>
  `).join('');
}

// ---------- Actions ----------
function doAction(actionId) {
  const locActions = ACTIONS[currentLocation] || [];
  const action = locActions.find(a => a.id === actionId);
  if (!action) return;

  if (action.cost && state.naira < action.cost) {
    alert('Not enough naira!');
    return;
  }

  // Apply cost
  if (action.cost) state.naira -= action.cost;

  // Apply effects
  applyEffects(action.effects || {});

  // Advance time
  advanceTime(action.time || 0.5);

  renderNeeds();
  updateHeader();
  renderInfo();
  saveNow();
}

function doJob(jobId) {
  const job = JOBS.find(j => j.id === jobId);
  if (!job) return;
  const skillLevel = (state.skills && state.skills[job.skill]) || 0;
  if (skillLevel < job.levelReq) {
    alert(`You need ${job.skill} level ${job.levelReq} for this job.`);
    return;
  }
  if ((state.needs.energy || 0) < 25) {
    alert('Too tired to work. Rest first.');
    return;
  }

  state.naira += job.pay;
  state.needs.energy = Math.max(0, state.needs.energy + job.energy);
  if (state.skills) {
    state.skills[job.skill] = (state.skills[job.skill] || 1) + 0.3;
  }
  state.career = job.name;
  advanceTime(job.time);
  renderNeeds();
  updateHeader();
  renderInfo();
  saveNow();
  alert(`You worked as ${job.name} and earned ₦${job.pay}!`);
}

function applyEffects(effects) {
  for (const [key, val] of Object.entries(effects)) {
    if (key === 'naira') {
      state.naira = (state.naira || 0) + val;
    } else if (state.needs && key in state.needs) {
      state.needs[key] = Math.max(0, Math.min(100, (state.needs[key] || 50) + val));
    } else if (state.skills && key in state.skills) {
      state.skills[key] = (state.skills[key] || 1) + (val / 10);
    }
  }
}

function advanceTime(hours) {
  state.time += hours;
  while (state.time >= 24) {
    state.time -= 24;
    state.day += 1;
    // small daily decay
    for (const k of Object.keys(state.needs)) {
      state.needs[k] = Math.max(0, state.needs[k] - 8);
    }
  }
}

function decayNeeds() {
  if (!state) return;
  const decay = { hunger: 2, energy: 1.5, fun: 1.5, social: 1, hygiene: 1, bladder: 2 };
  for (const [k, v] of Object.entries(decay)) {
    if (state.needs[k] !== undefined) {
      state.needs[k] = Math.max(0, state.needs[k] - v);
    }
  }
  renderNeeds();
}

// ---------- Chat ----------
function addChatMessage(msg) {
  const box = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg' + (msg.type === 'system' ? ' system' : '');
  if (msg.type === 'system') {
    div.textContent = msg.text;
  } else {
    div.innerHTML = `<span class="who">${escapeHtml(msg.username)}</span>${escapeHtml(msg.text)}`;
  }
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !socket) return;
  socket.emit('chat-message', { text });
  input.value = '';
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ---------- Tabs ----------
function switchTab(tab) {
  document.querySelectorAll('.side-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.side-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById('tab-chat').classList.add('hidden');
  document.getElementById('tab-info').classList.add('hidden');
  document.getElementById('tab-jobs').classList.add('hidden');
  document.getElementById('tab-' + tab).classList.remove('hidden');
}

// ---------- Save ----------
async function saveNow() {
  if (!userId || !state) return;
  state.lastSaved = new Date().toISOString();
  try {
    await fetch(`/api/progress/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
  } catch (e) {
    console.warn('Save failed', e);
  }
}

// ---------- Paystack ----------
// Your live public key (safe for frontend)
const PAYSTACK_PUBLIC_KEY = 'pk_live_f84ba4467efff671733cdacd92bf1143dd0dae81';

function openPaystack() {
  if (!userId) {
    alert('Please log in first');
    return;
  }
  // Example amounts in kobo (₦500, ₦1000, ₦2000, ₦5000)
  const amount = prompt('Enter amount in Naira to top up (e.g. 500, 1000, 2000):', '1000');
  if (!amount || isNaN(amount) || amount < 100) return;

  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: (username || 'player') + '@kwaralife.local', // better: collect real email
    amount: Math.round(amount * 100), // kobo
    currency: 'NGN',
    ref: 'KL_' + userId.substring(0, 8) + '_' + Date.now(),
    metadata: {
      userId: userId,
      custom_fields: [
        { display_name: 'Username', variable_name: 'username', value: username }
      ]
    },
    callback: function(response) {
      // On success the webhook should credit the account.
      // For demo we also credit client-side (remove in production if webhook is reliable)
      alert('Payment successful! Reference: ' + response.reference + '\nVirtual naira will be added shortly.');
      // Optimistic credit (1 NGN = 1 virtual naira)
      state.naira = (state.naira || 0) + Number(amount);
      updateHeader();
      saveNow();
    },
    onClose: function() {
      // user closed
    }
  });
  handler.openIframe();
}

// ---------- Init ----------
window.onload = () => {
  // Try auto-login from localStorage (optional simple session)
  const savedId = localStorage.getItem('kwara_userId');
  const savedName = localStorage.getItem('kwara_username');
  if (savedId && savedName) {
    // We still require password for security, so just prefill
    document.getElementById('login-user').value = savedName;
  }
};
