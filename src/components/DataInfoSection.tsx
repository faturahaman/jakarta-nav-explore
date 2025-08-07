import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DataInfoSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Data dan Informasi</h2>
          <p className="text-muted-foreground">
            Akses ragam data dan informasi resmi Jakarta yang transparan dan terkini.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden group cursor-pointer hover:shadow-lg smooth-transition">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-primary text-2xl"></i>
                </div>
                <i className="fas fa-arrow-right text-muted-foreground group-hover:text-primary smooth-transition"></i>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Aplikasi Mobile</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unduh dan manfaatkan aplikasi resmi Pemprov DKI Jakarta untuk layanan dan informasi dalam genggaman.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group cursor-pointer hover:shadow-lg smooth-transition">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-bar text-primary text-2xl"></i>
                </div>
                <i className="fas fa-arrow-right text-muted-foreground group-hover:text-primary smooth-transition"></i>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Open Data</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Akses data terbuka Pemerintah Provinsi DKI Jakarta untuk penelitian, analisis, dan transparansi publik.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};