# Proyek Game Adab Makan

Repository kerja proyek game edukasi interaktif P'Nata tentang adab makan untuk anak usia 3–4 tahun.

## Status proyek

- [x] GDD dasar disepakati
- [x] Lima misi dan 25 aktivitas dirancang serta disetujui
- [x] Pedoman ilustrasi diperjelas
- [x] Spesifikasi interaksi dan alur 25 aktivitas disepakati
- [ ] Verifikasi akhir materi agama, lafaz, audio, dan terjemahan
- [x] Implementasi fondasi awal UI dan gameplay (prototipe)
- [ ] Penyempurnaan mekanik seluruh aktivitas dan integrasi aset mockup
- [ ] Integrasi audio
- [x] Sebelas mockup visual final disiapkan dan disetujui
- [ ] Pengujian
- [ ] Deployment Netlify

## Status implementasi awal (18 November 2026)

File awal game telah dibuat: `index.html`, `css/style.css`, dan `js/app.js`. Prototipe sudah memuat navigasi dasar, peta lima misi, data 25 aktivitas, respons pilihan, penyimpanan progres Local Storage, serta alur penyelesaian misi.

**Pemeriksaan dan perbaikan terbaru:**
- Memperbaiki pemetaan indeks data aktivitas agar jenis aktivitas dan jawaban benar dibaca dari kolom yang tepat.
- Memperbaiki identifikasi aktivitas adegan makan bersama.
- Menyesuaikan urutan Misi 1 Aktivitas 4 menjadi cuci tangan → membaca Bismillah → mulai makan.
- Memastikan setiap kali misi dibuka, permainan dimulai kembali dari Aktivitas 1.
- Menambahkan alur Aktivitas 2: audio Bismillah harus selesai diperdengarkan sebelum pilihan teks dibuka.
- Menambahkan alur Aktivitas 5: pilih Bismillah → dengarkan bacaan sampai selesai → tombol mulai makan terbuka.
- Menambahkan simulasi Aktivitas 7: pilih tangan kanan, lalu lakukan aksi mengambil makanan.
- Menambahkan alur audio Alhamdulillah untuk Aktivitas 21.
- Menghubungkan Aktivitas 23 agar selesai setelah audio doa benar-benar selesai diputar.
- Mengunci pilihan Aktivitas 24 sampai audio doa selesai diperdengarkan, agar anak mendengar bacaan sebelum mengenalinya.
- Menyempurnakan kontrol audio dengan jeda dan putar ulang, serta slot aktivitas susun/rapikan agar dapat dioperasikan dengan sentuhan.
- Memperjelas Aktivitas 9–10 dengan instruksi sudut pandang anak dan konteks mengambil makanan terdekat dari satu wadah bersama.
- Memperjelas empat tahap Tantangan Aktivitas 20 dan instruksi interaksi sentuh/geser pada aktivitas menyusun.
- Lolos pemeriksaan sintaks JavaScript dan uji inisialisasi sederhana dengan lingkungan DOM tiruan; ini belum menggantikan pengujian interaksi di browser.

**Batasan prototipe saat ini:** file rekaman final belum diunggah sehingga alur audio belum dapat diuji sampai tuntas. Beberapa ilustrasi aktivitas masih berupa simbol sementara dan perlu diganti dengan aset mockup yang disetujui. Materi doa tetap wajib melalui pemeriksaan akhir sebelum rekaman dan publikasi. Game belum siap dipublikasikan.

**Arah audio yang disepakati:** narasi dan umpan balik menggunakan suara anak-anak yang ceria, dengan tempo pelan dan pelafalan jelas. Bacaan Bismillah, Alhamdulillah, dan doa menggunakan rekaman bacaan Arab yang benar serta terverifikasi.\n## Keputusan desain

- Target pengguna: anak usia 3–4 tahun.
- Platform: web responsif (ponsel, tablet, desktop).
- Teknologi: HTML, CSS, JavaScript.
- Penyimpanan progres: Local Storage; tanpa login.
- Hosting yang direncanakan: Netlify.
- Arah visual: **Soft 3D Playful**, palet teal, kuning, oranye, dan krem.
- Untuk setiap mockup hanya dibuat **satu versi terbaik**, bukan beberapa alternatif.
- Mockup visual ditunda sementara; pengembangan alur dan kode didahulukan.
- Halaman pembuka yang disetujui: gelas tanpa hiasan bintang.

### Pedoman ilustrasi

