# NexaConsult — Korporat & Jasa Profesional

Static site (HTML/CSS/JS) untuk segmen **Korporat & Jasa Profesional**
(CV Smart Inovasi — anak PKL #2).

## Fitur
- Landing modern penuh (Hero + slider gambar kiri, Layanan, Tentang, Metodologi, Tim, Insight, CTA, Footer)
- **Mode gelap / terang** (tombol di navbar, tersimpan di localStorage)
- **Menu burger** responsif untuk mobile
- **Animasi scroll reveal** (IntersectionObserver)
- **Slider hero** otomatis (3 gambar) + dot navigasi
- **Counter statistik** animasi
- **Aurora background**, floating cards, marquee logo klien
- Hover effects: card lift, image zoom, gradient underline
- 100% dapat diedit — semua warna via CSS variables

## Struktur
```
korporat-jasa-profesional/
├── index.html
├── css/style.css
├── js/main.js
└── images/  (10 gambar hero, service, team, about, cta)
```

## Palet Warna
Edit di `css/style.css` blok `:root` (mode terang) dan `html.dark` (mode gelap).

**Terang:** `#6366F1` (indigo) · `#22D3EE` (cyan) · `#A855F7` (violet) · bg `#FAFBFF`
**Gelap:**  bg `#0A0D1F` · surface `#121736` · teks `#EEF1FA`

## Font
- **Plus Jakarta Sans** (headline & UI)
- **Inter** (body)

## Cara Pakai
Buka `index.html` langsung di browser, atau serve lewat live-server.


## Revisi Corporate Fix
- Warna diubah dari ungu/cyan mencolok menjadi navy, slate, biru profesional.
- Badge pada hero dipindahkan ke dalam gambar agar tidak menabrak area kosong.
- Copywriting hero dibuat lebih sesuai untuk PT/CV, konsultan, agensi, startup, kantor hukum, dan akuntan.
- Foto hero dibuat lebih realistis dengan filter warna yang lebih corporate.
- Tombol, logo, dan highlight teks dibuat lebih tenang.
