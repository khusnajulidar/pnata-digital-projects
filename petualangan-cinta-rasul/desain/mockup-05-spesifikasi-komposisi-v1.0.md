# MOCKUP 05 — HALAMAN PERMAINAN TTS
## Spesifikasi Komposisi dan Interaksi v1.6

Status: metode input dan alur pemeriksaan jawaban telah diputuskan; detail koreksi, konflik persilangan, dan perpindahan petunjuk masih perlu difinalkan.

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

## 3. Alur pengisian jawaban (KEPUTUSAN DIKUNCI)

Anak **memilih nomor petunjuk terlebih dahulu**, kemudian memilih huruf pada keyboard A–Z di layar. Huruf mengisi kotak-kotak jawaban petunjuk tersebut secara berurutan. Anak tidak perlu menyentuh kotak satu per satu.

Alur:
1. Anak mengetuk nomor/panel petunjuk yang ingin dikerjakan.
2. Sistem menyorot seluruh rangkaian kotak jawaban yang terkait dengan petunjuk itu.
3. Anak memilih huruf A–Z pada keyboard layar.
4. Huruf ditempatkan mengikuti kotak fokus/rekomendasi pada jawaban petunjuk aktif. Anak tetap dapat memilih kotak lain yang belum terkunci untuk mengisi atau memperbaikinya secara manual.
5. Anak dapat melihat rangkaian huruf yang sudah dimasukkan pada grid.
6. Setelah jawaban lengkap, proses pemeriksaan mengikuti mekanik yang akan difinalkan.

**Aturan persilangan dan kotak terkunci (KEPUTUSAN DIKUNCI):** satu kotak pada persilangan adalah satu sel yang dipakai bersama oleh dua jawaban. Setelah sebuah jawaban diperiksa benar, seluruh kotak jawaban itu dikunci. Kotak terkunci tidak dapat diubah atau ditimpa ketika anak mengerjakan petunjuk lain. Jika urutan pengisian petunjuk melewati kotak yang sudah terkunci, sistem mempertahankan huruf yang terkunci dan melanjutkan fokus/input ke kotak berikutnya yang masih dapat diisi. Huruf terkunci tetap dipakai sebagai huruf persilangan untuk jawaban berikutnya. Jangan pernah menghapus atau mengganti huruf yang sudah terkunci.

## 4. Komposisi layar ponsel (portrait-first)

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
- Kotak yang mendapat sorotan fokus/rekomendasi menggunakan satu gaya sorotan yang sama, baik fokus itu berasal dari rekomendasi sistem maupun pilihan manual anak. Anak dapat memindahkan sorotan dengan mengetuk kotak lain yang belum terkunci. Tidak ada dua gaya sorotan terpisah untuk 'rekomendasi sistem' dan 'pilihan anak'. Keadaan kotak terkunci/benar tetap memiliki penanda tersendiri yang jelas dan tidak dapat diedit.
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
- kotak yang sudah terkunci tidak dapat dipilih untuk diedit, dihapus, atau dikoreksi;
- tombol DEL menghapus hanya huruf pada kotak belum terkunci yang sedang dipilih;
- anak dapat memilih kotak belum terkunci mana pun untuk mengisi atau memperbaiki huruf secara manual;
- setelah satu huruf dimasukkan, sorotan rekomendasi bergerak ke kotak berikutnya pada urutan jawaban, termasuk jika kotak itu sudah berisi huruf; sorotan tidak mengubah isi kotak;
- keyboard tidak boleh menutupi petunjuk atau bagian penting papan;
- tata letak harus responsif untuk ponsel, tablet, dan laptop.

Keyboard A–Z adalah alat input, bukan bank pilihan jawaban: seluruh huruf tersedia dan anak menentukan huruf yang diperlukan. Jangan mengubahnya menjadi pilihan huruf terbatas per soal tanpa persetujuan baru.

### Zona F — Aksi dan umpan balik (KEPUTUSAN DIKUNCI)
- Setelah seluruh kotak jawaban untuk petunjuk aktif terisi, tampilkan tombol **PERIKSA**.
- Anak menekan PERIKSA untuk mengirim jawaban petunjuk aktif untuk diperiksa.
- Jika jawaban benar: jawaban dikunci, kotak-kotaknya ditandai benar, dan petunjuk ditandai selesai.
- Jika jawaban belum tepat: tampilkan umpan balik singkat, ramah, dan tidak mempermalukan; seluruh huruf yang baru diisikan untuk petunjuk tersebut dikosongkan kembali agar anak dapat mencoba lagi.
- Huruf pada kotak yang telah terkunci karena jawaban silang sebelumnya tetap dipertahankan dan tidak ikut dikosongkan.
- Tidak ada batas jumlah percobaan yang ditambahkan.
- Jangan menambahkan tombol Bantuan/Petunjuk, Lewati, Reset, timer, atau batas kesempatan tanpa kesepakatan baru.
- Setelah jawaban benar, sistem otomatis menyoroti petunjuk berikutnya yang belum selesai sebagai rekomendasi. Anak tetap bebas memilih petunjuk lain yang belum selesai dan mengerjakannya lebih dahulu. Sorotan berpindah mengikuti pilihan anak; setelah jawaban benar, sistem kembali merekomendasikan petunjuk belum selesai berikutnya.

## 5. Arah visual

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

## 6. Watermark dan identitas merek

- Gunakan ikon resmi P’Nata sebagai watermark pada layar ini.
- Watermark halus; target awal opacity CSS 0.05–0.08 dan uji keterbacaan pada latar sebenarnya.
- Jangan tampilkan ikon sebagai logo kedua yang dominan atau logo lengkap pada layar aktivitas.
- Gunakan aset resmi tanpa menggambar ulang, mengubah proporsi, atau mengubah identitasnya.

