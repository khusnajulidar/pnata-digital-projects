# Mockup 03 — Peta Petualangan
## Spesifikasi Komposisi v1.0

Status: rancangan konseptual untuk ditinjau sebelum produksi visual/HTML.  
Proyek: Petualangan Cinta Rasul — P’Nata  
Visual Master: Ekspedisi Jejak Cahaya  
Prioritas perangkat: ponsel portrait; responsif ke tablet dan laptop.

## 1. Tujuan halaman

Halaman ini muncul setelah pemain memilih profil ADIK atau KAKAK pada Mockup 02. Peta menjadi pusat navigasi untuk menjelajahi tiga wilayah utama:
1. Wilayah 1 — **Jejak Rasulullah ﷺ**
2. Wilayah 2 — **Keluarga Rasulullah ﷺ**
3. Wilayah 3 — **Taman Para Shahabat**

Pemain dapat melihat wilayah yang tersedia, wilayah yang belum terbuka, serta progres petualangannya. Mekanisme pembukaan wilayah mengikuti aturan progres game yang telah disepakati; mockup ini tidak mengubah syarat atau urutan pembukaan.

## 2. Arah visual utama

Tema visual: **Ekspedisi Jejak Cahaya** dengan nuansa padang pasir lebih kuat daripada Mockup 01.

- Dunia 3D stylized storybook-diorama, kaya detail, berlapis, ramah anak; bukan fotorealistis dan bukan ilustrasi vektor datar.
- Bentang alam utama: hamparan pasir, bukit pasir bergelombang, tebing batu pasir, formasi batu, dataran tinggi kering, dan jalur ekspedisi yang berkelok.
- Oasis, pohon kurma, semak, dan air menjadi aksen yang memberi variasi warna, bukan mendominasi keseluruhan peta.
- Setiap wilayah memiliki landmark arsitektur/alam yang berbeda agar mudah dikenali dari kejauhan.
- Cahaya hangat pagi/sore, bayangan lembut, material pasir, batu, kayu, kain, dedaunan, air, dan aksen logam/gold.
- Ikuti palet Visual Master: Sand Cream #F3E4C8, Warm Sandstone #C98F5A, Oasis Green #397A59, Deep Palm #24513F, Clear Sky #82C5D9, Calm Teal #347F83, Soft Gold #E6B957, Deep Ink #293B37, Warm Ivory #FFF8EB.

## 3. Identitas tiga wilayah

### Wilayah 1 — Jejak Rasulullah ﷺ
- Lanskap gurun dan perbukitan batu pasir.
- Jalur ekspedisi awal, penanda perjalanan, gerbang batu sederhana, gua/tebing sebagai elemen alam simbolik bila sesuai.
- Nuansa hangat, lapang, dan menjadi pintu masuk petualangan.
- Jangan merekonstruksi lokasi atau artefak sejarah secara spekulatif seolah-olah akurat.

### Wilayah 2 — Keluarga Rasulullah ﷺ
- Lembah batu pasir yang lebih teduh, halaman dan taman sederhana, rumah/halaman simbolik tanpa klaim rekonstruksi sejarah.
- Aksen oasis dan tanaman lebih terasa dibanding Wilayah 1, tetapi lingkungan gurun tetap menjadi dasar.
- Suasana tenang, hangat, dan penuh penghormatan.

### Wilayah 3 — Taman Para Shahabat
- Bentang gurun dengan jalur bercabang, oasis kecil, pohon kurma, taman, dan beberapa penanda tantangan.
- Warna hijau sedikit lebih kuat sebagai aksen, tetap dikelilingi bukit dan batu pasir.
- Landmark memberi kesan eksplorasi yang lebih luas dan menantang.

### Bonus — Jejak Para Ulama
- Bukan salah satu dari tiga wilayah utama.
- Jika ditampilkan pada peta, posisikan sebagai ekspedisi bonus terpisah di area pinggir/ujung peta, dengan penanda khusus yang tidak mengalihkan fokus dari tiga wilayah utama.
- Landmark bonus dapat berupa perpustakaan mini, rak kitab, manuskrip, pena, lentera, dan peti pengetahuan.
- Tidak menampilkan sosok, avatar, atau siluet ulama.
- Status/akses bonus mengikuti aturan game yang telah disepakati; jangan mengubah syarat pembukaannya.

## 4. Komposisi layar ponsel portrait

Urutan zona dari atas ke bawah:

1. **Header (sekitar 5–13%)**
   - Judul singkat: **Peta Petualangan**.
   - Chip profil yang dipilih: **ADIK · Kelas 1–3** atau **KAKAK · Kelas 4–6**; nilainya dinamis dari Mockup 02.
   - Indikator progres/bintang ringkas dapat ditampilkan jika ruang cukup. Nilainya harus terhubung ke progres game, bukan angka statis.
   - Ikon P’Nata sebagai watermark kecil dan samar; jangan tampil sebagai logo utama.