- Ilustrasi benda dan objek dapat digunakan, tetapi **tidak semua ilustrasi harus berupa benda/objek**.
- Karakter manusia boleh digunakan bila tindakan manusia memang diperlukan agar adegan mudah dipahami anak.
- Manusia tidak digambarkan secara utuh. Gunakan crop/potongan bagian tubuh sesuai konteks adegan.
- Wajah tidak ditampilkan lengkap; bila kepala masuk frame, batas potong dapat dibuat di bawah mata atau lebih tinggi sesuai kebutuhan. Hindari menampilkan mata.
- Bagian tubuh tertentu seperti tangan, kaki, atau tubuh bagian bawah boleh ditampilkan.
- Contoh: adegan meniup gelas dapat menampilkan bagian wajah anak dari bawah mata sampai mulut; adegan menginjak makanan dapat menampilkan kaki dan bagian bawah tubuh saja.
- Tidak menggunakan ilustrasi hewan.
- Ilustrasi harus tetap aman, tidak vulgar, tidak menakutkan, dan sesuai usia anak.

## Struktur permainan

- **5 misi dan 25 aktivitas** (5 aktivitas per misi).
- **5 bintang**, satu bintang untuk setiap misi yang selesai.
- Misi dibuka secara berurutan.
- Aktivitas dan misi yang telah terbuka dapat diulang bebas.
- Mengulang tidak menghapus atau menggandakan bintang.
- Tidak ada timer, nyawa, hukuman, leaderboard, atau skor numerik.
- Interaksi singkat, sederhana, beragam, dan ramah usia 3–4 tahun.
- Narasi utama berbahasa Indonesia; audio Arab digunakan untuk bacaan yang perlu didengar.
- Audio dapat dikendalikan pengguna. Untuk produksi, bacaan Al-Qur'an/doa harus memakai rekaman yang telah diverifikasi, bukan TTS yang belum ditinjau.

## Rancangan aktivitas yang telah disetujui

### Misi 1 — Sebelum Makan

1. **Kenali Bismillah** — anak memilih kartu بِسْمِ اللَّهِ.
2. **Dengarkan Bismillah** — anak mendengarkan pelafalan lalu memilih teks yang sesuai.
3. **Kapan Membaca Bismillah?** — anak memilih gambar kegiatan sebelum mulai makan.
4. **Urutkan Sebelum Makan** — anak menyusun tiga gambar sederhana: bersiap makan, membaca Bismillah, lalu mulai makan.
5. **Ayo Mulai Makan!** — simulasi: memilih kartu Bismillah, mendengarkan audio, lalu tombol mulai makan terbuka.

### Misi 2 — Makan dengan Tangan Kanan

6. **Kenali Tangan Kanan** — anak mengenali tangan kanan melalui ilustrasi tangan 3D tanpa tubuh/wajah; orientasi kanan-kiri harus jelas dari sudut pandang anak.
7. **Ayo Makan dengan Tangan Kanan** — simulasi memilih tangan kanan untuk mengambil makanan.
8. **Tangan Kanan Saat Makan** — anak memilih tindakan yang tepat dalam situasi makan sederhana.
9. **Ambil Makanan Terdekat** — anak memilih makanan di bagian terdekat ketika makan bersama dari satu wadah.
10. **Misi Piring Makanan** — tantangan gabungan memilih tangan kanan lalu mengambil makanan terdekat.

Catatan: adab mengambil makanan terdekat berlaku dalam konteks makan bersama dari satu wadah; jangan memberi kesan bahwa anak tidak boleh mengambil makanan yang jauh ketika makanan disajikan secara individual. Ajarkan dengan lembut dan jangan menyalahkan anak yang memiliki keterbatasan menggunakan tangan kanan.

### Misi 3 — Menghargai Makanan

11. **Jangan Mencela Makanan** — anak memilih ucapan yang baik, bukan menghina makanan.
12. **Jika Tidak Suka Makanan** — anak belajar tidak mencela makanan; tidak harus dipaksa memakan makanan yang tidak disukai, membuat tidak nyaman, atau tidak aman.
13. **Ambil Secukupnya** — anak memilih porsi yang sesuai; boleh mengambil lagi bila masih lapar. Jangan menetapkan satu ukuran porsi sebagai aturan mutlak.
14. **Jangan Menyia-nyiakan Makanan** — anak memilih tindakan yang tidak membuang makanan dengan sengaja; penyimpanan sisa makanan yang masih aman dilakukan dengan bantuan orang dewasa.
15. **Makanan adalah Nikmat Allah** — anak mengenal bahwa makanan merupakan nikmat dan rezeki dari Allah.

