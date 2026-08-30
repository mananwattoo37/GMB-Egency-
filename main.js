// =========================================================
// GMB AGENCY WEBSITE
// MAIN JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    if (header) {

        const handleHeaderScroll = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        window.addEventListener(
            "scroll",
            handleHeaderScroll,
            { passive: true }
        );

        handleHeaderScroll();

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .package-card, .process-step, .benefit"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =====================================================
       PREVENT EMPTY ANCHOR JUMP
    ===================================================== */

    document.querySelectorAll('a[href="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {
            event.preventDefault();
        });

    });

});