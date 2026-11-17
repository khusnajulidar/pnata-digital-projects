# MASTER GAME DESIGN DOCUMENT (GDD)
## P’Nata – Yuk Belajar Adab Makan

**Status:** Acuan utama spesifikasi gameplay yang telah disetujui  
**Target pengguna:** Anak usia 3–4 tahun  
**Platform:** Game edukasi berbasis web, responsif  
**Teknologi rencana:** HTML, CSS, JavaScript  
**Penyimpanan progres:** Local Storage  
**Hosting rencana:** Netlify  
**Jumlah misi:** 5  
**Jumlah aktivitas:** 25  

---

# 1. Tujuan Produk

P’Nata – Yuk Belajar Adab Makan merupakan game edukasi interaktif untuk mengenalkan adab makan dan minum kepada anak usia dini.

Game dirancang agar anak dapat:
- Mengenali dan mempraktikkan adab makan dan minum secara sederhana.
- Mengenal bacaan Bismillah, Alhamdulillah, dan doa setelah makan.
- Belajar melalui gambar, audio, pilihan jawaban, simulasi, dan drag-and-drop.
- Mengulang aktivitas tanpa tekanan atau hukuman.

Pembelajaran harus berlangsung dengan suasana menyenangkan, sederhana, positif, dan sesuai tahap perkembangan anak.

# 2. Sasaran dan Prinsip Gameplay

## Sasaran
- Anak usia 3–4 tahun.
- Dapat dimainkan pada ponsel, tablet, dan komputer.
- Antarmuka mudah dipahami meskipun anak belum lancar membaca.

## Prinsip utama
1. Tidak menggunakan batas waktu.
2. Tidak menggunakan sistem nyawa.
3. Tidak memberikan hukuman ketika anak salah menjawab.
4. Tidak menggunakan leaderboard.
5. Tidak menampilkan skor angka yang membebani anak.
6. Anak boleh mencoba kembali.
7. Aktivitas dan misi yang telah terbuka dapat dimainkan ulang.
8. Mengulang aktivitas tidak mengurangi atau menggandakan bintang.
9. Petunjuk tersedia pada setiap aktivitas.
10. Audio Ulang tersedia pada aktivitas yang menggunakan audio.

# 3. Sistem Misi dan Progres

Game terdiri dari lima misi yang dikerjakan secara berurutan. Setiap misi memiliki lima aktivitas.

| Misi | Tema | Aktivitas |
|---|---|---:|
| 1 | Sebelum Makan | 1–5 |
| 2 | Makan dengan Tangan Kanan | 6–10 |
| 3 | Menghargai Makanan | 11–15 |
| 4 | Adab Saat Makan dan Minum | 16–20 |
| 5 | Setelah Makan | 21–25 |

## Sistem bintang
- Satu misi yang diselesaikan memperoleh satu bintang.
- Total maksimal lima bintang.
- Bintang diberikan satu kali untuk setiap misi.
- Aktivitas yang sudah selesai dapat diulang tanpa mengubah jumlah bintang.
- Misi berikutnya terbuka setelah misi sebelumnya selesai.

## Penyimpanan progres
Gunakan Local Storage untuk menyimpan status misi yang telah terbuka, status penyelesaian setiap aktivitas, jumlah bintang, dan status penyelesaian game. Progres tetap tersimpan pada perangkat dan browser yang sama setelah halaman dimuat ulang atau browser ditutup.

# 4. Alur Layar Game

1. **Halaman Pembuka** — identitas P’Nata dan tombol mulai.
2. **Halaman Petunjuk Umum** — cara bermain dengan kalimat singkat dan ilustrasi.
3. **Peta Misi** — lima misi, status terkunci/terbuka, dan bintang.
4. **Halaman Aktivitas** — instruksi, ilustrasi, area interaksi, Petunjuk, dan Audio Ulang jika diperlukan.
5. **Halaman Penyelesaian Misi** — ucapan selamat dan bintang yang diperoleh.
6. **Halaman Penutup** — rangkuman keberhasilan dan lima bintang.

Navigasi harus konsisten dan mudah disentuh.

# 5. Spesifikasi Gameplay 25 Aktivitas

## MISI 1 — SEBELUM MAKAN
**Tujuan:** Anak mengenal kebiasaan membaca Bismillah sebelum makan.

