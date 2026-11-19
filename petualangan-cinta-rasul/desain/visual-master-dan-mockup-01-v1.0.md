# P’Nata — Petualangan Cinta Rasul
## Visual Master & Spesifikasi Mockup 01 — v1.0

**Status:** Arah visual disetujui pengguna sebagai dasar produksi mockup.  
**Tanggal:** 20 November 2026  
**Acuan:** `STANDAR-DESAIN-IMPLEMENTASI-GAME.md` dan konsep proyek `petualangan-cinta-rasul/README.md`.

---

## 1. Keputusan visual yang dikunci

- **Arah visual:** C — perpaduan dunia 3D yang kaya dan megah dengan bentuk diorama miniatur yang imut dan ramah anak.
- **Prioritas perangkat:** mobile portrait; kemudian diadaptasi secara responsif ke tablet dan laptop.
- **Gaya:** stylized 3D storybook-diorama, bukan fotorealistis dan bukan flat vector.
- **Nuansa:** hangat, ceria, teduh, penuh rasa ingin tahu, santun, dan edukatif.
- **Karakter dunia:** lingkungan terasa luas dan kaya detail, sementara bangunan, objek, ornamen, dan panel UI memiliki bentuk membulat, proporsi ramah anak, dan detail yang tertata.
- **Nama arah visual internal:** **Ekspedisi Jejak Cahaya**.

Keputusan ini mengunci bahasa visual, bukan mengunci semua layar ke satu komposisi. Setiap template harus mengikuti bahasa visual yang sama dan tetap disesuaikan dengan kebutuhan interaksi.

## 2. Gagasan visual utama

Anak seolah membuka sebuah buku petualangan tiga dimensi dan memasuki dunia pembelajaran yang dibangun dari miniatur lingkungan. Dunia memiliki kedalaman, lapisan foreground–midground–background, jalur yang mengarahkan mata, landmark yang mudah diingat, serta cahaya hangat yang memberi kesan aman.

Hindari kesan permainan perang, fantasi sihir, atau representasi sejarah yang mengada-ada. Petualangan di sini adalah perjalanan mengenal ilmu dan kisah yang benar, bukan simulasi peristiwa sejarah secara teatrikal.

### Tiga wilayah utama

1. **Wilayah 1 — Jejak Rasulullah ﷺ:** lanskap gurun dan perbukitan batu pasir, jalur perjalanan, oasis, gerbang, dan arsitektur sederhana yang bersifat simbolis. Jangan merekonstruksi peristiwa sejarah secara spekulatif.
2. **Wilayah 2 — Keluarga Rasulullah ﷺ:** halaman dan taman yang teduh, courtyard, pintu, kebun, sumber air, dan elemen rumah yang memberi kesan hangat. Tidak menggambarkan anggota keluarga sebagai tokoh visual.
3. **Wilayah 3 — Taman Para Shahabat:** oasis hijau, taman, jalur bercabang, pepohonan kurma, gerbang tantangan, dan landmark yang memberi kesan pertumbuhan serta persahabatan.

**Wilayah Bonus — Jejak Para Ulama:** ketika dirancang, gunakan perpustakaan, rak kitab, manuskrip, pena, meja belajar, lentera, dan peti ilmu. Jangan membuat ilustrasi tubuh/wajah atau avatar yang seolah menggambarkan ulama tertentu.

## 3. Sistem warna

Palet berikut adalah titik awal yang harus diuji pada mockup, bukan batas mutlak untuk setiap ilustrasi.

| Peran | Warna acuan | Kode |
|---|---|---|
| Pasir terang / bidang utama | Sand Cream | `#F3E4C8` |
| Batu pasir / bidang sekunder | Warm Sandstone | `#C98F5A` |
| Hijau utama | Oasis Green | `#397A59` |
| Hijau gelap | Deep Palm | `#24513F` |
| Biru langit | Clear Sky | `#82C5D9` |
| Teal | Calm Teal | `#347F83` |
| Aksen emas | Soft Gold | `#E6B957` |
| Teks gelap | Deep Ink | `#293B37` |
| Bidang terang | Warm Ivory | `#FFF8EB` |

