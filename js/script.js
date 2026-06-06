// =========================================================
// LOGIKA RENDERING (DOM Manipulation)
// =========================================================
const menuContainer = document.getElementById('menu-container');

// Fungsi untuk format angka ke Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// Fungsi utama untuk me-render data ke layar
function tampilkanMenu(dataArray) {
    // Bersihkan kontainer terlebih dahulu
    menuContainer.innerHTML = "";

    // Jika data kosong
    if (dataArray.length === 0) {
        menuContainer.innerHTML = `<p class="empty-msg">Menu tidak ditemukan.</p>`;
        return;
    }

    // Looping array menggunakan .forEach()
    dataArray.forEach(menu => {
        const cardHTML = `
            <div class="menu-card">
                <img src="${menu.gambar}" alt="${menu.nama}">
                <div class="card-content">
                    <h3 class="card-title">${menu.nama}</h3>
                    <span class="badge">${menu.kategori}</span>
                    <p class="card-desc">${menu.deskripsi}</p>
                    <p class="card-price">${formatRupiah(menu.harga)}</p>
                </div>
            </div>
        `;
        menuContainer.innerHTML += cardHTML;
    });
}

// =========================================================
// MANIPULASI DATA (Array Methods)
// =========================================================
function filterKategori(kategoriPilihan) {
    if (kategoriPilihan === 'Semua') {
        tampilkanMenu(dataMenu);
    } else {
        const menuDisaring = dataMenu.filter(menu => menu.kategori === kategoriPilihan);
        tampilkanMenu(menuDisaring);
    }
}

// =========================================================
// INISIALISASI
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    tampilkanMenu(dataMenu);
});
