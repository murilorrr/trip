import { TravelCalendar } from "./components/TravelCalendar";
import { TravelCosts } from "./components/TravelCosts";
import { Establishments } from "./components/Establishments";
import { TravelInfo } from "./components/TravelInfo";
import React, { useState } from "react";
import { Calendar, DollarSign, MapPin, FileText } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"calendar" | "costs" | "establishments" | "info">("calendar");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b-2 border-cyan-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "calendar"
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Itinerário
            </button>
            <button
              onClick={() => setActiveTab("costs")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "costs"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <DollarSign className="w-5 h-5" />
              Custos
            </button>
            <button
              onClick={() => setActiveTab("establishments")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "establishments"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MapPin className="w-5 h-5" />
              Estabelecimentos
            </button>
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "info"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              Informações
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "calendar" && <TravelCalendar />}
      {activeTab === "costs" && <TravelCosts />}
      {activeTab === "establishments" && <Establishments />}
      {activeTab === "info" && <TravelInfo />}
    </div>
  );
}
