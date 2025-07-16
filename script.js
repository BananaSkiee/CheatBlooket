// Fungsi untuk salin script cheat ke clipboard
async function copyCheat(path, button = null) {
  try {
    const res = await fetch(path);
    if (!res.ok) return;

    const text = await res.text();
    await navigator.clipboard.writeText(text);

    document.querySelectorAll("button").forEach(btn => btn.classList.remove("copied"));
    if (button) button.classList.add("copied");
  } catch (err) {
    console.error("Gagal menyalin cheat:", err);
  }
}

// Sidebar interaktif: klik kategori
const sidebarItems = document.querySelectorAll("#sidebar-menu li");
const sections = document.querySelectorAll(".cheat-section");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const kategori = item.getAttribute("data-kategori");

    // Tampilkan hanya section sesuai kategori
    sections.forEach(section => {
      section.style.display = section.getAttribute("data-kategori") === kategori ? "block" : "none";
    });

    // Highlight menu aktif
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Tampilkan default: "global"
sections.forEach(section => {
  section.style.display = section.getAttribute("data-kategori") === "global" ? "block" : "none";
});
