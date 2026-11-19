# Inventaris dan Pemetaan Kebutuhan Mockup — P’Nata: Yuk Belajar Adab Makan

Status: inventaris kerja berdasarkan aset yang ada dan GDD 25 aktivitas.  
Acuan desain aktif: [Standar Desain dan Implementasi Game P’Nata Digital](../STANDAR-DESAIN-IMPLEMENTASI-GAME.md).

## Prinsip inventaris terbaru

- Mockup adalah **template visual berkualitas tinggi**, bukan layar statis yang semua judul, pertanyaan, pilihan, dan tombolnya harus menyatu menjadi satu gambar.
- Ilustrasi, latar, ornamen, warna, komposisi, dan identitas visual dari mockup dipertahankan sebagai aset visual.
- Judul, pertanyaan, instruksi, pilihan, tombol, kontrol audio, status, progres, dan feedback dibuat sebagai UI dinamis bila perlu berubah atau berinteraksi.
- Kualitas UI dinamis wajib menyamai standar visual mockup asli. Jangan mengganti desain bagus dengan tampilan generik, simbol, emoji, placeholder, atau komponen browser seadanya.
- Satu template dapat melayani beberapa aktivitas yang pola interaksi dan komposisinya sesuai. Tidak perlu satu mockup baru untuk setiap aktivitas.
- Jangan memaksakan template bila ilustrasi, ruang konten, atau alur aktivitas tidak cocok. Mockup baru hanya dibuat untuk kebutuhan visual yang belum dapat dipenuhi aset yang ada.
- Pemetaan di bawah membedakan **fakta yang sudah diketahui**, **kandidat**, dan **kebutuhan yang belum terpenuhi**. Kandidat bukan persetujuan implementasi final.
- Feedback jawaban tetap otomatis sesuai keputusan gameplay. Peta Lima Misi tetap memakai pendekatan hybrid khusus: dekorasi/ilustrasi sebagai aset, status misi dan bintang sebagai UI dinamis.

## A. Inventaris 11 aset yang tersedia

| File | Fungsi/isi yang diketahui | Peran dalam pendekatan template dinamis | Status |
|---|---|---|---|
| `mockup-01-halaman-pembuka.png` | Halaman pembuka | Referensi/template halaman pembuka; identitas visual dipertahankan, tombol mulai dapat dibuat dinamis | Aset tersedia; perlu audit bagian yang sebaiknya dinamis |
| `mockup-02-petunjuk.jfif` | Halaman petunjuk | Template petunjuk; teks instruksi dan kontrol dapat dinamis | Aset tersedia; perlu audit |
| `mockup-03.jfif` | Peta Lima Misi (dikonfirmasi dalam UI Implementation Spec) | Latar/ilustrasi peta sebagai aset; kartu misi, kunci, status, dan lima bintang dinamis | Peran diketahui; implementasi hybrid tetap berlaku |
| `mockup-04-template-aktivitas-pilihan.png` | Template aktivitas pilihan; contoh yang terlihat bertuliskan “Kenali Bismillah” | Acuan visual untuk keluarga aktivitas pilihan/kartu; judul, prompt, pilihan, dan tombol dibuat dinamis | Visual pernah diperiksa; contoh isi spesifik tidak mengunci penggunaannya |
| `mockup-05.png` | Layar “Dengarkan Bismillah”, kontrol audio dan kartu pilihan | Acuan visual keluarga aktivitas menyimak/audio dan memilih; konten serta kontrol dinamis | Visual pernah diperiksa |
| `mockup-06.png` | Layar “Urutkan Sebelum Makan”, tiga slot dan tiga gambar | Acuan visual keluarga aktivitas mengurutkan/drag-and-drop; slot dan item dinamis | Visual pernah diperiksa |
| `mockup-07–template-aktivitas-simulasi-interaktif.png` | Nama file menunjukkan template simulasi interaktif | Kandidat keluarga simulasi; perlu inspeksi visual sebelum pemetaan final | Aset tersedia; isi visual belum terverifikasi |
| `mockup-08.jfif` | Layar penyelesaian Misi 1 (menurut pemeriksaan sebelumnya, teksnya spesifik Misi 1) | Referensi/template penyelesaian misi; ucapan, status, bintang, dan navigasi sebaiknya dinamis. Jangan mengunci label Misi 1 untuk misi lain | Isi utama diketahui; perlu tentukan bagian yang dapat dijadikan aset |
| `mockup-09.jfif` | Layar penyelesaian seluruh permainan | Template penutup; status lima bintang dan tombol dapat dinamis | Visual pernah diperiksa |
| `mockup-10.png` | Kandidat yang sebelumnya diperkirakan terkait doa setelah makan | Kandidat untuk keluarga aktivitas doa/audio; jangan dipetakan sebelum inspeksi visual | Aset tersedia; isi visual belum terverifikasi |
| `mockup-11.png` | Adegan makan bersama | Aset ilustrasi adegan, khususnya relevan untuk konteks makan bersama; bukan layar aktivitas lengkap | Visual pernah diperiksa |

