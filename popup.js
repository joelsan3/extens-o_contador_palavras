document.addEventListener('DOMContentLoaded', function() {
    const textoElement = document.getElementById('texto');
    const totalPalavrasElement = document.getElementById('total-palavras');

    textoElement.addEventListener('input', function() {
        const texto = textoElement.value;
        const palavras = texto.split(/\s+/).filter(word => word.length > 0);
        totalPalavrasElement.textContent = palavras.length;
    });
});