### Misi 4 — Adab Saat Makan dan Minum

16. **Minum dengan Tangan Kanan** — anak memilih tangan kanan untuk mengambil gelas.
17. **Jangan Bernapas ke Dalam Gelas** — anak mengenali bahwa tidak meniup atau bernapas ke dalam wadah minuman; bila masih panas, tunggu sampai aman.
18. **Minum dengan Beberapa Tegukan** — simulasi minum dengan jeda; napas dilakukan di luar wadah.
19. **Tunggu Sampai Tidak Terlalu Panas** — anak memilih menunggu makanan/minuman sampai aman dikonsumsi; ini pesan keselamatan, bukan klaim hadis khusus.
20. **Tantangan Adab Makan dan Minum** — penguatan empat kebiasaan: tangan kanan, tidak bernapas ke wadah, minum dengan jeda, dan menunggu sampai tidak panas.

### Misi 5 — Setelah Makan

21. **Kenali Alhamdulillah** — anak mengenali lafaz الْحَمْدُ لِلَّهِ.
22. **Kapan Mengucapkan Alhamdulillah?** — anak memilih situasi setelah makan sebagai salah satu waktu mengungkapkan syukur; jelaskan bahwa Alhamdulillah juga diucapkan dalam keadaan lain.
23. **Dengarkan Doa Setelah Makan** — anak mendengarkan doa melalui audio.
24. **Pilih Doa Setelah Makan** — anak mengenali doa yang telah didengar; tidak diwajibkan menghafal seluruh doa.
25. **Meja Makan Rapi** — simulasi merapikan perlengkapan makan setelah selesai.

## Prinsip pembelajaran dan respons

- Gunakan instruksi dan narasi pendek, satu langkah pada satu waktu.
- Respons salah harus lembut dan mengundang anak mencoba lagi; tidak ada hukuman atau rasa malu.
- Jangan memaksa anak menghabiskan makanan atau menyalahkan anak karena keterbatasan fisik.
- Untuk aktivitas doa, mendengarkan dan mengenali bacaan sudah cukup; hafalan bukan syarat menyelesaikan permainan.
- Pembiasaan keselamatan, kebersihan, dan kerapian tidak boleh diklaim sebagai ritual atau hadis khusus tanpa dalil yang terverifikasi.

## Prinsip materi Islam dan rujukan awal

Semua lafaz Arab, harakat, transliterasi, terjemahan, audio, dan penjelasan dalil wajib diverifikasi sebelum produksi. Rujukan berikut merupakan titik awal penelaahan, bukan pengganti pemeriksaan akhir:

- Tidak mencela makanan: Sahih al-Bukhari 5409 dan Sahih Muslim 2064c.
- Makan dari bagian yang dekat, menggunakan tangan kanan, dan membaca nama Allah: hadis Umar bin Abi Salamah, Sahih al-Bukhari (nomor penomoran dapat berbeda antar edisi; verifikasi teks dan nomor saat finalisasi).
- Tidak bernapas ke dalam wadah minuman: Sahih Muslim 267d.
- Riwayat Anas tentang minum dengan tiga kali napas/jeda di luar wadah: Sahih Muslim 2028b.
- Doa setelah makan: Jami' at-Tirmidhi 3458 dan Sunan Abi Dawud 4023; periksa redaksi dan penilaian hadis dari rujukan tepercaya sebelum rekaman.

Doa yang direncanakan untuk Aktivitas 23–24:

**Arab (perlu pemeriksaan akhir):**

الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ

**Makna:** Segala puji bagi Allah yang telah memberiku makanan ini dan menganugerahkannya kepadaku tanpa daya dan kekuatan dariku.

Catatan:
- Hadis tentang tiga kali napas dipahami sebagai jeda/bernapas di luar wadah, bukan bernapas ke dalam gelas.
- Menunggu makanan/minuman panas menjadi aman adalah pesan keselamatan, bukan larangan hadis khusus yang dinisbatkan tanpa dalil.
- Menyimpan sisa makanan yang masih aman, menjaga kebersihan, dan merapikan perlengkapan adalah pembiasaan baik; jangan menisbatkan detailnya sebagai sunnah khusus tanpa dalil.
- Pastikan redaksi doa, harakat, transliterasi, terjemahan, sumber, dan audio diperiksa sebelum implementasi.

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

Struktur di atas adalah rencana. File implementasi ditambahkan bertahap setelah spesifikasi interaksi dan pemeriksaan materi selesai.
