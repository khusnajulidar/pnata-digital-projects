# MOCKUP 05 — HALAMAN PERMAINAN TTS
## Spesifikasi Komposisi dan Interaksi v1.7

Status: keputusan interaksi inti telah dikunci. Dokumen ini menambahkan rancangan visual utuh sebagai template reusable sebelum implementasi HTML.

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

## 10. Keputusan interaksi yang sudah dikunci

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

1. Bangun satu template visual TTS berdasarkan rancangan utuh pada Bagian 13.
2. Siapkan satu contoh grid dan koordinat dari materi Canva sebagai data uji.
3. Implementasikan interaksi inti dengan data contoh tersebut.
4. Uji TTS terpendek/terpanjang untuk profil ADIK dan KAKAK.
5. Cocokkan implementasi dengan mockup pada ponsel, tablet, dan laptop.

Spesifikasi ini mengunci keyboard A–Z di layar, alur memilih petunjuk lalu mengisi jawabannya secara berurutan, pemeriksaan melalui PERIKSA, penguncian jawaban benar, pengosongan isian baru setelah jawaban salah, serta rekomendasi otomatis petunjuk berikutnya. Anak tetap bebas memilih petunjuk lain yang belum selesai. Rancangan visual utuh dan urutan komponen layar dijelaskan pada Bagian 13.


## 13. Rancangan visual utuh — template reusable TTS

### 13.1 Prinsip komposisi

Satu layar permainan TTS terdiri dari lapisan latar ilustratif dan komponen antarmuka dinamis. Gunakan satu template untuk semua 39 aktivitas TTS; yang berubah adalah data wilayah, profil, petunjuk, susunan grid, jawaban, dan progres. Jangan membuat 39 desain halaman yang berbeda.

Pada ponsel portrait, urutan prioritas visual adalah:
1. orientasi singkat (kembali, wilayah, TTS);
2. petunjuk aktif;
3. papan TTS;
4. keyboard A–Z;
5. tombol PERIKSA dan umpan balik.

Papan dan keyboard adalah pusat aktivitas. Ornamen 3D tidak boleh mengambil perhatian lebih besar daripada keduanya.

### 13.2 Sketsa susunan layar ponsel

```text
┌──────────────────────────────────┐
│ ‹ KEMBALI     WILAYAH 1     ADIK │  Header ringkas
│                                  │
│          TEKA-TEKI SILANG        │  Judul aktivitas
│          Progres: 2 dari 5       │  Jika data tersedia
│                                  │
│ ┌──────────────────────────────┐ │
│ │ PETUNJUK 03 · MENURUN        │ │
│ │ [teks petunjuk dinamis...]   │ │  Panel petunjuk
│ └──────────────────────────────┘ │
│                                  │
│       PAPAN TEKA-TEKI SILANG     │
│       ┌───┬───┬───┬───┐          │
│       │ 1 │   │   │   │          │
│       ├───┼───┼───┼───┤          │  Grid dinamis
│       │   │ 2 │   │   │          │  (contoh skematis)
│       ├───┼───┼───┼───┤          │
│       │   │   │   │   │          │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ A  B  C  D  E  F  G          │ │
│ │ H  I  J  K  L  M  N          │ │
│ │ O  P  Q  R  S  T  U          │ │  Keyboard layar
│ │ V  W  X  Y  Z       DEL      │ │
│ └──────────────────────────────┘ │
│                                  │
│          [ PERIKSA ]             │
│       area umpan balik           │
└──────────────────────────────────┘
```

Sketsa ini menunjukkan urutan dan hirarki, bukan ukuran final atau contoh grid yang harus dipakai. Nomor, bentuk, dan jumlah sel mengikuti data TTS sebenarnya.

### 13.3 Latar dan atmosfer

