# KARIMUN-CSIRT — Versi HTML Statis

Versi plain HTML, CSS, dan JavaScript dari website KARIMUN-CSIRT.
Tidak memerlukan build tools, framework, atau server backend.

## Struktur

```
karimun-csirt-html/
├── index.html          # Halaman utama (Hero, Profil, Layanan, Artikel)
├── rfc2350.html        # Halaman RFC2350 (PDF viewer)
├── panduan.html        # Halaman daftar panduan
├── css/
│   └── styles.css      # Seluruh styling (design tokens, layout, komponen)
├── js/
│   └── app.js          # Navbar mobile & chatbot interaktif
└── assets/
    ├── hero-bg.jpg
    ├── karimun-csirt-logo.png
    ├── csirtkarimunpgppublickey.asc
    └── RFC-2350-KARIMUN-TTIS-v1.1_sign.pdf
```

## Cara Menjalankan

1. **Buka langsung**: double-click `index.html` di browser.
2. **Atau jalankan local server** (disarankan agar PDF viewer & iframe bekerja sempurna):

   ```bash
   # Python
   python3 -m http.server 8000

   # Node (npx)
   npx serve .
   ```

   Lalu buka <http://localhost:8000>.

## Deploy

Unggah seluruh folder ke hosting statis apa pun: Apache, Nginx, GitHub Pages,
Netlify, Vercel, cPanel shared hosting, dll.

## Fitur

- Responsive desktop & mobile
- Navbar mobile toggle (vanilla JS)
- Chatbot konsultasi keamanan siber sederhana (rule-based, vanilla JS)
- Google Maps embed untuk lokasi kantor
- Viewer PDF RFC2350
- Daftar panduan keamanan dengan tampilan tabel (desktop) & kartu (mobile)
