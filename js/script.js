// LOAD NAVBAR
fetch("navbar.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("navbar").innerHTML=data;
});

// HERO SLIDER
document.addEventListener("DOMContentLoaded",()=>{
  const slides=document.querySelectorAll(".slide");
  let i=0;
  setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },5000);
});

// HERO STAGGER
window.addEventListener("load",()=>{
  document.querySelectorAll(".hero-anim").forEach((el,i)=>{
    setTimeout(()=>el.classList.add("show"), i*200);
  });
});

// SECTION ANIM
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
      observer.unobserve(e.target);
    }
  });
},{threshold:.2});

document.querySelectorAll(".fade,.fade-up").forEach(el=>observer.observe(el));

// FOOTER YEAR
document.getElementById("year").textContent=new Date().getFullYear();
