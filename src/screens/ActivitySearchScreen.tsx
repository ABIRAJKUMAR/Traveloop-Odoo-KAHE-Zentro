import { Layout } from '../components/Layout';
import { useStore } from '../store';

export default function ActivitySearchScreen() {
  const { setScreen } = useStore();
  
  return (
    <Layout title="Activity Search" onBack={() => setScreen('ITINERARY')}>
      <div className="p-8 text-center text-gray-500">
        Activity discovery catalog would go here. For now, you can add activities manually directly in the Itinerary builder.
        <br/><br/>
        <button onClick={() => setScreen('ITINERARY')} className="px-6 py-2 bg-primary text-white rounded-lg">
          Back to Itinerary
        </button>
      </div>
    </Layout>
  );
}
