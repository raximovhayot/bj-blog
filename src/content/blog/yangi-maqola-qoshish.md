---
author: Hayot
pubDatetime: 2024-02-19T03:40:00Z
modDatetime: 2024-02-19T03:40:00Z
title: Yangi maqolani qanday qo'shsak bo'ladi?
slug: yangi-maqola-qoshish
featured: false
draft: false
tags:
  - docs
description: Saytga yangi maqola chop qilish uchun qo'llanmacha, xatoliklar bo'lsa Githubda pull request oching!
---

Bu erda saytimizda mavzusida yangi postlar(maqolalar) chop qilish bo'yicha ba'zi qoidalar/tavsiyalar, maslahatlar mavjud.

## Mundarija

## Frontmatter

Frontmatter - bu blog posti (maqolasi) haqidagi muhim ma'lumotlarni saqlash uchun asosiy joy. Frontmatter maqolaning yuqori qismida joylashgan va YAML formatida yozilgan. Frontmatter va undan foydalanish haqida [astro documentation](https://docs.astro.build/en/guides/markdown-content/) dan koʻproq oʻqishingiz mumkin.

Bu erda har bir post uchun frontmatter xususiyatlari ro'yxati.

| Property           | Description - Vazifasi                                                                                       | Izoh                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **_title_**        | Maqolaning sarlavhasi. (h1)                                                                                  | Kiritish shart<sup>\*</sup>                   |
| **_description_**  | Postning tavsifi. Postdan parcha va postning sayt tavsifida foydalaniladi.                                   | Kiritish shart<sup>\*</sup>                   |
| **_pubDatetime_**  | ISO 8601 formatida nashr etilgan sana vaqti.                                                                 | Kiritish shart<sup>\*</sup>                   |
| **_modDatetime_**  | ISO 8601 formatida o'zgartirilgan sana vaqti. (faqat blog posti o'zgartirilganda ushbu xususiyatni qo'shing) | Kiritish ixtiyory                             |
| **_author_**       | Postning muallifi                                                                                            | default = SITE.author                         |
| **_slug_**         | Post uchun slug. Bu maydon ixtiyoriy, lekin boʻsh qator boʻla olmaydi. (slug: ""❌)                          | default = slugified file name                 |
| **_featured_**     | Ushbu post bosh sahifaning tanlangan qismida ko'rsatilsinmi yoki yo'qmi                                      | default = false                               |
| **_draft_**        | Ushbu postni “nashr qilinmagan” deb belgilang.                                                               | default = false                               |
| **_tags_**         | Ushbu post uchun tegishli kalit so'zlar. Massiv yaml formatida yozilgan.                                     | default = others                              |
| **_ogImage_**      | Postning OG tasviri. Ijtimoiy tarmoqlarni almashish va SEO uchun foydali.                                    | default = SITE.ogImage or generated OG image  |
| **_canonicalURL_** | Kanonik URL (absolute), agar maqola boshqa manbada mavjud bo'lsa.                                            | default = `Astro.site` + `Astro.url.pathname` |

> Tip! ISO 8601 datetime formati uchun na'muna 2024-02-19T15:40:00Z . Batafsil: https://en.wikipedia.org/wiki/ISO_8601

Faqat `title`, `description` va `pubDatetime` maydonlari ko'rsatilishi shart. Qolgan barchasi ixtiyoriy yoki default qiymatlari mavjud!

