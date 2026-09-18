const WORKOUTS = {
  A: {
    day: 'Segunda', name: 'A • Peito + Costas + Bíceps', subtitle: 'Base pesada e controlada',
    exercises: [
      {id:'supino-maquina',name:'Supino máquina ou reto com halteres',sets:3,reps:'6–10',rest:150,rir:'1–2',group:'Peito'},
      {id:'puxada-frente',name:'Puxada alta pela frente',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Costas'},
      {id:'supino-inclinado',name:'Supino inclinado com halteres',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Peito'},
      {id:'remada-baixa',name:'Remada baixa sentada',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Costas'},
      {id:'crucifixo',name:'Crucifixo na máquina (peck deck)',sets:2,reps:'12–15',rest:75,rir:'1–2',group:'Peito'},
      {id:'rosca-direta',name:'Rosca direta barra W',sets:3,reps:'8–12',rest:90,rir:'1–2',group:'Bíceps'},
      {id:'rosca-martelo',name:'Rosca martelo com halteres',sets:2,reps:'10–14',rest:75,rir:'1–2',group:'Bíceps'}
    ]
  },
  B: {
    day: 'Terça', name: 'B • Pernas + Ombros + Tríceps', subtitle: 'Quadríceps dominante',
    exercises: [
      {id:'agachamento-hack',name:'Hack squat ou agachamento no Smith',sets:3,reps:'6–10',rest:180,rir:'1–2',group:'Pernas'},
      {id:'legpress',name:'Leg press 45°',sets:3,reps:'10–15',rest:150,rir:'1–2',group:'Pernas'},
      {id:'extensora',name:'Cadeira extensora',sets:2,reps:'12–15',rest:75,rir:'1–2',group:'Quadríceps'},
      {id:'flexora-sentada',name:'Mesa/cadeira flexora',sets:3,reps:'10–15',rest:90,rir:'1–2',group:'Posterior'},
      {id:'panturrilha-leg',name:'Panturrilha no leg press',sets:3,reps:'10–15',rest:75,rir:'1–2',group:'Panturrilha'},
      {id:'desenv-maquina',name:'Desenvolvimento de ombros na máquina',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Ombros'},
      {id:'elevacao-lateral',name:'Elevação lateral',sets:3,reps:'12–20',rest:75,rir:'1–2',group:'Ombros'},
      {id:'triceps-corda',name:'Tríceps na corda',sets:3,reps:'10–15',rest:75,rir:'1–2',group:'Tríceps'}
    ]
  },
  A2: {
    day: 'Quarta', name: 'A2 • Costas + Peito + Bíceps', subtitle: 'Ângulos diferentes, menos carga',
    exercises: [
      {id:'remada-articulada',name:'Remada articulada com apoio no peito',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Costas'},
      {id:'chest-press',name:'Chest press convergente',sets:3,reps:'8–12',rest:120,rir:'1–2',group:'Peito'},
      {id:'pulldown-neutro',name:'Pulldown pegada neutra',sets:3,reps:'10–14',rest:105,rir:'1–2',group:'Costas'},
      {id:'crossover',name:'Crossover no cabo',sets:2,reps:'12–15',rest:75,rir:'1–2',group:'Peito'},
      {id:'pullover-cabo',name:'Pullover no cabo',sets:2,reps:'12–15',rest:75,rir:'1–2',group:'Costas'},
      {id:'rosca-scott',name:'Rosca Scott máquina',sets:3,reps:'8–12',rest:90,rir:'1–2',group:'Bíceps'},
      {id:'encolhimento',name:'Encolhimento com halteres',sets:2,reps:'10–15',rest:75,rir:'1–2',group:'Trapézio'}
    ]
  },
  B2: {
    day: 'Quinta', name: 'B2 • Pernas + Ombros + Tríceps', subtitle: 'Posterior e glúteos dominantes',
    exercises: [
      {id:'romeno',name:'Stiff / levantamento romeno com halteres',sets:3,reps:'8–12',rest:150,rir:'1–2',group:'Posterior'},
      {id:'flexora-deitada',name:'Mesa flexora',sets:3,reps:'10–15',rest:90,rir:'1–2',group:'Posterior'},
      {id:'agachamento-bulgaro',name:'Afundo búlgaro ou passada no Smith',sets:3,reps:'8–12 por perna',rest:120,rir:'1–2',group:'Pernas'},
      {id:'abdutora',name:'Cadeira abdutora',sets:2,reps:'15–20',rest:60,rir:'1–2',group:'Glúteos'},
      {id:'panturrilha-sentado',name:'Panturrilha sentado',sets:3,reps:'12–20',rest:75,rir:'1–2',group:'Panturrilha'},
      {id:'elevacao-lateral-cabo',name:'Elevação lateral no cabo',sets:3,reps:'12–20',rest:75,rir:'1–2',group:'Ombros'},
      {id:'facepull',name:'Face pull',sets:2,reps:'12–20',rest:75,rir:'1–2',group:'Ombros'},
      {id:'triceps-frances',name:'Tríceps francês no cabo',sets:3,reps:'10–15',rest:75,rir:'1–2',group:'Tríceps'}
    ]
  },
  C: {
    day: 'Sexta', name: 'C • Upper leve + Cardio', subtitle: 'Qualidade, pump e recuperação',
    exercises: [
      {id:'supino-inclinado-maq',name:'Supino inclinado na máquina',sets:2,reps:'10–15',rest:90,rir:'2–3',group:'Peito'},
      {id:'remada-cabo-unilateral',name:'Remada unilateral no cabo',sets:2,reps:'10–15',rest:90,rir:'2–3',group:'Costas'},
      {id:'voador-inverso',name:'Voador inverso',sets:2,reps:'15–20',rest:60,rir:'2',group:'Posterior de ombro'},
      {id:'rosca-cabo',name:'Rosca no cabo',sets:2,reps:'12–15',rest:60,rir:'1–2',group:'Bíceps'},
      {id:'triceps-barra',name:'Tríceps barra no pulley',sets:2,reps:'12–15',rest:60,rir:'1–2',group:'Tríceps'},
      {id:'abdominal-cabo',name:'Abdominal no cabo',sets:3,reps:'10–15',rest:60,rir:'1–2',group:'Core'},
      {id:'cardio',name:'Esteira / bike em ritmo moderado',sets:1,reps:'20–30 min',rest:0,rir:'confortável',group:'Cardio'}
    ]
  }
};

const LS = {sessions:'foxTreino.sessions', draft:'foxTreino.draft', theme:'foxTreino.theme'};
let currentWorkout = getDefaultWorkout();
let timerSeconds = 90, timerLeft = 90, timerId = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const el = (tag, cls, html='') => { const x=document.createElement(tag); if(cls)x.className=cls; x.innerHTML=html; return x; };

function getDefaultWorkout(){
  const d = new Date().getDay();
  return ({1:'A',2:'B',3:'A2',4:'B2',5:'C'})[d] || 'A';
}
function sessionKey(){ return `${new Date().toISOString().slice(0,10)}:${currentWorkout}`; }
function readDraft(){ return JSON.parse(localStorage.getItem(LS.draft) || '{}'); }
function writeDraft(all){ localStorage.setItem(LS.draft, JSON.stringify(all)); }
function getSessionDraft(){ return readDraft()[sessionKey()] || {exercises:{},bodyWeight:'',note:''}; }
function saveSessionDraft(data){ const all=readDraft(); all[sessionKey()]=data; writeDraft(all); }
function readSessions(){ return JSON.parse(localStorage.getItem(LS.sessions)||'[]'); }
function writeSessions(v){ localStorage.setItem(LS.sessions,JSON.stringify(v)); }
function toast(msg){ const t=$('#toast'); t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800); }

function init(){
  if(localStorage.getItem(LS.theme)==='light') document.documentElement.classList.add('light');
  Object.entries(WORKOUTS).forEach(([k,w])=>{ const o=document.createElement('option');o.value=k;o.textContent=`${w.day} — ${w.name}`;$('#workoutSelect').append(o); });
  $('#workoutSelect').value=currentWorkout;
  renderWorkout(); renderPlan(); renderHistory(); bind(); registerSW();
}

function renderWorkout(){
  const w=WORKOUTS[currentWorkout], draft=getSessionDraft();
  $('#todayLabel').textContent=`${w.day} • ${new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})}`;
  $('#workoutTitle').textContent=w.name; $('#workoutSubtitle').textContent=w.subtitle;
  $('#exerciseCount').textContent=w.exercises.length;
  $('#setCount').textContent=w.exercises.reduce((a,e)=>a+e.sets,0);
  $('#bodyWeight').value=draft.bodyWeight||''; $('#sessionNote').value=draft.note||'';
  const list=$('#exerciseList'); list.innerHTML='';
  w.exercises.forEach(ex=>list.append(renderExercise(ex,draft.exercises[ex.id]||{})));
}

function renderExercise(ex,data){
  const card=el('article','exercise-card'+(data.done?' done':'')); card.dataset.id=ex.id;
  const head=el('div','exercise-head');
  head.innerHTML=`<div><div class="exercise-name">${ex.name}</div><div class="exercise-meta">${ex.sets} séries • ${ex.reps} • descanso ${formatRest(ex.rest)}</div><div class="exercise-tags"><span class="tag">${ex.group}</span><span class="tag">RIR ${ex.rir}</span></div></div>`;
  const check=el('button','check-btn',data.done?'✓':'○'); check.type='button'; check.onclick=()=>{data.done=!data.done; persistExercise(ex.id,data); renderWorkout();}; head.append(check); card.append(head);
  const sets=el('div','sets-wrap');
  for(let i=0;i<ex.sets;i++){
    const s=(data.sets||[])[i]||{};
    const row=el('div','set-row'); row.innerHTML=`<span class="set-label">${i+1}</span><input inputmode="decimal" type="number" step="0.5" min="0" placeholder="kg" value="${s.kg??''}"><input inputmode="numeric" type="number" min="0" placeholder="reps" value="${s.reps??''}"><input class="set-done" type="checkbox" ${s.done?'checked':''} aria-label="Série concluída">`;
    const [kg,reps,done]=[row.children[1],row.children[2],row.children[3]];
    const save=()=>{ data.sets=data.sets||[]; data.sets[i]={kg:kg.value,reps:reps.value,done:done.checked}; if(data.sets.filter(x=>x?.done).length===ex.sets) data.done=true; persistExercise(ex.id,data); };
    kg.onchange=save; reps.onchange=save; done.onchange=()=>{save(); if(ex.rest) startTimer(ex.rest,false);}; sets.append(row);
  }
  card.append(sets); return card;
}
function formatRest(s){ if(!s)return '—'; return s>=60?`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`:`${s}s`; }
function persistExercise(id,data){ const d=getSessionDraft(); d.exercises[id]=data; d.bodyWeight=$('#bodyWeight').value; d.note=$('#sessionNote').value; saveSessionDraft(d); }
function persistMeta(){ const d=getSessionDraft(); d.bodyWeight=$('#bodyWeight').value; d.note=$('#sessionNote').value; saveSessionDraft(d); }

function renderPlan(){ const list=$('#planList'); list.innerHTML=''; Object.entries(WORKOUTS).forEach(([k,w])=>{const c=el('article','plan-card');c.innerHTML=`<span class="eyebrow">${w.day}</span><h3>${w.name}</h3><p class="muted">${w.subtitle}</p><ul>${w.exercises.map(e=>`<li>${e.name} — ${e.sets}× ${e.reps}</li>`).join('')}</ul>`;list.append(c);}); }

function finishWorkout(){
  persistMeta(); const draft=getSessionDraft(); const w=WORKOUTS[currentWorkout];
  const doneSets=w.exercises.reduce((n,e)=>n+((draft.exercises[e.id]?.sets||[]).filter(s=>s?.done).length),0);
  const totalSets=w.exercises.reduce((n,e)=>n+e.sets,0);
  const sess={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:new Date().toISOString(),workout:currentWorkout,name:w.name,doneSets,totalSets,bodyWeight:draft.bodyWeight||null,note:draft.note||'',exercises:draft.exercises};
  const sessions=readSessions(); sessions.unshift(sess); writeSessions(sessions);
  const all=readDraft(); delete all[sessionKey()]; writeDraft(all); renderWorkout(); renderHistory(); toast('Treino salvo no histórico'); showView('History');
}

function renderHistory(){
  const sessions=readSessions(), list=$('#historyList'); list.innerHTML='';
  const sets=sessions.reduce((a,s)=>a+(s.doneSets||0),0); const workouts=sessions.length; const weights=sessions.filter(s=>s.bodyWeight).map(s=>Number(s.bodyWeight));
  $('#historyStats').innerHTML=`<div class="stat"><strong>${workouts}</strong><span>treinos</span></div><div class="stat"><strong>${sets}</strong><span>séries feitas</span></div><div class="stat"><strong>${weights.length?weights[0].toFixed(1):'—'}</strong><span>kg último peso</span></div>`;
  if(!sessions.length){list.innerHTML='<div class="info-card"><p class="muted">Seu histórico aparecerá aqui depois do primeiro treino finalizado.</p></div>';return;}
  sessions.forEach(s=>{const c=el('article','history-card');const dt=new Date(s.date); const w=WORKOUTS[s.workout];
    const rows=w.exercises.map(e=>{const sets=(s.exercises?.[e.id]?.sets||[]).filter(x=>x?.kg||x?.reps); const best=sets.length?sets.map(x=>`${x.kg||'—'} kg × ${x.reps||'—'}`).join(' • '):'—';return `<tr><td>${e.name}</td><td>${best}</td></tr>`;}).join('');
    c.innerHTML=`<h3>${s.name}</h3><div class="history-meta">${dt.toLocaleDateString('pt-BR')} • ${s.doneSets}/${s.totalSets} séries${s.bodyWeight?` • ${s.bodyWeight} kg`:''}</div>${s.note?`<p>${escapeHtml(s.note)}</p>`:''}<details><summary>Ver cargas</summary><table><tbody>${rows}</tbody></table></details>`;list.append(c);});
}
function escapeHtml(x){return String(x).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function bind(){
  $('#workoutSelect').onchange=e=>{currentWorkout=e.target.value;renderWorkout();};
  $('#bodyWeight').onchange=persistMeta; $('#sessionNote').onchange=persistMeta; $('#finishBtn').onclick=finishWorkout;
  $('#resetSessionBtn').onclick=()=>{if(confirm('Limpar os registros do treino de hoje?')){const all=readDraft();delete all[sessionKey()];writeDraft(all);renderWorkout();}};
  $$('.nav-btn').forEach(b=>b.onclick=()=>showView(b.dataset.view));
  $('#themeBtn').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem(LS.theme,document.documentElement.classList.contains('light')?'light':'dark');};
  $$('.timer-presets button').forEach(b=>b.onclick=()=>{timerSeconds=Number(b.dataset.seconds);timerLeft=timerSeconds; $$('.timer-presets button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderTimer();});
  $('#timerStart').onclick=()=>timerId?pauseTimer():startTimer(timerLeft,false); $('#timerReset').onclick=()=>{pauseTimer();timerLeft=timerSeconds;renderTimer();};
  $('#exportBtn').onclick=exportData; $('#importInput').onchange=importData;
  $('#clearHistoryBtn').onclick=()=>{if(confirm('Apagar todo o histórico?')){localStorage.removeItem(LS.sessions);renderHistory();toast('Histórico apagado');}};
}
function showView(name){ $$('.view').forEach(v=>v.classList.remove('active')); $(`#view${name}`).classList.add('active'); $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===name)); window.scrollTo({top:0,behavior:'smooth'}); }
function renderTimer(){ const m=Math.floor(timerLeft/60),s=timerLeft%60;$('#timerDisplay').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; $('#timerStart').textContent=timerId?'Pausar':'Iniciar'; }
function startTimer(seconds,navigate=true){ pauseTimer(); timerLeft=seconds; if(navigate)showView('Timer'); renderTimer(); timerId=setInterval(()=>{timerLeft--;renderTimer();if(timerLeft<=0){pauseTimer();navigator.vibrate?.([150,80,150]);toast('Descanso concluído');}},1000);renderTimer(); }
function pauseTimer(){ if(timerId)clearInterval(timerId);timerId=null;renderTimer(); }
function exportData(){const data={version:1,exportedAt:new Date().toISOString(),sessions:readSessions(),draft:readDraft()};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`fox-treino-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);}
function importData(e){const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(Array.isArray(d.sessions))writeSessions(d.sessions);if(d.draft)writeDraft(d.draft);renderHistory();renderWorkout();toast('Backup importado');}catch{alert('Arquivo inválido.');}};r.readAsText(f);e.target.value='';}
function registerSW(){if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});}
init();
