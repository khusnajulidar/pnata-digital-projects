# MOCKUP 05 — HALAMAN PERMAINAN TTS
## Spesifikasi Komposisi dan Interaksi v1.1

Status: metode input jawaban telah diputuskan; detail alur pemeriksaan dan perpindahan petunjuk mengikuti mekanik permainan yang akan difinalkan.

Dokumen ini melanjutkan Visual Master **Ekspedisi Jejak Cahaya** dan standar implementasi pada `STANDAR-DESAIN-IMPLEMENTASI-GAME.md`. Mockup 05 adalah layar aktivitas TTS setelah anak memilih wilayah dan jenis permainan.

## 1. Tujuan layar

Membantu anak memahami petunjuk, melihat kotak TTS, mengisi jawaban melalui kontrol sentuh yang ramah anak, dan menerima umpan balik yang jelas. Layar harus terasa sebagai bagian dari petualangan, bukan formulir atau kuis generik.

## 2. Konteks dinamis

Data yang ditampilkan berasal dari alur dan bank permainan:
- profil ADIK (Kelas 1–3) atau KAKAK (Kelas 4–6);
- wilayah dan judul aktivitas;
- petunjuk aktif;
- susunan kotak, persilangan, dan jawaban TTS;
- status jawaban, umpan balik, dan progres.

Semua teks soal, huruf grid, nomor petunjuk, status, dan progres adalah elemen HTML/CSS/JS dinamis, bukan bagian permanen dari gambar latar.

## 3. Komposisi layar ponsel (portrait-first)

### Zona A — Navigasi dan konteks
- Tombol kembali dengan area sentuh yang nyaman.
- Label wilayah, penanda TTS, dan chip profil bila masih membantu orientasi.
- Header ringkas, tidak mengambil ruang aktivitas.

### Zona B — Judul aktivitas dan progres
- Judul/tema TTS dinamis.
- Progres hanya ditampilkan bila datanya tersedia dari sistem.
- Jangan menambahkan timer, batas percobaan, skor, atau bintang baru tanpa keputusan mekanik.

### Zona C — Panel petunjuk
- Petunjuk aktif dalam panel ivory/cream berlapis.
- Teks mudah dibaca dan menjadi fokus utama.
- Nomor atau orientasi mendatar/menurun hanya ditampilkan jika tersedia di data.
- Pada ponsel, panel berada dekat dengan papan agar anak tidak perlu menggulir bolak-balik terlalu jauh.

### Zona D — Papan TTS
- Papan menjadi pusat interaksi.
- Kotak memiliki batas dan jarak konsisten, ukuran huruf terbaca, serta area sentuh memadai.
- Kotak aktif, terisi, benar, dan sedang diperiksa memiliki keadaan visual berbeda.
- Jumlah baris/kolom, posisi persilangan, dan nomor petunjuk berasal dari data TTS final.
- Pada layar sempit, jangan mengecilkan grid sampai sulit dibaca; gunakan area gulir khusus bila memang diperlukan.
- Jangan menggunakan grid dekoratif palsu sebagai pengganti papan interaktif.

### Zona E — Keyboard huruf di layar (KEPUTUSAN DIKUNCI)
Metode input jawaban menggunakan **keyboard huruf A–Z yang tampil di dalam permainan**. Anak menyentuh tombol huruf pada layar; keyboard perangkat tidak menjadi metode input utama.

Prinsip rancangan:
- tombol huruf ditata dalam susunan yang konsisten dan mudah dikenali;
- setiap tombol memiliki area sentuh besar, target minimal sekitar 44–48 CSS px bila ruang memungkinkan;
- huruf kapital, kontras jelas, dan label tidak ambigu;
- tombol yang disentuh memasukkan huruf ke kotak aktif sesuai aturan grid;
- anak dapat melihat huruf yang telah terisi pada papan;
- sediakan kontrol koreksi/hapus hanya sesuai alur input yang disepakati;
- keyboard tidak boleh menutupi petunjuk atau bagian penting papan;
- tata letak harus responsif untuk ponsel, tablet, dan laptop.

Keyboard A–Z adalah alat input, bukan bank pilihan jawaban: seluruh huruf tersedia dan anak menentukan huruf yang diperlukan. Jangan mengubahnya menjadi pilihan huruf terbatas per soal tanpa persetujuan baru.

### Zona F — Aksi dan umpan balik
- Sediakan ruang untuk aksi pemeriksaan jika mekanik final memang memerlukannya.
- Pesan benar/belum tepat harus singkat, ramah, dan tidak mempermalukan.
- Koreksi, penghapusan, dan perpindahan petunjuk mengikuti aturan interaksi final.
- Jangan menambahkan tombol Bantuan/Petunjuk, Lewati, Reset, timer, atau batas kesempatan tanpa kesepakatan.

## 4. Arah visual

Konsisten dengan Visual Master:
- 3D stylized storybook-diorama; perpaduan dunia kaya detail dan miniatur ramah anak;
- material batu pasir, kayu, kain, dan aksen logam lembut;
- palet Sand Cream, Warm Sandstone, Oasis Green, Deep Palm, Clear Sky, Calm Teal, Soft Gold, Deep Ink, dan Warm Ivory.