2. **Area peta (sekitar 15–84%)**
   - Peta vertikal sebagai satu dunia diorama utuh, bukan tiga kartu terpisah.
   - Jalur ekspedisi berkelok menghubungkan tiga landmark wilayah.
   - Setiap landmark memiliki penanda nama wilayah yang terpisah dari ilustrasi latar, agar teks tetap tajam dan dapat diubah.
   - Wilayah yang tersedia tampil dengan kontras dan penanda interaktif jelas.
   - Wilayah yang belum terbuka tampil redup/tertutup secara visual dengan penanda gembok atau kabut ringan; jangan membuat status terkunci membingungkan.
   - Wilayah yang sudah diselesaikan dapat menampilkan tanda pencapaian/bintang sesuai progres aktual.
   - Penanda lokasi pemain boleh berupa kompas, bendera kecil, atau cahaya penuntun; jangan memakai karakter manusia/hewan.
   - Jalur dan landmark harus tetap menjadi fokus; UI tidak boleh menutupi identitas setiap wilayah.

3. **Footer (sekitar 86–96%)**
   - Petunjuk ringkas: **Pilih wilayah untuk memulai perjalanan.**
   - Kontrol kembali ke halaman sebelumnya bila diperlukan, dengan ukuran target sentuh memadai.
   - Jangan menambahkan tombol dekoratif yang tidak memiliki aksi.

## 5. Perilaku interaksi

- Ketuk landmark wilayah yang tersedia untuk masuk ke halaman pilihan aktivitas wilayah tersebut.
- Status wilayah (tersedia, terkunci, selesai) ditentukan oleh state progres game.
- Wilayah terkunci tidak boleh mengarahkan pemain ke halaman aktivitas.
- Jika pemain mengetuk wilayah terkunci, tampilkan penjelasan singkat yang sesuai dengan aturan progres yang sudah ditetapkan; jangan menciptakan syarat baru.
- Profil ADIK/KAKAK yang dipilih pada Mockup 02 tetap terbawa dan digunakan untuk menyesuaikan tantangan.
- Progres dan bintang berasal dari data permainan aktual dan tersimpan sesuai rancangan penyimpanan browser.
- Tombol kembali, jika disediakan, kembali ke halaman pilih profil tanpa menghapus progres.

## 6. Responsivitas dan aksesibilitas

- Ponsel portrait: peta vertikal dengan jalur yang mudah diikuti dari atas ke bawah; label wilayah cukup besar dan kontras.
- Layar pendek: peta dapat digulir vertikal; header ringkas dan tidak menutupi landmark.
- Tablet/laptop: tampilkan peta lebih luas; pertahankan hubungan spasial jalur dan landmark, jangan sekadar memperbesar peta hingga label terlalu berjauhan.
- Target sentuh minimal 48 CSS px.
- Status wilayah tidak boleh dibedakan hanya dengan warna; gunakan ikon/label yang jelas.
- Sediakan kontras teks yang cukup terhadap latar dan hindari teks kecil di atas tekstur rumit.

## 7. Watermark dan aset

- Gunakan ikon resmi P’Nata: `petualangan-huruf-hijaiyah/PNata_Ikon_HQ_4x.png`.
- Ikon digunakan sebagai watermark pada setiap halaman tampilan game.
- Opacity awal untuk diuji: 0.05–0.08; sesuaikan berdasarkan kontras latar aktual agar samar tetapi tetap terasa.
- Pertahankan bentuk, warna, dan proporsi aset asli.
- Jangan menambahkan logo lengkap di peta kecuali ada keputusan baru.

## 8. Larangan dan pemeriksaan adab

- Tidak menampilkan Rasulullah ﷺ, keluarga, Shahabat, ulama, manusia, hewan, avatar, atau siluet.
- Tidak memakai representasi wajah/tubuh atau benda yang diklaim sebagai peninggalan historis tanpa sumber yang sahih dan verifikasi.
- Tidak menambahkan kaligrafi atau teks Arab dekoratif yang belum diverifikasi.
- Hindari klaim bahwa lanskap/arsitektur adalah rekonstruksi sejarah akurat jika hanya ilustrasi simbolik.
- Tidak mengubah urutan, syarat pembukaan wilayah, jumlah bintang, atau mekanik progres melalui keputusan visual semata.

## 9. Checklist penerimaan

- [ ] Tiga wilayah utama langsung mudah dikenali.
- [ ] Jalur ekspedisi menghubungkan wilayah dan terbaca pada layar ponsel.
- [ ] Nuansa padang pasir lebih dominan daripada oasis.
- [ ] Setiap wilayah memiliki landmark visual berbeda.
- [ ] Status tersedia/terkunci/selesai jelas dan terhubung ke progres aktual.
- [ ] Profil terpilih dari Mockup 02 terlihat dan tetap terbawa.
- [ ] Watermark ikon P’Nata hadir, kecil, dan sangat samar.
- [ ] Tidak ada karakter manusia/hewan atau rekonstruksi tokoh.
- [ ] Tidak ada elemen UI yang menutupi landmark.
- [ ] Responsif pada ponsel portrait, tablet, dan laptop.

## 10. Hubungan alur

- Sebelumnya: Mockup 02 — Pilih Profil.
- Berikutnya: halaman pilihan aktivitas wilayah (TTS, Berburu Kata, Pasangkan Tokoh dan Kisahnya).
- Bonus Jejak Para Ulama tetap diperlakukan sebagai ekspedisi bonus terpisah.

---
Dokumen ini adalah spesifikasi komposisi v1.0, bukan mockup visual final atau HTML produksi.