- Gunakan latar bernuansa ekspedisi padang pasir: batu pasir, tebing berlapis, jalur perjalanan, dan detail kayu/kain.
- Nuansa gurun lebih kuat daripada oasis; tanaman hanya aksen.
- Latar boleh berupa ilustrasi 3D storybook-diorama yang kaya detail, tetapi area tengah di belakang papan dibuat lebih tenang dan kontras.
- Ornamen seperti lentera, gulungan peta, kompas, atau peti kecil ditempatkan di tepi layar atau sebagai aksen kecil.
- Jangan membuat meja, gulungan, atau ornamen menutupi area kerja.
- Hindari pola tekstur yang terlalu ramai tepat di belakang huruf dan petunjuk.

### 13.4 Panel petunjuk

- Panel ivory hangat dengan sudut membulat, bayangan lembut, dan aksen sandstone/gold.
- Nomor petunjuk dan arah (MENDATAR/MENURUN) tampil sebagai label kecil yang jelas.
- Teks petunjuk menjadi elemen paling mudah dibaca setelah papan.
- Sediakan ruang untuk petunjuk dua baris atau lebih; jangan memotong teks.
- Bila petunjuk aktif berubah, panel memperbarui isi tanpa mengganti keseluruhan layar.

### 13.5 Papan TTS

- Sel jawaban berbentuk kotak konsisten, dengan garis batas jelas dan ruang antar-sel secukupnya.
- Sel aktif mendapat satu sorotan yang sama untuk fokus rekomendasi maupun fokus pilihan manual.
- Sel terisi tetapi belum terkunci tetap dapat diedit sesuai aturan fokus.
- Sel yang menjadi bagian dari jawaban benar menampilkan status terkunci dengan jelas; status ini tidak boleh hanya dibedakan melalui warna saja.
- Sel hitam/nonaktif harus terbaca berbeda dari sel jawaban.
- Nomor petunjuk ditempatkan kecil di sudut sel awal dan tidak mengganggu huruf.
- Huruf kapital, tebal secukupnya, kontras tinggi.
- Bila grid terlalu lebar untuk ponsel, gunakan wadah grid yang dapat digeser secara horizontal atau mekanisme zoom yang terkontrol. Jangan mengecilkan sel sampai huruf dan area sentuh tidak terbaca.
- Scroll/zoom grid tidak boleh menggeser atau menutupi keyboard dan panel petunjuk secara tidak terduga.

### 13.6 Keyboard A–Z

- Susunan 7 kolom pada ponsel sebagai titik awal: 7 + 7 + 7 + 5 huruf, dengan DEL pada baris terakhir.
- Ukuran tombol mengikuti lebar perangkat; target sentuh ideal sekitar 44–48 CSS px bila ruang memungkinkan.
- Jika lebar perangkat tidak cukup, gunakan susunan adaptif atau area keyboard yang dapat digulir; jangan memaksakan tombol terlalu kecil.
- Tombol huruf memiliki bentuk konsisten, kontras tinggi, dan umpan balik tekan yang terlihat.
- DEL dibedakan secara visual tetapi tetap satu keluarga gaya dengan tombol huruf.
- Keyboard tidak memunculkan keyboard bawaan perangkat.

### 13.7 Tombol PERIKSA dan umpan balik

- Tombol PERIKSA ditempatkan setelah keyboard, mudah dijangkau ibu jari, dan hanya aktif ketika seluruh sel jawaban petunjuk aktif telah terisi.
- Gunakan gaya tombol utama P’Nata: Oasis Green/Deep Palm dengan aksen Soft Gold, bentuk membulat, kedalaman/shadow halus.
- Jawaban benar: umpan balik positif singkat; sel jawaban berubah menjadi status terkunci; petunjuk ditandai selesai.
- Jawaban salah: umpan balik ramah; isian baru untuk petunjuk aktif dikosongkan, sel yang sebelumnya terkunci tetap dipertahankan.
- Hindari animasi yang terlalu panjang atau menghalangi anak melanjutkan.

