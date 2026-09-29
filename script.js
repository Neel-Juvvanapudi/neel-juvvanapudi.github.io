document.querySelectorAll('.toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.case');
    card.classList.toggle('open');
    btn.textContent=card.classList.contains('open')?'Hide technical details −':'View technical details +';
  });
});
