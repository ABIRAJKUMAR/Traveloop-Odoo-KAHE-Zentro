import { useState } from 'react';
import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Edit3, Trash2, Clock, PlusCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function NotesScreen() {
  const { trips, selectedTripId, updateTrip } = useStore();
  const trip = trips.find(t => t.id === selectedTripId);

  const [newNote, setNewNote] = useState('');

  if (!trip) return <Layout><div className="p-8">Trip not found</div></Layout>;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const note = {
      id: uuidv4(),
      content: newNote,
      timestamp: Date.now()
    };

    updateTrip(trip.id, { notes: [note, ...trip.notes] });
    setNewNote('');
  };

  const removeNote = (id: string) => {
    updateTrip(trip.id, { notes: trip.notes.filter(n => n.id !== id) });
  };

  return (
    <Layout title="Trip Notes">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 max-w-4xl mx-auto space-y-6"
      >
        {/* Input Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <form onSubmit={handleAddNote} className="flex flex-col">
            <textarea
              value={newNote}
              onChange={e => setNewNote(e.target.value)}
              placeholder="Jot down quick thoughts, ideas, or reminders for this trip..."
              className="w-full p-6 outline-none resize-none min-h-[120px] text-gray-800"
            />
            <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-between items-center">
              <span className="text-xs text-gray-400 font-medium">Supports plain text</span>
              <button 
                type="submit" 
                disabled={!newNote.trim()}
                className="bg-accent hover:bg-accent/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl font-medium shadow-sm flex items-center gap-2 transition-colors"
              >
                <PlusCircle size={18} /> Add Note
              </button>
            </div>
          </form>
        </div>

        {/* Notes List */}
        <div className="space-y-4 mt-8">
          {trip.notes.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Edit3 size={48} className="mx-auto mb-4 opacity-20" />
              <p>Your notes are empty. Start writing above!</p>
            </div>
          ) : (
            trip.notes.map(note => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={note.id} 
                className="bg-yellow-50/50 border border-yellow-100 rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow relative"
              >
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{note.content}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-medium text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={14}/> {format(note.timestamp, 'MMM d, yyyy h:mm a')}</span>
                  <button 
                    onClick={() => removeNote(note.id)}
                    className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </Layout>
  );
}
