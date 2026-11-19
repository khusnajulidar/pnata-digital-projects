# Pemetaan Mockup ke Aktivitas — P’Nata

Dokumen ini memisahkan **kecocokan visual yang sudah terverifikasi** dari pemetaan yang masih perlu pemeriksaan. Acuan: GDD, data aktivitas di `js/app.js`, inventaris file GitHub, dan pemeriksaan visual aset yang berhasil dibuka.

## Aturan yang tidak boleh dilanggar

- Mockup adalah artwork final; jangan mengedit, memotong, membersihkan, mengganti, atau menimpanya.
- Jangan menampilkan judul, instruksi, pilihan, atau tombol HTML di atas teks/komponen yang sudah tercetak pada artwork.
- Interaksi hanya melalui hit-area transparan yang tepat berada di atas kontrol tercetak.
- Feedback jawaban muncul otomatis; tidak dibuat tombol feedback.
- Jangan memakai sebuah mockup untuk aktivitas lain hanya karena tipe interaksinya sama.

## Kecocokan yang sudah diperiksa

| Aktivitas | Mockup | Hasil pemeriksaan |
|---|---|---|
| 1. Kenali Bismillah | 04 | Cocok. Artwork sudah memuat judul, pertanyaan, dua kartu Arab, Petunjuk, dan Lanjutkan. HTML tidak boleh menggandakan elemen tersebut. |
| 2. Dengarkan Bismillah | 05 | Cocok secara isi. Artwork menyebut “Dengarkan Bismillah”, menyediakan kontrol audio/ulang, dua kartu Arab, Petunjuk, dan Lanjutkan. |
| 4. Urutkan Sebelum Makan | 06 | Cocok secara isi. Artwork menyebut “Urutkan Sebelum Makan”, tiga slot bernomor, tiga gambar urutan, Petunjuk, dan Lanjutkan. |
| 9. Ambil Makanan Terdekat | 11 | Aset adegan makan bersama tersedia, tetapi bukan layar aktivitas lengkap. Perlu dipastikan bagaimana adegan itu dipakai tanpa menumpuk UI pada artwork lain. |
| Penyelesaian misi | 08 | Cocok sebagai layar selesai misi; tombol lanjut harus menjadi hit-area transparan. |
| Penyelesaian permainan | 09 | Cocok sebagai layar selesai permainan; tombol main lagi harus menjadi hit-area transparan. |

## Pemetaan yang belum boleh dianggap final

| Aktivitas | Catatan |
|---|---|
| 3, 5, 6, 8, 11–17, 19, 21–22, 25 | Belum ada kecocokan teks/visual yang terverifikasi dari aset yang diperiksa. |
| 7, 10, 18, 20 | Mockup 07 adalah kandidat berdasarkan kategori simulasi, tetapi teks dan kontrol tercetaknya harus dicocokkan secara visual sebelum dipakai. |
| 23–24 | Mockup 10 adalah kandidat untuk doa setelah makan; perlu pemeriksaan visual dan pencocokan teks Arab/latin/arti serta pilihan sebelum dihubungkan. |

## Tindakan implementasi

1. Ubah pemetaan kode dari sekadar berdasarkan tipe interaksi menjadi berdasarkan ID aktivitas dan kecocokan artwork.
2. Untuk aktivitas yang cocok, sembunyikan seluruh duplikasi visual HTML dan sisakan hit-area transparan pada posisi kontrol mockup.
3. Untuk aktivitas yang belum cocok, jangan menampilkan mockup yang salah. Tandai sebagai membutuhkan aset/keputusan desain sebelum dianggap siap.
4. Setelah semua pasangan terverifikasi, lakukan uji tampilan desktop dan ponsel dengan menjaga proporsi artwork (hindari peregangan yang mengubah komposisi).

**Status:** audit pemetaan dimulai; ini belum menyatakan seluruh 25 aktivitas sudah siap menggunakan mockup.
