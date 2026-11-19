# Standar Desain dan Implementasi Game P'Nata Digital

Status: **pedoman standar yang telah disetujui pengguna**  
Cakupan: seluruh game dan proyek pembelajaran digital P'Nata Digital, termasuk proyek-proyek berikutnya.

## 1. Keputusan utama: mockup adalah template visual

Mockup berfungsi sebagai acuan dan fondasi visual, bukan sebagai gambar layar yang seluruh judul, pertanyaan, pilihan, dan tombolnya harus terkunci menjadi satu gambar statis.

Gunakan mockup untuk mempertahankan identitas visual, misalnya:
- latar, suasana, palet warna, tekstur, dan komposisi;
- ilustrasi utama, ornamen, elemen dekoratif, serta aset visual khas;
- karakter bentuk, proporsi, dan gaya desain yang telah disetujui.

Bagian antarmuka yang perlu berubah atau berinteraksi sebaiknya dibuat sebagai elemen UI HTML/CSS/JavaScript yang dinamis, antara lain:
- judul dan nama aktivitas;
- pertanyaan, instruksi, petunjuk, dan teks pendukung;
- kartu atau pilihan jawaban;
- tombol navigasi dan kontrol;
- indikator status, progres, dan feedback.

Pembagian ini bukan aturan kaku bahwa semua teks harus selalu dinamis. Pertahankan teks yang memang merupakan bagian dari ilustrasi atau dekorasi apabila tepat. Namun, jangan mengunci konten yang perlu berubah antaraktivitas menjadi teks statis di dalam satu gambar mockup.

## 2. Syarat mutlak: kualitas visual tidak boleh menurun

**Hasil implementasi dengan template dan UI dinamis wajib mempertahankan, atau sedekat mungkin menyamai, kualitas tampilan mockup asli yang telah disetujui. Fleksibilitas teknis bukan alasan untuk menghasilkan tampilan yang lebih sederhana, kosong, generik, kurang rapi, atau kurang menarik.**

Ketentuan:
- Mockup asli menjadi tolok ukur visual, bukan sekadar inspirasi longgar.
- Pertahankan palet warna, gaya ilustrasi, bentuk, radius, bayangan, tekstur, ornamen, tipografi, hierarki visual, jarak, proporsi, dan keseimbangan komposisi.
- Elemen UI dinamis harus dirancang agar menyatu secara visual dengan template. Jangan terlihat seperti komponen bawaan browser atau ditempel belakangan.
- Gunakan aset ilustrasi asli dengan kualitas dan resolusi yang memadai. Jangan mengganti ilustrasi yang bagus dengan simbol, emoji, placeholder, atau bentuk generik pada hasil final.
- Jangan mengorbankan kualitas visual demi kemudahan coding atau penggunaan ulang template.
- Periksa hasil akhir berdampingan dengan mockup acuan pada ukuran layar yang relevan. Perbaiki perbedaan visual yang mengurangi kualitas.
- Tampilan harus tetap responsif dan proporsional pada ponsel, tablet, dan desktop tanpa merusak komposisi.

Jika pemisahan elemen dari mockup memerlukan pengeditan aset, penghapusan teks, rekonstruksi ilustrasi, atau pembuatan latar bersih, lakukan dengan hati-hati dan pertahankan kualitas. Jangan mengubah atau membuang aset final secara diam-diam. Jika hasil pemisahan tidak dapat menjaga mutu, cari solusi lain atau minta persetujuan pengguna.

## 3. Penggunaan ulang template

- Kelompokkan aktivitas berdasarkan pola interaksi dan kebutuhan visual, bukan otomatis membuat satu mockup untuk setiap aktivitas.
- Satu template dapat digunakan untuk beberapa aktivitas selama komposisi, ilustrasi, dan ruang kontennya sesuai.
- Buat beberapa template utama bila jenis aktivitas memang membutuhkan susunan berbeda, misalnya pilihan jawaban, menyimak audio, menyusun urutan, simulasi, atau tantangan gabungan.
- Konten, pilihan, status, dan feedback harus dapat berubah tanpa membuat desain setiap aktivitas harus digambar ulang.
- Jangan memaksakan satu template pada aktivitas yang secara visual atau pedagogis tidak cocok.
- Buat mockup baru hanya ketika aset/template yang tersedia benar-benar tidak memadai.

## 4. Peran teknologi

- HTML membentuk struktur elemen antarmuka dinamis.
- CSS mengatur tampilan, responsivitas, animasi, status, dan keselarasan visual dengan mockup.
- JavaScript mengatur data aktivitas, interaksi, validasi jawaban, navigasi, audio, feedback, dan progres.
- Aset gambar tetap digunakan untuk ilustrasi, latar, dan dekorasi yang memang lebih tepat sebagai gambar.
- Elemen interaktif harus benar-benar dapat dioperasikan dengan sentuhan maupun pointer, memiliki area target yang memadai, dan menunjukkan status yang jelas.
- Feedback dapat muncul otomatis setelah tindakan/jawaban anak bila sesuai dengan rancangan pembelajaran; tidak perlu menambah tombol feedback yang tidak dibutuhkan.

## 5. Alur kerja desain dan implementasi

1. Pahami tujuan belajar, alur, dan jenis interaksi setiap aktivitas.
2. Inventarisasi mockup dan aset yang sudah tersedia.
3. Petakan aktivitas ke template yang paling sesuai.
4. Tentukan bagian yang menjadi aset visual tetap dan bagian yang harus dinamis.
5. Bangun satu template representatif terlebih dahulu, lalu cocokkan hasilnya dengan mockup asli.
6. Pastikan kualitas visual, responsivitas, keterbacaan, dan interaksi sebelum template digunakan ulang.
7. Terapkan template yang telah tervalidasi ke aktivitas lain dengan konten yang sesuai.
8. Uji seluruh aktivitas, termasuk status benar/salah, audio, navigasi, progres, dan tampilan di beberapa ukuran layar.
9. Dokumentasikan keputusan, pemetaan aset, dan perubahan agar proyek berikutnya dapat melanjutkan tanpa menebak.

## 6. Aturan menjaga keputusan proyek

- Pedoman ini berlaku untuk proyek P'Nata Digital saat ini dan proyek-proyek berikutnya, kecuali pengguna secara eksplisit menyetujui perubahan.
- Catatan proyek yang lebih lama dan bertentangan dengan pedoman ini harus dianggap telah digantikan pada bagian yang bertentangan.
- Ketentuan khusus yang tidak bertentangan tetap berlaku, termasuk keputusan tentang peta misi, mekanik permainan, materi pembelajaran, audio, dan persyaratan konten.
- Jangan mengubah mekanik, urutan aktivitas, isi pembelajaran, materi agama, aset final, atau perilaku audio berdasarkan asumsi teknis.
- Jika ada kebutuhan yang belum jelas atau kualitas visual terancam menurun, hentikan perubahan pada bagian itu dan minta konfirmasi pengguna.

## Prinsip ringkas

**Mockup adalah template visual berkualitas tinggi. Ilustrasi dan identitas visualnya dipertahankan; judul, konten, pilihan, tombol, status, dan interaksi dibuat dinamis sesuai kebutuhan. Penggunaan ulang template tidak boleh menurunkan kualitas tampilan dari mockup asli.**

Pedoman ini menjadi acuan lintas proyek untuk perencanaan, desain mockup, implementasi UI, pengujian, dan pengembangan game P'Nata Digital berikutnya.
