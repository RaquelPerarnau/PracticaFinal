document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");

    if (!articleId) {
        console.error("No se encontró el ID del artículo.");
        return;
    }

    fetch("../textos/entradas.json")
        .then(response => response.json())
        .then(articles => {
            const article = articles.find(a => a.id === articleId);

            if (!article) {
                console.error("Artículo no encontrado.");
                return;
            }

            // Cargar contenido del JSON
            document.getElementById("article-title").textContent = article.title;
            document.getElementById("article-subtitle").textContent = article.subtitle;
            document.getElementById("article-author").textContent = `Escrito por ${article.author}`;
            document.getElementById("article-image").src = `../${article.image}`;

            // Cargar texto del artículo
            return fetch(`../${article.file}`)
                .then(response => response.text())
                .then(text => {
                    document.getElementById("article-text").textContent = text;

                    // Si existe video de YouTube
                    if (article.youtube_video) {
                        const videoSection = document.getElementById("article-video");
                        const videoIframe = document.getElementById("youtube-video");

                        videoIframe.src = article.youtube_video.replace("watch?v=", "embed/");
                        videoSection.classList.remove("d-none");
                    }
                });
        })
        .catch(error => {
            console.error("Error al cargar el artículo:", error);
        });
});
