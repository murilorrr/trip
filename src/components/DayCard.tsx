import { Plane, PartyPopper, Waves, Bus, Calendar } from "lucide-react";
import { TravelDay } from "./TravelCalendar";
import React from "react";

interface DayCardProps {
  day: TravelDay;
}

export function DayCard({ day }: DayCardProps) {
  const getHighlightStyle = () => {
    switch (day.highlight) {
      case "birthday":
        return {
          border: "border-pink-300",
          bg: "bg-gradient-to-br from-pink-50 to-pink-100",
          icon: "text-pink-600",
          bullet: "bg-pink-600",
        };
      case "beach-park":
        return {
          border: "border-cyan-400",
          bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
          icon: "text-cyan-600",
          bullet: "bg-cyan-600",
        };
      case "jericoacoara":
        return {
          border: "border-emerald-400",
          bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
          icon: "text-emerald-600",
          bullet: "bg-emerald-600",
        };
      case "travel":
        return {
          border: "border-blue-400",
          bg: "bg-gradient-to-br from-blue-50 to-blue-100",
          icon: "text-blue-600",
          bullet: "bg-blue-600",
        };
      default:
        return {
          border: "border-gray-200",
          bg: "bg-white",
          icon: "text-gray-600",
          bullet: "bg-gray-400",
        };
    }
  };

  const getIcon = () => {
    switch (day.icon) {
      case "plane":
        return <Plane className="w-5 h-5" />;
      case "party":
        return <PartyPopper className="w-5 h-5" />;
      case "waves":
        return <Waves className="w-5 h-5" />;
      case "bus":
        return <Bus className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const style = getHighlightStyle();

  return (
    <div className={`bg-white border-2 ${style.border} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all`}>
      {/* Date Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-bold text-gray-800">{day.date}</span>
            <span className="text-xs text-gray-500 uppercase">{day.weekday}</span>
          </div>
          <div className="text-xs text-gray-400">{day.month}</div>
        </div>
        <div className={`p-1.5 ${style.bg} rounded-lg ${style.icon}`}>
          {getIcon()}
        </div>
      </div>

      {/* Title */}
      <div className="mb-3 pb-2 border-b border-gray-100">
        <h3 className="font-bold text-sm text-gray-800">{day.title}</h3>
      </div>

      {/* Activities */}
      <div className="space-y-2">
        {day.activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${style.bullet}`}></div>
            <p className="text-xs text-gray-700 leading-relaxed flex-1">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
