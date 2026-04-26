const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50)});

const ham=document.getElementById('ham');
const drawer=document.getElementById('drawer');
ham.addEventListener('click',()=>{ham.classList.toggle('open');drawer.classList.toggle('open');document.body.style.overflow=drawer.classList.contains('open')?'hidden':''});
document.querySelectorAll('.mobile-drawer a').forEach(a=>{a.addEventListener('click',()=>{ham.classList.remove('open');drawer.classList.remove('open');document.body.style.overflow=''})});

const trigger=document.getElementById('csTrigger');
const dropdown=document.getElementById('csDropdown');
const label=trigger.querySelector('.cs-label');
trigger.addEventListener('click',(e)=>{e.stopPropagation();trigger.classList.toggle('open');dropdown.classList.toggle('open')});
dropdown.querySelectorAll('.cs-option').forEach(opt=>{opt.addEventListener('click',()=>{dropdown.querySelectorAll('.cs-option').forEach(o=>o.classList.remove('selected'));opt.classList.add('selected');label.textContent=opt.textContent;trigger.classList.remove('open');dropdown.classList.remove('open')})});
document.addEventListener('click',()=>{trigger.classList.remove('open');dropdown.classList.remove('open')});

const revealEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
revealEls.forEach(el=>io.observe(el));