# Proyek Game Adab Makan

Repository kerja proyek game edukasi interaktif P'Nata tentang adab makan untuk anak usia 3–4 tahun.

## Status proyek

- [x] GDD versi 1.0 disepakati
- [ ] Alur permainan terperinci
- [ ] Implementasi fondasi UI dan gameplay
- [ ] Integrasi audio
- [ ] Desain mockup final (ditunda sementara)
- [ ] Pengujian
- [ ] Deployment Netlify

## Keputusan desain yang telah disepakati

- Nama produk final ditentukan belakangan.
- Arah visual: **Soft 3D Playful**.
- Untuk setiap mockup hanya dibuat **satu versi terbaik**, bukan beberapa alternatif untuk gambar yang sama.
- Mockup visual ditunda sementara; pengembangan alur dan kode dilanjutkan terlebih dahulu.
- Halaman pembuka yang disetujui: gunakan pilihan gambar dengan gelas **tanpa hiasan bintang**.
- Target pengguna: anak usia 3–4 tahun.
- Platform: web responsif (ponsel, tablet, desktop).
- Teknologi: HTML, CSS, JavaScript.
- Penyimpanan progres: Local Storage.
- Hosting yang direncanakan: Netlify.

## Struktur permainan

- 5 misi dan 10 aktivitas.
- 5 bintang, satu bintang untuk setiap misi yang selesai.
- Misi dibuka secara berurutan.
- Aktivitas dan misi yang telah terbuka dapat diulang bebas.
- Mengulang tidak menghapus atau menggandakan bintang.
- Tidak ada timer, nyawa, hukuman, atau leaderboard.

## Materi misi

1. **Sebelum Makan** — mengenal Bismillah dan kapan membacanya.
2. **Tangan Kanan** — memilih dan mempraktikkan makan dengan tangan kanan.
3. **Menghargai Makanan** — tidak mencela makanan dan bersikap baik saat tidak menyukai makanan.
4. **Adab Saat Makan dan Minum** — tidak bernapas di dalam wadah minum dan menunggu makanan cukup aman untuk dimakan.
5. **Setelah Makan** — mengenal Alhamdulillah dan doa setelah makan yang bersumber dari hadis.

## Prinsip materi Islam

Semua lafaz Arab, terjemahan, dan penjelasan dalil harus diverifikasi sebelum masuk ke versi produksi. Jangan menisbatkan suatu larangan atau anjuran kepada hadis tertentu tanpa rujukan yang dapat dipertanggungjawabkan.

## Struktur kode yang direncanakan

```text
adab-makan/
├── README.md
├── index.html
├── assets/
│   ├── images/
│   ├── audio/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── style.css
│   ├── layout.css
│   └── animations.css
└── js/
    ├── app.js
    ├── navigation.js
    ├── missions.js
    ├── activities.js
    ├── audio.js
    └── progress.js
```

Struktur di atas adalah rencana; file implementasi akan ditambahkan bertahap setelah alur permainan dan materi aktivitas difinalisasi.
