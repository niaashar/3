const burger=document.querySelector('.burger');const menu=document.querySelector('.menu');if(burger&&menu){burger.addEventListener('click',()=>menu.classList.toggle('open'))}
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});document.querySelectorAll('.reveal,.section,.card,.soft-panel').forEach(el=>{el.classList.add('reveal');io.observe(el)});