**Catatan verifikasi:** Mockup 07 dan 10 belum berhasil diperiksa secara visual dalam inventaris ini. Nama file atau dugaan fungsi tidak cukup untuk menyatakan isinya sudah cocok. Mockup 03 diketahui sebagai Peta Lima Misi dari spesifikasi teknis. Mockup 08 secara khusus menyebut Misi 1 sehingga tidak boleh digunakan mentah untuk semua misi.

## B. Pemetaan kebutuhan untuk 25 aktivitas

Pemetaan berikut adalah rekomendasi template/keluarga UI, bukan keputusan bahwa satu file gambar harus dipakai utuh untuk semua aktivitas. Konten visual spesifik (misalnya ilustrasi tangan, makanan, gelas, atau perlengkapan) tetap harus sesuai dengan tujuan aktivitas.

| No. | Aktivitas | Pola interaksi | Template/acuan yang disarankan | Kebutuhan aset tambahan / catatan | Status |
|---:|---|---|---|---|---|
| 1 | Kenali Bismillah | Pilih kartu teks Arab | Keluarga pilihan — Mockup 04 | Kartu dan teks Arab dinamis; gunakan font Arab terverifikasi | Acuan tersedia |
| 2 | Dengarkan Bismillah | Audio lalu pilih teks | Keluarga audio-pilihan — Mockup 05 | Audio, teks, dan opsi dinamis | Acuan tersedia |
| 3 | Kapan Membaca Bismillah? | Pilih gambar situasi | Keluarga pilihan bergambar — gaya Mockup 04 | Perlu ilustrasi situasi sebelum makan dan situasi pembanding; jangan memakai gambar Mockup 04 secara utuh dengan teks lamanya | Aset ilustrasi perlu dipastikan |
| 4 | Urutkan Sebelum Makan | Susun tiga urutan | Keluarga susun/drag — Mockup 06 | Tiga ilustrasi tahap bersiap, membaca Bismillah, mulai makan | Acuan tersedia |
| 5 | Ayo Mulai Makan! | Pilih kartu, audio, lalu aksi | Keluarga audio/simulasi — Mockup 05 dan kandidat 07 | Perlu komposisi yang menampung tahapan berurutan; validasi Mockup 07 dahulu | Kandidat |
| 6 | Kenali Tangan Kanan | Pilih gambar | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi tangan kanan yang orientasinya jelas dari sudut pandang anak | Perlu aset ilustrasi |
| 7 | Ayo Makan dengan Tangan Kanan | Simulasi | Kandidat simulasi — Mockup 07 | Ilustrasi/animasi tangan mengambil makanan atau sendok; verifikasi Mockup 07 | Kandidat |
| 8 | Tangan Kanan Saat Makan | Pilih tindakan | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi tindakan yang benar dan pembanding yang tidak membingungkan | Perlu aset ilustrasi |
| 9 | Ambil Makanan Terdekat | Pilih makanan pada wadah bersama | Mockup 11 sebagai aset adegan + UI interaktif | Ilustrasi harus memperjelas sudut pandang anak, wadah bersama, dan jarak makanan; 11 bukan layar lengkap | Aset dasar tersedia; perlu komposisi interaksi |
| 10 | Misi Piring Makanan | Tantangan gabungan dua tahap | Kandidat simulasi — Mockup 07 | Tahap pilih tangan kanan lalu makanan terdekat; perlu transisi/status dinamis | Kandidat |
| 11 | Jangan Mencela Makanan | Pilih respons | Keluarga pilihan — gaya Mockup 04 | Kartu ucapan/respons dinamis; ilustrasi pendukung bila diperlukan | Acuan template tersedia |
| 12 | Jika Tidak Suka Makanan | Pilih tindakan | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi sikap yang baik tanpa memberi kesan anak harus dipaksa makan | Perlu aset ilustrasi |
| 13 | Ambil Secukupnya | Pilih gambar/porsi | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi porsi yang sesuai dan tidak berlebihan; tekankan anak boleh tambah bila masih lapar | Perlu aset ilustrasi |
| 14 | Jangan Menyia-nyiakan Makanan | Pilih tindakan | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi menyimpan makanan aman dengan bantuan orang dewasa | Perlu aset ilustrasi |
| 15 | Makanan adalah Nikmat Allah | Pilih jawaban | Keluarga pilihan/kartu — gaya Mockup 04 | Konten dan opsi dinamis; ilustrasi makanan yang selaras | Acuan template tersedia |
| 16 | Minum dengan Tangan Kanan | Pilih gambar | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi tangan kanan memegang gelas, orientasi jelas | Perlu aset ilustrasi |
| 17 | Jangan Bernapas ke Dalam Gelas | Kenali tindakan | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi membedakan bernapas ke wadah dan menjauhkan gelas saat mengambil napas | Perlu aset ilustrasi |
| 18 | Minum dengan Beberapa Tegukan | Simulasi berurutan | Kandidat simulasi — Mockup 07 | Visual tahap minum, menjauhkan gelas, mengambil napas di luar wadah, melanjutkan minum | Kandidat |
| 19 | Tunggu Sampai Tidak Terlalu Panas | Pilih gambar | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi menunggu hingga aman; pesan keselamatan sederhana | Perlu aset ilustrasi |
| 20 | Tantangan Adab Makan dan Minum | Tantangan gabungan empat tahap | Kandidat simulasi — Mockup 07 | Empat tahap dengan status progres dinamis; perlu inspeksi kapasitas layout | Kandidat |
| 21 | Kenali Alhamdulillah | Pilih kartu teks Arab | Keluarga pilihan — gaya Mockup 04 | Kartu dan lafaz dinamis; teks Arab terverifikasi | Acuan template tersedia |
| 22 | Kapan Mengucapkan Alhamdulillah? | Pilih gambar situasi | Keluarga pilihan bergambar — gaya Mockup 04 | Ilustrasi situasi setelah makan; jangan memberi kesan Alhamdulillah hanya diucapkan setelah makan | Perlu aset ilustrasi |
| 23 | Dengarkan Doa Setelah Makan | Audio + tampilan teks Arab, latin, arti | Kandidat Mockup 10; alternatif layout audio yang disesuaikan | Wajib menampung tiga tingkat teks secara terbaca dan kontrol audio; periksa Mockup 10 sebelum putuskan | Kandidat; verifikasi wajib |
| 24 | Pilih Doa Setelah Makan | Audio lalu pilih kartu doa | Kandidat Mockup 10 / keluarga audio-pilihan Mockup 05 | Teks doa panjang perlu ditata dengan baik; gunakan redaksi yang telah diverifikasi | Kandidat; verifikasi wajib |
| 25 | Meja Makan Rapi | Drag-and-drop perlengkapan | Keluarga susun/drag — pola Mockup 06 | Perlu ilustrasi piring, gelas, sendok, dan tempat tujuan; layout 06 hanya acuan pola, bukan pemetaan final | Perlu aset ilustrasi |

