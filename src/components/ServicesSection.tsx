import { Shield, FileText, AlertTriangle, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Monitoring Keamanan",
    description: "Pemantauan ancaman siber secara proaktif untuk melindungi infrastruktur digital pemerintah.",
  },
  {
    icon: AlertTriangle,
    title: "Respons Insiden",
    description: "Penanganan cepat dan terkoordinasi terhadap insiden keamanan siber.",
  },
  {
    icon: FileText,
    title: "Edukasi & Panduan",
    description: "Penyediaan materi edukasi dan panduan keamanan siber untuk seluruh stakeholder.",
  },
  {
    icon: HeadphonesIcon,
    title: "Konsultasi Keamanan",
    description: "Layanan konsultasi terkait keamanan informasi dan perlindungan data.",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Layanan Kami</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Berbagai layanan keamanan siber untuk melindungi aset digital Anda
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
