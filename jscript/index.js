document.addEventListener("DOMContentLoaded", () => {
    // Cargar artículos desde archivo JSON
    fetch("textos/entradas.json")
        .then((response) => response.json())
        .then((articles) => {
            const carouselContent = document.getElementById("carousel-content");
            carouselContent.innerHTML = "";

            // Seleccionar 3 artículos aleatorios
            const selectedArticles = articles.sort(() => 0.5 - Math.random()).slice(0, 3);

            selectedArticles.forEach((article, index) => {
                const isActive = index === 0 ? "active" : "";
                const carouselItem = `
                    <div class="carousel-item ${isActive}">
                        <img src="${article.image}" class="d-block w-100" alt="${article.title}">
                        <div class="carousel-caption">
                            <h5>${article.title}</h5>
                            <p>${article.subtitle}</p>
                            <a href="htmls/plantilla.html?id=${article.id}" class="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                `;
                carouselContent.innerHTML += carouselItem;
            });
        })
        .catch((error) => console.error("Error cargando los artículos:", error));
});
