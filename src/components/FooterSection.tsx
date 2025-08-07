export const FooterSection = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-youtube", url: "#", label: "YouTube" },
    { icon: "fab fa-instagram", url: "#", label: "Instagram" }
  ];

  const partnerLogos = [
    { name: "Jakarta Smart City", icon: "fas fa-city" },
    { name: "Satu Data Jakarta", icon: "fas fa-database" },
    { name: "Berita Jakarta", icon: "fas fa-newspaper" },
    { name: "PPID", icon: "fas fa-info-circle" },
    { name: "Jala Hoaks", icon: "fas fa-shield-alt" }
  ];

  const stats = [
    { label: "Pengunjung hari ini", value: "2.518" },
    { label: "Kemarin", value: "7.962" },
    { label: "Minggu ini", value: "25.916" },
    { label: "Bulan ini", value: "44.768" },
    { label: "Total", value: "9.077.759" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Partner Logos */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center space-x-3 text-white/80 hover:text-white smooth-transition cursor-pointer">
                <i className={`${partner.icon} text-2xl`}></i>
                <span className="font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 smooth-transition"
                aria-label={social.label}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">JAKARTA.GO.ID</h3>
            <div className="space-y-3 text-white/80">
              <p>Jl. Medan Merdeka Selatan 8-9 Jakarta Pusat, Jakarta, Indonesia</p>
              <p>Telp: (+6221) 382 2255</p>
              <p>Faks: (+6221) 382 2255</p>
              <p>Surel: dki@jakarta.go.id</p>
            </div>
          </div>

          {/* Statistics */}
          <div>
            <h3 className="text-xl font-bold mb-6">Statistik Pengunjung</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-white/70 text-sm">
            © 2024 Dinas Komunikasi, Informatika dan Statistik Pemprov DKI Jakarta
          </div>
        </div>
      </div>
    </footer>
  );
};