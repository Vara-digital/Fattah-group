/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

/* FADE IN */
const fades = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:.2});

fades.forEach(el => observer.observe(el));

/* NAVBAR SHRINK */
window.addEventListener("scroll",()=>{
  const nav = document.querySelector(".nav");
  if(!nav) return;
  nav.classList.toggle("shrink", window.scrollY > 60);
});
/* LOAD NAVBAR */
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 6000);

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));
