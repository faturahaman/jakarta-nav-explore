export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Layanan Darurat",
      icon: "fas fa-phone-alt",
      bgColor: "from-red-400 to-red-600"
    },
    {
      id: 2,
      title: "Layanan Pengunjung",
      icon: "fas fa-user-tie",
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Bisnis dan Investasi",
      icon: "fas fa-chart-line",
      bgColor: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Layanan Disabilitas",
      icon: "fas fa-wheelchair",
      bgColor: "from-yellow-400 to-yellow-600"
    },
    {
      id: 5,
      title: "Administrasi Kependudukan",
      icon: "fas fa-id-card",
      bgColor: "from-cyan-400 to-cyan-600"
    },
    {
      id: 6,
      title: "Pajak dan Retribusi",
      icon: "fas fa-receipt",
      bgColor: "from-orange-400 to-orange-600"
    },
    {
      id: 7,
      title: "Layanan Pendidikan",
      icon: "fas fa-graduation-cap",
      bgColor: "from-indigo-400 to-indigo-600"
    },
    {
      id: 8,
      title: "Ketenagakerjaan & Pelatihan",
      icon: "fas fa-tools",
      bgColor: "from-red-400 to-red-600"
    },
    {
      id: 9,
      title: "Kesehatan & Kebugaran",
      icon: "fas fa-heartbeat",
      bgColor: "from-green-400 to-green-600"
    },
    {
      id: 10,
      title: "Mobilitas & Transportasi",
      icon: "fas fa-bus",
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      id: 11,
      title: "Pemukiman & Lingkungan",
      icon: "fas fa-home",
      bgColor: "from-emerald-400 to-emerald-600"
    },
    {
      id: 12,
      title: "Ruang Terbuka & Fasilitas",
      icon: "fas fa-tree",
      bgColor: "from-lime-400 to-lime-600"
    },
    {
      id: 13,
      title: "Layanan Lain",
      icon: "fas fa-ellipsis-h",
      bgColor: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Layanan</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.bgColor} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 smooth-transition`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-sm font-medium text-center text-foreground group-hover:text-primary smooth-transition leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};