### Aktivitas 1 — Kenali Bismillah
- Jenis interaksi: memilih kartu.
- Anak memilih kartu بِسْمِ اللَّهِ dari beberapa kartu tulisan Arab.
- Jawaban benar memperoleh respons positif; jawaban salah memberi kesempatan mencoba kembali.

### Aktivitas 2 — Dengarkan Bismillah
- Jenis interaksi: audio dan memilih teks.
- Anak mendengarkan rekaman Bismillah lalu memilih kartu tulisan Arab yang sesuai.
- Tersedia Audio Ulang.

### Aktivitas 3 — Kapan Membaca Bismillah?
- Jenis interaksi: memilih gambar.
- Anak memilih gambar yang menunjukkan membaca Bismillah sebelum mulai makan.

### Aktivitas 4 — Urutkan Sebelum Makan
- Jenis interaksi: drag-and-drop.
- Anak menyusun tiga gambar: (1) bersiap untuk makan, (2) membaca Bismillah, (3) mulai makan.
- Tiga kartu gambar dipindahkan ke tiga tempat urutan.
- Drag-and-drop mendukung sentuhan pada tablet dan ponsel.

### Aktivitas 5 — Ayo Mulai Makan!
- Jenis interaksi: tombol dan audio.
- Anak mengetuk kartu Bismillah; audio diputar; tombol “Mulai Makan” kemudian dapat digunakan untuk menyelesaikan aktivitas.

## MISI 2 — MAKAN DENGAN TANGAN KANAN
**Tujuan:** Anak mengenal adab makan menggunakan tangan kanan dan mengambil makanan terdekat ketika makan bersama dari satu wadah.

**Ketentuan visual khusus:** Untuk aktivitas yang membutuhkan tangan, gunakan ilustrasi tangan 3D tanpa harus menampilkan tubuh atau wajah. Pada adegan makan bersama, gunakan sudut pandang dari sisi anak yang melihat ke arah wadah makanan bersama. Orang tua dapat terlihat dari bagian badan hingga bawah tanpa wajah atau mata. Sisi anak hanya menampilkan tangan dan sedikit bagian tubuh yang diperlukan. Posisi makanan dekat dan jauh harus jelas, dan orientasi kanan-kiri tidak boleh membingungkan.

### Aktivitas 6 — Kenali Tangan Kanan
- Jenis interaksi: memilih gambar.
- Anak memilih ilustrasi tangan kanan.
- Orientasi tangan harus jelas dari sudut pandang anak.

### Aktivitas 7 — Ayo Makan dengan Tangan Kanan
- Jenis interaksi: simulasi.
- Anak memilih tangan kanan untuk mengambil sendok atau makanan.
- Animasi memperlihatkan gerakan tangan menuju makanan.

### Aktivitas 8 — Tangan Kanan Saat Makan
- Jenis interaksi: memilih tindakan yang benar.
- Anak memilih gambar yang menunjukkan makan menggunakan tangan kanan.

### Aktivitas 9 — Ambil Makanan Terdekat
- Jenis interaksi: memilih makanan.
- Adegan memperlihatkan satu wadah makanan bersama.
- Anak melihat makanan dari sisi tempat duduknya.
- Orang tua terlihat makan dari sisi berlawanan, tanpa wajah.
- Anak memilih makanan yang berada paling dekat dengannya.

### Aktivitas 10 — Misi Piring Makanan
- Jenis interaksi: tantangan gabungan.
- Anak terlebih dahulu memilih tangan kanan, kemudian memilih makanan yang paling dekat pada wadah bersama.
- Kedua pilihan harus benar untuk menyelesaikan tantangan.

**Catatan pembelajaran:** Aturan mengambil makanan terdekat diterapkan dalam konteks makan bersama dari satu wadah. Jangan menyampaikan seolah-olah anak tidak boleh mengambil makanan yang letaknya lebih jauh ketika makanan disajikan secara terpisah.

## MISI 3 — MENGHARGAI MAKANAN
**Tujuan:** Anak belajar tidak mencela makanan, mengambil secukupnya, dan tidak menyia-nyiakan makanan.

### Aktivitas 11 — Jangan Mencela Makanan
- Jenis interaksi: memilih respons.
- Anak memilih ucapan yang baik terhadap makanan.
- Contoh respons baik: “Alhamdulillah, makanan ini nikmat dari Allah.”
- Contoh respons yang tidak baik: mencela atau menghina makanan.