### 13.8 Watermark dan identitas

- Ikon resmi P’Nata menjadi watermark yang sangat halus pada setiap layar.
- Letakkan pada area latar yang tidak mengganggu petunjuk, huruf, atau tombol.
- Opacity awal 0.05–0.08; evaluasi pada perangkat nyata.
- Tidak ada logo lengkap pada layar permainan TTS.

### 13.9 Adaptasi tablet dan laptop

**Tablet:** gunakan ruang horizontal untuk menata panel petunjuk di atas atau di samping papan, sementara keyboard tetap dekat dengan papan. Pertahankan ukuran tombol sentuh yang nyaman.

**Laptop:** papan dapat berada di tengah dengan panel petunjuk di sisi kiri/kanan dan keyboard di bawah papan. Keyboard layar tetap digunakan sebagai input utama; jangan mengubah mekanik menjadi input keyboard fisik tanpa persetujuan.

### 13.10 Elemen yang harus tetap dinamis

Elemen berikut tidak boleh diratakan menjadi satu gambar:
- nama wilayah dan profil;
- judul/nomor petunjuk dan teks petunjuk;
- nomor sel, huruf, status sel, dan sorotan;
- keyboard dan DEL;
- PERIKSA;
- umpan balik;
- progres dan status penyelesaian.

Ilustrasi latar, ornamen, tekstur, dan dekorasi boleh berupa aset gambar. Grid, petunjuk, dan keyboard harus dibangun sebagai komponen antarmuka.

### 13.11 Data Canva yang dibutuhkan untuk satu TTS contoh

Untuk mengubah rancangan Canva menjadi papan interaktif, siapkan:
- jumlah baris dan kolom;
- koordinat setiap jawaban (baris, kolom awal, arah);
- panjang jawaban;
- teks petunjuk dan nomor petunjuk;
- kunci jawaban;
- hubungan sel persilangan;
- sel aktif dan sel nonaktif.

Canva menjadi acuan visual dan tempat menyusun rancangan puzzle. Data koordinat perlu dicatat/diturunkan secara terstruktur; mengekspor satu gambar Canva saja tidak otomatis mengubahnya menjadi papan HTML interaktif.

### 13.12 Kriteria persetujuan template

Template visual dapat disetujui bila:
1. suasana padang pasir terasa dan konsisten dengan Visual Master;
2. petunjuk, papan, dan keyboard jelas menjadi fokus;
3. layar ponsel tidak terasa sesak;
4. huruf dan tombol tetap nyaman dibaca/disentuh;
5. grid lebar tetap dapat digunakan tanpa merusak tata letak;
6. watermark halus dan tidak mengganggu;
7. semua elemen yang berubah atau interaktif tetap dinamis;
8. tidak ada tokoh, hewan, avatar, atau unsur visual yang bertentangan dengan batasan proyek;
9. satu template dapat menampung seluruh data TTS dengan variasi panjang yang wajar.

## 14. Rencana pilot implementasi template TTS

### 14.1 Keputusan penggunaan puzzle contoh

Satu puzzle cukup untuk memulai implementasi template dan menguji mekanik inti. Namun, satu puzzle belum cukup untuk menyatakan template telah teruji untuk seluruh variasi bank TTS.

**Puzzle pilot utama:** puzzle Canva dengan 8 petunjuk (halaman soal dan halaman kunci jawaban yang berpasangan). Puzzle ini dipilih karena lebih kaya persilangan dan lebih memadai untuk menguji perpindahan petunjuk, sel bersama, serta penguncian jawaban benar.

**Puzzle uji pembanding:** puzzle dengan 5 petunjuk (halaman soal dan kunci jawaban yang baru dilengkapi). Puzzle ini digunakan setelah pilot utama untuk memastikan template juga nyaman pada grid yang lebih sederhana.

### 14.2 Tahapan implementasi

