# Pemetaan Mockup ke Aktivitas — P’Nata

## Prinsip tetap

- Mockup adalah artwork final: tidak diedit, dipotong, dibersihkan, diganti, atau ditimpa elemen visual HTML/CSS.
- HTML/CSS/JavaScript hanya menyediakan hit-area transparan tepat di atas kontrol yang memang sudah tercetak.
- Feedback jawaban muncul otomatis melalui audio/logika; tidak ada tombol feedback atau panel visual tambahan.
- Mockup tidak boleh dipasangkan hanya karena jenis interaksinya mirip. Teks dan ilustrasi harus sesuai.
- Peta Misi tetap mengikuti pengecualian hybrid yang telah disetujui pada `UI-IMPLEMENTATION-SPEC.md`.

## Status implementasi kode

| Aktivitas | Mockup | Status |
|---|---|---|
| 1. Kenali Bismillah | 04 | **Sudah dipetakan.** Artwork utuh; dua kartu jawaban dan navigasi memakai hit-area transparan. |
| 2. Dengarkan Bismillah | 05 | **Sudah dipetakan.** Artwork utuh; kontrol audio, dua kartu jawaban, dan navigasi memakai hit-area transparan. |
| 4. Urutkan Sebelum Makan | 06 | **Sudah dipetakan.** Artwork utuh; slot, tiga gambar aktivitas, dan navigasi memakai hit-area transparan. Posisi kartu mengikuti urutan gambar yang tercetak, bukan urutan jawaban. |
| 7, 10, 18, 20 | 07 | Kandidat simulasi, tetapi isi artwork belum berhasil diverifikasi. Belum dipasang agar tidak salah. |
| 23–24 | 10 | Kandidat doa setelah makan, tetapi isi artwork belum berhasil diverifikasi. Belum dipasang. |
| 9. Ambil Makanan Terdekat | 11 | Aset adegan tersedia sebagai ilustrasi, bukan layar aktivitas lengkap. Belum dipasang sebagai latar mockup. |
| Aktivitas lain | — | Belum ditemukan pasangan artwork yang teks dan ilustrasinya cocok. Kode tidak lagi memaksakan Mockup 04/05/06 sebagai latar generik. |

## Perubahan kode yang sudah dilakukan

- `js/app.js`: pemetaan berdasarkan ID aktivitas, bukan semata-mata jenis interaksi. Hanya aktivitas 1, 2, dan 4 yang menggunakan mockup 04, 05, dan 06.
- `css/style.css`: hit-area untuk mockup 04, 05, dan 06 dibuat transparan. Judul, instruksi, pilihan, ikon, kartu HTML, dan feedback HTML tidak lagi menutupi artwork.
- Tombol Petunjuk pada ketiga layar yang dipetakan menjalankan narasi aktivitas.
- Mockup 06 menggunakan gambar tercetak sebagai kartu yang dapat dipilih dan slot tercetak sebagai target. Tombol Lanjutkan yang tercetak menjalankan pemeriksaan urutan; setelah benar, tombol yang sama melanjutkan aktivitas.
- Aktivitas yang belum memiliki pasangan terverifikasi tidak menggunakan gambar mockup yang keliru; sementara ini tampil dengan layout aktivitas biasa. Ini bukan status visual final.

## Hal yang masih harus diselesaikan

1. Verifikasi visual Mockup 07 dan 10, kemudian pasangkan hanya ke aktivitas yang benar-benar sesuai.
2. Tentukan kebutuhan aset tambahan untuk aktivitas yang belum memiliki mockup cocok.
3. Periksa mockup layar penyelesaian misi/permainan: artwork 08 secara spesifik bertuliskan Misi 1, sehingga tidak boleh dipakai untuk semua misi tanpa penyesuaian desain yang disetujui.
4. Uji hit-area pada browser desktop dan ponsel. Posisi hit-area saat ini adalah pemetaan awal berdasarkan ukuran artwork 16:9 dan tetap memerlukan pengujian langsung.

**Status keseluruhan:** perbaikan awal untuk tiga layar aktivitas sudah ditulis ke GitHub. Masalah mockup belum dapat dinyatakan selesai untuk seluruh 25 aktivitas sampai aset yang tersisa diverifikasi dan diuji.
