# MOCKUP 05 — HALAMAN PERMAINAN TTS
## Spesifikasi Komposisi dan Interaksi v1.0

Status: rancangan struktur visual; mekanisme input jawaban menunggu keputusan pengguna.

Dokumen ini melanjutkan Visual Master **Ekspedisi Jejak Cahaya** dan standar implementasi pada `STANDAR-DESAIN-IMPLEMENTASI-GAME.md`. Mockup 05 adalah layar aktivitas TTS setelah anak memilih wilayah dan jenis permainan.

## 1. Tujuan layar

Membantu anak:
- memahami petunjuk TTS yang sedang dikerjakan;
- melihat kotak-kotak jawaban dengan jelas;
- memasukkan jawaban tanpa kesulitan pada layar ponsel;
- memperoleh umpan balik yang mudah dipahami;
- melanjutkan aktivitas tanpa kehilangan konteks wilayah dan profil.

Layar harus terasa seperti bagian dari petualangan, bukan halaman formulir atau aplikasi kuis generik.

## 2. Konteks dinamis

Informasi berikut berasal dari alur permainan sebelumnya dan data aktivitas yang sedang aktif:
- profil: ADIK (Kelas 1–3) atau KAKAK (Kelas 4–6);
- wilayah yang dipilih;
- judul aktivitas / tema TTS;
- petunjuk yang sedang aktif;
- susunan kotak dan jawaban yang sesuai dengan data TTS;
- status jawaban, umpan balik, dan progres.

Jangan mengunci contoh pertanyaan, jawaban, nomor soal, jumlah kotak, atau progres ke dalam gambar latar. Seluruhnya harus dirender sebagai elemen HTML/CSS/JS dari bank data.

## 3. Komposisi layar ponsel (portrait-first)

Urutan zona dari atas ke bawah:

### Zona A — Navigasi dan konteks
- Tombol kembali yang jelas dan mudah disentuh.
- Label wilayah aktif dalam ukuran ringkas.
- Penanda jenis permainan: TTS.
- Chip profil ADIK/KAKAK bila masih membantu orientasi.
- Jangan memenuhi header dengan terlalu banyak informasi.

### Zona B — Judul aktivitas dan progres
- Judul aktivitas atau tema TTS ditampilkan sebagai teks dinamis.
- Tampilkan progres hanya jika nilainya benar-benar tersedia dari sistem permainan.
- Indikator progres harus ringkas dan tidak mengambil ruang utama dari kotak TTS.
- Jangan menambahkan timer, batas percobaan, skor, atau jumlah bintang baru tanpa keputusan mekanik yang telah disepakati.

### Zona C — Panel petunjuk
- Petunjuk aktif ditampilkan dalam panel berlapis, berwarna ivory/cream.
- Teks petunjuk menjadi elemen paling mudah dibaca setelah kotak TTS.
- Jika bank data memiliki nomor atau kategori petunjuk, tampilkan sesuai data; jangan mengarang orientasi mendatar/menurun jika belum ditentukan.
- Panel dapat ditempatkan di atas grid pada ponsel agar anak membaca petunjuk sebelum mengisi.
- Jika kelak diperlukan daftar beberapa petunjuk, susun sebagai daftar ringkas yang dapat digulir tanpa menghilangkan fokus pada petunjuk aktif.

### Zona D — Papan TTS
- Papan TTS adalah pusat interaksi layar.
- Kotak harus memiliki batas jelas, jarak konsisten, dan ukuran yang dapat disentuh dengan nyaman.
- Kotak aktif diberi penanda visual yang kuat tetapi tidak menyilaukan.
- Huruf jawaban ditampilkan rata tengah dan terbaca jelas.
- Kotak terisi, kotak aktif, kotak benar, dan kotak yang sedang diperiksa harus memiliki keadaan visual berbeda.
- Jumlah baris/kolom, posisi persilangan, dan nomor petunjuk berasal dari data TTS yang sudah disiapkan, bukan asumsi desain.
- Pada layar sempit, papan tidak boleh diperkecil sampai huruf sulit dibaca. Jika diperlukan, gunakan area gulir khusus untuk papan dengan posisi dan konteks petunjuk tetap mudah ditemukan.
- Jangan menampilkan grid dekoratif palsu sebagai pengganti grid TTS sesungguhnya.

