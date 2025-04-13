import React from 'react';
import { Utensils, Users, ClipboardList, AlertTriangle, BarChart3, Calendar } from 'lucide-react';

export default function SchoolDashboard() {
  const meals = [
    { id: 1, date: '2025-03-20', menu: 'Chicken and Rice', students: 250, status: 'Completed' },
    { id: 2, date: '2025-03-21', menu: 'Fish and Vegetables', students: 245, status: 'Scheduled' },
    { id: 3, date: '2025-03-22', menu: 'Beef Stew', students: 248, status: 'Scheduled' },
  ];

  const stats = [
    { label: 'Students Served', value: '750+', icon: Users },
    { label: 'Meals This Week', value: '3,500+', icon: Utensils },
    { label: 'Compliance Rate', value: '98%', icon: ClipboardList },
    { label: 'Incidents', value: '0', icon: AlertTriangle },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">School Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor and manage your school feeding program</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-green-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Meals */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Meals</h2>
                <Calendar className="h-5 w-5 text-gray-500" />
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Menu
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Students
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {meals.map((meal) => (
                      <tr key={meal.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {meal.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {meal.menu}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {meal.students}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              meal.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {meal.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Compliance Overview</h2>
            <BarChart3 className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600">Food Safety</span>
                <span className="text-sm font-medium text-green-600">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600">Nutrition Standards</span>
                <span className="text-sm font-medium text-green-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600">Kitchen Hygiene</span>
                <span className="text-sm font-medium text-green-600">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}