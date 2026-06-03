// KARIMUN-CSIRT — Plain JS interactivity

// ===== Mobile nav =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.toggle('open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }

  // ===== Chatbot =====
  const fab = document.querySelector('.chat-fab');
  const win = document.querySelector('.chat-window');
  const msgs = document.querySelector('.chat-messages');
  const input = document.querySelector('.chat-input-row input');
  const sendBtn = document.querySelector('.chat-input-row button');

  if (!fab || !win) return;

  const ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  const ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  fab.addEventListener('click', () => {
    win.classList.toggle('open');
    fab.innerHTML = win.classList.contains('open') ? ICON_X : ICON_CHAT;
  });

  const responses = {
    phishing: "Phishing adalah upaya penipuan untuk mendapatkan informasi sensitif. Tips: 1) Jangan klik link mencurigakan, 2) Periksa alamat pengirim, 3) Jangan bagikan data pribadi melalui email.",
    password: "Gunakan password yang kuat dengan minimal 12 karakter, kombinasi huruf besar-kecil, angka, dan simbol. Aktifkan 2FA untuk keamanan tambahan.",
    malware: "Untuk mencegah malware: 1) Selalu update antivirus, 2) Jangan download dari sumber tidak terpercaya, 3) Scan file sebelum membuka, 4) Backup data secara berkala.",
    lapor: "Untuk melaporkan insiden siber, silakan kirim email ke csirt@karimunkab.go.id dengan detail: jenis insiden, waktu kejadian, dan bukti pendukung.",
    default: "Terima kasih atas pertanyaan Anda. Untuk konsultasi lebih lanjut, silakan hubungi tim KARIMUN-CSIRT melalui email atau telepon yang tersedia di halaman Kontak."
  };

  function getResponse(text) {
    const lower = text.toLowerCase();
    if (lower.includes('phishing')) return responses.phishing;
    if (lower.includes('password') || lower.includes('sandi')) return responses.password;
    if (lower.includes('malware') || lower.includes('virus')) return responses.malware;
    if (lower.includes('lapor') || lower.includes('insiden')) return responses.lapor;
    return responses.default;
  }

  function addMsg(role, content) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.textContent = content;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    addMsg('user', text);
    input.value = '';
    setTimeout(() => addMsg('bot', getResponse(text)), 600);
  }

  if (sendBtn) sendBtn.addEventListener('click', send);
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
});