Latar TTS lebih tenang daripada peta:
- nuansa ekspedisi padang pasir dan batu pasir lebih kuat daripada oasis;
- ornamen pinggir dapat berupa meja kayu, gulungan peta, batu penanda, lentera, atau peti kecil;
- jangan meletakkan ornamen di belakang petunjuk, grid, atau keyboard;
- area kerja harus lapang, kontras, dan mudah dibaca.

Tidak boleh ada manusia, hewan, avatar, siluet tokoh, penggambaran Rasulullah ﷺ/keluarga/Shahabat/ulama, benda rekaan yang diklaim sebagai peninggalan sejarah, kaligrafi Arab dekoratif tanpa sumber, atau teks/grid permanen di dalam ilustrasi.

## 5. Watermark dan identitas merek

- Gunakan ikon resmi P’Nata sebagai watermark pada layar ini.
- Watermark halus; target awal opacity CSS 0.05–0.08 dan uji keterbacaan pada latar sebenarnya.
- Jangan tampilkan ikon sebagai logo kedua yang dominan atau logo lengkap pada layar aktivitas.
- Gunakan aset resmi tanpa menggambar ulang, mengubah proporsi, atau mengubah identitasnya.

## 6. Responsivitas dan aksesibilitas

**Ponsel portrait:** petunjuk, papan, dan keyboard tersusun vertikal; keyboard tidak menutupi papan; huruf grid dan tombol mudah disentuh.

**Tablet:** manfaatkan ruang horizontal untuk memperbesar papan dan menata petunjuk/keyboard dengan lebih efisien.

**Laptop:** papan dan panel petunjuk dapat berdampingan; keyboard huruf tetap menjadi kontrol input di dalam permainan.

Uji dengan TTS terpendek dan terpanjang serta grid terlebar dari bank sebenarnya. Jangan hanya menguji contoh pendek.

## 7. Keadaan antarmuka

Rancang keadaan sesuai mekanik final:
1. aktivitas siap;
2. petunjuk aktif dan kotak belum terisi;
3. anak memilih huruf dari keyboard layar;
4. jawaban sedang diperiksa, jika pemeriksaan eksplisit digunakan;
5. jawaban benar;
6. jawaban belum tepat dan dapat dikoreksi;
7. aktivitas selesai.

Seluruh keadaan berasal dari state permainan. Jangan menampilkan status selesai atau bintang sebelum syarat penyelesaian terpenuhi.

## 8. Pemisahan aset dan implementasi

**Aset gambar:** latar/ilustrasi suasana, ornamen pinggir, tekstur dekoratif, ikon resmi P’Nata.

**HTML/CSS/JS dinamis:** navigasi, wilayah/profil, judul, petunjuk, grid, keyboard A–Z, kontrol koreksi, tombol aksi, umpan balik, progres, dan status.

Grid dibangun dari data/koordinat TTS yang disiapkan dari Canva atau sumber final. Jangan mengandalkan gambar Canva sebagai papan statis jika huruf dan status harus berubah.

## 9. Keputusan yang sudah dikunci dan hal yang masih perlu difinalkan

**Sudah dikunci:**
- metode input: keyboard huruf A–Z di layar;
- anak menyentuh tombol huruf untuk memasukkan huruf ke papan;
- keyboard perangkat bukan metode input utama;
- seluruh huruf A–Z tersedia, bukan bank huruf terbatas.

**Masih perlu ditetapkan sebelum implementasi interaksi final:**
- apakah anak memilih kotak satu per satu atau memilih petunjuk aktif lalu huruf ditempatkan otomatis pada rangkaian kotaknya;
- perilaku tombol hapus/koreksi;
- apakah jawaban diperiksa otomatis atau melalui tombol periksa;
- aturan perpindahan ke petunjuk berikutnya setelah benar.

Jangan mengasumsikan keputusan yang belum dikunci.

## 10. Kriteria evaluasi mockup

Mockup siap masuk tahap implementasi jika:
- visual konsisten dengan Mockup 01–04 dan nuansa padang pasir terasa;
- petunjuk, grid, dan keyboard menjadi fokus;
- papan terbaca pada ponsel;
- keyboard layar nyaman disentuh dan tidak menutupi konten;
- elemen dinamis terpisah dari ilustrasi;
- watermark halus;
- tidak ada ilustrasi yang melanggar batasan;
- tidak ada mekanik baru yang ditambahkan diam-diam.

## 11. Tahap berikutnya

1. Finalkan cara memilih kotak/petunjuk dan cara huruf ditempatkan.
2. Finalkan pemeriksaan jawaban, koreksi, dan perpindahan petunjuk.
3. Siapkan grid serta koordinat TTS dari materi Canva.
4. Uji TTS terpendek/terpanjang untuk profil ADIK dan KAKAK.
5. Cocokkan implementasi dengan mockup pada ponsel, tablet, dan laptop.

Spesifikasi v1.1 mengunci keyboard huruf di layar sebagai metode input, tetapi tidak menetapkan mekanik pemeriksaan dan navigasi jawaban yang belum disepakati.
