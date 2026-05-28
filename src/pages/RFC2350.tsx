import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PDF_URL = "/RFC-2350-KARIMUN-TTIS-v1.1_sign.pdf";

const RFC2350 = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-accent" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">RFC2350 KARIMUN-CSIRT</h1>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Dokumen RFC2350 KARIMUN-CSIRT berisi informasi resmi mengenai tim, kebijakan, dan layanan yang tersedia
          sesuai standar internasional.
        </p>

        <div className="mb-6 flex flex-wrap gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" /> Unduh PDF
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
              Buka di Tab Baru
            </a>
          </Button>
        </div>

        <div className="w-full rounded-lg border border-border overflow-hidden shadow-sm bg-card">
          <object
            data={PDF_URL}
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(PDF_URL)}&embedded=true`}
              className="w-full h-[80vh]"
              title="RFC2350 PDF"
            />
          </object>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RFC2350;
