# Mockup 02 — Pilih Profil
## Spesifikasi Komposisi v1.0

Status: rancangan konseptual untuk ditinjau sebelum produksi visual/HTML.  
Proyek: Petualangan Cinta Rasul — P’Nata  
Visual Master: Ekspedisi Jejak Cahaya  
Prioritas perangkat: ponsel portrait; responsif ke tablet dan laptop.

## 1. Tujuan halaman

Halaman ini muncul setelah tombol **MULAI PETUALANGAN** pada Mockup 01 ditekan. Anak memilih kelompok tingkat permainan:
- **ADIK — Kelas 1–3**
- **KAKAK — Kelas 4–6**

Pilihan menentukan tingkat kompleksitas soal, petunjuk, dan dukungan permainan. Pilihan profil bukan akun pengguna dan tidak meminta nama, umur, atau data pribadi.

## 2. Arah visual

- Gaya 3D stylized storybook-diorama, perpaduan dunia ekspedisi yang kaya detail dengan bentuk miniatur yang ramah anak.
- Nuansa padang pasir dibuat lebih kuat daripada Mockup 01: hamparan pasir dan bukit pasir berlapis, tebing batu pasir, formasi batu, jalur ekspedisi, dan gerbang/penanda perjalanan.
- Vegetasi oasis dan pohon kurma menjadi aksen, bukan elemen dominan.
- Cahaya hangat pagi/sore; palet mengikuti Visual Master: Sand Cream, Warm Sandstone, Oasis Green, Deep Palm, Clear Sky, Calm Teal, Soft Gold, Deep Ink, Warm Ivory.
- Tidak menampilkan manusia, hewan, siluet tokoh, atau representasi Rasulullah ﷺ, keluarga, Shahabat, maupun ulama.

## 3. Komposisi layar portrait

Urutan zona dari atas ke bawah:

1. **Zona identitas (sekitar 4–10%)**
   - Ikon resmi P’Nata tampil hanya sebagai watermark kecil, bukan logo utama.
   - Watermark konsisten dengan halaman lain, transparansi tinggi (target awal opacity 0.05–0.08), tidak mengganggu keterbacaan.
2. **Zona judul (sekitar 12–23%)**
   - Judul: **Pilih Profil**
   - Instruksi: **Siapa yang akan berpetualang hari ini?**
   - Tipografi besar, tebal, kontras tinggi, tetap nyaman dibaca di layar ponsel.
3. **Zona pilihan (sekitar 27–72%)**
   - Dua kartu besar ditumpuk vertikal pada ponsel agar target sentuh lebar dan mudah dipahami.
   - Kartu pertama: **ADIK** / **Kelas 1–3**.
   - Kartu kedua: **KAKAK** / **Kelas 4–6**.
   - Masing-masing kartu memiliki ilustrasi simbolik tanpa karakter manusia:
     - Adik: tas ekspedisi kecil, gulungan peta sederhana, bintang penanda.
     - Kakak: kompas, peta ekspedisi lebih detail, kaca pembesar.
   - Perbedaan ilustrasi menunjukkan suasana tingkat tantangan, bukan penilaian bahwa satu profil lebih baik.
   - Kartu terpilih mendapat bingkai Soft Gold/Oasis Green, sedikit efek terangkat, dan tanda centang yang jelas.
4. **Zona bantuan singkat (sekitar 74–82%)**
   - Teks: **Pilihan ini menyesuaikan tingkat tantangan permainan.**
   - Hindari paragraf panjang.
5. **Zona aksi (sekitar 85–94%)**
   - Tombol utama: **LANJUTKAN**.
   - Nonaktif sebelum anak memilih profil; setelah dipilih, tampil aktif dengan gaya tombol yang konsisten dengan Mockup 01.
   - Tombol membawa anak ke Mockup 03 — Peta Petualangan dan meneruskan profil yang dipilih.

## 4. Perilaku interaksi

- Kedua kartu merupakan kontrol pilihan tunggal.
- Ketuk kartu ADIK memilih kelas 1–3; ketuk KAKAK memilih kelas 4–6.
- Anak dapat mengganti pilihan sebelum menekan LANJUTKAN.
- Status pilihan harus terlihat jelas, bukan hanya perubahan warna tipis.
- Tombol LANJUTKAN tidak aktif sampai salah satu profil dipilih.
- Pilihan profil disimpan sebagai state sesi permainan agar dapat digunakan oleh sistem tingkat kesulitan.
- Jangan meminta data pribadi anak.

## 5. Responsivitas

- Ponsel portrait: kartu ditumpuk vertikal, lebar hampir penuh, ilustrasi berada di sisi kiri atau bagian atas kartu sesuai ruang; seluruh target sentuh minimal 48 CSS px.
- Ponsel dengan tinggi layar pendek: kurangi ruang dekorasi dan jarak antarelemen sebelum mengecilkan teks atau kontrol.
- Tablet/laptop: dua kartu dapat ditampilkan berdampingan, dengan lebar dan jarak seimbang; pertahankan fokus visual dan urutan informasi.
- Area aman layar dan ruang scroll diperhatikan; tombol utama tidak tertutup elemen sistem.

## 6. Aset dan watermark

- Gunakan ikon P’Nata resmi dari:
  `petualangan-huruf-hijaiyah/PNata_Ikon_HQ_4x.png`
- Ikon berfungsi sebagai watermark pada setiap halaman tampilan game, termasuk halaman ini.
- Gunakan aset asli tanpa mengubah bentuk, warna, atau proporsi.
- Transparansi dibuat lebih tinggi/samar dibanding draf sebelumnya; opacity CSS awal 0.05–0.08 dapat diuji pada latar aktual.
- Jangan menampilkan logo lengkap pada halaman pilih profil kecuali ada keputusan baru.

## 7. Batasan dan larangan

- Jangan menampilkan avatar anak, manusia, hewan, atau siluet.
- Jangan menambahkan nama pengguna, foto profil, input nama, atau pengumpulan data pribadi.
- Jangan menggunakan teks dekoratif Arab yang belum diverifikasi.
- Jangan menjadikan kartu pilihan seperti tombol browser generik; gunakan panel berlapis, tekstur, bayangan lembut, dan detail material yang konsisten dengan Visual Master.
- Jangan mengubah mekanik tingkat kesulitan atau isi bank soal tanpa audit dan persetujuan.

## 8. Checklist penerimaan

- [ ] Dua pilihan ADIK dan KAKAK terbaca jelas.
- [ ] Rentang kelas ditampilkan persis: 1–3 dan 4–6.
- [ ] Perbedaan visual kedua kartu mudah dipahami tanpa karakter manusia.
- [ ] Kartu pilihan memiliki status terpilih yang tegas.
- [ ] LANJUTKAN nonaktif sebelum pilihan dibuat.
- [ ] Watermark ikon P’Nata tampil samar dan tidak mengganggu.
- [ ] Nuansa padang pasir lebih kuat; oasis hanya aksen.
- [ ] Tampilan diuji pada ponsel portrait, tablet, dan laptop.
- [ ] Tidak ada permintaan data pribadi anak.

## 9. Hubungan dengan halaman lain

- Sebelumnya: Mockup 01 — Halaman Pembuka.
- Berikutnya: Mockup 03 — Peta Petualangan.
- Profil terpilih diteruskan untuk menentukan tingkat tantangan pada aktivitas.

---
Dokumen ini adalah spesifikasi komposisi v1.0, bukan mockup visual final atau HTML produksi.
