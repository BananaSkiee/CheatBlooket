// Cheat button list — tinggal kamu tambahkan nanti
const cheats = [
  { name: "🤖 Jawaban Otomatis", path: "cheats/JawabanOtomatis.js" },
  { name: "💰 Tambah Token", path: "cheats/TambahToken.js" }
];

function createButtons() {
  const container = document.getElementById("cheat-buttons");
  cheats.forEach(cheat => {
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
    alert("✅ Cheat disalin ke clipboard!");
  } catch (err) {
    alert("❌ Gagal salin cheat:\n" + err.message);
    console.error(err);
  }
}

createButtons();
