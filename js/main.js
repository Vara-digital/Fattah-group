/* LOAD NAVBAR */
fetch("navbar.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);

/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 6000);

/* NAVBAR SHRINK */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if(nav){
    nav.classList.toggle("shrink", window.scrollY > 50);
  }
});

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

