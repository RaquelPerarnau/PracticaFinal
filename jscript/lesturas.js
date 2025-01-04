document.addEventListener("DOMContentLoaded", () => {
    const galeriaContent = document.getElementById("galeria-content");

    // Cargar el archivo JSON
    fetch("../textos/entradas.json")
        .then(response => response.json())
        .then(articles => {
            // Filtrar por categoría "lectura"
            const lecturas = articles
                .filter(article => article.category === "lectura")
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha (descendente)

            // Generar galería de lecturas
            lecturas.forEach(article => {
                const galeriaItem = `
                    <div class="col-lg-4 col-md-6">
                        <div class="galeria-item">
                            <a href="plantilla.html?id=${article.id}">
                                <img src="../${article.image}" alt="${article.title}">
                                <div class="galeria-caption">
                                    <h5>${article.title}</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
                galeriaContent.innerHTML += galeriaItem;
            });
        })
        .catch(error => console.error("Error al cargar las lecturas:", error));
});