### Zona E — Area memasukkan jawaban
- Sediakan ruang antarmuka untuk metode input yang akan diputuskan.
- Metode input belum dikunci dalam spesifikasi ini.
- Jangan langsung mengasumsikan keyboard perangkat, keyboard huruf di layar, atau bank pilihan huruf.
- Area input harus terhubung dengan kotak aktif dan mendukung penggunaan anak pada perangkat sentuh.

### Zona F — Aksi dan umpan balik
- Sediakan area untuk aksi pemeriksaan jawaban apabila mekanisme permainan memang menggunakannya.
- Sediakan ruang pesan umpan balik: jawaban benar, belum tepat, atau instruksi berikutnya sesuai aturan final.
- Teks umpan balik harus singkat, ramah, tidak mempermalukan, dan mudah dipahami anak.
- Tombol hapus/koreksi hanya ditampilkan jika sesuai dengan metode input yang dipilih.
- Jangan menambahkan tombol Petunjuk/Bantuan, Lewati, Reset, atau batas kesempatan sebelum mekaniknya disepakati.
- Setelah jawaban benar, perubahan status kotak dan perpindahan ke petunjuk berikutnya mengikuti aturan permainan yang telah ditetapkan, bukan animasi yang mengubah mekanik.

## 4. Arah visual

Tetap konsisten dengan Visual Master:
- gaya 3D stylized storybook-diorama;
- perpaduan dunia petualangan yang kaya detail dengan bentuk miniatur yang ramah anak;
- material batu pasir, kayu, kain, dan aksen logam lembut;
- palet Sand Cream, Warm Sandstone, Oasis Green, Deep Palm, Clear Sky, Calm Teal, Soft Gold, Deep Ink, dan Warm Ivory.

Untuk layar TTS, latar harus lebih tenang daripada halaman peta:
- gunakan bingkai/ornamen bertema ekspedisi padang pasir pada tepi layar;
- boleh ada meja kayu, gulungan peta, batu penanda, lentera, atau peti kecil sebagai aksen;
- jangan meletakkan ornamen di belakang teks petunjuk atau kotak jawaban;
- area kerja TTS harus kontras dan lapang;
- nuansa padang pasir lebih kuat daripada oasis, tetapi vegetasi kecil boleh menjadi aksen.

Tidak boleh ada:
- manusia, hewan, avatar, siluet tokoh;
- penggambaran Rasulullah ﷺ, keluarga, Shahabat, atau ulama;
- benda rekaan yang diklaim sebagai peninggalan sejarah;
- kaligrafi Arab dekoratif yang tidak memiliki sumber/tujuan jelas;
- tulisan soal atau huruf grid yang menyatu permanen dengan ilustrasi latar.

## 5. Watermark dan identitas merek

- Gunakan ikon resmi P’Nata sebagai watermark pada layar ini.
- Watermark halus dan transparan; target awal opacity CSS sekitar 0.05–0.08, lalu uji keterbacaan di atas latar sebenarnya.
- Jangan menampilkan ikon sebagai logo kedua yang dominan.
- Jangan menampilkan logo lengkap pada layar aktivitas.
- Gunakan aset ikon resmi tanpa menggambar ulang, mengubah proporsi, atau mengubah identitasnya.

## 6. Responsivitas dan aksesibilitas

### Ponsel portrait
- prioritas utama;
- petunjuk, papan, dan input tersusun vertikal;
- jangan membuat anak harus menggulir terlalu jauh bolak-balik antara petunjuk dan kotak;
- target sentuh kontrol minimal sekitar 44–48 CSS px;
- ukuran huruf kotak harus tetap terbaca.

