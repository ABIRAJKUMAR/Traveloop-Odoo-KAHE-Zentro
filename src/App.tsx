import { useStore } from './store';
import { AnimatePresence } from 'framer-motion';

// Screen imports (we'll create these next)
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import MyTripsScreen from './screens/MyTripsScreen';
import CreateTripScreen from './screens/CreateTripScreen';
import ItineraryBuilderScreen from './screens/ItineraryBuilderScreen';
import BudgetScreen from './screens/BudgetScreen';
import PackingScreen from './screens/PackingScreen';
import NotesScreen from './screens/NotesScreen';
import ProfileScreen from './screens/ProfileScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import ActivitySearchScreen from './screens/ActivitySearchScreen';

function App() {
  const { activeScreen } = useStore();

  const renderScreen = () => {
    switch (activeScreen) {
      case 'LOGIN': return <LoginScreen />;
      case 'DASHBOARD': return <DashboardScreen />;
      case 'MY_TRIPS': return <MyTripsScreen />;
      case 'CREATE_TRIP': return <CreateTripScreen />;
      case 'ITINERARY': return <ItineraryBuilderScreen />;
      case 'BUDGET': return <BudgetScreen />;
      case 'PACKING': return <PackingScreen />;
      case 'NOTES': return <NotesScreen />;
      case 'PROFILE': return <ProfileScreen />;
      case 'CITY_SEARCH': return <CitySearchScreen />;
      case 'ACTIVITY_SEARCH': return <ActivitySearchScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderScreen()}
    </AnimatePresence>
  );
}

export default App;
