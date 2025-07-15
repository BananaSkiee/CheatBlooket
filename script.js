const cheatData = {
  global: [
    { name: "Kosong", path: "Global/kosong.js" }
  ],
  bajak: [
    { name: "Kosong", path: "Bajak/kosong.js" }
  ],
  emas: [
    { name: "Kosong", path: "Emas/kosong.js" }
  ],
  kafe: [
    { name: "Kosong", path: "Kafe/kosong.js" }
  ],
  kripto: [
    { name: "Kosong", path: "Kripto/kosong.js" }
  ],
  dinosaurus: [
    { name: "Kosong", path: "Dinosaurus/kosong.js" }
  ],
  penipu: [
    { name: "Kosong", path: "Penipu/kosong.js" }
  ],
  menara: [
    { name: "Kosong", path: "Menara/kosong.js" }
  ],
  menara2: [
    { name: "Kosong", path: "Menara2/kosong.js" }
  ],
  pabrik: [
    { name: "Kosong", path: "Pabrik/kosong.js" }
  ],
  kegilaan: [
    { name: "Kosong", path: "Kegilaan/kosong.js" }
  ],
  memancing: [
    { name: "Kosong", path: "Memancing/kosong.js" }
  ],
  flappy: [
    { name: "Kosong", path: "Flappy/kosong.js" }
  ],
  malapetaka: [
    { name: "Kosong", path: "Malapetaka/kosong.js" }
  ],
  kerajaan: [
    { name: "Kosong", path: "Kerajaan/kosong.js" }
  ],
  balap: [
    { name: "Kosong", path: "Balap/kosong.js" }
  ],
  royale: [
    { name: "Kosong", path: "Royale/kosong.js" }
  ],
  rush: [
    { name: "Kosong", path: "Rush/kosong.js" }
  ],
  monster: [
    { name: "Kosong", path: "Monster/kosong.js" }
  ],
  santa: [
    { name: "Kosong", path: "Santa/kosong.js" }
  ]
};

function showCategory(category) {
  const cheatContainer = document.getElementById("cheat-buttons");
  const title = document.getElementById("judul-kategori");
  cheatContainer.innerHTML = "";

  const cheats = cheatData[category];
  if (!cheats) return;

  cheats.forEach(cheat => {
    const btn = document.createElement("button");
    btn.textContent = cheat.name;
    btn.onclick = () => copyCheat(cheat.path);
    cheatContainer.appendChild(btn);
  });

  title.textContent = "Cheat " + capitalize(category);
}

async function copyCheat(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Gagal ambil file");
    const code = await res.text();
    await navigator.clipboard.writeText(code);

    // Hapus status 'copied' dari semua tombol
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("copied"));

    // Tambahkan status 'copied' ke tombol yang diklik
    const clickedButton = [...document.querySelectorAll("button")].find(btn =>
      btn.getAttribute("onclick")?.includes(path)
    );
    if (clickedButton) clickedButton.classList.add("copied");

  } catch (err) {
    console.warn("Gagal salin cheat:", err.message); // Tidak tampil ke user
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Sidebar menu handler
const sidebarItems = document.querySelectorAll("#sidebar-menu li");
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const kategori = item.getAttribute("data-kategori");
    showCategory(kategori);
  });
});

// Tampilkan cheat "global" saat pertama kali load
showCategory("global");
