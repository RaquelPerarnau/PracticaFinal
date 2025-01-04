document.addEventListener("DOMContentLoaded", () => {
    const entriesList = document.getElementById("entries-list");

    // Simulación de datos desde un archivo JSON
    fetch("../textos/entradas.json")
        .then((response) => response.json())
        .then((data) => {
            // Ordenar las entradas por fecha (más reciente primero)
            const sortedEntries = data.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Generar la lista de entradas
            sortedEntries.forEach((entry) => {
                const entryItem = `
                    <div class="col-12 entry-item">
                        <h3>${entry.title}</h3>
                        <p><strong>Subtítulo:</strong> ${entry.subtitle}</p>
                        <p><strong>Tipo:</strong> ${entry.category === "lectura" ? "Lectura" : "Artículo"}</p>
                        <p><strong>Fecha:</strong> ${new Date(entry.date).toLocaleDateString("es-ES")}</p>
                        <a href="plantilla.html?id=${entry.id}" class="btn btn-sm mt-2">Leer más</a>
                    </div>
                `;
                entriesList.innerHTML += entryItem;
            });
        })
        .catch((error) => {
            console.error("Error al cargar las entradas:", error);
        });
});
