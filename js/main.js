/* =================================================
   DOM READY
================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =============================================
     LOAD NAVBAR (SEMUA HALAMAN)
  ============================================= */
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(err => console.error("Navbar load error:", err));
  }

  /* =============================================
     HERO SLIDER (HANYA JIKA ADA SLIDE)
  ============================================= */
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[slideIndex].classList.remove("active");
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    }, 6000);
  }

  /* =============================================
     PORTFOLIO FILTER (SAFE VERSION)
  ============================================= */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {

        // set active button
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {
          const category = item.dataset.category;

          if (filter === "all" || category === filter) {
            item.style.display = "block";
            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";

            requestAnimationFrame(() => {
              item.style.transition = "opacity .4s ease, transform .4s ease";
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            });

          } else {
            item.style.display = "none";
          }
        });

      });
    });
  }

  /* =============================================
     SCROLL ANIMATION (FADE)
  ============================================= */
  const fadeElements = document.querySelectorAll(".fade");

  if (fadeElements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
  }

  /* =============================================
     NAVBAR SHRINK ON SCROLL
  ============================================= */
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (nav) {
      nav.classList.toggle("shrink", window.scrollY > 60);
    }
  });

});

/* =================================================
   HAMBURGER MENU (GLOBAL)
================================================= */
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}
