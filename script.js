document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-btn');
    const resultCounter = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const cards = document.querySelectorAll('.card');

    function filterCards() {
        const query = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            
            // Yalnızca başlıklara göre filtreleme
            if (title.includes(query)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Sayaç güncelleme
        resultCounter.textContent = `Toplam ${visibleCount} içerik gösteriliyor.`;

        // Boş sonuç mesajı kontrolü
        if (visibleCount === 0) {
            emptyMessage.classList.remove('hidden');
        } else {
            emptyMessage.classList.add('hidden');
        }
    }

    // Arama kutusuna yazıldıkça filtrele (Event Listener)
    searchInput.addEventListener('input', filterCards);

    // Temizle düğmesine basıldığında aramayı sıfırla
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterCards();
        searchInput.focus();
    });
});