## 7. Responsivitas dan aksesibilitas

**Ponsel portrait:** petunjuk, papan, dan keyboard tersusun vertikal; keyboard tidak menutupi papan; huruf grid dan tombol mudah disentuh.

**Tablet:** manfaatkan ruang horizontal untuk memperbesar papan dan menata petunjuk/keyboard dengan lebih efisien.

**Laptop:** papan dan panel petunjuk dapat berdampingan; keyboard huruf tetap menjadi kontrol input di dalam permainan.

Uji dengan TTS terpendek dan terpanjang serta grid terlebar dari bank sebenarnya. Jangan hanya menguji contoh pendek.

## 8. Keadaan antarmuka

Rancang keadaan sesuai mekanik yang telah disepakati:
1. aktivitas siap;
2. petunjuk aktif dan kotak belum terisi;
3. anak memilih huruf dari keyboard layar;
4. seluruh kotak petunjuk aktif telah terisi dan tombol PERIKSA tersedia;
5. jawaban sedang diperiksa setelah PERIKSA ditekan;
6. jawaban benar: terkunci dan petunjuk selesai;
7. jawaban belum tepat: umpan balik tampil, huruf baru pada petunjuk itu dikosongkan kembali, sedangkan kotak terkunci tetap terisi;
8. seluruh aktivitas selesai setelah semua kondisi penyelesaian terpenuhi.

Seluruh keadaan berasal dari state permainan. Jangan menampilkan status selesai atau bintang sebelum syarat penyelesaian terpenuhi.

## 9. Pemisahan aset dan implementasi

**Aset gambar:** latar/ilustrasi suasana, ornamen pinggir, tekstur dekoratif, ikon resmi P’Nata.

**HTML/CSS/JS dinamis:** navigasi, wilayah/profil, judul, petunjuk, grid, keyboard A–Z, kontrol koreksi, tombol aksi, umpan balik, progres, dan status.

Grid dibangun dari data/koordinat TTS yang disiapkan dari Canva atau sumber final. Jangan mengandalkan gambar Canva sebagai papan statis jika huruf dan status harus berubah.

## 10. Keputusan yang sudah dikunci dan hal yang masih perlu difinalkan

**Sudah dikunci:**
- setelah seluruh kotak untuk petunjuk aktif terisi, anak menekan tombol PERIKSA;
- jika benar, jawaban dikunci dan petunjuk ditandai selesai;
- jika belum tepat, anak mendapat umpan balik dan boleh memperbaiki;
- tidak ada batas percobaan yang ditambahkan;
- metode input: keyboard huruf A–Z di layar;
- anak menyentuh tombol huruf untuk memasukkan huruf ke papan;
- keyboard perangkat bukan metode input utama;
- seluruh huruf A–Z tersedia, bukan bank huruf terbatas;
- anak memilih petunjuk terlebih dahulu;
- huruf yang dipilih mengisi kotak yang sedang dipilih/fokus;
- sorotan rekomendasi berpindah ke kotak berikutnya dalam urutan jawaban setelah input, sekalipun kotak itu sudah berisi huruf;
- anak bebas memilih kotak belum terkunci lain untuk mengisi atau mengoreksi secara manual;
- tombol DEL menghapus huruf pada kotak belum terkunci yang sedang dipilih;
- kotak persilangan merupakan sel bersama dan hurufnya harus konsisten.

**Masih perlu ditetapkan sebelum implementasi interaksi final:**
- detail tampilan/animasi saat sistem melewati kotak persilangan yang sudah terkunci;
- apakah anak dapat menghapus satu huruf yang belum terkunci sebelum menekan PERIKSA, atau hanya mengosongkan seluruh isian setelah jawaban salah.

Jangan mengasumsikan keputusan yang belum dikunci.

## 11. Kriteria evaluasi mockup

Mockup siap masuk tahap implementasi jika:
- visual konsisten dengan Mockup 01–04 dan nuansa padang pasir terasa;
- petunjuk, grid, dan keyboard menjadi fokus;
- papan terbaca pada ponsel;
- keyboard layar nyaman disentuh dan tidak menutupi konten;
- elemen dinamis terpisah dari ilustrasi;
- watermark halus;
- tidak ada ilustrasi yang melanggar batasan;
- tidak ada mekanik baru yang ditambahkan diam-diam.

## 12. Tahap berikutnya

1. Finalkan perilaku koreksi dan konflik huruf pada kotak persilangan.
2. Finalkan pemeriksaan jawaban dan perpindahan petunjuk.
3. Siapkan grid serta koordinat TTS dari materi Canva.
4. Uji TTS terpendek/terpanjang untuk profil ADIK dan KAKAK.
5. Cocokkan implementasi dengan mockup pada ponsel, tablet, dan laptop.

Spesifikasi ini mengunci keyboard A–Z di layar serta alur memilih petunjuk lalu mengisi jawabannya secara berurutan. Pemeriksaan menggunakan tombol PERIKSA; jawaban benar dikunci dan petunjuk ditandai selesai, sedangkan jawaban belum tepat dapat diperbaiki tanpa batas percobaan yang ditentukan. Aturan kotak terkunci, pengosongan isian setelah jawaban salah, dan rekomendasi otomatis petunjuk berikutnya telah dikunci. Anak tetap bebas memilih petunjuk lain yang belum selesai. Perbedaan visual antara kotak yang dipilih secara manual dan kotak yang hanya mendapat sorotan rekomendasi perlu dipastikan pada desain visual.
