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
        menuContainer.innerHTML = `<p class="text-gray-500 col-span-full text-center py-10">Menu tidak ditemukan.</p>`;
        return;
    }

    // Looping array menggunakan .forEach()
    dataArray.forEach(menu => {
        const cardHTML = `
            <div class="menu-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <img src="${menu.gambar}" alt="${menu.nama}" class="w-full h-48 object-cover">
                <div class="p-5 flex-grow flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-lg font-bold text-gray-800">${menu.nama}</h3>
                    </div>
                    <span class="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mb-3 w-max">
                        ${menu.kategori}
                    </span>
                    <p class="text-gray-600 text-sm mb-4 flex-grow">${menu.deskripsi}</p>
                    <div class="mt-auto">
                        <p class="text-xl font-bold text-orange-600">${formatRupiah(menu.harga)}</p>
                    </div>
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
