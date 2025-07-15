const cheatData = {
  global: [{ name: "Jawaban Otomatis", path: "Global/JawabanOtomatis.js" }],
  bajak: [{ name: "Kosong", path: "Bajak/kosong.js" }],
  emas: [{ name: "Kosong", path: "Emas/kosong.js" }],
  kafe: [{ name: "Kosong", path: "Kafe/kosong.js" }],
  kripto: [{ name: "Kosong", path: "Kripto/kosong.js" }],
  dinosaurus: [{ name: "Kosong", path: "Dinosaurus/kosong.js" }],
  penipu: [{ name: "Kosong", path: "Penipu/kosong.js" }],
  menara: [{ name: "Kosong", path: "Menara/kosong.js" }],
  menara2: [{ name: "Kosong", path: "Menara2/kosong.js" }],
  pabrik: [{ name: "Kosong", path: "Pabrik/kosong.js" }],
  kegilaan: [{ name: "Kosong", path: "Kegilaan/kosong.js" }],
  memancing: [{ name: "Kosong", path: "Memancing/kosong.js" }],
  flappy: [{ name: "Kosong", path: "Flappy/kosong.js" }],
  malapetaka: [{ name: "Kosong", path: "Malapetaka/kosong.js" }],
  kerajaan: [{ name: "Kosong", path: "Kerajaan/kosong.js" }],
  balap: [{ name: "Kosong", path: "Balap/kosong.js" }],
  royale: [{ name: "Kosong", path: "Royale/kosong.js" }],
  rush: [{ name: "Kosong", path: "Rush/kosong.js" }],
  monster: [{ name: "Kosong", path: "Monster/kosong.js" }],
  santa: [{ name: "Kosong", path: "Santa/kosong.js" }]
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
    btn.onclick = () => copyCheat(cheat.path, btn);
    cheatContainer.appendChild(btn);
  });

  title.textContent = "Cheat " + capitalize(category);
}

async function copyCheat(path, button = null) {
  try {
    const res = await fetch(path);
    if (!res.ok) return; // Jangan alert apapun, diam saja

    const code = await res.text();
    await navigator.clipboard.writeText(code);

    // Reset semua tombol jadi normal
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("copied"));

    // Tandai tombol yg diklik jadi 'copied'
    if (button) button.classList.add("copied");
  } catch (err) {
    console.warn("Gagal salin cheat:", err.message); // Tidak alert ke user
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Sidebar handler
const sidebarItems = document.querySelectorAll("#sidebar-menu li");
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const kategori = item.getAttribute("data-kategori");
    showCategory(kategori);
  });
});

// Load default kategori saat pertama kali buka
showCategory("global");
