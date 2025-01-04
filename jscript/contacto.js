document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    // Validar formulario antes de enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        // Capturar los datos
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Enviar los datos a postman-echo.com
        fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                alert("Formulario enviado correctamente.");
                form.reset();
                form.classList.remove("was-validated");
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
                alert("Hubo un problema al enviar el formulario.");
            });
    });
});
