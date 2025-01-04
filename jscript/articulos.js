document.addEventListener("DOMContentLoaded", () => {
    const timelineContent = document.getElementById("timeline-content");

    // Cargar el archivo JSON
    fetch("../textos/entradas.json")
        .then(response => response.json())
        .then(articles => {
            // Filtrar por categoría "articulo" y ordenar por fecha descendente
            const articulos = articles
                .filter(article => article.category === "articulo")
                .sort((a, b) => new Date(b.date) - new Date(a.date));

            // Generar timeline de artículos
            articulos.forEach(article => {
                const timelineItem = `
                    <div class="timeline-item position-relative">
                        <div class="timeline-line"></div> <!-- Línea Vertical -->
                        <div class="timeline-point"></div> <!-- Punto del Timeline -->
                        ${
                            article.youtube_video
                                ? `<div class="timeline-media">
                                       <div class="ratio ratio-16x9">
                                           <iframe src="${article.youtube_video.replace("watch?v=", "embed/")}" allowfullscreen></iframe>
                                       </div>
                                   </div>`
                                : `<div class="timeline-media">
                                       <img src="../${article.image}" class="img-fluid" alt="${article.title}">
                                   </div>`
                        }
                        <div class="timeline-content">
                            <h3>${article.title}</h3>
                            <p>${article.subtitle}</p>
                            <a href="plantilla.html?id=${article.id}" class="btn btn-link">Leer más</a>
                        </div>
                    </div>
                `;
                timelineContent.innerHTML += timelineItem;
            });
            
        })
        .catch(error => console.error("Error al cargar los artículos:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("newsletter-banner");
    const closeBanner = document.querySelector(".close-banner");

    // Cerrar el banner al hacer clic en la "X"
    closeBanner.addEventListener("click", () => {
        banner.style.display = "none";
    });

    // Manejar el envío del formulario
    const form = document.getElementById("newsletter-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el envío real
        const email = form.querySelector("input[type='email']").value;
        console.log(`Email suscrito: ${email}`);
        alert("¡Gracias por suscribirte a nuestra newsletter!");
        banner.style.display = "none"; // Ocultar el banner después de suscribirse
    });
});
