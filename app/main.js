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
    
    // Filter Projects
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const projectItems = document.querySelectorAll(".project-item");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                const category = this.textContent.toLowerCase();
                projectItems.forEach(item => {
                    if (category === "all" || item.innerHTML.toLowerCase().includes(category)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    }

    // Update Footer Year
    const footerYear = document.querySelector(".footer-bottom p");
    if (footerYear) {
        footerYear.innerHTML = `Copyright &copy; ${new Date().getFullYear()} – All Rights Reserved. Made by <a href="#">fallow</a>`;
    }
});
