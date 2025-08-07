import heroImage from "@/assets/jakarta-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-transition">
          Jakarta Jati Diri Indonesia, Megapolitan Dunia
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
          Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari warisan budaya, inovasi 
          tanpa henti, hingga destinasi kelas dunia yang memikat. Selamat datang!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-semibold jakarta-shadow smooth-transition transform hover:scale-105">
            <i className="fas fa-play mr-2"></i>
            Jelajahi Jakarta
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold smooth-transition">
            <i className="fas fa-info-circle mr-2"></i>
            Informasi Terkini
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
};