1. Turunkan grid puzzle 8 petunjuk dari Canva menjadi data terstruktur: dimensi, sel aktif/nonaktif, koordinat awal jawaban, arah, panjang, petunjuk, dan kunci jawaban.
2. Verifikasi setiap koordinat dan persilangan terhadap gambar soal serta kunci jawaban. Jangan menebak koordinat yang belum terverifikasi.
3. Bangun satu halaman HTML/CSS/JS yang memakai data puzzle tersebut.
4. Implementasikan seluruh mekanik yang telah dikunci: pilih petunjuk, input A–Z di layar, fokus yang dapat dipindah, DEL, PERIKSA, jawaban benar terkunci, jawaban salah mengosongkan isian baru tanpa menghapus huruf terkunci, dan rekomendasi petunjuk berikutnya.
5. Uji alur normal, jawaban salah, jawaban benar, persilangan, pergantian petunjuk, serta tampilan ponsel portrait.
6. Masukkan puzzle 5 petunjuk sebagai data kedua tanpa membuat template atau mekanik baru.
7. Setelah dua contoh berjalan, uji sampel tambahan yang mewakili grid terpendek, terpanjang, paling lebar, dan pola persilangan yang berbeda dari keseluruhan bank 39 TTS.
8. Jika seluruh variasi sampel lolos, gunakan template yang sama untuk memasukkan data semua 39 TTS.

### 14.3 Batas kesimpulan

- Berhasilnya puzzle pilot membuktikan bahwa template dan mekanik inti dapat berjalan pada contoh tersebut.
- Berhasilnya puzzle pembanding membuktikan bahwa template dapat menangani setidaknya dua bentuk grid berbeda.
- Kelayakan untuk seluruh bank baru dapat disimpulkan setelah pengujian sampel representatif dan pemeriksaan data seluruh puzzle.
- Tidak perlu membuat desain visual baru untuk setiap halaman TTS. Variasi puzzle ditangani melalui data, bukan dengan menggandakan template.


## 15. Alur penyiapan seluruh halaman TTS dari Canva

### 15.1 Format pasangan halaman

Setiap puzzle TTS sebaiknya disiapkan sebagai satu pasangan:
- **Halaman soal:** grid kosong, nomor petunjuk, dan teks petunjuk.
- **Halaman kunci jawaban:** grid yang sama persis, dengan seluruh jawaban terisi.

Kedua halaman harus memiliki ukuran kanvas, posisi grid, ukuran sel, dan susunan nomor yang sama. Jangan mengubah tata letak grid di halaman kunci jawaban. Jika ada revisi pada puzzle, revisi kedua halaman sekaligus.

### 15.2 Standar ekspor dan penamaan

- Ekspor halaman soal dan kunci jawaban sebagai PNG berkualitas tinggi.
- Pastikan seluruh grid dan teks terlihat utuh, tidak terpotong, dan tidak buram.
- Gunakan nama berpasangan dan berurutan, misalnya `tts-01-soal.png` dan `tts-01-kunci.png`, `tts-02-soal.png` dan `tts-02-kunci.png`.
- Jika satu puzzle memerlukan lebih dari satu halaman petunjuk, gunakan nomor puzzle yang sama dengan akhiran halaman yang jelas.
- Jangan menggabungkan beberapa puzzle berbeda menjadi satu gambar yang sulit dipisahkan.

### 15.3 Informasi yang harus terbaca

Untuk setiap puzzle, pastikan tersedia:
1. nomor puzzle dan wilayah;
2. profil sasaran (ADIK/KAKAK), jika sudah ditentukan;
3. semua nomor petunjuk;
4. teks petunjuk lengkap;
5. arah setiap petunjuk (mendatar/menurun);
6. seluruh kotak grid, termasuk sel nonaktif;
7. kunci jawaban yang cocok dengan grid soal.

Jika arah atau nomor petunjuk belum tercantum jelas pada desain, sertakan catatan terpisah. Jangan mengandalkan perkiraan dari gambar yang buram.

