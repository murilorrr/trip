import { Calendar, Plane, MapPin, PartyPopper, Waves, UtensilsCrossed, Bus, Hotel, Palmtree } from "lucide-react";
import { DayCard } from "./DayCard";

export interface TravelDay {
  date: number;
  month: string;
  weekday: string;
  title: string;
  activities: string[];
  highlight?: "birthday" | "beach-park" | "travel";
  icon?: "plane" | "party" | "waves" | "bus";
}

const travelDays: TravelDay[] = [
  {
    date: 16,
    month: "Março",
    weekday: "Domingo",
    title: "Viagem até Fortaleza",
    activities: [
      "07:20 — Ônibus da sua cidade → Belo Horizonte",
      "10:45 — Chegada em BH",
      "Almoço rápido no terminal",
      "Embarque no voo",
      "17:00 — Chegada em Fortaleza",
      "Check-in",
      "Noite leve para descansar"
    ],
    highlight: "travel",
    icon: "plane"
  },
  {
    date: 17,
    month: "Março",
    weekday: "Segunda-feira",
    title: "Primeiro dia na cidade",
    activities: [
      "Manhã: Praia do Futuro",
      "Tarde: Passeio leve (mercado, artesanato)",
      "Noite: jantar (se quiser Outback, esse é o melhor dia)"
    ],
    icon: "waves"
  },
  {
    date: 18,
    month: "Março",
    weekday: "Terça-feira",
    title: "🎉 Aniversário",
    activities: [
      "Manhã relax",
      "Almoço especial",
      "Tarde: Beira-Mar",
      "Noite: comemoração"
    ],
    highlight: "birthday",
    icon: "party"
  },
  {
    date: 19,
    month: "Março",
    weekday: "Quarta-feira",
    title: "🎉 Dia extra de comemoração",
    activities: [
      "Manhã: Praia",
      "Tarde: passeio (Cumbuco opcional)",
      "Noite livre"
    ],
    highlight: "birthday",
    icon: "party"
  },
  {
    date: 20,
    month: "Março",
    weekday: "Quinta-feira",
    title: "🎡 Beach Park – Dia inteiro",
    activities: [
      "Chegada pela manhã",
      "Parque até 17h",
      "Noite: descanso total"
    ],
    highlight: "beach-park",
    icon: "waves"
  },
  {
    date: 21,
    month: "Março",
    weekday: "Sexta-feira",
    title: "Início da viagem para Jericoacara",
    activities: [
      "Manhã livre em Fortaleza",
      "Organizar mala pequena",
      "Final da tarde/noite:",
      "Saída de ônibus/coletivo para Recife ou Maceió",
      "Viagem noturna (ideal para aproveitar o dia seguinte)"
    ],
    highlight: "travel",
    icon: "bus"
  },
  {
    date: 22,
    month: "Março",
    weekday: "Sábado",
    title: "Jericoacara – Dia 1",
    activities: [
      "Chegada pela manhã",
      "Check-in",
      "Passeio às Galés (dependendo da maré)",
      "Tarde: Praia de Barra Grande",
      "Noite tranquila"
    ],
    icon: "waves"
  },
  {
    date: 23,
    month: "Março",
    weekday: "Domingo",
    title: "Jericoacara – Dia 2",
    activities: [
      "Manhã: Praia de Antunes / Burgalhau",
      "Tarde: buggy, lancha ou descanso",
      "Final da tarde/noite:",
      "Retorno para Recife/Maceió",
      "Ônibus de volta para Fortaleza (viagem noturna)"
    ],
    highlight: "travel",
    icon: "bus"
  },
  {
    date: 24,
    month: "Março",
    weekday: "Segunda-feira",
    title: "🎉 Aniversário",
    activities: [
      "Mesmo chegando de viagem:",
      "Manhã leve",
      "Almoço especial",
      "Tarde de descanso ou praia calma",
      "Noite romântica"
    ],
    highlight: "birthday",
    icon: "party"
  },
  {
    date: 25,
    month: "Março",
    weekday: "Terça-feira",
    title: "Dia livre em Fortaleza",
    activities: [
      "Sugestões:",
      "Morro Branco (falésias)",
      "Ou Cumbuco",
      "Ou feirinha Beira-Mar + passeio leve"
    ],
    icon: "waves"
  },
  {
    date: 26,
    month: "Março",
    weekday: "Quarta-feira",
    title: "Último dia de passeio forte",
    activities: [
      "Repetir Beach Park",
      "Passeio de buggy",
      "Praia do Japão",
      "Ou apenas descanso antes da volta"
    ],
    highlight: "beach-park",
    icon: "waves"
  },
  {
    date: 27,
    month: "Março",
    weekday: "Quinta-feira",
    title: "Retorno",
    activities: [
      "Voo Fortaleza → Belo Horizonte",
      "Ônibus BH → casa"
    ],
    highlight: "travel",
    icon: "plane"
  }
];

export function TravelCalendar() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Palmtree className="w-10 h-10 text-cyan-600" />
          <h1 className="text-cyan-700">ITINERÁRIO</h1>
          <Palmtree className="w-10 h-10 text-cyan-600" />
        </div>
        <h2 className="text-cyan-600 mb-2">Fortaleza & Jericoacara</h2>
        <p className="text-gray-600">16 a 27 de Março de 2025</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-pink-100 border-2 border-pink-300"></div>
          <span className="text-gray-700">Aniversário</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-cyan-100 border-2 border-cyan-400"></div>
          <span className="text-gray-700">Beach Park</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-400"></div>
          <span className="text-gray-700">Viagem</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {travelDays.map((day, index) => (
          <DayCard key={index} day={day} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
          <MapPin className="w-5 h-5 text-cyan-600" />
          <span className="text-gray-700">Boa viagem! 🌴☀️</span>
        </div>
      </div>
    </div>
  );
}
