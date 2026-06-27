let selected = null;
let step = 1;
const selectedBox = document.getElementById('selected');
const output = document.getElementById('cssOutput');

function pct(num){ return Number(num.toFixed(3)); }

function getVals(el){
  return {
    left: parseFloat(el.style.left || getComputedStyle(el).left) / el.parentElement.clientWidth * 100,
    top: parseFloat(el.style.top || getComputedStyle(el).top) / el.parentElement.clientHeight * 100,
    width: parseFloat(el.style.width || getComputedStyle(el).width) / el.parentElement.clientWidth * 100,
    height: parseFloat(el.style.height || getComputedStyle(el).height) / el.parentElement.clientHeight * 100,
  };
}

function setVals(el, v){
  el.style.left = pct(v.left) + '%';
  el.style.top = pct(v.top) + '%';
  el.style.width = pct(v.width) + '%';
  el.style.height = pct(v.height) + '%';
}

function select(el){
  document.querySelectorAll('.hot').forEach(b => b.classList.remove('selected'));
  selected = el;
  el.classList.add('selected');
  selectedBox.textContent = 'Selected: ' + el.dataset.name + ' — use arrows or drag it';
}

document.querySelectorAll('.hot').forEach(el => {
  el.addEventListener('pointerdown', e => {
    e.preventDefault();
    select(el);
    el.setPointerCapture(e.pointerId);
    const startX = e.clientX, startY = e.clientY;
    const start = getVals(el);
    const parent = el.parentElement.getBoundingClientRect();

    function move(ev){
      const dx = (ev.clientX - startX) / parent.width * 100;
      const dy = (ev.clientY - startY) / parent.height * 100;
      setVals(el, {...start, left:start.left+dx, top:start.top+dy});
    }
    function up(){
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      updateOutput();
    }
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
  });
});

function nudge(dx,dy,dw=0,dh=0){
  if(!selected) return;
  const parent = selected.parentElement.getBoundingClientRect();
  const v = getVals(selected);
  setVals(selected, {
    left: v.left + (dx / parent.width * 100),
    top: v.top + (dy / parent.height * 100),
    width: Math.max(2, v.width + (dw / parent.width * 100)),
    height: Math.max(2, v.height + (dh / parent.height * 100))
  });
  updateOutput();
}

document.getElementById('up').onclick=()=>nudge(0,-step);
document.getElementById('down').onclick=()=>nudge(0,step);
document.getElementById('left').onclick=()=>nudge(-step,0);
document.getElementById('right').onclick=()=>nudge(step,0);
document.getElementById('wide').onclick=()=>nudge(0,0,step,0);
document.getElementById('narrow').onclick=()=>nudge(0,0,-step,0);
document.getElementById('tall').onclick=()=>nudge(0,0,0,step);
document.getElementById('short').onclick=()=>nudge(0,0,0,-step);
document.getElementById('step1').onclick=()=>{step=1; selectedBox.textContent='Step set to 1px';};
document.getElementById('step5').onclick=()=>{step=5; selectedBox.textContent='Step set to 5px';};

function updateOutput(){
  const lines = [];
  document.querySelectorAll('.hot').forEach(el=>{
    const v = getVals(el);
    lines.push(`.${el.classList[1]}{left:${pct(v.left)}%;top:${pct(v.top)}%;width:${pct(v.width)}%;height:${pct(v.height)}%}`);
  });
  output.value = lines.join('\n');
}
document.getElementById('copyCss').onclick=()=>{
  updateOutput();
  output.select();
  document.execCommand('copy');
  selectedBox.textContent='Copied final CSS. Paste/send it to me.';
};
updateOutput();
