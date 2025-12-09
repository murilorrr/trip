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
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 max-w-7xl">
          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-base ${
                activeTab === "calendar"
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Itinerário</span>
            </button>
            <button
              onClick={() => setActiveTab("costs")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-base ${
                activeTab === "costs"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Custos</span>
            </button>
            <button
              onClick={() => setActiveTab("establishments")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-base ${
                activeTab === "establishments"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Estabelecimentos</span>
            </button>
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-base ${
                activeTab === "info"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Informações</span>
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
