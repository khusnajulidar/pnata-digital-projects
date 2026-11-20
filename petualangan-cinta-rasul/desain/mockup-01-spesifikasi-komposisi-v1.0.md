# Mockup 01 — Halaman Pembuka
## Spesifikasi Komposisi UI v1.0

**Proyek:** Petualangan Cinta Rasul  
**Brand:** P’Nata  
**Tanggal:** 20 November 2026  
**Status:** Spesifikasi komposisi disiapkan; menunggu pemasangan aset logo resmi dan pemeriksaan visual gabungan.

---

## 1. Tujuan

Membuat halaman pembuka yang mengundang anak memasuki permainan, memperkenalkan identitas P’Nata, dan menampilkan judul dengan jelas tanpa mengalahkan ilustrasi lingkungan Kandidat D.

## 2. Aset latar

Gunakan aset eksplorasi yang telah dipilih sebagai dasar:

- `desain/eksplorasi-background/mockup-01-background-kandidat-d.jfif`

Kandidat D dipertahankan: lanskap 3D miniatur, gerbang oasis, jalur batu, bukit sandstone, tanaman, dan langit lapang. Aset ini masih berstatus dasar visual terpilih, belum diklaim sebagai hasil final produksi.

Jangan mengganti atau membuat ulang latar tanpa alasan yang disepakati. Jangan menambahkan teks, logo, tombol, atau panel UI ke dalam file latar.

## 3. Komposisi portrait

Panduan proporsi untuk kanvas portrait; nilai dapat disesuaikan setelah uji perangkat.

| Zona | Area vertikal | Elemen | Arahan |
|---|---:|---|---|
| A | 4–12% | Logo resmi P’Nata | Ringkas, proporsional, memiliki ruang napas. |
| B | 13–25% | Judul permainan | Paling menonjol; maksimal dua baris bila diperlukan. |
| C | 25–33% | Subjudul | Ukuran lebih kecil, tetap mudah dibaca. |
| D | 34–76% | Ilustrasi Kandidat D | Gerbang dan jalur menjadi fokus; jangan tertutup panel besar. |
| E | 80–91% | Tombol MULAI PETUALANGAN | Tombol besar, kontras, mudah disentuh. |

Teks:
- Judul: **Petualangan Cinta Rasul**
- Subjudul: **Mengenal Rasulullah ﷺ, Keluarga, dan Para Shahabat**
- Tombol utama: **MULAI PETUALANGAN**
- Akses sekunder opsional: **Tentang Permainan** (ikon informasi kecil; hanya jika tidak membuat layar penuh sesak).

## 4. Gaya UI

- Panel judul: gunakan bidang ivory/cream yang lembut atau teks dengan outline/shadow halus bila kontras langit sudah memadai. Jangan menambahkan panel masif.
- Judul: sans-serif display yang bulat dan ramah anak; tetap jelas pada layar kecil.
- Subjudul: sans-serif sederhana, line-height lega, maksimal 2–3 baris pada lebar ponsel.
- Tombol: bentuk rounded, tampak berlapis/berdimensi halus, warna utama Oasis Green atau Deep Palm dengan aksen Soft Gold seperlunya.
- Label tombol tetap teks HTML, bukan teks yang menyatu dengan ilustrasi.
- Area sentuh tombol minimal 48 CSS px; sasaran lebih besar dianjurkan.
- Bayangan lembut, tidak berlebihan; hindari glow, bevel tajam, atau ornamen yang membuat UI tampak seperti game generik.

## 5. Perilaku

- Ketuk **MULAI PETUALANGAN** → menuju layar Pilih Profil (Mockup 02).
- Ketuk **Tentang Permainan** → membuka panel/modal ringkas berisi tujuan permainan, sasaran usia, dan petunjuk dasar; panel dapat ditutup dan tidak menghilangkan progres.
- Jika akses sekunder membuat layar terlalu padat, hilangkan dari halaman pembuka dan letakkan informasi pada menu berikutnya.

## 6. Responsivitas

Uji setidaknya:
- Ponsel portrait tinggi (sekitar 9:16).
- Ponsel portrait yang lebih pendek.
- Tablet portrait.
- Laptop/desktop.

