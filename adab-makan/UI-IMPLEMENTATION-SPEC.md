# SPESIFIKASI TEKNIS UI
## P’Nata – Yuk Belajar Adab Makan

**Status:** Keputusan disetujui  
**Ruang lingkup awal:** Peta Lima Misi (Mockup 03)  
**Pendekatan:** Gabungan — aset ilustrasi statis dan elemen UI dinamis  
**Teknologi:** HTML, CSS, JavaScript  
**Penyimpanan progres:** Local Storage

---

## 1. Keputusan Arsitektur

Implementasi UI menggunakan pendekatan gabungan:

1. Ilustrasi dan dekorasi visual dari mockup dipertahankan sebagai aset gambar.
2. Elemen yang harus merespons interaksi atau berubah mengikuti progres permainan dibuat sebagai komponen HTML/CSS yang dikendalikan JavaScript.
3. Aset statis dan komponen dinamis disusun berlapis dalam satu layout responsif.
4. Mockup menjadi acuan visual; mockup tidak harus dipasang sebagai satu gambar utuh yang menutupi seluruh layar.

Tujuan pendekatan ini adalah mempertahankan tampilan yang telah disetujui sekaligus memastikan fungsi game, responsivitas, aksesibilitas, dan pemeliharaan kode berjalan baik.

## 2. Penerapan pada Peta Lima Misi

### 2.1 Aset visual statis

Pertahankan sebagai aset gambar jika sesuai dan tersedia secara terpisah:

- Latar belakang dan dekorasi halaman.
- Ilustrasi pendukung setiap misi.
- Ornamen, tekstur, dan elemen dekoratif lain yang tidak berubah karena progres.

Jika mockup hanya tersedia sebagai satu gambar gabungan, gambar tersebut boleh digunakan sebagai referensi komposisi atau aset sementara. Untuk implementasi final, elemen yang perlu berubah status tidak boleh terkunci sebagai bagian gambar yang tidak dapat diperbarui.

### 2.2 Elemen UI dinamis

Buat elemen berikut sebagai HTML/CSS dan kendalikan dengan JavaScript:

- Kartu atau area interaksi untuk masing-masing dari lima misi.
- Status misi: terbuka, terkunci, dan bila diperlukan sudah diselesaikan.
- Ikon gembok pada misi yang terkunci.
- Indikator lima bintang.
- Area klik/tap pada kartu misi.
- Umpan balik visual saat misi dipilih atau belum dapat diakses.

Tampilan kartu, ukuran, warna, bentuk, tipografi, bayangan, dan jarak harus mengikuti mockup yang disetujui. Elemen dinamis bukan alasan untuk mengubah desain visual tanpa persetujuan.

## 3. Aturan Status Misi

Kondisi awal permainan:

- Misi 1: terbuka dan dapat dipilih.
- Misi 2–5: terkunci dan tidak dapat dimasuki.

Setelah satu misi selesai:

- Misi tersebut ditandai selesai.
- Satu bintang diberikan untuk misi tersebut.
- Misi berikutnya dibuka.
- Misi yang sudah terbuka dapat dimainkan kembali.
- Memainkan ulang misi tidak menghapus, menggandakan, atau menambah bintang.

Status yang ditampilkan pada peta harus berasal dari data progres game, bukan dari gambar statis.

## 4. Aturan Sistem Bintang

- Tampilkan tepat lima slot bintang.
- Pada kondisi awal, kelima slot belum aktif/belum diperoleh.
- Satu misi yang selesai mengaktifkan satu bintang yang bersesuaian.
- Jumlah bintang maksimum adalah lima.
- Bintang hanya diberikan satu kali per misi.
- Memuat ulang halaman atau memainkan ulang misi tidak boleh menggandakan bintang.

Gunakan satu sumber data progres sebagai dasar tampilan bintang dan status misi agar keduanya selalu konsisten.

## 5. Interaksi dan Navigasi

- Kartu misi yang terbuka dapat dipilih dengan sentuhan atau klik.
- Kartu misi yang terkunci tidak dapat membuka aktivitas.
- Status terkunci harus terlihat jelas, bukan hanya dibedakan melalui warna.
- Area interaksi harus cukup besar untuk anak usia 3–4 tahun.
- Navigasi kembali mengikuti alur layar yang telah disetujui.
- Jangan menambahkan tombol, menu, skor, timer, nyawa, atau mekanisme baru yang tidak tercantum dalam GDD.

## 6. Responsivitas

- Komposisi landscape 16:9 menjadi acuan desain utama.
- Layout harus menyesuaikan desktop, tablet, dan ponsel.
- Kartu misi, indikator bintang, dan area interaksi harus tetap terbaca serta mudah disentuh pada layar kecil.
- Jangan mengandalkan koordinat piksel tetap untuk menempatkan area klik di atas satu gambar mockup utuh.
- Gunakan layout responsif dan komponen terpisah agar posisi elemen tetap selaras saat ukuran layar berubah.
- Uji orientasi dan ukuran layar yang relevan sebelum publikasi.

## 7. Penyimpanan Progres

Gunakan Local Storage untuk menyimpan sekurang-kurangnya:

- Status penyelesaian masing-masing misi.
- Status pembukaan misi.
- Status penyelesaian aktivitas sesuai kebutuhan GDD.
- Jumlah atau daftar bintang yang sudah diperoleh.
- Status penyelesaian seluruh permainan.

Saat game dibuka kembali, UI Peta Lima Misi harus dibangun dari data progres tersimpan. Jika belum ada data, gunakan kondisi awal: hanya Misi 1 terbuka dan lima bintang belum diperoleh.

## 8. Prinsip Implementasi

- Pisahkan data progres, logika gameplay, komponen UI, dan aset visual.
- Jangan menanam status terkunci/terbuka atau bintang yang sudah diperoleh secara permanen ke dalam gambar.
- Gunakan aset gambar untuk tampilan visual yang tidak memerlukan perubahan status.
- Gunakan HTML/CSS untuk elemen yang perlu berubah, menerima input, atau memiliki status.
- Pastikan elemen dinamis tetap menyerupai desain mockup final.
- Hindari duplikasi sumber status antara kartu misi dan indikator bintang.
- Pertahankan aksesibilitas dasar: area sentuh memadai, kontras jelas, dan status tidak hanya disampaikan melalui warna.

## 9. Prinsip untuk Mockup dan Layar Berikutnya

Pendekatan gabungan ini menjadi prinsip teknis awal bagi layar lain di P’Nata:

- Elemen dekoratif dan ilustrasi yang tidak berubah dapat menjadi aset statis.
- Tombol, kontrol audio, pilihan jawaban, drag-and-drop, progress, status, dan elemen interaktif dibuat sebagai UI fungsional.
- Untuk setiap layar, tentukan terlebih dahulu bagian mana yang statis dan mana yang dinamis sebelum implementasi.
- Jangan menganggap semua elemen yang tampak pada mockup harus dirender sebagai satu gambar utuh.
- Jangan mengubah desain yang telah disetujui hanya demi kemudahan implementasi; cari pemisahan aset dan UI yang tetap menjaga kesetiaan visual.

---

**Keputusan ini menetapkan pendekatan implementasi UI Peta Lima Misi dan menjadi pedoman teknis untuk pemisahan aset visual statis serta elemen UI dinamis pada proyek P’Nata.**
