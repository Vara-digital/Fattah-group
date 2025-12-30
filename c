 *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}
body{padding-top:90px;color:#111}
.container{width:90%;max-width:1100px;margin:auto}

/* NAVBAR */
.header{position:fixed;top:0;width:100%;background:#fff;z-index:1000;box-shadow:0 8px 20px rgba(0,0,0,.08)}
.nav-wrap{display:flex;justify-content:space-between;align-items:center;padding:15px 0}
.brand{display:flex;align-items:center;gap:10px;font-weight:700}
.logo{height:38px}
nav{display:flex;gap:20px}
nav a{text-decoration:none;color:#111}
nav a.active{color:#d4af37;border-bottom:2px solid #d4af37}

/* HAMBURGER */
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer}
.hamburger span{width:26px;height:3px;background:#111}

/* HERO */
.hero{height:100vh;background:linear-gradient(135deg,#000,#222);color:#fff;
display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}

/* SECTION */
.section{padding:100px 20px;max-width:900px;margin:auto}

.logo-nav {
  height: 36px;
}

.hero-logo {
  width: 120px;
  margin-bottom: 20px;
}

/* FOOTER */
footer{text-align:center;padding:20px;background:#000;color:#fff}

/* ANIMATION */
.fade{opacity:0;transform:translateY(30px);transition:1s}
.slide{opacity:0;transform:translateX(-40px);transition:1s}
.show{opacity:1;transform:none}

/* MOBILE */
@media(max-width:768px){
  nav{position:absolute;top:70px;right:0;background:#fff;
      flex-direction:column;width:220px;padding:20px;display:none}
  nav.show{display:flex}
  .hamburger{display:flex}
}
