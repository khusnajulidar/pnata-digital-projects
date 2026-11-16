# Petualangan Huruf Hijaiyah P’Nata

Game edukasi interaktif untuk anak usia 4–8 tahun.

## File utama
- **index.html** — satu-satunya file utama untuk menjalankan game.

## Menjalankan proyek
Buka folder ini menggunakan VS Code + Live Server, atau jalankan server lokal:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000/`.

Jangan memindahkan `index.html` keluar dari folder proyek karena semua aset memakai jalur relatif `assets/...`.

## Struktur folder
```
petualangan-huruf-hijaiyah/
├── index.html
├── assets/
│   ├── audio/
│   │   ├── nama/
│   │   └── original/
│   ├── brand/
│   └── mockup/
│       └── misi-5-istana-juara/
└── docs/
    └── brand/
```

## Misi 5 – Istana Juara
Tujuh mockup final berada di `assets/mockup/misi-5-istana-juara/`.
Setiap ruang memiliki 5 soal. Ruang 4 menggunakan 4 slot dan 4 pilihan huruf, dengan titik awal urutan diacak dari 29 huruf Hijaiyah.

## Catatan pengelolaan
Versi-versi HTML lama dan paket duplikat dibersihkan dari folder aktif. Riwayat commit GitHub tetap menyimpan perubahan sebelumnya sehingga file lama masih dapat dipulihkan dari riwayat.
