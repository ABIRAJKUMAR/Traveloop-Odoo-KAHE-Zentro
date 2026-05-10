import { useState } from 'react';
import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { CheckSquare, Square, Plus, Trash2, Shield, Smartphone, Shirt, Droplets, Briefcase } from 'lucide-react';
import type { PackingCategory, PackingItem } from '../types';

export default function PackingScreen() {
  const { trips, selectedTripId, updateTrip } = useStore();
  const trip = trips.find(t => t.id === selectedTripId);

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PackingCategory>('Clothing');

  if (!trip) return <Layout><div className="p-8">Trip not found</div></Layout>;

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: PackingItem = {
      id: uuidv4(),
      name: newItemName,
      category: newItemCategory,
      isPacked: false,
    };

    updateTrip(trip.id, { packingList: [...trip.packingList, newItem] });
    setNewItemName('');
  };

  const togglePacked = (itemId: string) => {
    const updatedList = trip.packingList.map(item => 
      item.id === itemId ? { ...item, isPacked: !item.isPacked } : item
    );
    updateTrip(trip.id, { packingList: updatedList });
  };

  const removeItem = (itemId: string) => {
    const updatedList = trip.packingList.filter(item => item.id !== itemId);
    updateTrip(trip.id, { packingList: updatedList });
  };

  const categories: { name: PackingCategory; icon: React.FC<any>; color: string }[] = [
    { name: 'Documents', icon: Shield, color: 'text-red-500 bg-red-50' },
    { name: 'Electronics', icon: Smartphone, color: 'text-blue-500 bg-blue-50' },
    { name: 'Clothing', icon: Shirt, color: 'text-purple-500 bg-purple-50' },
    { name: 'Toiletries', icon: Droplets, color: 'text-teal-500 bg-teal-50' },
    { name: 'Other', icon: Briefcase, color: 'text-gray-500 bg-gray-50' },
  ];

  const packedCount = trip.packingList.filter(i => i.isPacked).length;
  const totalCount = trip.packingList.length;
  const progress = totalCount === 0 ? 0 : Math.round((packedCount / totalCount) * 100);

  return (
    <Layout title="Packing Checklist">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 max-w-4xl mx-auto space-y-6"
      >
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border-4 border-gray-100 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-primary" strokeWidth="8%" strokeDasharray="283" strokeDashoffset={283 - (283 * progress) / 100} />
            </svg>
            <span className="font-bold text-gray-800">{progress}%</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg mb-1">Packing Progress</h3>
            <p className="text-gray-500 text-sm">{packedCount} of {totalCount} items packed</p>
          </div>
        </div>

        {/* Add Form */}
        <form onSubmit={handleAddItem} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap md:flex-nowrap gap-3">
          <input
            type="text"
            required
            placeholder="Add a new item..."
            value={newItemName}
            onChange={e => setNewItemName(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none min-w-[200px]"
          />
          <select
            value={newItemCategory}
            onChange={e => setNewItemCategory(e.target.value as PackingCategory)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none bg-white"
          >
            {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
          <button type="submit" className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors w-full md:w-auto">
            <Plus size={18} /> Add
          </button>
        </form>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(category => {
            const items = trip.packingList.filter(i => i.category === category.name);
            if (items.length === 0) return null;

            return (
              <div key={category.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 flex-1">{category.name}</h3>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {items.filter(i => i.isPacked).length}/{items.length}
                  </span>
                </div>

                <div className="space-y-2">
                  {items.map(item => (
                    <div 
                      key={item.id} 
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors group cursor-pointer ${item.isPacked ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                      onClick={() => togglePacked(item.id)}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <button className={`text-${item.isPacked ? 'primary' : 'gray-300'} transition-colors`}>
                          {item.isPacked ? <CheckSquare size={20} /> : <Square size={20} />}
                        </button>
                        <span className={`font-medium transition-all ${item.isPacked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                          {item.name}
                        </span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
