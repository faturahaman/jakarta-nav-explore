import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Rayakan Kemerdekaan dengan Tarif Transportasi Umum Rp80 di Jakarta",
    excerpt: "Dalam rangka memperingati Hari Ulang Tahun (HUT) ke-80 Republik Indonesia, Pemprov DKI Jakarta akan menghadirkan tarif spesial Rp80 bagi seluruh moda transportasi umum yang beroperasi di wilayah Jakarta pada 17 Agustus 2025.",
    date: "2025-08-07",
    category: "Transportasi",
    featured: true
  },
  {
    id: 2,
    title: "JAKI Hadir dengan Wajah Baru untuk Jakarta Lebih Nyaman",
    excerpt: "Aplikasi JAKI (Jakarta Kini) telah mengalami pembaruan dengan berbagai fitur baru yang memudahkan warga Jakarta dalam mengakses layanan publik.",
    date: "2025-08-06",
    category: "Teknologi"
  },
  {
    id: 3,
    title: "Penanganan Banjir dengan Inovasi dan Sinergi Pemprov DKI Jakarta",
    excerpt: "Pemerintah Provinsi DKI Jakarta terus berinovasi dalam menangani permasalahan banjir dengan berbagai program strategis dan kolaboratif.",
    date: "2025-08-05",
    category: "Lingkungan"
  },
  {
    id: 4,
    title: "Langkah Strategis Jakarta Mitigasi Ancaman Bencana Iklim",
    excerpt: "Jakarta mengambil langkah proaktif dalam mitigasi perubahan iklim melalui berbagai program berkelanjutan dan ramah lingkungan.",
    date: "2025-08-04",
    category: "Lingkungan"
  },
  {
    id: 5,
    title: "Layanan Konsultasi Dampak Judi Online",
    excerpt: "Pemprov DKI Jakarta menyediakan layanan konsultasi khusus untuk menangani dampak negatif dari judi online bagi masyarakat.",
    date: "2025-08-03",
    category: "Sosial"
  }
];

const popularServices = [
  "JAKI Hadir dengan Wajah Baru untuk Jakarta Lebih Nyaman",
  "Penanganan Banjir dengan Inovasi dan Sinergi Pemprov DKI Jakarta", 
  "Langkah Strategis Jakarta Mitigasi Ancaman Bencana Iklim",
  "Layanan Konsultasi Dampak Judi Online",
  "Membangun Jakarta: Kota Cerdas"
];

export const NewsSection = () => {
  const featuredNews = newsData.find(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Featured News & News List */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News */}
            {featuredNews && (
              <Card className="overflow-hidden jakarta-shadow hover:shadow-lg smooth-transition">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <i className="fas fa-bus text-4xl mb-4"></i>
                      <h3 className="text-lg font-semibold">Transportasi Jakarta</h3>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-jakarta-red text-white">
                    {featuredNews.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{featuredNews.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{featuredNews.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{featuredNews.excerpt}</p>
                  <button className="mt-4 inline-flex items-center text-primary hover:text-primary-dark font-medium smooth-transition">
                    <span>EXPLORE NOW</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </CardContent>
              </Card>
            )}

            {/* News List */}
            <div className="space-y-4">
              {regularNews.map((news) => (
                <Card key={news.id} className="p-6 hover:shadow-md smooth-transition cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-newspaper text-primary text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">{news.category}</Badge>
                        <span className="text-xs text-muted-foreground">{news.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 hover:text-primary smooth-transition">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - Popular & Latest */}
          <div className="space-y-6">
            {/* Popular Tab */}
            <Card className="p-6">
              <div className="flex border-b mb-4">
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-t-lg">
                  POPULER
                </button>
                <button className="px-4 py-2 text-muted-foreground text-sm font-medium hover:text-foreground smooth-transition">
                  TERBARU
                </button>
              </div>
              
              <div className="space-y-4">
                {popularServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary smooth-transition leading-tight">
                        {service}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-light/5 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Butuh Bantuan?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Hubungi Call Center 112 untuk informasi layanan Jakarta
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary-dark smooth-transition">
                  Hubungi Sekarang
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};