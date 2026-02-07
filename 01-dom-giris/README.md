# DOM Giriş

## DOM Nedir?

DOM (Document Object Model), HTML sayfasının JavaScript ile kontrol edilmesini sağlayan yapıdır.

JavaScript sayesinde:

- HTML elementlerini seçebiliriz
- İçeriğini değiştirebiliriz
- Stil verebiliriz
- Event ekleyebiliriz

---

## DOM Nasıl Çalışır?

Tarayıcı HTML dosyasını okur ve bir ağaç yapısı oluşturur.

Bu yapı üzerinden JavaScript elementlere erişebilir.

---

## Örnek

JavaScript ile bir başlığı değiştirelim:

```js
document.querySelector("h1").textContent = "Merhaba DOM";
