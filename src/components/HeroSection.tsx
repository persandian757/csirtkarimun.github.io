import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-in-up">
          KARIMUN-CSIRT
        </h1>
        <p className="max-w-2xl mx-auto text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Tim Tanggap Insiden Siber (Cyber Security Incident Response Team) Kabupaten Karimun.
          Melindungi ruang siber dan memberikan respons cepat terhadap insiden keamanan siber
          di lingkungan Pemerintah Kabupaten Karimun.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Selengkapnya
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="https://eticketing-csirt.karimunkab.go.id" target="_blank" rel="noopener noreferrer">
              Lapor Insiden
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