Aturan:
- Pastikan kontras teks dan tombol memadai; jangan menaruh teks kecil langsung di atas ilustrasi yang ramai.
- Emas adalah aksen, bukan warna untuk semua teks.
- Setiap wilayah boleh memiliki aksen lingkungan sendiri, tetapi tetap memakai palet induk.
- Status benar/salah harus dibedakan bukan hanya dengan warna, tetapi juga bentuk, ikon, dan teks.

## 4. Bentuk, material, dan pencahayaan

- **Lingkungan:** batu pasir, tanah bertekstur lembut, kayu, kain, air, dedaunan, dan logam beraksen emas.
- **Bangunan:** bentuk sederhana, sedikit membulat, siluet jelas, detail arsitektur tidak berlebihan.
- **Objek:** peti, buku tertutup, gulungan, lentera, papan penunjuk, gerbang, batu penanda, dan ornamen geometris.
- **Panel UI:** kartu berlapis dengan tepi membulat, bevel/ketebalan halus, bayangan lembut, dan bidang cukup bersih untuk teks.
- **Pencahayaan:** warm daylight / golden-hour lembut; hindari kontras dramatis, gelap menyeramkan, atau glow berlebihan.
- **Kamera:** perspektif isometrik atau three-quarter view untuk lingkungan; UI tetap terbaca dari depan.

## 5. Tipografi dan UI

- Gunakan huruf sans-serif yang bulat, ramah anak, dan sangat terbaca.
- Judul boleh menggunakan display font yang lebih ekspresif, tetapi isi instruksi, petunjuk, dan jawaban harus sederhana.
- Hindari font dekoratif untuk teks panjang.
- Tombol besar dengan label singkat, ikon pendukung, dan status visual yang jelas.
- Area sentuh minimal sekitar 44–48 CSS px; tombol penting sebaiknya lebih besar.
- Panel konten harus memiliki latar solid atau semi-solid yang cukup kontras.
- Gunakan radius dan bayangan secara konsisten; jangan setiap komponen memiliki gaya berbeda.
- Animasi nantinya singkat, lembut, dan tidak menghalangi aksesibilitas atau pembacaan.

## 6. Aturan ilustrasi dan adab

1. **Jangan menggambarkan Rasulullah ﷺ.** Tidak berupa sosok, siluet, bayangan, tangan, atau representasi simbolik yang dimaksudkan sebagai tubuh beliau.
2. Jangan menggambarkan para Shahabat atau anggota keluarga Rasulullah ﷺ sebagai tokoh yang dapat dikenali.
3. Jangan menggunakan avatar manusia generik untuk seolah-olah mewakili tokoh sejarah tertentu.
4. Utamakan lingkungan, benda, peta simbolis, objek pembelajaran, dan ornamen.
5. Hindari wajah manusia/hewan sebagai dekorasi. Untuk proyek ini, aset lingkungan tanpa figur makhluk hidup menjadi pilihan utama.
6. Jangan menambahkan kaligrafi ayat/hadis atau teks Arab dekoratif yang belum diperiksa ketepatan tulisannya.
7. Jangan menciptakan bangunan atau artefak fiktif lalu memberi label seolah-olah merupakan lokasi/benda sejarah yang terverifikasi.

## 7. Komposisi mobile portrait

- Rancang pertama untuk viewport ponsel portrait sekitar rasio 9:16; jangan mengunci ukuran desain ke satu resolusi piksel.
- Sisakan safe area di atas dan bawah untuk perangkat dengan notch / system bars.
- Pertahankan hierarki: identitas permainan → fokus utama → ajakan tindakan.
- Ilustrasi lingkungan menjadi panggung visual, bukan penghalang teks dan tombol.
- Elemen penting tidak boleh hanya ditempatkan di sudut yang akan terpotong saat layar lebih pendek.
- Adaptasi tablet/laptop harus memperluas ruang atau mengatur ulang komposisi dengan proporsional, bukan sekadar memperbesar seluruh layar ponsel.

