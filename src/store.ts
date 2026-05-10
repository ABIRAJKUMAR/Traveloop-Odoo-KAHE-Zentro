import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Trip, User, City } from './types';
import { v4 as uuidv4 } from 'uuid';

export const CITIES: City[] = [
  { id: 'c1', name: 'Tokyo', country: 'Japan', costIndex: 'High', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' },
  { id: 'c2', name: 'Kyoto', country: 'Japan', costIndex: 'Medium', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3', name: 'Paris', country: 'France', costIndex: 'High', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4', name: 'Rome', country: 'Italy', costIndex: 'Medium', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80' },
  { id: 'c5', name: 'Bangalore', country: 'India', costIndex: 'Low', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80' },
  { id: 'c6', name: 'Kochi', country: 'India', costIndex: 'Low', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
];

const INITIAL_TRIPS: Trip[] = [
  {
    id: uuidv4(),
    name: 'Japan Spring Tour',
    startDate: '2024-04-01',
    endDate: '2024-04-15',
    description: 'Exploring the cherry blossoms and vibrant culture of Japan.',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        id: uuidv4(),
        cityId: 'c1',
        cityName: 'Tokyo',
        country: 'Japan',
        startDate: '2024-04-01',
        endDate: '2024-04-07',
        activities: [
          { id: uuidv4(), title: 'Senso-ji Temple', type: 'Sightseeing', cost: 10, durationMinutes: 120, startTime: '09:00' },
          { id: uuidv4(), title: 'Sushi Dinner', type: 'Food', cost: 50, durationMinutes: 90, startTime: '19:00' },
          { id: uuidv4(), title: 'Hotel Stay', type: 'Stay', cost: 200, durationMinutes: 1440, startTime: '00:00' },
        ],
      },
      {
        id: uuidv4(),
        cityId: 'c2',
        cityName: 'Kyoto',
        country: 'Japan',
        startDate: '2024-04-08',
        endDate: '2024-04-15',
        activities: [
          { id: uuidv4(), title: 'Shinkansen', type: 'Transport', cost: 130, durationMinutes: 150, startTime: '08:00' },
          { id: uuidv4(), title: 'Fushimi Inari', type: 'Sightseeing', cost: 0, durationMinutes: 180, startTime: '14:00' },
          { id: uuidv4(), title: 'Ryokan Stay', type: 'Stay', cost: 250, durationMinutes: 1440, startTime: '00:00' },
        ]
      }
    ],
    notes: [
      { id: uuidv4(), content: 'Buy JR Pass before leaving!', timestamp: Date.now() - 86400000 }
    ],
    packingList: [
      { id: uuidv4(), name: 'Passport', category: 'Documents', isPacked: true },
      { id: uuidv4(), name: 'Camera', category: 'Electronics', isPacked: false },
    ]
  },
  {
    id: uuidv4(),
    name: 'Europe Backpack',
    startDate: '2024-06-10',
    endDate: '2024-07-10',
    description: 'A month-long adventure across Western Europe.',
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        id: uuidv4(),
        cityId: 'c3',
        cityName: 'Paris',
        country: 'France',
        startDate: '2024-06-10',
        endDate: '2024-06-15',
        activities: [
          { id: uuidv4(), title: 'Eiffel Tower', type: 'Sightseeing', cost: 30, durationMinutes: 120, startTime: '10:00' },
          { id: uuidv4(), title: 'Croissant Breakfast', type: 'Food', cost: 15, durationMinutes: 45, startTime: '08:30' },
          { id: uuidv4(), title: 'Hostel', type: 'Stay', cost: 50, durationMinutes: 1440, startTime: '00:00' },
        ],
      },
      {
        id: uuidv4(),
        cityId: 'c4',
        cityName: 'Rome',
        country: 'Italy',
        startDate: '2024-06-16',
        endDate: '2024-06-20',
        activities: [
          { id: uuidv4(), title: 'Flight to Rome', type: 'Transport', cost: 80, durationMinutes: 120, startTime: '09:00' },
          { id: uuidv4(), title: 'Colosseum', type: 'Sightseeing', cost: 25, durationMinutes: 180, startTime: '14:00' },
          { id: uuidv4(), title: 'Pizza Dinner', type: 'Food', cost: 20, durationMinutes: 90, startTime: '20:00' },
          { id: uuidv4(), title: 'Hostel', type: 'Stay', cost: 45, durationMinutes: 1440, startTime: '00:00' },
        ]
      }
    ],
    notes: [],
    packingList: [
      { id: uuidv4(), name: 'Eurail Pass', category: 'Documents', isPacked: true },
      { id: uuidv4(), name: 'Travel Adapter', category: 'Electronics', isPacked: false },
      { id: uuidv4(), name: 'Comfortable Shoes', category: 'Clothing', isPacked: false },
    ]
  },
  {
    id: uuidv4(),
    name: 'South India Road Trip',
    startDate: '2024-11-05',
    endDate: '2024-11-20',
    description: 'Coastal drives, hill stations, and amazing food.',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        id: uuidv4(),
        cityId: 'c5',
        cityName: 'Bangalore',
        country: 'India',
        startDate: '2024-11-05',
        endDate: '2024-11-08',
        activities: [
          { id: uuidv4(), title: 'Car Rental', type: 'Transport', cost: 200, durationMinutes: 60, startTime: '09:00' },
          { id: uuidv4(), title: 'Dosa Breakfast', type: 'Food', cost: 5, durationMinutes: 45, startTime: '08:00' },
          { id: uuidv4(), title: 'Boutique Hotel', type: 'Stay', cost: 60, durationMinutes: 1440, startTime: '00:00' },
        ],
      },
      {
        id: uuidv4(),
        cityId: 'c6',
        cityName: 'Kochi',
        country: 'India',
        startDate: '2024-11-09',
        endDate: '2024-11-14',
        activities: [
          { id: uuidv4(), title: 'Drive to Kochi', type: 'Transport', cost: 30, durationMinutes: 480, startTime: '06:00' },
          { id: uuidv4(), title: 'Fort Kochi Tour', type: 'Sightseeing', cost: 15, durationMinutes: 180, startTime: '15:00' },
          { id: uuidv4(), title: 'Seafood Dinner', type: 'Food', cost: 25, durationMinutes: 90, startTime: '19:30' },
          { id: uuidv4(), title: 'Homestay', type: 'Stay', cost: 40, durationMinutes: 1440, startTime: '00:00' },
        ]
      }
    ],
    notes: [],
    packingList: []
  }
];

