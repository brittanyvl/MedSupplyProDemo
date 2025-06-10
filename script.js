document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) a.classList.remove('open');
            });

            // Toggle current answer
            answer.classList.toggle('open');
        });
    });
});
