import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    category: "Berita Keamanan Siber",
    categoryColor: "cyber" as const,
    title: "Autentikasi Dua Faktor (2FA): Lapisan Keamanan Penting yang Wajib Anda Aktifkan",
    date: "20 Februari 2026",
    excerpt: "Bayangkan Anda mengunci rumah dengan gembok yang sangat kuat. Itu adalah kata sandi. Tapi, bagaimana jika ada cara untuk menambah lapisan keamanan ekstra?",
  },
  {
    category: "Berita Keamanan Siber",
    categoryColor: "cyber" as const,
    title: "5 Password Manager Terbaik 2026: Review & Perbandingan Lengkap",
    date: "18 Februari 2026",
    excerpt: "Bingung memilih password manager? Kami telah menguji dan membandingkan 5 password manager terbaik untuk keamanan digital Anda.",
  },
  {
    category: "Peringatan Keamanan",
    categoryColor: "warning" as const,
    title: "Langkah Awal Menuju Keamanan Digital: 7 Tips Keamanan Siber Sederhana",
    date: "15 Februari 2026",
    excerpt: "Tidak perlu menjadi ahli IT untuk melindungi diri online. Pelajari 7 tips keamanan siber praktis dan mudah diterapkan.",
  },
  {
    category: "Peringatan Keamanan",
    categoryColor: "warning" as const,
    title: "Waspada Serangan Phishing: Cara Mengenali dan Menghindarinya",
    date: "10 Februari 2026",
    excerpt: "Serangan phishing semakin canggih. Kenali tanda-tanda email dan pesan phishing serta cara melindungi diri Anda.",
  },
  {
    category: "Berita Keamanan Siber",
    categoryColor: "cyber" as const,
    title: "Man-in-the-Middle Attack: Salah Satu Serangan Siber yang Berbahaya",
    date: "5 Februari 2026",
    excerpt: "Salah satu jenis serangan siber yang berbahaya yaitu MITM. Pelajari bagaimana serangan ini bekerja dan cara mencegahnya.",
  },
  {
    category: "Berita Keamanan Siber",
    categoryColor: "cyber" as const,
    title: "Ransomware: Ancaman Serius dan Cara Efektif Menghadapinya",
    date: "1 Februari 2026",
    excerpt: "Ransomware terus menjadi ancaman terbesar. Kenali cara kerjanya dan langkah-langkah pencegahan yang efektif.",
  },
];

const ArticlesSection = () => {
  return (
    <section id="artikel" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Artikel Terbaru</h2>
        <p className="text-center text-muted-foreground mb-12">
          Informasi dan berita terkini seputar keamanan siber
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border group"
            >
              <div className={`h-48 ${article.categoryColor === "warning" ? "bg-badge-warning/20" : "bg-badge-cyber/20"} flex items-center justify-center`}>
                <div className={`w-16 h-16 rounded-full ${article.categoryColor === "warning" ? "bg-badge-warning/30" : "bg-badge-cyber/30"} flex items-center justify-center`}>
                  <span className="text-3xl">🛡️</span>
                </div>
              </div>
              <div className="p-5">
                <Badge
                  className={`mb-3 text-xs font-medium ${
                    article.categoryColor === "warning"
                      ? "bg-badge-warning/15 text-badge-warning border-badge-warning/30"
                      : "bg-badge-cyber/15 text-badge-cyber border-badge-cyber/30"
                  }`}
                  variant="outline"
                >
                  {article.category}
                </Badge>
                <h3 className="font-bold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  KARIMUN-CSIRT • {article.date}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs">
                  Baca Selengkapnya
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