type AppState = {
  user: User | null;
  trips: Trip[];
  activeScreen: string; // "LOGIN", "DASHBOARD", "MY_TRIPS", "CREATE_TRIP", "ITINERARY", "BUDGET", "PACKING", "NOTES", "CITY_SEARCH", "PROFILE"
  selectedTripId: string | null;

  setUser: (user: User | null) => void;
  setScreen: (screen: string) => void;
  setSelectedTripId: (id: string | null) => void;
  
  addTrip: (trip: Trip) => void;
  updateTrip: (id: string, trip: Partial<Trip>) => void;
  deleteTrip: (id: string) => void;
  
  logout: () => void;
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      trips: INITIAL_TRIPS,
      activeScreen: 'LOGIN',
      selectedTripId: null,

      setUser: (user) => set({ user }),
      setScreen: (screen) => set({ activeScreen: screen }),
      setSelectedTripId: (id) => set({ selectedTripId: id }),

      addTrip: (trip) => set((state) => ({ trips: [...state.trips, trip] })),
      updateTrip: (id, updatedFields) =>
        set((state) => ({
          trips: state.trips.map((t) => (t.id === id ? { ...t, ...updatedFields } : t)),
        })),
      deleteTrip: (id) =>
        set((state) => ({
          trips: state.trips.filter((t) => t.id !== id),
          selectedTripId: state.selectedTripId === id ? null : state.selectedTripId,
          activeScreen: state.selectedTripId === id ? 'DASHBOARD' : state.activeScreen,
        })),
      
      logout: () => set({ user: null, activeScreen: 'LOGIN' })
    }),
    {
      name: 'payanam-storage',
    }
  )
);