## 8. Prinsip aset dan implementasi

Sesuai standar desain P’Nata:
- Mockup adalah **template visual berkualitas tinggi**, bukan screenshot statis yang mengunci seluruh konten.
- Latar, ilustrasi lingkungan, tekstur, ornamen, dan aset dekoratif dipertahankan sebagai aset visual.
- Judul aktivitas, instruksi, pertanyaan, pilihan, tombol, status, progres, dan feedback dibuat sebagai UI HTML/CSS/JavaScript dinamis bila kontennya berubah atau interaktif.
- Jangan mengganti ilustrasi final dengan emoji, simbol generik, atau placeholder saat implementasi.
- Implementasi harus sedekat mungkin dengan mockup yang disetujui. Penggunaan ulang template tidak boleh menurunkan kualitas.
- Satu template dapat dipakai lintas wilayah dengan mengganti set lingkungan/aksen yang sesuai; jangan memaksakan template bila kebutuhan interaksinya berbeda.

---

# 9. Spesifikasi Mockup 01 — Halaman Pembuka

## Tujuan layar

Mengenalkan judul permainan dan mengundang anak memulai petualangan. Layar harus langsung memberi kesan bahwa anak memasuki dunia yang hangat, aman, menarik, dan bernilai edukatif.

## Struktur komposisi

1. **Latar penuh:** lingkungan miniatur 3D berupa jalur batu pasir yang mengarah ke gerbang/halaman oasis. Gunakan lapisan foreground, midground, dan background untuk kedalaman.
2. **Identitas P’Nata:** tempatkan logo P’Nata di area atas dengan ukuran proporsional dan ruang napas. Gunakan file logo resmi dari aset brand repository, bukan mengetik ulang logonya.
3. **Judul permainan:** teks dinamis/HTML:
   - Petualangan Cinta Rasul
   - Mengenal Rasulullah ﷺ, Keluarga, dan Para Shahabat
   Judul harus terbaca jelas dan tidak menutupi landmark utama.
4. **Objek fokus:** gerbang miniatur atau papan penanda perjalanan sebagai pusat visual. Hindari gambar manusia/hewan.
5. **Tombol utama:** tombol besar **MULAI PETUALANGAN** pada bagian bawah-tengah, berada di atas panel/kartu UI yang bersih dan kontras.
6. **Akses sekunder:** tombol kecil **Tentang Permainan** atau ikon informasi dapat disediakan bila ruang cukup. Jangan menambahkan banyak tombol di halaman pembuka.
7. **Dekorasi:** lentera, tanaman, batu penunjuk, bintang kecil, peti tertutup, atau gulungan sebagai aksen. Jangan sampai mengalahkan judul dan tombol.

## Hierarki visual

Urutan perhatian anak:
1. Judul Petualangan Cinta Rasul.
2. Gerbang dan lingkungan petualangan.
3. Tombol Mulai Petualangan.
4. Logo P’Nata dan subjudul.

## Batasan layar

- Tidak menampilkan pertanyaan, kisi, skor, profil Adik/Kakak, atau peta wilayah pada layar ini.
- Jangan menampilkan figur Rasulullah ﷺ, keluarga, Shahabat, atau tokoh sejarah.
- Jangan membuat teks judul menjadi bagian permanen dari gambar latar; teks harus dapat diedit dan diterjemahkan.
- Jangan membuat tombol menjadi bagian dari gambar; tombol harus berupa komponen UI sesungguhnya.
- Hindari elemen terlalu kecil atau detail ramai di belakang area teks.

## Kriteria penerimaan

