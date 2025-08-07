import { useState } from "react";

interface NavigationItem {
  label: string;
  children?: Record<string, NavigationItem>;
}

interface NavigationData {
  [key: string]: NavigationItem;
}

const navigationData: NavigationData = {
  "mengenal-jakarta": {
    label: "Mengenal Jakarta",
    children: {
      "profil-kota": {
        label: "Profil Jakarta",
        children: {
          sejarah: { label: "Sejarah Jakarta" },
          "visi-misi": { label: "Visi dan Misi" },
          lambang: { label: "Lambang Jakarta" },
          geografi: { label: "Geografi" },
          demografi: { label: "Demografi" },
          ekonomi: { label: "Ekonomi" },
        },
      },
      pemerintahan: {
        label: "Pemerintahan",
        children: {
          gubernur: { label: "Gubernur DKI Jakarta" },
          wagub: { label: "Wakil Gubernur" },
          sekda: { label: "Sekretariat Daerah" },
          dprd: { label: "DPRD" },
          skpd: { label: "SKPD" },
          ukpd: { label: "UKPD" },
        },
      },
      wilayah: {
        label: "Wilayah Administrasi",
        children: {
          "jakarta-pusat": { label: "Jakarta Pusat" },
          "jakarta-utara": { label: "Jakarta Utara" },
          "jakarta-barat": { label: "Jakarta Barat" },
          "jakarta-selatan": { label: "Jakarta Selatan" },
          "jakarta-timur": { label: "Jakarta Timur" },
          "kepulauan-seribu": { label: "Kepulauan Seribu" },
        },
      },
    },
  },
  "informasi-layanan": {
    label: "Informasi dan Layanan",
    children: {
      "layanan-publik": {
        label: "Layanan Publik",
        children: {
          kesehatan: { label: "Kesehatan" },
          pendidikan: { label: "Pendidikan" },
          transportasi: { label: "Transportasi" },
          administrasi: { label: "Administrasi Kependudukan" },
          perizinan: { label: "Perizinan" },
          perpajakan: { label: "Perpajakan" },
        },
      },
      "program-unggulan": {
        label: "Program Unggulan",
        children: {
          "jak-lingko": { label: "Jak Lingko" },
          "kjp-plus": { label: "KJP Plus" },
          "jak-one": { label: "JakOne Mobile" },
          jha: { label: "Jakarta Health Alert" },
          "jak-wifi": { label: "JakWifi" },
          lpj: { label: "Layanan Jakarta" },
        },
      },
      informasi: {
        label: "Informasi Terkini",
        children: {
          berita: { label: "Berita Terkini" },
          pengumuman: { label: "Pengumuman" },
          agenda: { label: "Agenda Jakarta" },
          "siaran-pers": { label: "Siaran Pers" },
        },
      },
    },
  },
  "jelajah-jakarta": {
    label: "Jelajah Jakarta",
    children: {
      wisata: {
        label: "Wisata Jakarta",
        children: {
          "tempat-wisata": { label: "Destinasi Wisata" },
          "wisata-sejarah": { label: "Wisata Sejarah" },
          museum: { label: "Museum Jakarta" },
          "taman-kota": { label: "Taman Kota" },
          rptra: { label: "RPTRA" },
        },
      },
      budaya: {
        label: "Seni & Budaya",
        children: {
          betawi: { label: "Budaya Betawi" },
          kuliner: { label: "Kuliner Khas" },
          festival: { label: "Festival Jakarta" },
          seni: { label: "Sanggar Seni" },
          galeri: { label: "Galeri Seni" },
        },
      },
      fasilitas: {
        label: "Fasilitas Kota",
        children: {
          olahraga: { label: "Fasilitas Olahraga" },
          perpustakaan: { label: "Perpustakaan" },
          transportasi: { label: "Transportasi Umum" },
          "ruang-publik": { label: "Ruang Publik" },
        },
      },
    },
  },
};

