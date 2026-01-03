document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ACTIVE MENU
  ========================= */
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#nav-menu a").forEach(link=>{
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active");
    }
  });

  /* =========================
     LOAD NAVBAR
  ========================= */
  const navbar = document.getElementById("navbar");
  if(navbar){
    fetch("navbar.html")
      .then(res=>res.text())
      .then(html=>navbar.innerHTML = html);
  }

  /* =========================
     HERO SLIDER
  ========================= */
  const slides = document.querySelectorAll(".hero-slides .slide");
  let index = 0;

  if(slides.length > 1){
    slides[0].classList.add("active");
    setInterval(()=>{
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    },6000);
  }

  /* =========================
     FADE ON SCROLL
  ========================= */
  const fades = document.querySelectorAll(".fade");
  if(fades.length){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("show");
          obs.unobserve(e.target);
        }
      });
    },{threshold:.15});
    fades.forEach(el=>obs.observe(el));
  }

  /* =========================
     PORTFOLIO FILTER
  ========================= */
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  if(buttons.length && items.length){
    items.forEach(i=>i.classList.add("show"));

    buttons.forEach(btn=>{
      btn.addEventListener("click",()=>{
        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        items.forEach(item=>{
          if(filter==="all" || item.dataset.category===filter){
            item.classList.add("show");
          }else{
            item.classList.remove("show");
          }
        });
      });
    });
  }

  /* =========================
     NAVBAR SHRINK
  ========================= */
  window.addEventListener("scroll",()=>{
    const nav = document.querySelector(".nav");
    if(!nav) return;
    nav.classList.toggle("shrink",window.scrollY>60);
  });

});

/* =========================
   HAMBURGER
========================= */
function toggleMenu(){
  const menu = document.getElementById("nav-menu");
  if(menu) menu.classList.toggle("active");
}