### Aktivitas 12 — Jika Tidak Suka Makanan
- Jenis interaksi: memilih tindakan.
- Anak memilih sikap tidak mencela makanan yang tidak disukai.
- Anak tidak boleh dipaksa menghabiskan makanan yang membuatnya tidak nyaman atau tidak aman.

### Aktivitas 13 — Ambil Secukupnya
- Jenis interaksi: memilih gambar.
- Anak memilih porsi yang sesuai kebutuhan.
- Anak boleh mengambil tambahan apabila masih lapar.
- Tidak menetapkan satu ukuran porsi sebagai aturan mutlak untuk semua anak.

### Aktivitas 14 — Jangan Menyia-nyiakan Makanan
- Jenis interaksi: memilih tindakan.
- Anak memilih tindakan menyimpan makanan yang masih aman dengan bantuan orang dewasa.
- Tidak mengajarkan anak menyimpan makanan sendiri tanpa pendampingan.

### Aktivitas 15 — Makanan adalah Nikmat Allah
- Jenis interaksi: memilih jawaban.
- Anak mengenal bahwa Allah adalah pemberi rezeki dan nikmat makanan.
- Aktivitas menghubungkan rasa syukur dengan kebiasaan makan.

## MISI 4 — ADAB SAAT MAKAN DAN MINUM
**Tujuan:** Anak mengenal adab menggunakan tangan kanan, tidak bernapas ke dalam wadah minum, minum dengan beberapa tegukan, dan menunggu makanan atau minuman panas menjadi aman.

### Aktivitas 16 — Minum dengan Tangan Kanan
- Jenis interaksi: memilih gambar.
- Anak memilih tangan kanan untuk memegang gelas.

### Aktivitas 17 — Jangan Bernapas ke Dalam Gelas
- Jenis interaksi: mengenali tindakan.
- Anak memilih gambar yang menunjukkan tidak meniup atau bernapas ke dalam gelas.
- Jika minuman panas, anak diajak menunggu hingga aman diminum.

### Aktivitas 18 — Minum dengan Beberapa Tegukan
- Jenis interaksi: simulasi.
- Alur: (1) anak melakukan gerakan minum, (2) gelas dijauhkan dari mulut, (3) anak mengambil napas di luar gelas, (4) anak melanjutkan minum.
- Tampilkan jeda secara jelas dan ramah anak.
- Tersedia audio petunjuk jika diperlukan.

### Aktivitas 19 — Tunggu Sampai Tidak Terlalu Panas
- Jenis interaksi: memilih gambar.
- Anak memilih tindakan menunggu makanan atau minuman hingga aman.
- Fokus utama adalah keselamatan anak.

### Aktivitas 20 — Tantangan Adab Makan dan Minum
- Jenis interaksi: tantangan gabungan.
- Anak menyelesaikan empat tantangan: (1) menggunakan tangan kanan, (2) tidak bernapas ke dalam gelas, (3) minum dengan beberapa tegukan, (4) menunggu makanan atau minuman panas menjadi aman.

## MISI 5 — SETELAH MAKAN
**Tujuan:** Anak mengenal ucapan Alhamdulillah, doa setelah makan, dan kebiasaan merapikan perlengkapan makan.

### Aktivitas 21 — Kenali Alhamdulillah
- Jenis interaksi: memilih kartu Arab.
- Anak memilih tulisan الْحَمْدُ لِلَّهِ.
- Teks dan audio harus sesuai.

### Aktivitas 22 — Kapan Mengucapkan Alhamdulillah?
- Jenis interaksi: memilih gambar.
- Anak memilih adegan setelah makan.
- Penjelasan tidak boleh memberi kesan bahwa Alhamdulillah hanya boleh diucapkan setelah makan.

### Aktivitas 23 — Dengarkan Doa Setelah Makan
- Jenis interaksi: audio dan menyimak teks.
- Anak mendengarkan rekaman doa setelah makan.
- Ketika audio diputar, layar wajib menampilkan secara bersamaan:
  1. Lafadz doa dalam tulisan Arab.
  2. Tulisan latin.
  3. Terjemahan atau arti dalam bahasa Indonesia.
- Ketiga bagian teks harus mudah dibaca dan tersusun rapi.
- Teks Arab tidak boleh diubah atau dibuat secara otomatis oleh AI tanpa verifikasi.
- Tersedia tombol Audio Ulang.
- Anak tidak diwajibkan menghafalkan seluruh doa.

