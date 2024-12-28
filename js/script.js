// Tüm linkleri seç
const links = document.querySelectorAll('.nav_links a');

// Tüm bölümleri seç
const sections = document.querySelectorAll('section');

// Linklere tıklama olayı ekle
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Varsayılan davranışı engelle

        // Tıklanan linkin hedefini al (#anasayfa, #yazilimlar, vb.)
        const targetId = link.getAttribute('href').substring(1);

        // Tüm bölümleri gizle
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Hedef bölümü göster
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
});
