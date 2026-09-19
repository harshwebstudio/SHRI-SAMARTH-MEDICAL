/* =========================================
   SHRI SAMARTH MEDICAL
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  /* =========================
     MOBILE MENU
  ========================== */

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");

      menuBtn.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
    });


    /* Close menu after clicking a link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.textContent = "☰";

      });

    });

  }


  /* =========================
     HEADER SHADOW ON SCROLL
  ========================== */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {
      header.style.boxShadow =
        "0 8px 30px rgba(16, 32, 27, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }

  });


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .service-card, .gallery-item, .contact-box"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

  });


  /* =========================
     CURRENT YEAR
  ========================== */

  const footerYear = document.querySelector(".footer-bottom p");

  if (footerYear) {

    footerYear.innerHTML =
      footerYear.innerHTML.replace(
        "2026",
        new Date().getFullYear()
      );

  }


  /* =========================
     IMAGE ERROR HANDLING
  ========================== */

  const images = document.querySelectorAll("img");

  images.forEach(img => {

    img.addEventListener("error", () => {

      img.style.display = "none";

      const parent = img.parentElement;

      if (parent) {
        parent.classList.add("image-missing");
      }

    });

  });

});
