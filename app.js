const result = document.getElementById('result');
document.querySelectorAll('.hot').forEach(btn => {
  btn.addEventListener('click', e => {
    document.querySelectorAll('.hot').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const r = btn.getBoundingClientRect();
    result.textContent = `Tapped: ${btn.dataset.panel} — box ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)}`;
    try { navigator.vibrate && navigator.vibrate(20); } catch(e) {}
  });
});
