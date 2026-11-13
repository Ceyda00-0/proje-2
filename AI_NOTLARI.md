# AI Kullanım Kayıtları (GitHub Copilot / Yapay Zeka Notları)

## Kullanılan Promptlar ve Amaçları
1. **Prompt 1:** "[Yapay Zeka Rehberi] hakkında [öğrenciler ve meraklılar] için üç sayfalık bir site tasarlıyorum. Beş içerik başlığım şunlar: ChatGPT, Midjourney, DeepL, ElevenLabs, GitHub Copilot. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
   * *Amaç:* Projenin iskeletini, dosya yapısını ve kabul ölçütlerini planlamak.
2. **Prompt 2:** "İçerikler sayfamız için CSS grid yapısını kullanarak modern, responsive (mobil uyumlu) kart tasarımları oluştur."
   * *Amaç:* Kartların estetik ve düzenli görünmesini sağlamak.
3. **Prompt 3:** "JavaScript kullanarak yalnızca başlıklara göre arama yapan, büyük/küçük harf duyarsız olan, boş sonuç mesajı veren ve sayaç gösteren fonksiyon yaz."
   * *Amaç:* Ödevin en önemli fonksiyonel gereksinimi olan arama motorunu kurmak.

## Öneri Değerlendirmesi
Copilot'tan gelen arama önerisinde başlangıçta hem başlık hem de açıklama metinleri taranıyordu. Hocanın kuralı **yalnızca başlıkların taranması** olduğu için filtreleme kodunu `card.querySelector('h2')` seçecek şekilde özellikle güncelledim.

## Kod Açıklamaları
* **Event Listener (`searchInput.addEventListener('input', ...)`):** Kullanıcı arama kutusuna her harf yazdığında veya sildiğinde ('input' olayı tetiklendiğinde) arka planda filtreleme fonksiyonunun anlık olarak çalışmasını sağlar.
* **Filtreleme Koşulu (`if (title.includes(query))`):** Kartın başlık metninin (`title`), arama çubuğuna yazılan ifadeyi (`query`) içerip içermediğini kontrol eder. İçeriyorsa kartı görünür yapar, içermiyorsa gizler.