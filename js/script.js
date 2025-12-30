/* LOAD NAVBAR */
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setActiveMenu();
  });

/* HAMBURGER */
function toggleMenu(){
  document.getElementById("nav-menu").classList.toggle("show");
}

/* ACTIVE MENU */
function setActiveMenu(){
  const page = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link=>{
    if(link.getAttribute("href")===page){
      link.classList.add("active");
    }
  });
}

/* ANIMATION ON SCROLL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:.2});

document.querySelectorAll(".fade,.slide").forEach(el=>observer.observe(el));

/* FOOTER AUTO */
document.querySelectorAll("footer").forEach(f=>{
  f.innerHTML = `© ${new Date().getFullYear()} PT. Fattah Group`;
});
