document.addEventListener("DOMContentLoaded", () => {
    // Detectar el enlace activo
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.parentElement.classList.add('active');
        }
    });

    // Cambiar la navbar al hacer scroll
    const navbar = document.querySelector('.custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Cargar el banner de cookies desde un archivo externo
    fetch("../htmls/cookie-banner.html")
        .then((response) => response.text())
        .then((html) => {
            document.body.insertAdjacentHTML("afterbegin", html); // Insertar el banner al inicio del body

            // Manejo del banner
            const cookieBanner = document.getElementById("cookie-banner");
            const acceptCookiesButton = document.getElementById("accept-cookies");

            if (!localStorage.getItem("cookiesAccepted")) {
                cookieBanner.classList.add("active"); // Mostrar el banner si no se han aceptado las cookies
            }

            acceptCookiesButton.addEventListener("click", () => {
                localStorage.setItem("cookiesAccepted", "true");
                cookieBanner.classList.remove("active");
            });
        })
        .catch((error) => console.error("Error cargando el banner de cookies:", error));
});
