# Mockup 04 — Pilih Jenis Permainan
## Spesifikasi Komposisi v1.0

Status: rancangan konseptual untuk ditinjau sebelum produksi visual/HTML.  
Proyek: Petualangan Cinta Rasul — P’Nata  
Visual Master: Ekspedisi Jejak Cahaya  
Prioritas perangkat: ponsel portrait; responsif ke tablet dan laptop.

## 1. Tujuan halaman

Halaman ini muncul setelah pemain memilih salah satu wilayah pada Mockup 03 — Peta Petualangan. Halaman menampilkan tiga mode permainan yang tersedia di wilayah terpilih:
1. **TTS**
2. **Berburu Kata**
3. **Pasangkan Tokoh dan Kisahnya**

Halaman ini tidak mengubah isi bank soal, aturan permainan, atau urutan wilayah. Ia hanya menjadi pemilih aktivitas untuk wilayah yang sedang aktif.

## 2. Informasi dinamis

Halaman harus menerima dan menampilkan konteks dari halaman sebelumnya:
- Nama wilayah yang dipilih.
- Profil pemain: ADIK (kelas 1–3) atau KAKAK (kelas 4–6).
- Status penyelesaian dan progres aktivitas di wilayah tersebut, jika tersedia dari state permainan.

Nama wilayah dan profil bukan teks permanen pada gambar latar. Semuanya merupakan elemen UI dinamis. Jika indikator progres ditampilkan, nilainya harus berasal dari data aktual, bukan angka contoh yang tertanam.

## 3. Arah visual

- Pertahankan gaya 3D stylized storybook-diorama dari Visual Master Ekspedisi Jejak Cahaya.
- Gunakan palet Sand Cream, Warm Sandstone, Oasis Green, Deep Palm, Clear Sky, Calm Teal, Soft Gold, Deep Ink, dan Warm Ivory.
- Nuansa padang pasir tetap terasa sebagai lingkungan dasar; oasis dan vegetasi menjadi aksen.
- Latar dapat memakai sudut pandang area perkemahan ekspedisi atau halaman batu pasir dengan tiga meja/landmark aktivitas yang simbolik.
- Setiap mode memiliki simbol visual khas, mudah dibedakan, tanpa karakter manusia/hewan.
- Material dan pencahayaan konsisten: batu pasir, kayu, kain, logam lembut, cahaya hangat, bayangan halus.
- Hindari tampilan seperti dashboard sekolah formal atau kumpulan tombol generik.

## 4. Identitas visual tiga aktivitas

### A. TTS
- Simbol: papan teka-teki kotak-kotak, pensil/pena, gulungan petunjuk.
- Visual memberi kesan menyusun jawaban dari petunjuk.
- Jangan menampilkan kisi huruf atau jawaban aktual sebagai bagian permanen ilustrasi; grid dan konten soal harus dinamis dari bank soal.

### B. Berburu Kata
- Simbol: lembar pencarian huruf, kaca pembesar, penanda kata.
- Visual memberi kesan menemukan kata tersembunyi.
- Huruf, daftar target, dan status kata ditemukan harus dirender sebagai UI dinamis; jangan tertanam di gambar ilustrasi.
- Jangan gunakan huruf acak sebagai konten permanen di aset latar jika berpotensi disalahartikan sebagai kisi permainan aktual.

### C. Pasangkan Tokoh dan Kisahnya
- Simbol: dua kartu/ubin yang terpisah, jalur penghubung, pita atau simpul.
- Visual memberi kesan mencocokkan dua informasi.
- Jangan menampilkan nama tokoh atau isi kisah secara permanen dalam ilustrasi; semua pasangan berasal dari bank soal dan dirender dinamis.
- Gunakan ornamen kartu tanpa gambar manusia/tokoh.

## 5. Komposisi layar ponsel portrait

Urutan zona dari atas ke bawah:

1. **Header (sekitar 5–16%)**
   - Kontrol kembali ke Peta Petualangan.
   - Judul: **Pilih Permainan**.
   - Nama wilayah aktif ditampilkan sebagai label/kapsul dinamis.
   - Profil ADIK/KAKAK ditampilkan ringkas jika tidak membuat header terlalu padat.
   - Ikon P’Nata hadir sebagai watermark kecil dan samar.

2. **Instruksi ringkas (sekitar 17–23%)**
   - Teks: **Pilih permainan yang ingin kamu mainkan.**
   - Hindari penjelasan panjang.

3. **Daftar aktivitas (sekitar 25–82%)**
   - Tiga kartu besar ditumpuk vertikal pada ponsel.
   - Setiap kartu memuat ilustrasi simbolik, nama aktivitas, deskripsi satu kalimat, dan indikator progres bila datanya tersedia.
   - Kartu TTS: **TTS** — *Jawab petunjuk dan lengkapi kotak-kotaknya.*
   - Kartu Berburu Kata: **Berburu Kata** — *Temukan kata-kata tersembunyi.*
   - Kartu Matching: **Pasangkan Tokoh dan Kisahnya** — *Temukan pasangan yang tepat.*
   - Seluruh kartu dapat disentuh; target sentuh minimal 48 CSS px.
   - Jangan tampilkan angka progres/bintang yang belum didukung state permainan.

