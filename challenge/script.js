document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    if (!form) return;
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        try {
            const formData = new FormData(form);
            const names = [
                formData.get("nome1"),
                formData.get("nome2"),
                formData.get("nome3"),
                formData.get("nome4"),
                formData.get("nome5")
            ].filter(nome => nome && nome.trim() !== "");
            const message = formData.get("historico")
            const payload = {
                names: names,
                message: message
            };

            console.log("Payload a ser enviado:", payload);
            const response = await fetch("https://fsdt-contact.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar mensagem");
            }
    
            alert("Mensagem enviada com sucesso!");
            form.reset();

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao enviar o formulário");
        }

    });

});