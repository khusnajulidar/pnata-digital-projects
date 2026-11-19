# Keputusan Integrasi Mockup dan UI

Status: keputusan desain yang telah dikonfirmasi pengguna  
Proyek: P'Nata Digital — Yuk Belajar Adab Makan

Dokumen ini mencatat ketentuan implementasi visual yang wajib diikuti. Ketentuan ini melengkapi GDD dan UI Implementation Spec; tidak mengubah mekanik gameplay, materi pembelajaran, atau kesepakatan lain yang sudah disetujui.

## 1. Mockup adalah tampilan final

- Mockup final yang telah disetujui harus ditampilkan secara utuh dan apa adanya.
- Dilarang mengubah, membersihkan, mengedit, memotong, merekonstruksi, atau mengganti bagian dari gambar mockup tanpa persetujuan pengguna.
- Seluruh tulisan, ilustrasi, ornamen, warna, kartu, tombol, dan tata letak yang tercetak pada mockup merupakan bagian dari desain final.
- Dilarang menumpuk elemen UI visual (teks, panel, kartu, ikon, dekorasi, atau kontrol bergaya) di atas mockup apabila hal itu mengubah, menggandakan, menutupi, atau mengganggu tampilan aslinya.

## 2. Peran HTML, CSS, dan JavaScript

- HTML/CSS/JavaScript berfungsi menghidupkan interaksi di balik tampilan mockup, bukan membuat ulang desain visualnya.
- Area interaktif boleh dibuat transparan dan ditempatkan tepat di atas tombol atau pilihan yang memang tergambar pada mockup, semata-mata sebagai area sentuh/klik.
- Area sentuh transparan tidak boleh menambahkan tampilan visual baru atau menggeser/menutupi desain.
- Posisi dan ukuran area sentuh harus disesuaikan dengan aset mockup yang benar dan diuji pada ukuran layar yang didukung.
- Respons permainan, termasuk pemeriksaan jawaban dan audio feedback otomatis, harus berjalan tanpa merusak atau menutupi tampilan mockup.

## 3. Tulisan atau pilihan yang berbeda antaraktivitas

- Jika suatu aktivitas membutuhkan tulisan, pertanyaan, atau pilihan yang berbeda, utamakan penggunaan aset mockup yang memang sesuai dengan aktivitas tersebut.
- Jika aset mockup yang sesuai belum tersedia, jangan langsung menimpa atau menumpuk teks HTML di atas gambar mockup.
- Cari dan evaluasi solusi terbaik terlebih dahulu dengan tetap menjaga mockup final tidak berubah dan tidak tertutup elemen UI.
- Solusi alternatif hanya boleh diterapkan setelah kesesuaiannya dengan desain dan keputusan pengguna dipastikan. Bila solusi mengharuskan perubahan aset atau tampilan mockup, minta persetujuan pengguna terlebih dahulu.
- Tidak ada kewajiban untuk membuat versi "latar bersih" atau menghapus tulisan dari mockup. Usulan tersebut tidak disetujui dan tidak boleh dijadikan pendekatan implementasi.

## 4. Feedback dan kontrol

- Feedback jawaban muncul otomatis setelah anak menjawab; tidak diperlukan tombol feedback.
- Audio feedback benar/salah tetap mengikuti keputusan dan aset audio proyek.
- Feedback visual, bila digunakan, tidak boleh berupa panel atau elemen tambahan yang mengubah/menutupi mockup. Pilih mekanisme yang sesuai dengan desain final dan spesifikasi yang telah disetujui.
- Tombol pada mockup diaktifkan melalui area interaksi transparan yang selaras dengan posisi tombol pada gambar.

## 5. Larangan perubahan kesepakatan

- Jangan mengubah mekanik, urutan aktivitas, isi pembelajaran, materi agama, aset final, perilaku audio, atau aturan progres berdasarkan asumsi teknis.
- Jika implementasi tampak bertentangan dengan mockup atau catatan proyek, hentikan perubahan pada bagian tersebut, periksa kembali dokumen dan keputusan sebelumnya, lalu cari solusi yang menjaga semua kesepakatan.
- Perubahan yang berdampak pada keputusan yang telah disetujui harus dikonfirmasi kepada pengguna sebelum diterapkan.

## Prinsip ringkas

**Mockup adalah antarmuka visual final. Kode hanya mengaktifkan fungsi interaktif yang mengikuti mockup; bukan mengubah atau menggantikan desainnya.**
