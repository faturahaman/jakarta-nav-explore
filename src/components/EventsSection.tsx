import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Bigu Festival 2025",
      date: "12 Jul - 13 Jul",
      location: "Lapangan Aldiron",
      image: "fas fa-music",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Pameran Srivijaya: Accross The Land, River and Sea",
      date: "11 Aug - 16 Nov",
      location: "Museum Nasional",
      image: "fas fa-palette",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 3,
      title: "Kei Imazu: The Sea is Barely Wrinkled",
      date: "01 Jul - 05 Oct",
      location: "Galeri Nasional",
      image: "fas fa-water",
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 4,
      title: "Doh Kyung Soo Asia Concert Tour",
      date: "09 Aug - 09 Aug",
      location: "ICE BSD",
      image: "fas fa-microphone",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const calendar = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 7;
  const eventDates = [9, 11];

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Kalender Acara</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card className="bg-white text-foreground">
              <CardHeader className="text-center">
                <div className="flex items-center justify-between">
                  <button className="p-2 hover:bg-muted rounded-lg">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <CardTitle className="text-lg">August 2025</CardTitle>
                  <button className="p-2 hover:bg-muted rounded-lg">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="py-2 font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {calendar.map(date => (
                    <div 
                      key={date} 
                      className={`py-2 cursor-pointer rounded transition-colors ${
                        date === today 
                          ? 'bg-yellow-400 text-black font-bold' 
                          : eventDates.includes(date)
                          ? 'bg-primary text-white font-semibold'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Event Preview */}
            <div className="mt-6 space-y-3">
              {events.slice(0, 2).map((event) => (
                <div key={event.id} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <i className={`${event.image} text-white`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{event.title}</h4>
                    <p className="text-xs text-white/70">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Event */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/20 text-white border-white/30">FULL LINE UP</Badge>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">BIGU FESTIVAL 2025</h3>
                <p className="text-lg mb-6 text-white/90">Day 1 Performances - 12 Juli 2025</p>
                
                <div className="text-xl font-semibold space-y-1 mb-8">
                  <p>RAISA • HINDIA • YOVIE & NUNO</p>
                  <p>RIZKY FEBIAN • HIVI! • .FEAST</p>
                  <p>BILAL INDRAJAYA • REALITY CLUB</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 translate-y-16"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full transform -translate-y-12 translate-x-12"></div>
            </div>

            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Bigu Festival 2025</h4>
              <p className="text-white/90 text-sm mb-4">Lapangan Aldiron, 12-13 Juli 2025</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Bigu Festival kembali hadir dengan konsep piknik terbesar di Indonesia yang punya tempat spesial di hati para penikmat musik. Dikerjakan oleh Bigu Creative, Bigu Festival akan menyapa Sobat Bigu dengan barisan musisi papan atas seperti Raisa, Rizky Febian, Yovie & Nuno, Hindia, dan masih banyak musisi lainnya.
              </p>
              <button className="mt-4 text-sm font-medium text-white hover:text-yellow-300 smooth-transition">
                Selengkapnya..
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};