### 15.4 Pemeriksaan sebelum dikirim untuk implementasi

- Jumlah huruf jawaban cocok dengan jumlah sel pada jalurnya.
- Setiap jawaban dimulai dari nomor petunjuk yang benar.
- Semua persilangan menghasilkan huruf yang sama.
- Ejaan jawaban pada kunci konsisten dengan materi dan sumber.
- Tidak ada kotak yang terlewat atau sel tambahan.
- Halaman soal dan kunci benar-benar menggunakan grid yang identik.

### 15.5 Proses pengolahan oleh tim implementasi

Untuk setiap pasangan yang diterima:
1. baca dan catat petunjuk serta jawaban;
2. petakan koordinat grid (baris dan kolom) untuk setiap jawaban;
3. buat data puzzle terstruktur;
4. validasi panjang jawaban dan seluruh persilangan secara otomatis maupun visual;
5. cocokkan hasil rekonstruksi dengan halaman soal dan kunci Canva;
6. baru masukkan data yang lolos validasi ke template permainan.

**Penting:** antum boleh terus menyusun seluruh halaman TTS dari bank soal sambil template pilot dikembangkan. Tidak perlu menunggu template selesai. Namun, bila ada revisi pada halaman Canva yang sudah dipetakan, beri tahu agar data puzzle yang bersangkutan diperbarui dan diuji ulang.


## 15.6 Hasil pemetaan koordinat pilot 8 petunjuk

Data terstruktur disimpan pada:
`petualangan-cinta-rasul/data/tts/pilot-02-8-petunjuk.json`

Pemetaan menggunakan indeks baris dan kolom mulai dari 0. Ukuran grid adalah 10 baris × 14 kolom. Jumlah sel aktif hasil gabungan seluruh lintasan jawaban adalah 46.

| No. | Arah | Koordinat awal (baris, kolom) | Jawaban | Panjang |
|---:|---|---:|---|---:|
| 1 | Menurun | (0, 13) | ALALAQ | 6 |
| 2 | Mendatar | (1, 9) | ALFIL | 5 |
| 3 | Menurun | (0, 9) | BANIHASYIM | 10 |
| 4 | Mendatar | (4, 2) | KHADIJAH | 8 |
| 5 | Mendatar | (8, 6) | MADINAH | 7 |
| 6 | Mendatar | (6, 4) | QURAISY | 7 |
| 7 | Menurun | (1, 4) | HIRA | 4 |
| 8 | Mendatar | (2, 0) | JIBRIL | 6 |

### Hasil validasi persilangan

| Koordinat | Huruf | Petunjuk yang bertemu |
|---|:---:|---|
| (1, 13) | L | 1 dan 2 |
| (1, 9) | A | 2 dan 3 |
| (4, 9) | H | 3 dan 4 |
| (6, 9) | S | 3 dan 6 |
| (8, 9) | I | 3 dan 5 |
| (4, 4) | A | 4 dan 7 |
| (2, 4) | I | 7 dan 8 |

Pemeriksaan otomatis awal menghasilkan:
- 8 lintasan jawaban berada dalam batas grid;
- tidak ditemukan konflik huruf pada persilangan;
- 7 sel persilangan teridentifikasi;
- 46 sel aktif terbentuk dari gabungan seluruh jawaban.

**Status:** peta koordinat awal lolos pemeriksaan struktural. Tahap berikutnya tetap perlu mencocokkan tampilan grid hasil render dengan gambar Canva, kemudian menguji interaksi permainan. Validasi koordinat bukan pengganti pengujian visual dan uji bermain.


## 15.7 Uji dua dataset pada satu template

Prototipe `petualangan-cinta-rasul/prototipe/tts-pilot-02.html` kini memuat dua dataset yang dapat dipilih melalui kontrol PILIH PUZZLE:
- Pilot 01: 5 petunjuk, grid 8 × 12.
- Pilot 02: 8 petunjuk, grid 10 × 14.

