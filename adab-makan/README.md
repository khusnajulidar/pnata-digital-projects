# Proyek Game Adab Makan

Repository kerja proyek game edukasi interaktif P'Nata tentang adab makan untuk anak usia 3–4 tahun.

## Status proyek

- [x] GDD versi 1.0 disepakati
- [x] Target pengembangan diperluas menjadi 25 aktivitas (5 misi × 5 aktivitas)
- [x] Rancangan awal 25 aktivitas disusun
- [ ] Alur permainan terperinci dan spesifikasi interaksi tiap aktivitas
- [ ] Verifikasi akhir seluruh materi agama, lafaz, audio, dan terjemahan
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

- **5 misi dan 25 aktivitas** (5 aktivitas per misi).
- **5 bintang**, satu bintang untuk setiap misi yang selesai.
- Misi dibuka secara berurutan.
- Aktivitas dan misi yang telah terbuka dapat diulang bebas.
- Mengulang tidak menghapus atau menggandakan bintang.
- Tidak ada timer, nyawa, hukuman, atau leaderboard.
- Aktivitas dibuat singkat, sederhana, beragam, dan ramah untuk rentang usia 3–4 tahun. Hindari tugas membaca panjang, menyusun huruf Arab yang rumit, atau instruksi bertahap yang terlalu banyak.

## Rancangan awal 25 aktivitas

Rancangan ini menjadi dasar untuk spesifikasi gameplay. Kalimat, gambar, audio, dan tingkat kesulitan masih dapat disempurnakan saat peninjauan tiap aktivitas.

### Misi 1 — Sebelum Makan

1. **Kenali Bismillah** — anak memilih kartu بِسْمِ اللَّهِ di antara pilihan visual yang sederhana.
2. **Dengarkan Bismillah** — anak mendengarkan audio pelafalan lalu memilih kartu yang sesuai.
3. **Kapan Membaca Bismillah?** — anak memilih gambar kegiatan yang menunjukkan waktu sebelum mulai makan.
4. **Urutkan Sebelum Makan** — anak menyusun dua atau tiga gambar sederhana: bersiap makan, membaca Bismillah, lalu mulai makan.
5. **Ayo Mulai Makan!** — simulasi memilih tindakan yang tepat sebelum mulai makan.

### Misi 2 — Makan dengan Tangan Kanan

6. **Pilih Tangan yang Benar** — anak mengenali pilihan tangan kanan melalui ilustrasi sederhana.
7. **Ayo Makan dengan Tangan Kanan** — simulasi interaktif memilih tangan kanan untuk mengambil makanan.
8. **Tangan Kanan Saat Makan** — anak memilih tindakan yang tepat dari beberapa situasi makan sederhana.
9. **Ambil yang Terdekat** — anak memilih makanan yang berada di bagian terdekat dari posisinya ketika makan bersama dari satu wadah.
10. **Misi Piring Makanan** — permainan gabungan: memilih tangan kanan dan mengambil makanan dari bagian yang dekat.

### Misi 3 — Menghargai Makanan

11. **Jangan Mencela Makanan** — anak memilih respons yang baik ketika makanan disajikan.
12. **Jika Tidak Suka Makanan** — anak belajar bahwa makanan yang tidak disukai tidak perlu dihina atau dicela; boleh tidak mengambil/memakannya.
13. **Ambil Secukupnya** — anak memilih porsi kecil yang sesuai, dengan pilihan untuk mengambil lagi bila masih membutuhkan.
14. **Jangan Menyia-nyiakan Makanan** — anak memilih tindakan yang tidak membuang makanan dengan sengaja.
15. **Makanan adalah Nikmat Allah** — pengenalan sederhana bahwa makanan merupakan nikmat dan rezeki dari Allah.

### Misi 4 — Adab Saat Makan dan Minum

16. **Jangan Bernapas di Dalam Gelas** — anak memilih cara minum yang tidak meniup atau bernapas ke dalam wadah.
17. **Minum dengan Jeda** — anak mengenal minum beberapa teguk dan mengambil napas di luar wadah minum.
18. **Tunggu Makanan Tidak Panas** — simulasi keselamatan: menunggu makanan panas menjadi cukup aman sebelum dimakan. Sajikan sebagai panduan keselamatan, bukan sebagai kutipan hadis khusus.
19. **Bersih Sebelum Makan** — anak memilih kebiasaan menjaga kebersihan tangan sebelum makan.
20. **Petualangan Meja Makan** — permainan penguatan yang menggabungkan kebiasaan makan dan minum yang telah dipelajari.

### Misi 5 — Setelah Makan

21. **Kenali Alhamdulillah** — anak mengenali lafaz الْحَمْدُ لِلَّهِ.
22. **Kapan Mengucapkan Alhamdulillah?** — anak memilih waktu setelah selesai makan sebagai ungkapan pujian dan syukur kepada Allah.
23. **Dengarkan Doa Setelah Makan** — anak mendengarkan doa yang diriwayatkan dalam hadis.
24. **Pilih Doa yang Benar** — anak mencocokkan audio atau potongan doa dengan teks yang benar; jangan jadikan aktivitas ini tes hafalan yang berat.
25. **Meja Makan Rapi** — simulasi merapikan perlengkapan makan setelah selesai.

## Prinsip materi Islam dan rujukan awal

Semua lafaz Arab, transliterasi, terjemahan, dan penjelasan dalil harus diperiksa sebelum masuk ke versi produksi. Jangan menisbatkan suatu larangan atau anjuran kepada hadis tertentu tanpa rujukan yang dapat dipertanggungjawabkan.

Rujukan awal yang sudah ditemukan untuk ditelaah lebih lanjut:

- Tidak mencela makanan: Sahih Muslim 2064a, https://sunnah.com/muslim/36/254
- Makan dari bagian yang dekat: Sahih al-Bukhari 5377–5378, https://sunnah.com/bukhari/70/5
- Larangan bernapas di dalam wadah dan anjuran mengambil napas di luar wadah: Sahih Muslim 267d dan 2028b, https://sunnah.com/muslim/36/159 dan https://sunnah.com/muslim/36/161
- Doa setelah makan: Jami' at-Tirmidhi 3458, dinilai hasan pada rujukan tersebut, https://sunnah.com/tirmidhi/48/89; juga Sunan Abi Dawud 4023, https://sunnah.com/abudawud/34/3

Catatan penting:
- Hadis tentang tiga kali napas dipahami sebagai jeda/bernapas di luar wadah, bukan bernapas ke dalam gelas. Redaksi dan cara pengajaran untuk anak perlu dibuat jelas agar tidak membingungkan.
- Menunggu makanan panas menjadi aman untuk dimakan adalah pesan keselamatan; jangan menyebutnya sebagai larangan hadis khusus tanpa dalil yang terverifikasi.
- Menjaga kebersihan, tidak menyia-nyiakan makanan, dan merapikan perlengkapan dapat disampaikan sebagai pembiasaan baik. Jangan mengklaim setiap detailnya sebagai sunnah khusus jika tidak ada dalil yang jelas.
- Lafaz doa yang direncanakan untuk ditelaah: الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ. Periksa kembali teks Arab, harakat, transliterasi, terjemahan, dan sumber sebelum merekam audio atau memasukkannya ke game.

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
