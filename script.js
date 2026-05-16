document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15%見えたら実行
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // 一度表示されたら監視を止める（何度もパカパカさせない）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targets.forEach(target => {
        observer.observe(target);
    });
});