### Tablet
- gunakan ruang horizontal untuk memperbesar papan dan panel petunjuk;
- boleh menata petunjuk di samping papan jika tetap mudah dipahami.

### Laptop
- manfaatkan ruang untuk menempatkan papan dan panel petunjuk berdampingan;
- pertahankan fokus visual pada aktivitas, bukan dekorasi.

Semua ukuran harus diuji dengan konten TTS yang paling panjang dan grid yang paling lebar dari bank sebenarnya, bukan hanya contoh pendek.

## 7. Keadaan antarmuka yang perlu dirancang

Implementasi perlu mendukung setidaknya keadaan berikut, sepanjang sesuai mekanik final:
1. aktivitas siap dimulai;
2. petunjuk aktif dan kotak belum terisi;
3. anak sedang mengisi jawaban;
4. jawaban sedang diperiksa;
5. jawaban diterima sebagai benar;
6. jawaban belum tepat dan anak dapat memperbaikinya;
7. seluruh bagian aktivitas selesai.

Tampilan keadaan tersebut harus berasal dari state permainan. Jangan menampilkan status selesai atau bintang sebelum kondisi penyelesaiannya benar-benar terpenuhi.

## 8. Pemisahan aset dan implementasi

**Aset gambar:**
- latar/ilustrasi suasana;
- ornamen pinggir;
- tekstur atau elemen dekoratif pendukung;
- ikon resmi P’Nata.

**Elemen HTML/CSS/JS dinamis:**
- navigasi dan label wilayah;
- profil;
- judul dan petunjuk;
- papan TTS dan nomor petunjuk;
- input huruf;
- tombol aksi;
- umpan balik;
- progres dan status penyelesaian.

Grid TTS harus dibangun dari data/koordinat yang telah disiapkan dari Canva atau sumber data final. Jangan mengandalkan gambar Canva sebagai papan statis jika huruf, status, dan interaksinya harus berubah.

## 9. Hal yang belum diputuskan

Keputusan penting yang harus diminta sebelum implementasi interaksi:
- **Metode memasukkan jawaban:** keyboard perangkat, keyboard huruf di layar, atau pilihan huruf/letter bank.
- Apakah anak mengisi huruf per kotak atau mengetik satu jawaban untuk petunjuk aktif lalu sistem menempatkannya pada grid.
- Aturan perpindahan petunjuk setelah jawaban benar.
- Bentuk dan aturan pemeriksaan jawaban.

Jangan mengunci salah satu opsi tersebut berdasarkan asumsi. Spesifikasi visual dapat dilanjutkan dengan menyediakan ruang untuk area input, tetapi implementasi interaksi final menunggu keputusan.

## 10. Kriteria evaluasi mockup

Mockup 05 dapat dinilai siap masuk tahap implementasi jika:
- visualnya terasa satu dunia dengan Mockup 01–04;
- nuansa padang pasir terasa lebih kuat, tanpa membuat layar terlalu ramai;
- petunjuk dan grid menjadi fokus utama;
- papan tetap terbaca di ponsel;
- posisi area input jelas;
- seluruh elemen dinamis dapat dipisahkan dari ilustrasi;
- watermark ikon P’Nata halus;
- tidak ada tokoh/figur yang melanggar batasan ilustrasi;
- tidak ada mekanik baru yang diam-diam ditambahkan.

## 11. Hubungan dengan tahap berikutnya

Sebelum implementasi HTML final:
1. sepakati metode input jawaban;
2. siapkan grid dan koordinat TTS dari materi Canva;
3. uji contoh TTS terpendek dan terpanjang untuk profil ADIK dan KAKAK;
4. cocokkan hasil implementasi dengan mockup visual yang disetujui pada ukuran ponsel, tablet, dan laptop.

Mockup ini adalah rancangan struktur dan arah visual, bukan keputusan final atas mekanik TTS yang belum disepakati.
