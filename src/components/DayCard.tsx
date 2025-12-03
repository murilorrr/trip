import { Plane, PartyPopper, Waves, Bus, Calendar } from "lucide-react";
import { TravelDay } from "./TravelCalendar";

interface DayCardProps {
  day: TravelDay;
}

export function DayCard({ day }: DayCardProps) {
  const getHighlightColor = () => {
    switch (day.highlight) {
      case "birthday":
        return "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-300";
      case "beach-park":
        return "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-400";
      case "travel":
        return "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400";
      default:
        return "bg-white border-gray-200";
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

  const getIconColor = () => {
    switch (day.highlight) {
      case "birthday":
        return "text-pink-600";
      case "beach-park":
        return "text-cyan-600";
      case "travel":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className={`rounded-2xl border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${getHighlightColor()}`}>
      {/* Date Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-blue-700">{day.date}</span>
            <span className="text-sm text-gray-600 uppercase">{day.weekday}</span>
          </div>
          <div className="text-sm text-gray-500">{day.month}</div>
        </div>
        <div className={`${getIconColor()}`}>
          {getIcon()}
        </div>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h3 className="text-gray-800">{day.title}</h3>
      </div>

      {/* Activities */}
      <div className="space-y-2">
        {day.activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 flex-shrink-0"></div>
            <p className="text-sm text-gray-700 leading-relaxed">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
