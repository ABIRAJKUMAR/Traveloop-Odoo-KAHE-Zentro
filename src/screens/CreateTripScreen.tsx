import { useState } from 'react';
import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { Save, Calendar as CalendarIcon, Type, Image as ImageIcon, FileText } from 'lucide-react';

export default function CreateTripScreen() {
  const { addTrip, setScreen, setSelectedTripId } = useStore();
  
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !startDate || !endDate) return;

    const newTrip = {
      id: uuidv4(),
      name,
      startDate,
      endDate,
      description,
      coverImage: coverImage || undefined,
      stops: [],
      notes: [],
      packingList: []
    };

    addTrip(newTrip);
    setSelectedTripId(newTrip.id);
    setScreen('ITINERARY');
  };

  return (
    <Layout title="Plan New Trip">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 md:p-8 max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-primary/5 p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">Trip Details</h2>
            <p className="text-gray-500 mt-1">Fill in the basics to start planning your itinerary.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Type size={16} className="text-primary" /> Trip Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Summer in Italy"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <CalendarIcon size={16} className="text-primary" /> Start Date *
                </label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <CalendarIcon size={16} className="text-primary" /> End Date *
                </label>
                <input
                  type="date"
                  required
                  min={startDate}
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FileText size={16} className="text-primary" /> Description
              </label>
              <textarea
                rows={3}
                placeholder="What's the vibe of this trip?"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <ImageIcon size={16} className="text-primary" /> Cover Image URL
              </label>
              <input
                type="url"
                placeholder="https://..."
                value={coverImage}
                onChange={e => setCoverImage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
              {coverImage && (
                <div className="mt-4 h-40 rounded-xl overflow-hidden border border-gray-200">
                  <img src={coverImage} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </div>

            <div className="pt-6 flex gap-4">
              <button 
                type="button"
                onClick={() => setScreen('MY_TRIPS')}
                className="px-6 py-3 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-light shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all w-full md:w-auto flex-1"
              >
                <Save size={20} />
                Create Trip & Start Planning
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Layout>
  );
}
