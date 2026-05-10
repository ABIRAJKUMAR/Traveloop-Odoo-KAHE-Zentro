import { useStore, CITIES } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Plus } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function DashboardScreen() {
  const { user, trips, setScreen, setSelectedTripId } = useStore();

  // Sort trips by closest start date
  const upcomingTrips = [...trips].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  ).slice(0, 3);

  const openTrip = (id: string) => {
    setSelectedTripId(id);
    setScreen('ITINERARY');
  };

  return (
    <Layout title="Dashboard">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 max-w-7xl mx-auto space-y-8"
      >
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Ready for your next adventure, {user?.name.split(' ')[0] || 'Traveler'}?
            </h1>
            <p className="text-primary-100 mb-6 max-w-xl text-lg">
              You have {trips.length} planned trips. Let's make the most out of every journey.
            </p>
            <button 
              onClick={() => setScreen('CREATE_TRIP')}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-accent/30 flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Plus size={20} />
              Plan New Trip
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <MapPin size={300} />
          </div>
        </div>

        {/* Recent/Upcoming Trips */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Upcoming Trips</h2>
            <button 
              onClick={() => setScreen('MY_TRIPS')}
              className="text-primary font-medium hover:text-primary-light flex items-center gap-1 transition-colors"
            >
              View All <ArrowRight size={16} />
            </button>
          </div>
          
          {upcomingTrips.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-gray-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">No trips planned yet</h3>
              <p className="text-gray-500">Your upcoming adventures will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTrips.map((trip) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={trip.id}
                  onClick={() => openTrip(trip.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={trip.coverImage || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'} 
                      alt={trip.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-1 truncate">{trip.name}</h3>
                      <div className="flex items-center text-white/90 text-sm gap-2">
                        <Calendar size={14} />
                        {format(parseISO(trip.startDate), 'MMM d, yyyy')}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                      <MapPin size={16} className="text-primary" />
                      {trip.stops.length} Stops
                    </div>
                    <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {Math.ceil((new Date(trip.endDate).getTime() - new Date(trip.startDate).getTime()) / (1000 * 3600 * 24))} Days
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Recommended Destinations Carousel */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Destinations</h2>
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 snap-x">
            {CITIES.map((city) => (
              <div 
                key={city.id} 
                className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 snap-center group"
              >
                <div className="h-40 relative overflow-hidden">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{city.name}</h3>
                    <p className="text-gray-500 text-sm">{city.country}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    city.costIndex === 'High' ? 'bg-red-100 text-red-700' :
                    city.costIndex === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {city.costIndex} Cost
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </Layout>
  );
}