Keduanya menggunakan fungsi render dan mekanik interaksi yang sama. Data puzzle dipisahkan dari tampilan agar penambahan puzzle baru tidak memerlukan pembuatan halaman HTML baru.

Hasil pemeriksaan struktur koordinat kedua dataset:
| Dataset | Petunjuk | Ukuran grid | Sel aktif | Persilangan | Konflik |
|---|---:|---:|---:|---:|---:|
| Pilot 01 | 5 | 8 × 12 | 29 | 4 | 0 |
| Pilot 02 | 8 | 10 × 14 | 46 | 7 | 0 |

Pemeriksaan ini memastikan semua lintasan berada di dalam grid dan huruf yang bertemu pada persilangan sama. Ini belum menggantikan pengujian langsung di browser pada perangkat nyata.

### Catatan QA interaksi yang masih harus diuji
- Menyelesaikan petunjuk yang berbagi sel, lalu berpindah ke petunjuk lain.
- Memastikan sel persilangan yang sudah terkunci tidak bisa diubah atau dihapus.
- Memilih sel yang sudah berisi huruf tetapi belum terkunci.
- Menghapus huruf pada sel fokus dengan DEL.
- Menekan PERIKSA sebelum semua sel terisi (harus tetap nonaktif).
- Jawaban salah membersihkan isian yang belum terkunci tanpa menghapus huruf persilangan terkunci.
- Mengganti dataset mengosongkan progres puzzle sebelumnya dan membangun grid baru.
- Membandingkan hasil render grid dengan kedua halaman Canva pada layar ponsel dan desktop.

**Status:** satu template telah disiapkan untuk dua variasi data. Tahap selanjutnya adalah uji browser dan penyempurnaan visual sesuai Visual Master.


## 15.8 Perbaikan fokus sel dan watermark prototipe

Pada pemeriksaan kode lanjutan ditemukan satu kondisi tepi pada perpindahan fokus: ketika sel setelah huruf yang baru dimasukkan merupakan sel terkunci dan tidak ada sel editable lain setelahnya, fokus sebelumnya dapat bergeser ke sel terkunci. Ini bertentangan dengan aturan bahwa sel terkunci tidak boleh menjadi sel pilihan.

Perbaikan pada prototipe:
1. Fungsi perpindahan fokus kini hanya mencari sel editable berikutnya.
2. Jika tidak ada sel editable berikutnya, fokus tetap berada pada sel editable terakhir yang baru diisi; fokus tidak dipindahkan ke sel terkunci.
3. Huruf yang sudah ada tetapi belum terkunci tetap dapat menjadi fokus berikutnya.
4. Ditambahkan watermark ikon resmi P’Nata dengan transparansi rendah (opacity 0.06), tanpa menampilkan logo lengkap pada halaman permainan.

Pemeriksaan logika terarah setelah perbaikan:
- melompati sel persilangan terkunci menuju sel editable berikutnya: **lulus**;
- mempertahankan fokus ketika sisa lintasan hanya berisi sel terkunci: **lulus**;
- tetap menuju sel berikutnya meskipun sel tersebut sudah berisi huruf yang belum terkunci: **lulus**;
- tidak memindahkan fokus dari sel terakhir ke sel terkunci: **lulus**.

**Batas pengujian:** pemeriksaan di atas adalah uji logika fungsi perpindahan fokus, bukan uji browser menyeluruh. Interaksi visual, DEL, PERIKSA, jawaban salah/benar, pergantian dataset, serta perbandingan dengan Canva tetap harus diuji langsung di browser dan pada ukuran layar sasaran.


## 15.9 Perbaikan hasil audit kode awal