## C. Keluarga template yang dibutuhkan

Berdasarkan 25 aktivitas, kebutuhan tidak berarti 25 mockup unik. Perkiraan keluarga template:

1. **Pilihan teks/kartu:** aktivitas 1, 11, 15, 21.
2. **Pilihan gambar/tindakan:** aktivitas 3, 6, 8, 12, 13, 14, 16, 17, 19, 22.
3. **Audio + pilihan:** aktivitas 2 dan 24; aktivitas 5 memiliki alur audio dengan aksi lanjutan.
4. **Susun/drag-and-drop:** aktivitas 4 dan 25.
5. **Simulasi/tahapan interaktif:** aktivitas 5, 7, 10, 18, 20.
6. **Adegan pilihan berbasis lingkungan:** aktivitas 9; menggunakan ilustrasi adegan makan bersama dan titik interaksi dinamis.
7. **Audio + bacaan panjang:** aktivitas 23; membutuhkan layout khusus yang menampilkan Arab, latin, arti, dan kontrol audio secara nyaman.

Keluarga tersebut dapat berbagi komponen visual dan sistem UI. Tidak semuanya harus memiliki gambar mockup terpisah. Namun, aktivitas yang membutuhkan ilustrasi spesifik tetap memerlukan aset ilustrasi yang sesuai.

