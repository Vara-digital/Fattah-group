function toggleMenu(){
  document.getElementById("nav-menu").classList.toggle("show");
}

// HERO SLIDER
document.addEventListener("DOMContentLoaded",()=>{
  const slides=document.querySelectorAll(".slide");
  let i=0;
  setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },4000);

  document.getElementById("year").textContent=new Date().getFullYear();
});
