import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "bot";
  content: string;
}

const defaultResponses: Record<string, string> = {
  default: "Terima kasih atas pertanyaan Anda. Untuk konsultasi lebih lanjut, silakan hubungi tim KARIMUN-CSIRT melalui email atau telepon yang tersedia di halaman Kontak.",
  phishing: "Phishing adalah upaya penipuan untuk mendapatkan informasi sensitif. Tips: 1) Jangan klik link mencurigakan, 2) Periksa alamat pengirim, 3) Jangan bagikan data pribadi melalui email.",
  password: "Gunakan password yang kuat dengan minimal 12 karakter, kombinasi huruf besar-kecil, angka, dan simbol. Aktifkan 2FA untuk keamanan tambahan.",
  malware: "Untuk mencegah malware: 1) Selalu update antivirus, 2) Jangan download dari sumber tidak terpercaya, 3) Scan file sebelum membuka, 4) Backup data secara berkala.",
  lapor: "Untuk melaporkan insiden siber, silakan kirim email ke csirt@karimunkab.go.id dengan detail: jenis insiden, waktu kejadian, dan bukti pendukung.",
};

function getResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("phishing")) return defaultResponses.phishing;
  if (lower.includes("password") || lower.includes("sandi")) return defaultResponses.password;
  if (lower.includes("malware") || lower.includes("virus")) return defaultResponses.malware;
  if (lower.includes("lapor") || lower.includes("insiden")) return defaultResponses.lapor;
  return defaultResponses.default;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Halo! Saya asisten KARIMUN-CSIRT. Ada yang bisa saya bantu terkait keamanan siber?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: getResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
        aria-label="Toggle chatbot"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-card rounded-xl shadow-2xl border border-border flex flex-col overflow-hidden animate-fade-in-up" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary-foreground" />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">KARIMUN-CSIRT Bot</p>
              <p className="text-xs text-primary-foreground/70">Konsultasi Keamanan Siber</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: "250px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent text-accent-foreground rounded-br-none"
                      : "bg-secondary text-secondary-foreground rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ketik pertanyaan..."
              className="flex-1 bg-muted text-foreground rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-muted-foreground"
            />
            <Button onClick={send} size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
