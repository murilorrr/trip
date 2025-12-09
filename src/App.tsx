import { TravelCalendar } from "./components/TravelCalendar";
import { TravelCosts } from "./components/TravelCosts";
import { Establishments } from "./components/Establishments";
import { TravelInfo } from "./components/TravelInfo";
import React, { useState } from "react";
import { Calendar, DollarSign, MapPin, FileText } from "lucide-react";

type TabId = 'calendar' | 'costs' | 'establishments' | 'info';

const tabs = [
    {
        id: 'calendar' as TabId,
        label: 'Itinerário',
        icon: Calendar,
        color: 'from-cyan-500 to-blue-500',
        bgLight: 'bg-cyan-100',
        text: 'text-cyan-600',
    },
    {
        id: 'costs' as TabId,
        label: 'Custos',
        icon: DollarSign,
        color: 'from-emerald-500 to-green-500',
        bgLight: 'bg-emerald-100',
        text: 'text-emerald-600',
    },
    {
        id: 'establishments' as TabId,
        label: 'Lugares',
        icon: MapPin,
        color: 'from-purple-500 to-pink-500',
        bgLight: 'bg-purple-100',
        text: 'text-purple-600',
    },
    {
        id: 'info' as TabId,
        label: 'Info',
        icon: FileText,
        color: 'from-amber-500 to-orange-500',
        bgLight: 'bg-amber-100',
        text: 'text-amber-600',
    },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('calendar');

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
          {/* Header */}
          <header className="sticky top-0 z-10 flex justify-center py-4">
              <nav className="flex bg-gray-100 px-2 py-2 rounded-2xl shadow-lg border-2 border-gray-200 gap-1">
                  {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                          <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                                  isActive
                                      ? 'bg-white text-gray-800 shadow-md'
                                      : 'text-gray-500 hover:bg-white hover:text-gray-700'
                              }`}
                          >
                              <Icon className={`w-4 h-4 ${isActive ? tab.text : ''}`} />
                              <span className="hidden sm:inline">{tab.label}</span>
                          </button>
                      );
                  })}
              </nav>
          </header>

          {/* Content */}
          <main>
              {activeTab === 'calendar' && <TravelCalendar />}
              {activeTab === 'costs' && <TravelCosts />}
              {activeTab === 'establishments' && <Establishments />}
              {activeTab === 'info' && <TravelInfo />}
          </main>
      </div>
  );
}
