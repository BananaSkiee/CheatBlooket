const globalCheats = [
  { name: "Selalu Tiga Kali Lipat", path: "cheats/SelaluTigaKaliLipat.js" },
  { name: "Tebakan Otomatis", path: "cheats/TebakanOtomatis.js" },
  { name: "Kata Sandi ESP", path: "cheats/KataSandiESP.js" },
  { name: "Hapus Peretasan", path: "cheats/HapusPeretasan.js" },
  { name: "Pilihan ESP", path: "cheats/PilihanESP.js" },
  { name: "Tetapkan Kripto", path: "cheats/TetapkanKripto.js" },
  { name: "Atur Kata Sandi", path: "cheats/AturKataSandi.js" },
  { name: "Mencuri Pemain Crypto", path: "cheats/MencuriCrypto.js" }
];

const guiCheats = [
  { name: "Gui", path: "cheats/Gui.js" },
  { name: "GUI Seluler", path: "cheats/GUISeluler.js" },
  { name: "K Gui", path: "cheats/KGui.js" },
  { name: "React GUI", path: "cheats/ReactGui.js" }
];

function createButtons(id, cheatList) {
  const container = document.getElementById(id);
  cheatList.forEach(cheat => {
    const btn = document.createElement("button");
    btn.textContent = cheat.name;
    btn.onclick = () => copyCheat(cheat.path);
    container.appendChild(btn);
  });
}

async function copyCheat(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Gagal ambil file: " + res.status);
    const code = await res.text();
    await navigator.clipboard.writeText(code);
    alert("✅ Cheat berhasil disalin ke clipboard!");
  } catch (err) {
    alert("❌ Gagal salin cheat:\n" + err.message);
    console.error(err);
  }
}

createButtons("cheat-buttons-global", globalCheats);
createButtons("cheat-buttons-gui", guiCheats);
