// LOAD NAVBAR
fetch("navbar.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("navbar").innerHTML=data;
  setActiveMenu();
});

// HAMBURGER
function toggleMenu(){
  document.getElementById("nav-menu").classList.toggle("show");
}

// ACTIVE MENU
function setActiveMenu(){
  const page=location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(a=>{
    if(a.getAttribute("href")===page) a.style.color="#d6b15e";
  });
}

// FADE ANIMATION
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:.2});
document.querySelectorAll(".fade").forEach(el=>observer.observe(el));

// HERO SLIDER
let slides=document.querySelectorAll(".slide");
let index=0;
setInterval(()=>{
  slides[index].classList.remove("active");
  index=(index+1)%slides.length;
  slides[index].classList.add("active");
},6000);
// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", ()=>{
  const nav = document.querySelector(".nav");
  if(window.scrollY > 60){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

