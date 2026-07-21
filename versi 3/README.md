# Nexa — Tema Korporat & Jasa Profesional (Modern Edition)

Website statis (HTML + CSS + sedikit JS untuk animasi) untuk segmen
**Korporat & Jasa Profesional** — versi modern & muda, jauh dari kesan
"tua/klasik".

## Perubahan dari versi sebelumnya

- **Font**: dari serif klasik (Fraunces) → **Plus Jakarta Sans + Inter**
  (sans-serif natural, modern, dipakai brand seperti Linear, Vercel, Stripe).
- **Palet**: dari Navy tua + Gold → **Indigo #6366F1 → Cyan #22D3EE**
  di atas background **Cloud White #FAFBFF**. Terasa segar dan tech.
- **Logo**: bentuk baru berupa **kotak rounded dengan gradient
  indigo→cyan** dan monogram "N↗" — kesan startup profesional, bukan lambang
  korporat klasik.
- **Animasi**: aurora blob background, scroll-reveal bertingkat, animated
  counter statistik, marquee logo klien, tilt 3D pada hero card, glass badge
  mengambang, gradient border pada hover kartu, dan gradient teks pada
  headline.

## Struktur

```
korporat-jasa-profesional/
├── index.html
├── css/style.css
├── images/*.jpg
└── README.md
```

Buka `index.html` langsung di browser.

## Palet Warna

| Token       | Hex       | Fungsi                          |
|-------------|-----------|---------------------------------|
| Primary     | `#6366F1` | Indigo — warna utama            |
| Accent      | `#22D3EE` | Cyan — aksen gradient           |
| Background  | `#FAFBFF` | Cloud white                     |
| Surface     | `#FFFFFF` | Kartu / permukaan               |
| Text        | `#0F172A` | Slate 900 (bukan hitam pekat)   |
| Muted       | `#64748B` | Body sekunder                   |
| Border      | `#E5EAF3` | Garis halus                     |
| CTA BG      | `#1E1B4B → #0E7490` | Gradient section ajakan aksi |

Semua warna diatur lewat CSS variables di `:root` — cukup ubah di sana
untuk mengganti seluruh tema.

## Tipografi

- **Plus Jakarta Sans** — headline & UI (natural, geometric, modern)
- **Inter** — body text
- Dimuat via Google Fonts.

## Section

1. **Hero** — split layout + gambar bertumpuk + glass badges mengambang + counter animasi
2. **Marquee klien** — logo bergulir tanpa henti
3. **Layanan** — 3 kartu dengan hover-zoom gambar
4. **Tentang** — gambar + badge rating
5. **Metodologi** — 4 langkah, hover berubah gradient penuh
6. **Tim** — 3 profil dengan hover-zoom
7. **Insight** — 3 kartu artikel, garis atas gradient saat hover
8. **CTA** — gradient section + glass form
9. **Footer**

## Efek Animasi

- Aurora blob melayang di background (float 18s).
- Scroll reveal dengan cubic-bezier & stagger delay.
- Animated counter statistik hero.
- Marquee logo klien (30s loop, mask fade di tepi).
- Tilt 3D mengikuti kursor pada hero card.
- Hover: card lift + gradient overlay + image zoom + underline gradient.
- `prefers-reduced-motion` dihormati.


## Revisi Tambahan
- Susunan asli dipertahankan.
- Ditambahkan fitur gelap/terang.
- Menu mobile ditambahkan agar menu tetap bisa dipakai.
- Animasi scroll dan hover dibuat sedikit lebih halus.
- Ditambah hiasan kecil di hero tanpa mengubah layout utama.