Pada audit kode prototipe TTS Pilot 02 ditemukan dua hal yang langsung diperbaiki:
1. Karakter literal `\\n` yang tersisip di antara aturan CSS dan media query dibersihkan menjadi pemisah baris normal.
2. Petunjuk nomor 3 untuk jawaban `BANIHASYIM` diperjelas menjadi: “Nama bani dari Quraisy yang menjadi asal keluarga Rasulullah ﷺ, sebagaimana disebut dalam hadis Sahih Muslim 2276.” Tujuannya membedakan jawaban ini dari petunjuk nomor 6 yang jawabannya `QURAISY`.

**Status perbaikan:** perubahan tersimpan di GitHub pada commit `91bcb417bb5634418b1f3f8bca1019235f7dc201`. File hasil commit telah diambil ulang dan diperiksa: pemisah CSS sudah bersih dan redaksi petunjuk baru sudah ada.

**Catatan QA:** perubahan ini merupakan perbaikan kode dan redaksi, belum merupakan uji browser. Kecocokan redaksi dengan konteks hadis serta tampilan grid terhadap Canva tetap masuk daftar pemeriksaan sebelum TTS dinyatakan final.


## 15.10 Perbaikan lanjutan interaksi dan keyboard

Audit lanjutan menemukan dua penyempurnaan pada prototipe:
1. Tombol DEL sebelumnya menjadi item ke-27 pada grid keyboard tujuh kolom, sehingga bergabung pada baris huruf terakhir. Kini tombol DEL ditempatkan pada baris tersendiri dan dibatasi lebarnya agar mudah dikenali.
2. Pesan jawaban benar sebelumnya dapat terhapus ketika sistem otomatis memilih petunjuk berikutnya. Kini pesan keberhasilan ditampilkan kembali setelah perpindahan petunjuk.

**Pemeriksaan setelah perubahan:**
- perubahan CSS tombol DEL ditemukan pada file hasil pengambilan ulang;
- alur pesan jawaban benar setelah pemilihan petunjuk berikutnya ditemukan pada file hasil pengambilan ulang;
- JavaScript berhasil melewati pemeriksaan sintaks.

**Batas pengujian:** pemeriksaan sintaks bukan uji interaksi browser. Perlu pengujian langsung untuk memastikan pesan terlihat dengan durasi yang nyaman, tombol DEL berada pada baris tersendiri pada berbagai lebar layar, dan semua mekanik berjalan sesuai spesifikasi.


## 15.11 Sinkronisasi redaksi dataset Pilot 02

Audit silang antara prototipe HTML dan dataset JSON menemukan bahwa petunjuk nomor 3 (jawaban `BANIHASYIM`) telah diperbarui pada HTML, tetapi masih menggunakan redaksi lama pada JSON. Ini berisiko membuat redaksi berbeda ketika data kelak dipisahkan dari prototipe.

Perbaikan:
- Redaksi pada `data/tts/pilot-02-8-petunjuk.json` disamakan dengan redaksi pada prototipe.
- Redaksi yang digunakan: “Nama bani dari Quraisy yang menjadi asal keluarga Rasulullah ﷺ, sebagaimana disebut dalam hadis Sahih Muslim 2276.”
- File JSON berhasil diperbarui dan disimpan pada commit `424af403ec605beafe1ce0c0fe436ed8f7f7373a`.

Temuan arsitektur untuk tahap integrasi:
- Saat ini data puzzle masih ditulis ulang di dalam objek JavaScript `PUZZLES` pada HTML, sementara file JSON disimpan terpisah.
- Untuk menghindari perbedaan data pada produksi, tahap integrasi perlu menetapkan satu sumber data utama (JSON), lalu prototipe/mesin permainan membaca data dari sumber tersebut. Untuk versi offline, data JSON dapat dibundel/ditanam saat proses build sehingga tidak membutuhkan koneksi internet.
- Sebelum perubahan arsitektur itu dilakukan, setiap perubahan isi puzzle harus disinkronkan ke kedua tempat dan diperiksa ulang.

