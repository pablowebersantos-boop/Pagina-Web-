document.addEventListener('DOMContentLoaded', () => {

    // --- ACESSIBILIDADE ---
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnContrast = document.getElementById('btn-contrast');

    let currentFontSize = 100;

    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 140) {
            currentFontSize += 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // --- BOTÃO "SAIBA MAIS" (Navegação Suave) ---
    const btnHero = document.getElementById('btn-hero');
    btnHero.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.getElementById('conscientizacao');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // --- QUIZ INTERATIVO ---
    const quizButtons = document.querySelectorAll('.quiz-btn');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Trava os botões após a resposta
            quizButtons.forEach(btn => btn.disabled = true);

            const isCorrect = button.getAttribute('data-correct') === 'true';
            quizFeedback.classList.add('active');

            if (isCorrect) {
                button.classList.add('correct');
                quizFeedback.textContent = '⚡ Resposta Correta! Os fitoplânctons marinhos geram mais da metade do oxigênio do nosso planeta.';
                quizFeedback.style.backgroundColor = 'rgba(0, 255, 136, 0.15)';
                quizFeedback.style.color = 'var(--success-color)';
                quizFeedback.style.border = '1px solid var(--success-color)';
            } else {
                button.classList.add('incorrect');
                quizFeedback.textContent = '❌ Resposta Incorreta. A resposta correta é a letra B (Fitoplânctons nos Oceanos)!';
                quizFeedback.style.backgroundColor = 'rgba(255, 0, 85, 0.15)';
                quizFeedback.style.color = 'var(--error-color)';
                quizFeedback.style.border = '1px solid var(--error-color)';
            }
        });
    });
});
