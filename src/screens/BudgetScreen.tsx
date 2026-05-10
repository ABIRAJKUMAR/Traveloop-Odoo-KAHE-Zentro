import { useStore } from '../store';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';

export default function BudgetScreen() {
  const { trips, selectedTripId } = useStore();
  const trip = trips.find(t => t.id === selectedTripId);

  if (!trip) return <Layout><div className="p-8">Trip not found</div></Layout>;

  // Calculate totals
  let totalCost = 0;
  const categoryCosts = {
    Transport: 0,
    Stay: 0,
    Food: 0,
    Sightseeing: 0,
    Other: 0
  };

  trip.stops.forEach(stop => {
    stop.activities.forEach(act => {
      totalCost += act.cost;
      if (categoryCosts[act.type as keyof typeof categoryCosts] !== undefined) {
        categoryCosts[act.type as keyof typeof categoryCosts] += act.cost;
      } else {
        categoryCosts.Other += act.cost;
      }
    });
  });

  const chartData = [
    { name: 'Transport', value: categoryCosts.Transport, color: '#94a3b8' },
    { name: 'Stay', value: categoryCosts.Stay, color: '#a855f7' },
    { name: 'Food', value: categoryCosts.Food, color: '#f97316' },
    { name: 'Sightseeing', value: categoryCosts.Sightseeing, color: '#3b82f6' },
    { name: 'Other', value: categoryCosts.Other, color: '#22c55e' },
  ].filter(d => d.value > 0);

  const days = Math.max(1, Math.ceil((new Date(trip.endDate).getTime() - new Date(trip.startDate).getTime()) / (1000 * 3600 * 24)));
  const perDay = Math.round(totalCost / days);

  return (
    <Layout title="Budget Overview">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 max-w-5xl mx-auto space-y-6"
      >
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-white rounded-3xl p-6 shadow-lg shadow-primary/20 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-primary-100 font-medium mb-1">Total Estimated Cost</p>
              <h2 className="text-4xl font-bold flex items-center">
                <DollarSign size={32} />{totalCost.toLocaleString()}
              </h2>
            </div>
            <TrendingUp size={100} className="absolute right-[-20px] bottom-[-20px] opacity-10" />
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-center">
            <p className="text-gray-500 font-medium mb-1 flex items-center gap-2">
               Daily Average
            </p>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <DollarSign size={24} className="text-gray-400" />{perDay.toLocaleString()}
              <span className="text-sm font-normal text-gray-400 ml-1">/ day</span>
            </h2>
          </div>

          <div className={`rounded-3xl p-6 shadow-sm border flex flex-col justify-center ${
            perDay > 200 ? 'bg-red-50 border-red-100 text-red-800' : 'bg-green-50 border-green-100 text-green-800'
          }`}>
            <p className="font-medium mb-1 flex items-center gap-2 opacity-80">
              {perDay > 200 ? <AlertTriangle size={18} /> : null} Status
            </p>
            <h2 className="text-xl font-bold">
              {perDay > 200 ? 'High Budget Trip' : 'Economy Mode On'}
            </h2>
            <p className="text-sm opacity-70 mt-1">
              Based on {days} days duration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-6 text-lg">Expense Breakdown</h3>
            {chartData.length > 0 ? (
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${value}`} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-400 border-2 border-dashed rounded-xl">
                Add activities with costs to see the breakdown
              </div>
            )}
          </div>

          {/* List */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-6 text-lg">Category Details</h3>
            <div className="space-y-4">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">${item.value}</span>
                    <p className="text-xs text-gray-500">
                      {Math.round((item.value / totalCost) * 100)}%
                    </p>
                  </div>
                </div>
              ))}
              {chartData.length === 0 && (
                <div className="text-center text-gray-400 py-8">No expenses recorded</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