**Status QA:** sinkronisasi redaksi Pilot 02 selesai. Audit logika persilangan melalui browser dan perbandingan visual terhadap Canva masih belum dilakukan; jangan menyatakan pilot lulus uji bermain sebelum tahap tersebut selesai.


## 15.12 Simulasi skenario persilangan Pilot 02

Dilakukan pemeriksaan logika berbasis data lintasan Pilot 02 untuk dua urutan penyelesaian, termasuk satu percobaan jawaban salah. Ini merupakan simulasi aturan data dan mekanik, bukan pengujian browser terhadap antarmuka HTML.

Hasil pemeriksaan struktur:
- 46 sel aktif.
- 7 titik persilangan.
- Seluruh 7 persilangan memiliki huruf yang sama dari kedua jawaban.
- Tidak ditemukan koordinat di luar batas grid 10 × 14.

Skenario A — petunjuk menurun lebih dahulu:
- Urutan: 1, 3, 7, 2, 4, 5, 6, 8.
- Seluruh 8 jawaban dapat diselesaikan.
- Seluruh 46 sel akhirnya terkunci.

Skenario B — petunjuk mendatar lebih dahulu:
- Urutan: 2, 4, 5, 6, 8, 1, 3, 7.
- Seluruh 8 jawaban dapat diselesaikan.
- Seluruh 46 sel akhirnya terkunci.

Skenario C — jawaban salah sebelum penyelesaian:
- Huruf yang belum terkunci pada lintasan aktif terhapus setelah jawaban salah.
- Huruf yang sudah terkunci dari jawaban persilangan tetap dipertahankan.
- Setelah percobaan ulang, seluruh puzzle tetap dapat diselesaikan.

**Batas hasil:** simulasi ini memvalidasi konsistensi koordinat dan aturan yang dimodelkan. Belum membuktikan bahwa event handler, DOM, fokus visual, tombol DEL, dan tombol PERIKSA pada file HTML berjalan benar di browser. Pengujian browser nyata tetap wajib sebelum status pilot dinyatakan lulus.

## 15.13 Integrasi awal background Desert Oasis ke TTS Pilot 02

Aset latar yang dipilih:
- `desain/eksplorasi-background/Colourful Desert Oasis Townscape.png`
- URL aset dipanggil langsung dari GitHub Raw agar prototipe menggunakan satu file gambar yang tersimpan di repositori.

Perubahan awal pada `prototipe/tts-pilot-02.html`:
1. Mengganti latar gradien polos dengan ilustrasi background gurun/oasis.
2. Menambahkan lapisan warna lembut di atas gambar agar kontras antarmuka tetap terjaga.
3. Menjadikan area judul TTS sebagai panel ivory semi-transparan agar judul tetap terbaca.
4. Menjaga panel petunjuk, papan TTS, keyboard, tombol PERIKSA, tombol bantuan, dan watermark sebagai elemen HTML/CSS terpisah; tidak diratakan ke dalam gambar.
5. Menambahkan aturan background responsif untuk layar sempit, dengan prioritas tampilan ponsel.

**Status:** integrasi CSS awal tersimpan di GitHub pada commit `8d6f56c07bd2e1777e69412a8ad6c88bce1f4d8d`. File diambil ulang dan diperiksa; referensi background, aturan mobile, panel judul, data puzzle, keyboard, bantuan, dan tombol PERIKSA tetap ditemukan.

**Batas QA:** ini baru integrasi awal kode. Belum dilakukan pemeriksaan visual langsung di browser/perangkat, belum dipastikan pemotongan gambar pada berbagai rasio layar, dan belum dilakukan uji permainan menyeluruh setelah perubahan. Tahap berikutnya adalah membuka prototipe pada desktop dan ponsel, mengevaluasi keterbacaan serta crop background, lalu menyetel posisi/overlay berdasarkan hasil nyata. Mekanik permainan tidak sengaja diubah pada tahap ini.
