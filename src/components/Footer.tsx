import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-lg font-bold">KARIMUN-CSIRT</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Tim Tanggap Insiden Siber Kabupaten Karimun. Melindungi ruang siber pemerintah daerah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Beranda", "Profil", "Artikel", "RFC2350", "Layanan", "Panduan"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Kontak</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                csirt@karimunkab.go.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                (0777) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                Jl. Pemerintahan, Tanjung Balai Karimun, Kepulauan Riau
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 KARIMUN-CSIRT. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
