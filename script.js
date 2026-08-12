document.addEventListener('DOMContentLoaded', () => {
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnContrast = document.getElementById('btn-contrast');

    let currentFontSize = 100; // Porcentagem do tamanho base da fonte

    // Aumentar Fonte
    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 140) {
            currentFontSize += 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Diminuir Fonte
    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
});
