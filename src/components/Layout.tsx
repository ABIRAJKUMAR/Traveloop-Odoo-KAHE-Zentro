import { useStore } from '../store';
import { Compass, Map, PlusCircle, PieChart, Briefcase, FileText, User as UserIcon, LogOut, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Layout = ({ children, hideSidebar = false, title, onBack }: { children: React.ReactNode, hideSidebar?: boolean, title?: string, onBack?: () => void }) => {
  const { setScreen, activeScreen, logout, selectedTripId } = useStore();

  const navItems = [
    { id: 'DASHBOARD', label: 'Dashboard', icon: Compass, showAlways: true },
    { id: 'MY_TRIPS', label: 'My Trips', icon: Map, showAlways: true },
    { id: 'CREATE_TRIP', label: 'New Trip', icon: PlusCircle, showAlways: true },
    { id: 'ITINERARY', label: 'Itinerary', icon: Map, showTrip: true },
    { id: 'BUDGET', label: 'Budget', icon: PieChart, showTrip: true },
    { id: 'PACKING', label: 'Packing', icon: Briefcase, showTrip: true },
    { id: 'NOTES', label: 'Notes', icon: FileText, showTrip: true },
    { id: 'PROFILE', label: 'Profile', icon: UserIcon, showAlways: true },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {!hideSidebar && (
        <motion.div 
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0"
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Compass className="text-accent" /> Payanam
            </h1>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {navItems.filter(i => i.showAlways).map(item => (
                <button
                  key={item.id}
                  onClick={() => setScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeScreen === item.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}

              {selectedTripId && (
                <>
                  <div className="pt-6 pb-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Current Trip Tools
                  </div>
                  {navItems.filter(i => i.showTrip).map(item => (
                    <button
                      key={item.id}
                      onClick={() => setScreen(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeScreen === item.id 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </button>
                  ))}
                </>
              )}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </motion.div>
      )}

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {(title || onBack) && (
          <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 flex items-center gap-4 sticky top-0 z-10">
            {onBack && (
              <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                <ChevronLeft size={20} />
              </button>
            )}
            {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}
          </header>
        )}
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile nav indicator - very simple */}
      {!hideSidebar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3 z-50">
          {[
            { id: 'DASHBOARD', icon: Compass },
            { id: 'MY_TRIPS', icon: Map },
            { id: 'CREATE_TRIP', icon: PlusCircle },
            { id: 'PROFILE', icon: UserIcon },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={`p-2 rounded-xl transition-colors ${activeScreen === item.id ? 'bg-primary/10 text-primary' : 'text-gray-500'}`}
            >
              <item.icon size={24} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