Sarlavha va tavsif (ko'chirma) qidiruv tizimini optimallashtirish (SEO) uchun muhim va shuning uchun ularni blog postlariga qo'shish shart.

`slug` urlning takrorlanmas identifikatoridir. Shunday qilib, `slug` takrorlanmas va boshqa postlardan farqli bo'lishi kerak. `slug` bo'sh joyini `-` yoki `_` bilan ajratish kerak, lekin `-` tavsiya etiladi. Slug blog post fayl nomidan foydalanib avtomatik tarzda yasaladi. Biroq, siz o'zingizning `slug` ingizni blog postingizda belgilashingiz mumkin.

Masalan, maqola fayl nomi `yangi-maqola-qoshish.md` bo'lsa va siz frontmatterda slugni ko'rsatmasangiz, sayt fayl nomidan foydalanib slugni yasaydi. Bu quyidagicha bo'ladi: `adding-new-post`. Lekin siz formatterda slugni ko'rsatsangi shu qiymat olinadi. Ko'proq o'qish uchun link: [Astro Docs](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs).

Agar blog postda `tags` qoldirilmasa (boshqacha qilib aytganda, teg ko'rsatilmagan bo'lsa), `umumiy` tegi ushbu post uchun teg sifatida ishlatiladi.

### Frontmatterga namuna

Quyida maqola uchun namunaviy formatter 👇

```yaml
# src/content/blog/yangi-maqola-qoshish.md
---
title: Yangi maqolani qanday qo'shsak bo'ladi!
author: Hayot
pubDatetime: 2024-02-19T15:40:00Z
modDatetime: 2024-02-19T16:40:00Z
slug: yangi-maqola-qoshish
featured: true
draft: false
tags:
  - docs
ogImage: ""
description: Saytga yangi maqola chop qilish uchun qo'llanmacha, xatoliklar bo'lsa Githubda pull request oching!
canonicalURL: https://example.uz/bu-yerda-ushbu-maqola-allaqachon-chop-qilingan
---
```

## Mundarija qo'shish

Odatda maqolaga mundarija qo'shilmaydi. `Mundarija` ni h2 formatida (markdownda ## bilan) yozing va uni postda ko'rsatilishini xohlagan joyga qo'ying.
Misol uchun, agar siz mundarijani xatboshi ostiga qo'ymoqchi bo'lsangiz (odatdagidek), buni quyidagi tarzda qilishingiz mumkin.

```md
---
# frontmatter
---

Bu erda saytimizda mavzusida yangi postlar(maqolalar) chop qilish bo'yicha ba'zi qoidalar/tavsiyalar, maslahatlar mavjud.

## Mundarija

<!-- postning qolgan qismi -->
```

## Sarlavhalar

Sarlavhalar haqida bir narsani e'tiborga olish kerak. Saytning blog postlarida postning asosiy sarlavhasi sifatida sarlavha (old mavzudagi sarlavha) ishlatiladi. Shuning uchun postdagi sarlavhaning qolgan qismi h2 \~ h6 dan foydalanishi kerak.

Ushbu qoida majburiy emas, lekin vizual, mavjudlik va SEO maqsadlarida tavsiya etiladi.

## Blog kontenti uchun rasmlarni saqlash

> Note! Agar "style optimized images" dan foydalanish kerak bo'lasa [MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files) dan foydalaning.

### `src/assets/` papkasi ichiga (tavsiya)

Siz rasmlarni `src/assets/` papkasiga yuklashingiz mumkin. Ushbu rasmlar Astro tomonidan avtomatik ravishda optimallashtiriladi: [Image Service API](https://docs.astro.build/en/reference/image-service-reference/).

Rasmlardan markdownda foydalanish uchun namuna (`@assets/`).

`namuna.jpg` rasmi quyidagi joyda joylashgan `/src/assets/images/namuna.jpg`.

```md
![bu-yerda-rasm-korsatiladi](@assets/images/namuna.jpg)

<!-- YOKI -->

![bu-yerda-rasm-korsatiladi](../../assets/images/namuna.jpg)

<!-- img tegidan yoki Image componentidan bu yerda ishlamaydi ❌ -->
<img src="@assets/images/namuna.jpg" alt="nimadir">
<!-- ^^ Bu XATO -->
```

Rasmlarni yuklashdan oldin siqish(compress) qilish tavsiya qilinadi. Bu saytning umumiy tezligiga ta'sir qiladi.

### OG Image

Agar postda OG tasviri ko'rsatilmagan bo'lsa, standart OG tasviri joylashtiriladi. Garchi shart bo'lmasa-da, postga tegishli OG tasviri old masalada ko'rsatilishi kerak. OG tasviri uchun tavsiya etilgan oʻlcham **_1200 X 640_** px.
