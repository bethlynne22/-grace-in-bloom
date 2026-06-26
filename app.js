function go(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));document.getElementById(id).classList.add('show');location.hash=id;setTimeout(resizeCanvases,150)}
if(location.hash)go(location.hash.slice(1));

const visitors=['🦌 Tikvah','🐇 Arnav','🐻 Boaz','🦊 Tamar','🐦 Shirah','🐝 Dvorah','🦉 Ezra','🐿️ Netzer','🦨 Perach','🦝 Mayan','🐼 Hadassah','🐌 Menucha','🦔 Gefen','🐿️ Chazak','🐍 Nachash','🦋 Nitzan','🪲 Ziv','✨ Or'];
const visitorEl=document.getElementById('visitor');
if(visitorEl) visitorEl.textContent=visitors[new Date().getDate()%visitors.length];

function prayerForTime(){
  let h=new Date().getHours();
  if(h>=5&&h<11)return['Morning Prayer','Dear God, thank You for this new day. Fill my heart with peace and joy as I seek You today. Amen.'];
  if(h>=11&&h<16)return['Midday Prayer','Lord, meet me in the middle of this day. Help me pause, breathe, and remember Your goodness. Amen.'];
  if(h>=16&&h<20)return['Evening Prayer','Dear God, thank You for today. Help me reflect with gratitude and rest in Your love. Amen.'];
  return['Night Prayer','Lord, quiet my heart tonight. Watch over me and help me rest in Your peace. Amen.'];
}
const [pt,pp]=prayerForTime();
const dp=document.getElementById('dailyPrayer');
if(dp) dp.innerHTML=`<h2>${pt}</h2><p>${pp}</p><button onclick="go('prayer')">Pray Now</button> <button onclick="savePrayer()">Save</button> <button onclick="this.parentElement.style.display='none'">Close</button>`;
const ptitle=document.getElementById('prayerTitle'); if(ptitle) ptitle.textContent=pt;
const ptext=document.getElementById('prayerText'); if(ptext) ptext.textContent=pp;

function savePrayer(){
  let old=localStorage.getItem('prayerJournal')||'';
  localStorage.setItem('prayerJournal',old+'\n'+new Date().toLocaleString()+': '+pt+' — '+pp+'\n');
  let pj=document.getElementById('prayerJournal');
  if(pj)pj.value=localStorage.getItem('prayerJournal')||'';
}
function flipCard(){let r=document.getElementById('recall'); if(r) r.textContent='Answer: Genesis 1:1 — In the beginning God created the heavens and the earth.'}
function speakHebrew(){let u=new SpeechSynthesisUtterance('Bereshit');u.rate=.75;speechSynthesis.speak(u)}
function createYear(){let years=JSON.parse(localStorage.getItem('years')||'[]');years.push({started:new Date().toLocaleDateString(),name:'Bible Journey Year '+(years.length+1)});localStorage.setItem('years',JSON.stringify(years));let ys=document.getElementById('yearStatus');if(ys)ys.textContent='New Bible year created! Past years are preserved.'}

let drawColor='#4f3d36';
let drawSize=4;
function setColor(c){drawColor=c}
function setSize(s){drawSize=s}

function setupCanvas(id){
  const canvas=document.getElementById(id);
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  canvas.style.touchAction='none';

  function resize(){
    const data=localStorage.getItem(id);
    const rect=canvas.getBoundingClientRect();
    if(rect.width === 0 || rect.height === 0) return;
    canvas.width=rect.width*devicePixelRatio;
    canvas.height=rect.height*devicePixelRatio;
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    ctx.lineCap='round';
    ctx.lineJoin='round';
    if(data){
      let img=new Image();
      img.onload=()=>ctx.drawImage(img,0,0,rect.width,rect.height);
      img.src=data;
    }
  }
  canvas._resize=resize;
  setTimeout(resize,200);

  let drawing=false;
  let last=null;

  function getPointFromEvent(e){
    const r=canvas.getBoundingClientRect();
    let p=e.touches ? e.touches[0] : (e.changedTouches ? e.changedTouches[0] : e);
    return {x:p.clientX-r.left, y:p.clientY-r.top};
  }

  function start(e){
    if(e.cancelable) e.preventDefault();
    drawing=true;
    last=getPointFromEvent(e);
  }

  function move(e){
    if(!drawing)return;
    if(e.cancelable) e.preventDefault();
    let p=getPointFromEvent(e);
    ctx.strokeStyle=drawColor;
    ctx.lineWidth=drawSize;
    ctx.beginPath();
    ctx.moveTo(last.x,last.y);
    ctx.lineTo(p.x,p.y);
    ctx.stroke();
    last=p;
  }

  function end(e){
    if(e && e.cancelable) e.preventDefault();
    drawing=false;
    try{localStorage.setItem(id,canvas.toDataURL())}catch(err){}
  }

  // Pointer events: Apple Pencil / stylus / mouse
  canvas.addEventListener('pointerdown',start,{passive:false});
  canvas.addEventListener('pointermove',move,{passive:false});
  canvas.addEventListener('pointerup',end,{passive:false});
  canvas.addEventListener('pointercancel',end,{passive:false});
  canvas.addEventListener('pointerleave',end,{passive:false});

  // Touch fallback: many off-brand pencils act like touch in Safari
  canvas.addEventListener('touchstart',start,{passive:false});
  canvas.addEventListener('touchmove',move,{passive:false});
  canvas.addEventListener('touchend',end,{passive:false});
  canvas.addEventListener('touchcancel',end,{passive:false});

  // Mouse fallback
  canvas.addEventListener('mousedown',start);
  canvas.addEventListener('mousemove',move);
  window.addEventListener('mouseup',end);
}

function resizeCanvases(){['draw','colorCanvas','journalCanvas'].forEach(id=>{let c=document.getElementById(id);if(c&&c._resize)c._resize()})}
function clearCanvas(id){const c=document.getElementById(id);if(!c)return;c.getContext('2d').clearRect(0,0,c.width,c.height);localStorage.removeItem(id)}

setupCanvas('draw');
setupCanvas('colorCanvas');
setupCanvas('journalCanvas');
window.addEventListener('resize',resizeCanvases);
window.addEventListener('orientationchange',()=>setTimeout(resizeCanvases,300));

document.querySelectorAll('textarea,input:not([type])').forEach(e=>{
  if(!e.id)return;
  e.value=localStorage.getItem(e.id)||'';
  e.addEventListener('input',()=>localStorage.setItem(e.id,e.value));
});

function weatherDemo(){
  const layer=document.getElementById('weatherLayer');
  if(!layer)return;
  const m=new Date().getMinutes()%3;
  layer.className=m===0?'snow':m===1?'rain':'wind';
}
weatherDemo();