### Aktivitas 24 — Pilih Doa Setelah Makan
- Jenis interaksi: audio dan memilih kartu.
- Anak dapat memutar ulang audio doa.
- Anak memilih kartu doa yang sesuai dengan audio.
- Teks pada kartu harus bersumber dari bacaan yang telah diverifikasi.
- Jika teks terlalu panjang, tampilan dapat menggunakan bagian awal doa dengan tetap menjaga kesesuaian lafadz.
- Tidak ada kewajiban menghafal seluruh doa.

### Aktivitas 25 — Meja Makan Rapi
- Jenis interaksi: drag-and-drop.
- Anak memindahkan tiga perlengkapan: piring, gelas, dan sendok.
- Setiap benda dipindahkan ke tempat yang sesuai.
- Interaksi mendukung sentuhan.
- Aktivitas hanya menggunakan perlengkapan yang aman; tidak melibatkan air panas atau alat berbahaya.
- Jika diperlukan, tampilkan pendampingan orang tua.

# 6. Petunjuk, Audio, dan Respons Interaksi

## Petunjuk
Setiap aktivitas memiliki tombol Petunjuk.
- Petunjuk menggunakan kalimat singkat.
- Dapat disertai narasi audio.
- Tidak langsung memberikan jawaban, tetapi membantu anak memahami tugas.

## Audio Ulang
Aktivitas yang memakai audio harus memiliki tombol Audio Ulang.
- Anak dapat memutar ulang kapan pun.
- Audio tidak boleh berjalan terus-menerus tanpa kendali.
- Audio harus dapat dihentikan atau diulang sesuai kebutuhan.

## Respons jawaban
- Jawaban benar: animasi atau suara positif.
- Jawaban salah: respons lembut, misalnya “Ayo coba lagi.”
- Jangan menampilkan tanda silang besar, suara menakutkan, atau respons yang mempermalukan anak.

# 7. Standar Audio

- Narasi utama menggunakan bahasa Indonesia sederhana.
- Bacaan Arab menggunakan rekaman yang benar dan telah diverifikasi.
- Hindari TTS sebagai pengganti rekaman bacaan Arab untuk versi produksi.
- Audio Bismillah, Alhamdulillah, dan doa harus sesuai teks yang ditampilkan.
- Musik latar dapat dikendalikan melalui tombol.
- Audio petunjuk, bacaan, dan efek suara harus memiliki pengaturan volume yang wajar.
- Hindari beberapa audio yang bertumpuk dan mengganggu.

# 8. Standar Visual dan Ilustrasi

## Gaya visual
**Soft 3D Playful**
- Hangat dan ceria.
- Bentuk membulat.
- Tampilan bersih dan tidak terlalu ramai.
- Terlihat premium tetapi tetap sesuai usia anak.

## Palet warna
- Teal.
- Kuning.
- Oranye.
- Krem.

## Aturan ilustrasi
- Benda, makanan, alat makan, dan objek dapat digunakan sebagai ilustrasi utama.
- Karakter manusia boleh digunakan jika adegan atau kegiatan memang memerlukannya.
- Tidak menampilkan tubuh manusia secara utuh.
- Tampilkan hanya bagian tubuh yang dibutuhkan untuk menjelaskan aktivitas.
- Jika wajah diperlukan, jangan menampilkan mata.
- Tidak menggunakan ilustrasi hewan.
- Jangan memaksakan penggunaan karakter manusia jika benda atau objek sudah cukup menjelaskan aktivitas.

## Konsistensi
- Pencahayaan, bentuk, warna, tombol, kartu, ikon, dan tipografi harus konsisten.
- Ilustrasi harus mendukung gameplay, bukan sekadar dekorasi.
- Mockup harus menggambarkan antarmuka game, bukan poster atau brosur.
- Desain dibuat dengan mempertimbangkan kemudahan implementasi HTML, CSS, dan JavaScript.

# 9. Responsivitas dan Aksesibilitas

- Mendukung layar ponsel, tablet, dan desktop.
- Tata letak landscape 16:9 menjadi acuan desain utama.
- Tetap menyesuaikan ukuran layar yang lebih kecil.
- Tombol besar dan mudah disentuh.
- Jarak antar tombol cukup.
- Drag-and-drop mendukung mouse dan sentuhan.
- Teks tidak terlalu kecil.
- Informasi penting tidak hanya dibedakan dengan warna.
- Anak tidak perlu mengetik untuk menyelesaikan aktivitas.

