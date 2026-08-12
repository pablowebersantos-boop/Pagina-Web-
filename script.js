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

    // --- CORREÇÃO DO BOTÃO "SAIBA MAIS" (Navegação Suave Suportada via JS como Fallback) ---
    const btnHero = document.getElementById('btn-hero');
    btnHero.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.getElementById('conscientizacao');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // --- INTERATIVIDADE DO QUIZ ---
    const quizButtons = document.querySelectorAll('.quiz-btn');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Desabilita todos os botões após o clique
            quizButtons.forEach(btn => btn.disabled = true);

            const isCorrect = button.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                button.classList.add('correct');
                quizFeedback.textContent = ' Resposta Correta! Os fitoplânctons marinhos geram a maior parte do oxigênio da Terra.';
                quizFeedback.style.color = 'var(--success-color)';
            } else {
                button.classList.add('incorrect');
                quizFeedback.textContent = ' Incorreto. A resposta certa são os Fitoplânctons nos Oceanos!';
                quizFeedback.style.color = 'var(--error-color)';
            }
        });
    });
});
