# Blog Uygulamasi (Express, statik sayfalar)

Express ogrenirken yazilan ilk blog denemesi. Sayfalar duz HTML dosyalari
olarak sunuluyor; veritabani ve sablon motoru yok.

Bu deponun devami `blogapp-2`: orada ayni proje EJS sablonlari ve MySQL ile
yeniden yazildi.

## Nasil calisiyor

- `index.js` Express uygulamasini kuruyor, kullanici ve yonetici rotalarini
  bagliyor.
- `routes/user.js` ziyaretci sayfalarini, `routes/admin.js` yonetici
  sayfalarini `res.sendFile` ile donduruyor.
- `public/` klasoru `/static` adresinden, Bootstrap ise
  `/libs/bootstrap` adresinden sunuluyor.

| Adres | Donen dosya | Durum |
|---|---|---|
| `/` | `views/users/index.html` | Bootstrap ile hazirlanmis blog duzeni |
| `/blogs` | `views/users/blogs.html` | `index.html` ile **birebir ayni** |
| `/blogs/:blogid` | `views/users/blog-details.html` | Yazi detay duzeni |
| `/admin` | `views/admin/blog-list.html` | Yalnizca bir baslik; icerik yok |
| `/admin/blog/create` | `views/admin/blog-create.html` | Yalnizca bir baslik; form yok |
| `/admin/blogs/:blogid` | `views/admin/blog-edit.html` | Yalnizca bir baslik; form yok |

## Calistirma

```bash
npm install
npm start        # veya: npm run dev  (nodemon ile)
```

Uygulama http://localhost:4000 adresinde acilir.

## Durum

Bu bir ogrenme deposu; sayfalar tasarim olarak duruyor ama arkalarinda
islev yok:

- Yazilar veritabanindan gelmiyor; ziyaretci sayfalarindaki kartlar
  Bootstrap belgelerinden alinmis ornek bilesenler
- Yonetici sayfalari (`/admin` ile baslayan uc adres) yalnizca birer baslik
  iceriyor -- form da, liste de yazilmamis
- `index.html` ve `blogs.html` birebir ayni dosya
- Yazi ekleme/duzenleme icin bir arka uc yok; yonetici adresleri yalnizca
  statik dosya donduruyor
