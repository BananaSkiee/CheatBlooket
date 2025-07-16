// Fungsi: Menyalin isi file JS cheat ke clipboard
function copyCheat(path) {
  fetch(path)
    .then(response => response.text())
    .then(code => {
      const bookmarklet = `javascript:(function(){${code}})();`;
      navigator.clipboard.writeText(bookmarklet).then(() => {
        // Tambahkan efek visual tombol
        const button = event.target;
        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, 2000);
      });
    })
    .catch(err => {
      console.error("Gagal mengambil cheat:", err);
    });
}

// Fungsi: Navigasi sidebar, tampilkan section cheat sesuai kategori
document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll("#sidebar-menu li");
  const sections = document.querySelectorAll(".cheat-section");

  // Fungsi untuk mengatur tampilan section
  function showSection(kategori) {
    sections.forEach(section => {
      const match = section.getAttribute("data-kategori") === kategori;
      section.style.display = match ? "block" : "none";
    });

    sidebarItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-kategori") === kategori);
    });
  }

  // Event klik menu sidebar
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const kategori = item.getAttribute("data-kategori");
      showSection(kategori);
    });
  });

  // Tampilkan default kategori saat pertama kali (misal: "global")
  showSection("global");
});
