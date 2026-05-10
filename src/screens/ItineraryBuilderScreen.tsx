import { useState } from 'react';
import { useStore, CITIES } from '../store';
import { Layout } from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { MapPin, Calendar, Clock, DollarSign, Plus, GripVertical, Trash2, ChevronRight, Check } from 'lucide-react';
import type { Activity, Stop, ActivityType } from '../types';

export default function ItineraryBuilderScreen() {
  const { trips, selectedTripId, updateTrip, setScreen } = useStore();
  const trip = trips.find(t => t.id === selectedTripId);

  const [activeStopId, setActiveStopId] = useState<string | null>(trip?.stops[0]?.id || null);
  const [isAddingCity, setIsAddingCity] = useState(false);
  const [isAddingActivity, setIsAddingActivity] = useState(false);

  // Activity Form State
  const [actTitle, setActTitle] = useState('');
  const [actType, setActType] = useState<ActivityType>('Sightseeing');
  const [actCost, setActCost] = useState('');
  const [actTime, setActTime] = useState('09:00');
  const [actDuration, setActDuration] = useState('120');

  if (!trip) {
    return <Layout><div className="p-8">Trip not found</div></Layout>;
  }

  const addCityStop = (cityId: string) => {
    const city = CITIES.find(c => c.id === cityId);
    if (!city) return;

    const newStop: Stop = {
      id: uuidv4(),
      cityId: city.id,
      cityName: city.name,
      country: city.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
      activities: []
    };

    updateTrip(trip.id, { stops: [...trip.stops, newStop] });
    setIsAddingCity(false);
    setActiveStopId(newStop.id);
  };

  const removeStop = (stopId: string) => {
    updateTrip(trip.id, { stops: trip.stops.filter(s => s.id !== stopId) });
    if (activeStopId === stopId) setActiveStopId(null);
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeStopId) return;

    const newActivity: Activity = {
      id: uuidv4(),
      title: actTitle,
      type: actType,
      cost: parseFloat(actCost) || 0,
      startTime: actTime,
      durationMinutes: parseInt(actDuration) || 60
    };

    const updatedStops = trip.stops.map(stop => {
      if (stop.id === activeStopId) {
        // Sort activities by time
        const acts = [...stop.activities, newActivity].sort((a, b) => a.startTime.localeCompare(b.startTime));
        return { ...stop, activities: acts };
      }
      return stop;
    });

    updateTrip(trip.id, { stops: updatedStops });
    
    // Reset form
    setActTitle('');
    setActCost('');
    setIsAddingActivity(false);
  };

  const removeActivity = (stopId: string, actId: string) => {
    const updatedStops = trip.stops.map(stop => {
      if (stop.id === stopId) {
        return { ...stop, activities: stop.activities.filter(a => a.id !== actId) };
      }
      return stop;
    });
    updateTrip(trip.id, { stops: updatedStops });
  };

  const activeStop = trip.stops.find(s => s.id === activeStopId);

  const getActivityColor = (type: ActivityType) => {
    switch (type) {
      case 'Sightseeing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Food': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Transport': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Stay': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <Layout title={`Itinerary: ${trip.name}`}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Sidebar - Stops list */}
        <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col shrink-0 h-[40vh] md:h-full">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <MapPin size={18} className="text-primary" /> Route
            </h3>
            <button 
              onClick={() => setIsAddingCity(!isAddingCity)}
              className="p-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-md transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <AnimatePresence>
              {isAddingCity && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4 space-y-2"
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase">Select City</p>
                  {CITIES.map(city => (
                    <button
                      key={city.id}
                      onClick={() => addCityStop(city.id)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-white rounded-md flex justify-between items-center group transition-colors"
                    >
                      <span className="font-medium text-gray-700 group-hover:text-primary">{city.name}</span>
                      <ChevronRight size={14} className="text-gray-400 opacity-0 group-hover:opacity-100" />
                    </button>
                  ))}
                  <button 
                    onClick={() => setScreen('CITY_SEARCH')}
                    className="w-full text-center px-3 py-2 text-sm text-primary font-medium hover:bg-primary/5 rounded-md mt-2"
                  >
                    Search More Cities...
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {trip.stops.length === 0 && !isAddingCity && (
              <div className="text-center p-6 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-xl">
                No stops added yet. Click + to add your first destination.
              </div>
            )}

            {trip.stops.map((stop, index) => (
              <div 
                key={stop.id}
                onClick={() => setActiveStopId(stop.id)}
                className={`relative flex items-center p-3 rounded-xl cursor-pointer transition-all border ${
                  activeStopId === stop.id 
                    ? 'bg-primary border-primary text-white shadow-md' 
                    : 'bg-white border-gray-200 hover:border-primary/50 text-gray-700'
                }`}
              >
                <div className="mr-3 cursor-grab opacity-50 hover:opacity-100">
                  <GripVertical size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate">{stop.cityName}</h4>
                  <div className={`text-xs flex items-center gap-1 ${activeStopId === stop.id ? 'text-primary-100' : 'text-gray-500'}`}>
                    <Calendar size={12} /> {stop.activities.length} activities
                  </div>
                </div>
                {activeStopId === stop.id && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeStop(stop.id); }}
                    className="p-1.5 text-white/70 hover:text-white hover:bg-white/20 rounded-md transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Area - Activities for active stop */}
        <div className="flex-1 flex flex-col bg-gray-50/50 h-[60vh] md:h-full">
          {activeStop ? (
            <>
              <div className="p-6 border-b border-gray-200 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{activeStop.cityName}, {activeStop.country}</h2>
                    <p className="text-gray-500 mt-1 flex items-center gap-2">
                      <Calendar size={16} /> Plan your days here
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsAddingActivity(true)}
                    className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2 transition-colors"
                  >
                    <Plus size={18} />
                    Add Activity
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 relative">
                {/* Activity Form Modal-ish */}
                <AnimatePresence>
                  {isAddingActivity && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8"
                    >
                      <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">New Activity</h3>
                      <form onSubmit={handleAddActivity} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Title</label>
                            <input type="text" required value={actTitle} onChange={e=>setActTitle(e.target.value)} placeholder="E.g. Eiffel Tower" className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-primary outline-none" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Type</label>
                            <select value={actType} onChange={e=>setActType(e.target.value as ActivityType)} className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-primary outline-none">
                              <option value="Sightseeing">Sightseeing</option>
                              <option value="Food">Food/Dining</option>
                              <option value="Transport">Transport</option>
                              <option value="Stay">Accommodation</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Time</label>
                            <input type="time" required value={actTime} onChange={e=>setActTime(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-primary outline-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <label className="text-sm font-medium text-gray-700">Duration (min)</label>
                              <input type="number" required value={actDuration} onChange={e=>setActDuration(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-primary outline-none" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-sm font-medium text-gray-700">Cost ($)</label>
                              <input type="number" required value={actCost} onChange={e=>setActCost(e.target.value)} placeholder="0" className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-primary outline-none" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                          <button type="button" onClick={() => setIsAddingActivity(false)} className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg flex items-center gap-1"><Check size={16}/> Save</button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Timeline */}
                <div className="relative border-l-2 border-gray-200 ml-3 space-y-6 pb-12">
                  {activeStop.activities.length === 0 && !isAddingActivity && (
                    <div className="ml-6 p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-500 text-sm">
                      No activities planned yet. Add some to build your itinerary.
                    </div>
                  )}

                  {activeStop.activities.map((act) => (
                    <div key={act.id} className="relative ml-8">
                      {/* Timeline dot */}
                      <div className="absolute -left-[41px] top-4 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-sm z-10"></div>
                      
                      <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 group">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-gray-800">{act.startTime}</span>
                            <h4 className="font-semibold text-gray-900 text-lg">{act.title}</h4>
                          </div>
                          <button 
                            onClick={() => removeActivity(activeStop.id, act.id)}
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getActivityColor(act.type)}`}>
                            {act.type}
                          </span>
                          <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md flex items-center gap-1">
                            <Clock size={12} /> {act.durationMinutes} min
                          </span>
                          <span className="px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 border border-green-100 rounded-md flex items-center">
                            <DollarSign size={12} /> {act.cost}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
              <MapPin size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">Select a stop from the route to edit activities</p>
              <p className="text-sm mt-1">Or add a new city to your route</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