## D. Prioritas pekerjaan inventaris

### Prioritas 1 — Audit aset yang sudah tersedia
- Periksa secara visual Mockup 07 dan 10.
- Audit bagian statis dan dinamis pada Mockup 01, 02, 04, 05, 06, 08, dan 09.
- Pastikan Mockup 03 tetap menjadi peta misi hybrid.
- Identifikasi aset ilustrasi dari Mockup 11 yang dapat digunakan ulang.

### Prioritas 2 — Tetapkan template inti
- Pilih satu template pilihan yang paling fleksibel.
- Tetapkan satu template audio-pilihan.
- Tetapkan satu template susun/drag-and-drop.
- Tetapkan satu template simulasi.
- Rancang layout khusus untuk doa panjang bila Mockup 10 tidak memadai.

### Prioritas 3 — Buat daftar aset ilustrasi yang belum ada
- Situasi sebelum makan.
- Tangan kanan dan tindakan makan.
- Adegan memilih makanan terdekat dari wadah bersama.
- Sikap menghargai makanan dan porsi secukupnya.
- Situasi minum dengan benar dan menunggu makanan/minuman panas.
- Adegan setelah makan dan merapikan perlengkapan.

### Prioritas 4 — Validasi kualitas
- Bandingkan implementasi template dengan mockup asli.
- Pastikan hasil dinamis tidak kehilangan kualitas visual, detail, kedalaman, dan kerapian.
- Uji desktop, tablet, dan ponsel.
- Baru setelah template lolos validasi, gunakan ulang pada aktivitas lain.

## E. Kesimpulan inventaris sementara

- Tersedia **11 file mockup**.
- **3 keluarga template aktivitas** sudah memiliki acuan visual yang diketahui: pilihan (04), audio-pilihan (05), dan susun/drag (06).
- Mockup 07 berpotensi menjadi acuan simulasi, tetapi belum diperiksa.
- Mockup 10 berpotensi mendukung aktivitas doa, tetapi belum diperiksa.
- Mockup 11 dapat menjadi aset adegan makan bersama, bukan layar aktivitas lengkap.
- Aktivitas yang belum memiliki ilustrasi spesifik tidak otomatis memerlukan mockup layar baru; mungkin cukup menyiapkan ilustrasi pendukung dan memakai template dinamis yang telah divalidasi.
- Jumlah template final baru ditetapkan setelah audit visual 07 dan 10 serta uji satu template inti.

Dokumen ini adalah inventaris kerja yang dapat diperbarui setelah inspeksi visual aset dan persetujuan pengguna. Jangan menyatakan pemetaan kandidat sebagai final sebelum pemeriksaan selesai.