Mockup 01 dapat disetujui bila:
- Nuansa perpaduan dunia 3D kaya dan diorama ramah anak terasa jelas.
- Identitas visual P’Nata terlihat tanpa mendominasi.
- Judul dan tombol langsung terbaca pada layar ponsel.
- Komposisi terasa utuh pada portrait dan memiliki ruang adaptasi ke tablet/laptop.
- Latar dan ornamen dapat dipisahkan/digunakan sebagai aset tanpa kehilangan kualitas.
- Tidak ada penggambaran figur yang bertentangan dengan aturan ilustrasi.
- Desain terasa khas dan tidak seperti template game generik.

---

## 10. Prompt produksi visual untuk Gemini

Gunakan prompt berikut untuk menghasilkan **ilustrasi latar/lingkungan**, bukan screenshot UI final. Teks, logo, dan tombol akan ditambahkan kemudian sebagai elemen terpisah agar tetap tajam, konsisten, dan dinamis.

> Create a premium, highly polished 3D stylized storybook-diorama environment background for a children's Islamic educational adventure game. The visual direction is a deliberate blend of a rich, expansive 3D adventure world and a charming miniature diorama: detailed and immersive landscapes, but with softly rounded architecture, friendly proportions, tactile handcrafted materials, and a warm child-friendly atmosphere.
>
> Portrait mobile composition, approximately 9:16. Show a beautiful sandstone pathway in the foreground leading toward an elegant, welcoming miniature courtyard gate and a peaceful oasis garden in the middle distance. Add layered palm trees, gentle rocky hills, tasteful geometric architectural details, a few warm lanterns, small plants, stone markers, and subtle golden accents. Build clear foreground, middle-ground, and background depth. The central gate should be visually memorable but leave a calm, uncluttered area in the upper-middle for a title overlay and a clean, readable lower-middle area for a large UI button overlay.
>
> Art direction: premium stylized 3D, storybook diorama, polished game-environment art, soft rounded forms, detailed but not cluttered, tactile sandstone and wood, subtle fabric details, gentle greenery, soft warm daylight, golden-hour highlights, ambient occlusion, beautiful soft shadows, rich yet restrained color, cinematic depth while remaining bright and welcoming. Color family: sand cream, warm sandstone, oasis green, deep palm green, clear sky blue, calm teal, and soft gold.
>
> The scene should feel peaceful, curious, uplifting, educational, and safe. No characters, no people, no human silhouettes, no animals, no faces, no depictions or symbolic stand-ins for prophets, companions, or historical figures. No text, no letters, no Arabic calligraphy, no logo, no watermark, no UI, no buttons, no interface panels, no border, no device mockup. This is a clean environment asset intended to sit behind separately implemented HTML interface elements.
>
> Composition must be designed for a mobile portrait game screen, with important scenery kept away from extreme edges so it can adapt responsively to different phone aspect ratios. High visual quality, coherent geometry, polished professional game art.

### Prompt larangan / negative direction

Jika Gemini menambahkan teks, manusia, hewan, kaligrafi acak, tombol palsu, atau elemen UI di dalam gambar, minta revisi dengan menegaskan bahwa yang dibutuhkan hanya **clean environment background asset**. Jangan menerima teks hasil generatif sebagai teks final antarmuka.

## 11. Urutan pengerjaan setelah Mockup 01

1. Hasilkan 2–3 eksplorasi latar dengan prompt yang sama; pilih satu yang paling sesuai, jangan langsung membuat seluruh layar.
2. Evaluasi komposisi, ruang judul, ruang tombol, kualitas detail, dan kepatuhan aturan ilustrasi.
3. Jika latar disetujui, buat versi bersih resolusi tinggi dan simpan sebagai aset sumber.
4. Tambahkan logo P’Nata resmi, judul, subjudul, dan tombol sebagai layer UI terpisah.
5. Buat mockup halaman pembuka final dan uji pada viewport ponsel.
6. Baru setelah gaya dan kualitasnya dikunci, lanjutkan Mockup 02 — Pilih Profil.

**Belum termasuk dalam dokumen ini:** mockup final berbentuk gambar, aset final yang disetujui, HTML, atau pengujian responsivitas. Semua itu menunggu proses produksi dan persetujuan visual.
