import { useState } from 'react';
import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { User as UserIcon, Mail, Globe, Save } from 'lucide-react';

export default function ProfileScreen() {
  const { user, setUser } = useStore();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [language, setLanguage] = useState(user?.language || 'en');
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return <Layout><div className="p-8">Not logged in</div></Layout>;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, name, email, language });
    setIsEditing(false);
  };

  return (
    <Layout title="Profile Settings">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-primary/5 p-8 border-b border-gray-100 flex items-center gap-6">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/30">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-500 flex items-center gap-2 mt-1">
                <Mail size={16} /> {user.email}
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="p-8 space-y-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800 text-lg">Personal Information</h3>
              {!isEditing && (
                <button 
                  type="button" 
                  onClick={() => setIsEditing(true)}
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Edit Profile
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <UserIcon size={16} className="text-gray-400" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  disabled={!isEditing}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  disabled={!isEditing}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Globe size={16} className="text-gray-400" /> Preferred Language
                </label>
                <select
                  disabled={!isEditing}
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-50 disabled:text-gray-500 bg-white"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>

            {isEditing && (
              <div className="pt-4 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors w-full md:w-auto"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-light shadow-lg flex items-center justify-center gap-2 transition-all w-full md:w-auto flex-1"
                >
                  <Save size={20} /> Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </Layout>
  );
}
