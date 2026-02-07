# LocalStorage

## LocalStorage Nedir?

LocalStorage, tarayıcıda veri saklamamızı sağlayan bir özelliktir.

Sayfa yenilense bile veriler silinmez.

---

## LocalStorage Ne İçin Kullanılır?

- Kullanıcı ayarları
- Todo uygulamaları
- Not uygulamaları
- Tema kayıt işlemleri

---

## Veri Kaydetme

localStorage.setItem("anahtar", "deger");

---

## Veri Alma

localStorage.getItem("anahtar");

---

## Veri Silme

localStorage.removeItem("anahtar");

---

## JSON Kullanımı

LocalStorage sadece string veri saklar.

Bu yüzden object veya array saklamak için JSON kullanılır.

JSON.stringify() → veriyi stringe çevirir  
JSON.parse() → veriyi geri çevirir

---

## Bu Derste Öğrenecekleriniz

- LocalStorage kullanımı
- Veri kaydetme ve okuma
- JSON ile veri saklama
- Kalıcı veri mantığı
