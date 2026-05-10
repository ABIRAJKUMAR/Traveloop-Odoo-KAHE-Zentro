export type User = {
  id: string;
  name: string;
  email: string;
  savedDestinations: string[];
  language: string;
};

export type ActivityType = 'Sightseeing' | 'Food' | 'Transport' | 'Stay' | 'Other';

export type Activity = {
  id: string;
  title: string;
  type: ActivityType;
  cost: number;
  durationMinutes: number;
  startTime: string; // HH:mm
};

export type Stop = {
  id: string;
  cityId: string;
  cityName: string;
  country: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  activities: Activity[];
};

export type Trip = {
  id: string;
  name: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  description: string;
  coverImage?: string;
  stops: Stop[];
  notes: Note[];
  packingList: PackingItem[];
};

export type Note = {
  id: string;
  content: string;
  timestamp: number;
};

export type PackingCategory = 'Clothing' | 'Documents' | 'Electronics' | 'Toiletries' | 'Other';

export type PackingItem = {
  id: string;
  name: string;
  category: PackingCategory;
  isPacked: boolean;
};

export type City = {
  id: string;
  name: string;
  country: string;
  costIndex: 'Low' | 'Medium' | 'High';
  image: string;
};
