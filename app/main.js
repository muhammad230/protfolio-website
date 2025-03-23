document.addEventListener("DOMContentLoaded", function () {
    // Toggle Mobile Navigation
    const menuBar = document.querySelector(".menu-bar");
    const navLinks = document.querySelector(".nav-links ul");

    if (menuBar) {
        menuBar.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth Scroll for Internal Links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

   
   
   
});