# 10. Standar Konten Islam dan Verifikasi

Semua konten keislaman harus diperiksa sebelum dipublikasikan.

Ketentuan:
1. Tidak membuat lafadz Arab sendiri.
2. Tidak mengubah huruf atau harakat ayat, doa, dan bacaan.
3. Memeriksa kesesuaian audio dengan teks Arab.
4. Memeriksa transliterasi latin dan terjemahan.
5. Memastikan sumber hadis dan penomorannya.
6. Membedakan antara sunnah/adab, anjuran, dan aspek keselamatan.
7. Tidak menyampaikan kebiasaan yang baik sebagai kewajiban agama jika tidak ada dasar yang tepat.
8. Tidak memaksa anak untuk menghabiskan makanan atau mengonsumsi makanan yang tidak aman.

Rujukan awal yang perlu diverifikasi sebelum produksi:
- Bismillah sebelum makan: hadis tentang perintah menyebut nama Allah sebelum makan.
- Makan dengan tangan kanan dan mengambil makanan terdekat: Sahih al-Bukhari, hadis Umar bin Abi Salamah.
- Tidak mencela makanan: Sahih al-Bukhari.
- Tidak berlebihan dalam makan dan minum: QS. Al-A’raf: 31.
- Nikmat dan rezeki makanan: QS. An-Nahl: 114.
- Tidak bernapas ke dalam wadah minum: Sahih Muslim.
- Minum dengan beberapa tegukan: Sahih Muslim.
- Memuji Allah setelah makan atau minum: Sahih Muslim.
- Doa setelah makan: riwayat Jami’ at-Tirmidzi dan Sunan Abi Dawud.

**Catatan:** Nomor hadis, kualitas riwayat, lafadz Arab, harakat, transliterasi, dan terjemahan harus diperiksa kembali dari sumber tepercaya sebelum dimasukkan ke dalam game.

# 11. Struktur Teknis yang Direncanakan

```text
adab-makan/
├── README.md
├── GDD.md
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

Pembagian fungsi:
- `app.js`: inisialisasi game.
- `navigation.js`: perpindahan layar dan navigasi.
- `missions.js`: data misi dan status pembukaan.
- `activities.js`: data dan logika 25 aktivitas.
- `audio.js`: pemutaran, pengulangan, dan pengaturan audio.
- `progress.js`: penyimpanan dan pemanggilan progres.

# 12. Tahapan Produksi

1. Finalisasi dan verifikasi GDD.
2. Verifikasi seluruh materi agama, teks Arab, latin, terjemahan, dan audio.
3. Pembuatan mockup visual berdasarkan Master Design Brief.
4. Persetujuan mockup setiap layar dan aktivitas.
5. Penyiapan aset gambar, ikon, dan audio.
6. Pengembangan struktur HTML dan CSS.
7. Implementasi logika gameplay JavaScript.
8. Implementasi progres Local Storage.
9. Pengujian pada ponsel, tablet, dan desktop.
10. Audit konten, audio, interaksi, dan pengalaman anak.
11. Deployment ke Netlify.

# 13. Kriteria Game Siap Dipublikasikan

Game dapat dinyatakan siap apabila:
- Kelima misi dan seluruh 25 aktivitas berfungsi.
- Pembukaan misi berurutan berjalan benar.
- Lima bintang dapat diperoleh tanpa duplikasi.
- Progres tetap tersimpan setelah halaman dimuat ulang.
- Semua tombol Petunjuk dan Audio Ulang berfungsi.
- Drag-and-drop dapat digunakan pada perangkat sentuh.
- Audio sesuai dengan teks.
- Teks Arab, latin, dan terjemahan telah diverifikasi.
- Tidak ada kesalahan navigasi atau tampilan.
- Seluruh ilustrasi mengikuti Master Design Brief.
- Game telah diuji pada ukuran layar yang berbeda.

---

**Dokumen ini menjadi acuan utama untuk desain mockup dan pengembangan P’Nata – Yuk Belajar Adab Makan. Perubahan terhadap spesifikasi yang telah disetujui harus dicatat dan dikonfirmasi terlebih dahulu.**