export const JakartaHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLevel1, setActiveLevel1] = useState<string | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null);
  const [activeLevel3, setActiveLevel3] = useState<string | null>(null);

  const handleLevel1Click = (id: string) => {
    if (activeLevel1 === id) {
      setActiveLevel1(null);
      setActiveLevel2(null);
      setActiveLevel3(null);
    } else {
      setActiveLevel1(id);
      setActiveLevel2(null);
      setActiveLevel3(null);
    }
  };

  const handleLevel2Click = (id: string) => {
    if (activeLevel2 === id) {
      setActiveLevel2(null);
      setActiveLevel3(null);
    } else {
      setActiveLevel2(id);
      setActiveLevel3(null);
    }
  };

  const handleLevel3Click = (id: string) => {
    if (activeLevel3 === id) {
      setActiveLevel3(null);
    } else {
      setActiveLevel3(id);
    }
  };

  const renderInfoColumn = () => {
    if (!activeLevel1) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Selamat Datang</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Selamat datang di Portal Resmi Pemerintah Provinsi DKI Jakarta. Silakan pilih kategori layanan untuk mengakses informasi dan layanan yang tersedia.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <i className="fas fa-phone-alt text-2xl text-white mb-2"></i>
              <p className="text-white text-sm font-medium">Call Center</p>
              <p className="text-white/70 text-xs">112</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <i className="fas fa-envelope text-2xl text-white mb-2"></i>
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-white/70 text-xs">dki@jakarta.go.id</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">Layanan Populer:</h4>
            <div className="space-y-2">
              {["Jak Lingko", "PPDB Jakarta", "JakOne Mobile"].map((service) => (
                <a key={service} href="#" className="flex items-center justify-between text-sm text-white/70 hover:text-white smooth-transition">
                  <span>{service}</span>
                  <i className="fas fa-chevron-right"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (!activeLevel2) {
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <i className="fas fa-compass text-white text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white/90">{navigationData[activeLevel1 as keyof typeof navigationData].label}</h3>
              <p className="text-white/70 text-sm mt-1">Silakan pilih kategori layanan untuk melihat detail</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <i className="fas fa-info-circle"></i>
                <span className="text-sm">Pilih menu di sebelah kiri untuk melihat layanan yang tersedia</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <i className="fas fa-clock"></i>
                <span className="text-sm">Layanan tersedia 24 jam</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (!activeLevel3 && activeLevel1 && activeLevel2) {
      const level1Data = navigationData[activeLevel1];
      const level2Data = level1Data.children?.[activeLevel2];
      
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white/90">{level2Data?.label}</h3>
            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{level1Data.label}</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="space-y-3">
              <p className="text-sm text-white/70">Pilih layanan spesifik di sebelah kiri untuk melihat informasi detail.</p>
              <div className="flex items-center space-x-2 text-white/70">
                <i className="fas fa-clock text-sm"></i>
                <span className="text-sm">Update terakhir: Hari ini</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeLevel1 && activeLevel2 && activeLevel3) {
      const level1Data = navigationData[activeLevel1];
      const level2Data = level1Data.children?.[activeLevel2];
      const selectedItem = level2Data?.children?.[activeLevel3];

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">{selectedItem?.label}</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {selectedItem?.label} merupakan bagian dari {level2Data?.label}. 
            Layanan ini tersedia pada jam operasional 08.00 - 16.00 WIB.
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            Untuk informasi lebih lanjut, silakan kunjungi kantor pelayanan terdekat atau hubungi Call Center 112.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JKT</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Jakarta</h1>
                <p className="text-sm text-muted-foreground">Portal Resmi Provinsi DKI Jakarta</p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border border-border hover:bg-muted smooth-transition"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-4 h-0.5 bg-foreground smooth-transition ${isMobileMenuOpen ? 'transform translate-y-1.5 rotate-45' : ''}`}></div>
                <div className={`w-4 h-0.5 bg-foreground smooth-transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-4 h-0.5 bg-foreground smooth-transition ${isMobileMenuOpen ? 'transform -translate-y-1.5 -rotate-45' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="max-w-7xl mx-auto">
          {/* Level 1 Navigation */}
          <div className="top-level-nav">
            {Object.entries(navigationData).map(([id, data]) => (
              <button
                key={id}
                onClick={() => handleLevel1Click(id)}
                className={`top-level-button ${activeLevel1 === id ? 'active' : ''}`}
              >
                {data.label}
                <span className={`ml-2 smooth-transition ${activeLevel1 === id ? 'transform rotate-180' : ''}`}>▼</span>
              </button>
            ))}
          </div>

          {/* Multi-level Navigation Columns */}
          {activeLevel1 && (
            <div className="nav-columns">
              {/* Level 2 Column */}
              <div className="nav-column">
                <h3 className="text-lg font-semibold mb-4 text-white/90">
                  {navigationData[activeLevel1 as keyof typeof navigationData].label}
                </h3>
                <div className="space-y-1">
                  {Object.entries(navigationData[activeLevel1]?.children || {}).map(([id, data]) => (
                    <button
                      key={id}
                      onClick={() => handleLevel2Click(id)}
                      className={`nav-button ${activeLevel2 === id ? 'active' : ''}`}
                    >
                      {data.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level 3 Column */}
              <div className="nav-column">
                {activeLevel2 && activeLevel1 && (
                  <>
                    <h3 className="text-lg font-semibold mb-4 text-white/90">
                      {navigationData[activeLevel1]?.children?.[activeLevel2]?.label}
                    </h3>
                    <div className="space-y-1">
                      {Object.entries(navigationData[activeLevel1]?.children?.[activeLevel2]?.children || {}).map(([id, data]) => (
                        <button
                          key={id}
                          onClick={() => handleLevel3Click(id)}
                          className={`nav-button ${activeLevel3 === id ? 'active' : ''}`}
                        >
                          {data.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Info Column */}
              <div className="nav-column">
                {renderInfoColumn()}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};