# 🍽️ Warung Nusantara - Belajar Data Handling

Proyek ini adalah aplikasi web sederhana untuk menampilkan menu restoran. Proyek ini dirancang khusus untuk membantu pengembang pemula memahami konsep dasar **Data Handling** (Pengelolaan Data) menggunakan JavaScript murni (Vanilla JS) dengan struktur kode yang profesional.

## 🚀 Apa yang Dipelajari?

Melalui proyek ini, kamu akan mempelajari beberapa konsep penting:
1.  **Separation of Concerns:** Memisahkan kode HTML (struktur), CSS (tampilan), dan JS (logika) agar mudah dikelola.
2.  **Data JSON/Array of Objects:** Cara menyimpan data dalam format objek di dalam array.
3.  **DOM Manipulation:** Cara menampilkan data dari JavaScript ke halaman HTML secara dinamis.
4.  **Array Methods:** Menggunakan fungsi `.filter()` untuk menyaring data dan `.forEach()` untuk menampilkan data.
5.  **Local Assets:** Mengelola gambar secara lokal di dalam folder proyek.

---

## 📂 Struktur Proyek

Proyek ini mengikuti standar industri dengan memisahkan file berdasarkan fungsinya:

```text
/warung-nusantara
├── assets/
│   └── images/       # Tempat menyimpan gambar menu secara lokal
├── css/
│   └── style.css     # Semua pengaturan tampilan (Vanilla CSS)
├── js/
│   ├── data.js       # Tempat menyimpan data menu (Sumber Data)
│   └── script.js     # Logika aplikasi (Filter, Render, Format Rupiah)
└── index.html        # Struktur utama halaman web
```

---

## 🛠️ Cara Menjalankan Proyek

1.  **Download/Clone** proyek ini ke komputermu.
2.  Pastikan folder `assets/images` sudah berisi gambar-gambar menu.
3.  Buka file `index.html` menggunakan browser (Double click atau klik kanan > Open with Browser).
4.  Gunakan tombol filter di bagian atas untuk menyaring menu berdasarkan kategori.

---

## 📝 Penjelasan File

### 1. `index.html`
Berfungsi sebagai kerangka. Di sini kita tidak menulis banyak kode CSS atau JS. Kita hanya memanggil file eksternal:
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/data.js"></script>
<script src="js/script.js"></script>
```

### 2. `css/style.css`
Mengatur agar web terlihat cantik. Kita menggunakan **CSS Grid** untuk membuat kartu menu otomatis tersusun rapi di berbagai ukuran layar (HP, Tablet, Laptop).

### 3. `js/data.js`
Berisi variabel `dataMenu`. Jika kamu ingin menambah menu baru, kamu cukup menambahkannya di file ini tanpa perlu mengubah file lainnya.
```javascript
{
    id: 7,
    nama: "Menu Baru",
    kategori: "Camilan",
    harga: 10000,
    deskripsi: "Deskripsi menu baru...",
    gambar: "assets/images/nama-file.jpg"
}
```

### 4. `js/script.js`
Otak dari aplikasi ini. Fungsi utamanya adalah:
- `tampilkanMenu()`: Mengambil data dari `data.js` lalu mengubahnya menjadi elemen HTML.
- `filterKategori()`: Menyaring menu saat tombol kategori diklik.
- `formatRupiah()`: Mengubah angka biasa menjadi format mata uang Rupiah yang rapi.

---

## 💡 Tips untuk Pemula
- Coba tambahkan menu baru di `js/data.js` dan lihat perubahannya di browser.
- Coba ubah warna utama di `css/style.css` pada bagian `:root` variabel `--primary-orange`.
- Gunakan `Inspect Element` (F12) di browser untuk melihat jika ada error di bagian `Console`.

Selamat Belajar! 👨‍💻👩‍💻