4. **Footer (sekitar 85–95%)**
   - Kontrol kembali yang jelas jika tidak ditempatkan di header.
   - Tidak perlu tombol “Mulai” kedua jika kartu aktivitas langsung membuka permainan; pilih satu pola interaksi yang konsisten.
   - Jika implementasi membutuhkan tombol konfirmasi terpisah, tampilkan hanya setelah satu aktivitas dipilih dan jelaskan statusnya dengan jelas.

## 6. Interaksi dan navigasi

- Ketuk kartu aktivitas untuk membuka halaman instruksi singkat/aktivitas terkait.
- Konteks wilayah dan profil pemain harus diteruskan ke aktivitas.
- Kartu tidak boleh mengarahkan ke mode atau wilayah lain.
- Tombol kembali membawa pemain ke Peta Petualangan tanpa menghapus progres.
- Status selesai/tersedia pada setiap mode, jika ditampilkan, harus sesuai progres aktual.
- Jangan mengunci aktivitas atau mengubah urutannya kecuali aturan game yang telah disepakati memang mengaturnya.
- Jangan menambah mekanisme pemilihan tingkat kesulitan baru; profil ADIK/KAKAK dari Mockup 02 sudah menjadi konteks tingkat permainan.

## 7. Responsivitas dan aksesibilitas

- Ponsel portrait: tiga kartu vertikal, cukup besar untuk disentuh dan mudah dibaca.
- Ponsel layar pendek: halaman dapat digulir; jangan mengecilkan label atau target sentuh secara berlebihan.
- Tablet/laptop: tiga kartu dapat disusun dalam satu baris atau grid sesuai lebar; pertahankan proporsi ilustrasi dan keterbacaan.
- Status tidak boleh dibedakan hanya dengan warna; gunakan label/ikon.
- Pastikan kontras teks terhadap kartu dan latar cukup.
- Semua judul dan deskripsi harus tetap berupa teks HTML, bukan bagian dari gambar.

## 8. Watermark dan aset

- Gunakan ikon P’Nata resmi: `petualangan-huruf-hijaiyah/PNata_Ikon_HQ_4x.png`.
- Ikon digunakan sebagai watermark pada setiap halaman tampilan game.
- Opacity awal 0.05–0.08, diuji di atas latar aktual.
- Pertahankan bentuk, warna, dan proporsi file asli.
- Jangan tampilkan logo lengkap sebagai identitas tambahan di halaman ini.

## 9. Larangan dan pemeriksaan

- Tidak menampilkan Rasulullah ﷺ, keluarga, Shahabat, ulama, manusia, hewan, avatar, atau siluet.
- Tidak menggunakan wajah/tubuh tokoh atau gambar yang menyiratkan representasi tokoh sejarah.
- Tidak menanam soal, jawaban, kisi huruf, nama tokoh, atau pasangan aktual di dalam gambar latar.
- Tidak menggunakan teks Arab dekoratif yang belum diverifikasi.
- Jangan mengubah bank soal yang telah dikunci atau mekanik permainan berdasarkan keputusan visual.
- Mockup visual harus tetap kaya detail dan selaras dengan Visual Master; jangan disederhanakan menjadi tiga tombol generik.

## 10. Checklist penerimaan

- [ ] Nama wilayah aktif dan profil pemain ditampilkan secara dinamis.
- [ ] Tiga aktivitas tampil: TTS, Berburu Kata, Pasangkan Tokoh dan Kisahnya.
- [ ] Simbol tiap aktivitas mudah dibedakan dan tidak mengandung figur manusia/hewan.
- [ ] Deskripsi singkat mudah dipahami anak.
- [ ] Kartu aktivitas membuka mode yang benar dengan konteks wilayah/profil tetap terbawa.
- [ ] Tombol kembali menuju peta tanpa menghapus progres.
- [ ] Semua indikator progres berasal dari state permainan.
- [ ] Watermark ikon P’Nata hadir kecil dan samar.
- [ ] Tampilan tetap terbaca pada ponsel, tablet, dan laptop.

## 11. Hubungan alur

- Sebelumnya: Mockup 03 — Peta Petualangan.
- Berikutnya: halaman instruksi/aktivitas untuk mode yang dipilih.
- Tiga mode menggunakan bank konten dan standar audit yang sudah ditetapkan; dokumen ini tidak mengubahnya.

---
Dokumen ini adalah spesifikasi komposisi v1.0, bukan mockup visual final atau HTML produksi.
