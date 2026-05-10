import { useState } from 'react';
import { useStore, CITIES } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Search, MapPin, Plus, DollarSign } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function CitySearchScreen() {
  const { trips, selectedTripId, updateTrip, setScreen } = useStore();
  const trip = trips.find(t => t.id === selectedTripId);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = CITIES.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    city.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCity = (cityId: string) => {
    if (!trip) return;
    const city = CITIES.find(c => c.id === cityId);
    if (!city) return;

    const newStop = {
      id: uuidv4(),
      cityId: city.id,
      cityName: city.name,
      country: city.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
      activities: []
    };

    updateTrip(trip.id, { stops: [...trip.stops, newStop] });
    setScreen('ITINERARY');
  };

  return (
    <Layout title="Explore Cities" onBack={() => setScreen('ITINERARY')}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 md:p-8 max-w-6xl mx-auto space-y-8"
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search by city or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
          />
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={city.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm text-sm font-semibold">
                  <DollarSign size={14} className={city.costIndex === 'High' ? 'text-red-500' : city.costIndex === 'Medium' ? 'text-yellow-500' : 'text-green-500'} />
                  <span className="text-gray-700">{city.costIndex}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{city.name}</h3>
                    <p className="text-gray-500 flex items-center gap-1 text-sm mt-1">
                      <MapPin size={14} /> {city.country}
                    </p>
                  </div>
                </div>
                {trip ? (
                  <button 
                    onClick={() => handleAddCity(city.id)}
                    className="w-full py-3 bg-gray-50 hover:bg-primary hover:text-white text-gray-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <Plus size={18} className="group-hover/btn:scale-110 transition-transform" /> Add to Trip
                  </button>
                ) : (
                  <p className="text-sm text-amber-600 bg-amber-50 p-2 rounded-lg text-center">
                    Select a trip first to add cities.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
          {filteredCities.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-400">
              <Search size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg">No cities found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </motion.div>
    </Layout>
  );
}