Aturan:
- Jangan mengandalkan koordinat piksel tetap.
- Gunakan safe area atas/bawah.
- Pertahankan judul, subjudul, dan tombol dalam area aman.
- Pada layar lebar, jangan meregangkan ilustrasi hingga proporsinya rusak; gunakan komposisi terpusat dengan batas lebar konten.
- Jika layar pendek, rapatkan jarak zona sebelum mengecilkan ukuran tombol atau teks utama.

## 7. Larangan dan pemeriksaan

- Jangan menggambar ulang logo dengan teks biasa atau meminta generator membuat logo.
- Jangan menanam judul/tombol ke file latar.
- Jangan menambahkan manusia, hewan, siluet tokoh, atau representasi Rasulullah ﷺ, keluarga, dan Shahabat.
- Jangan menambahkan kaligrafi atau tulisan Arab dekoratif yang belum diverifikasi.
- Jangan menutup landmark gerbang dan jalur dengan elemen UI.
- Jangan menyederhanakan kualitas latar menjadi gradien generik atau placeholder.

## 8. Checklist penerimaan

- [ ] Menggunakan Kandidat D yang dipilih.
- [ ] Logo resmi P’Nata terpasang tanpa perubahan bentuk.
- [ ] Judul dan subjudul terbaca jelas pada ponsel.
- [ ] Gerbang dan jalur tetap menjadi fokus ilustrasi.
- [ ] Tombol utama terlihat jelas dan mudah disentuh.
- [ ] Semua teks dan kontrol merupakan elemen UI terpisah.
- [ ] Tombol menuju Mockup 02.
- [ ] Tampilan diuji pada beberapa rasio layar.
- [ ] Tidak ada unsur ilustrasi yang melanggar standar adab.

## 9. Ketergantungan sebelum mockup visual final

Logo resmi P’Nata harus diambil dari aset brand asli. Jika aset tersebut sudah ada di repository, gunakan file yang sama; jika belum dapat ditemukan, minta tautan GitHub atau lokasi folder dari pemilik aset. Jangan mengganti dengan logo sementara buatan sendiri.

Setelah logo dan latar dipasang bersama, buat satu komposisi visual final untuk ditinjau. Mockup ini belum menjadi HTML produksi.

## 10. Aset identitas P’Nata terkonfirmasi

Aset resmi tersedia di repository proyek Petualangan Huruf Hijaiyah dan dapat digunakan kembali tanpa menggambar ulang:

- Logo lengkap: `petualangan-huruf-hijaiyah/PNata_Logo_Lengkap_HQ.png`
- Ikon: `petualangan-huruf-hijaiyah/PNata_Ikon_HQ_4x.png`

Penggunaan pada proyek ini:
- **Mockup 01:** gunakan logo lengkap sebagai identitas utama di zona A.
- **Ikon aplikasi/favicon:** gunakan ikon P’Nata.
- **Watermark atau penanda kecil:** gunakan ikon jika konteks dan ukurannya sesuai.

Aturan:
1. Gunakan file asli dari repository; jangan meminta generator gambar menggambar ulang logo.
2. Pertahankan proporsi, warna, dan bentuk asli. Jangan meregangkan, memotong, atau memberi efek yang mengubah identitas.
3. Periksa transparansi dan kontras ketika ditempatkan di atas langit Kandidat D. Jika perlu, gunakan bidang ivory yang halus di belakang logo; jangan mengubah file logo.
4. Pada halaman pembuka, logo lengkap dibuat cukup jelas untuk dikenali tetapi tidak lebih dominan daripada judul permainan.
5. Jangan menambahkan ikon dan logo lengkap sekaligus jika hasilnya terasa berulang atau terlalu padat.



## 11. Penegasan penggunaan logo dan ikon P’Nata

Keputusan final:
- **Logo lengkap P’Nata** digunakan sebagai identitas utama pada halaman pembuka Mockup 01.
- **Ikon P’Nata** digunakan sebagai watermark saja pada halaman permainan atau materi lain apabila sesuai kebutuhan desain.
- Ikon tidak ditampilkan sebagai identitas kedua yang berdampingan dengan logo lengkap pada halaman pembuka, agar tidak terjadi pengulangan identitas.
- Kedua aset harus menggunakan berkas resmi asli, mempertahankan proporsi, warna, bentuk, dan transparansinya. Dilarang menggambar ulang atau mengubah bentuk aset tanpa persetujuan.
