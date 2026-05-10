import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trash2, Edit2, PlusCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function MyTripsScreen() {
  const { trips, setScreen, setSelectedTripId, deleteTrip } = useStore();

  const handleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedTripId(id);
    setScreen('ITINERARY');
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this trip?')) {
      deleteTrip(id);
    }
  };

  return (
    <Layout title="My Trips">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 md:p-8 max-w-7xl mx-auto space-y-6"
      >
        <div className="flex justify-between items-center flex-wrap gap-4 mb-2">
          <p className="text-gray-600 text-lg">Manage all your upcoming and past adventures.</p>
          <button 
            onClick={() => setScreen('CREATE_TRIP')}
            className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-xl font-medium shadow-md flex items-center gap-2 transition-colors"
          >
            <PlusCircle size={18} />
            New Trip
          </button>
        </div>

        {trips.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 mt-8">
            <img src="https://illustrations.popsy.co/amber/taking-notes.svg" alt="Empty" className="w-64 mx-auto opacity-50 mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No trips found</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">Start planning your dream vacation today and build the perfect itinerary.</p>
            <button 
              onClick={() => setScreen('CREATE_TRIP')}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-accent/30 inline-flex items-center gap-2 transition-all"
            >
              <PlusCircle size={20} />
              Create Your First Trip
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <motion.div 
                whileHover={{ y: -4 }}
                key={trip.id}
                onClick={() => { setSelectedTripId(trip.id); setScreen('ITINERARY'); }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={trip.coverImage || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'} 
                    alt={trip.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => handleEdit(e, trip.id)}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-gray-700 hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleDelete(e, trip.id)}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-1 truncate drop-shadow-md">{trip.name}</h3>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                    {trip.description || 'No description provided.'}
                  </p>
                  
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Calendar size={16} className="text-primary" />
                      {format(parseISO(trip.startDate), 'MMM d, yyyy')} - {format(parseISO(trip.endDate), 'MMM d')}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <MapPin size={16} className="text-accent" />
                      {trip.stops.length} Destinations
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </Layout>
  );
}
