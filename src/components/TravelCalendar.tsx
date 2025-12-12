import { MapPin, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { DayCard } from './DayCard';
import React from 'react';

export interface TravelDay {
    date: number;
    month: string;
    weekday: string;
    title: string;
    activities: string[];
    highlight?: 'birthday' | 'beach-park' | 'jericoacoara' | 'travel';
    icon?: 'plane' | 'party' | 'waves' | 'bus';
    needsReview?: boolean;
}

const travelDays: TravelDay[] = [
    {
        date: 16,
        month: 'Março',
        weekday: 'Segunda-feira',
        title: 'Viagem até Fortaleza',
        activities: [
            '07:20 — Ônibus da sua cidade → Belo Horizonte',
            '10:45 — Chegada em BH',
            'Almoço rápido no terminal',
            '14:30 — Embarque no voo',
            '17:00 — Chegada em Fortaleza',
            'Check-in',
            'Noite: Two Brothers Pizza cocó(trocar por estabelecimento melhor)',
        ],
        highlight: 'travel',
        icon: 'plane',
    },
    {
        date: 17,
        month: 'Março',
        weekday: 'Terça-feira',
        title: 'Primeiro dia na cidade',
        activities: ['Manhã: Praia de Sabiaguaba', 'Tarde e Noite: Shopping Rio Mar Fortaleza'],
        icon: 'waves',
    },
    {
        date: 18,
        month: 'Março',
        weekday: 'Quarta-feira',
        title: 'Dia livre',
        activities: [
            'Manhã: Praia de Meireles ou Iracema',
            'Almoço: Mercado dos Peixes',
            'Tarde: Centro Dragão do Mar e Mercado São Sebastião',
            'Noite: Sushi Ryori',
        ],
        icon: 'party',
    },
    {
        date: 19,
        month: 'Março',
        weekday: 'Quinta-feira',
        title: '🎉 Dia extra de comemoração',
        activities: [
            'Manhã: Praia',
            'Almoço na praia',
            'Tarde: Livre',
            'Noite: Comemoração(verificar com Davi)',
        ],
        highlight: 'birthday',
        icon: 'party',
    },
    {
        date: 20,
        month: 'Março',
        weekday: 'Sexta-feira',
        title: 'Sexta - atrações culturais! 🎉',
        activities: [
            'Manhã: Atrações culturais (Catedral, Dragão do Mar, zoologico)',
            'Tarde e Noite: Teatro José de Alencar (ver se tem atração)',
        ],
        icon: 'party',
        needsReview: true,
    },
    {
        date: 21,
        month: 'Março',
        weekday: 'Sábado',
        title: 'Sábado - Opções! 🎉',
        activities: [
            'Opção 1: 🎡 Beach Park (dia inteiro - 11 as 17hrs)',
            'Opção 2: ⛰️ Guaramiranga (serra)',
            'Opção 3: Outro passeio em grupo',
            'Noite: Combinar',
        ],
        highlight: 'beach-park',
        icon: 'party',
    },
    {
        date: 22,
        month: 'Março',
        weekday: 'Domingo',
        title: 'Domingo - Opções com o pessoal! 🎉',
        activities: [
            'Opção 1: ⛰️ Guaramiranga (serra)',
            'Opção 2: Outro passeio em grupo',
            'Comemorar aniversários no fim de semana',
            'Noite: Outback',
        ],
        icon: 'party',
    },
    {
        date: 23,
        month: 'Março',
        weekday: 'Segunda-feira',
        title: 'Jericoacoara',
        activities: [
            'Manhã: Viagem para Jericoacoara',
            'Tarde: Explorar lado leste Buggy, Pedra Furada, Buraco Azul ou Lagoa do Paraíso',
            'Final da tarde/noite: por do Sol na duna praia',
        ],
        highlight: 'jericoacoara',
        icon: 'waves',
    },
    {
        date: 24,
        month: 'Março',
        weekday: 'Terça-feira',
        title: 'Retorno de Jericoacoara',
        activities: [
            'Manhã: vila local',
            'Tarde: Explorar lado Oeste, beach club e arvore da preguiça',
            'Noite: Retornar para fortaleza',
        ],
        highlight: 'jericoacoara',
        icon: 'plane',
    },
    {
        date: 25,
        month: 'Março',
        weekday: 'Quarta-feira',
        title: 'Dia livre em Fortaleza',
        activities: [
            'Manhã: Opções - Praia do Futuro, Praia de Iracema ou Dunas',
            'Tarde: Museu da Cachaça ou Feirinha Beira-Mar + passeio',
            'Noite: Elliot Magia',
        ],
        icon: 'waves',
    },
    {
        date: 26,
        month: 'Março',
        weekday: 'Quinta-feira',
        title: 'Último dia de passeio',
        activities: ['Manhã: Planejar', 'Tarde: Como não', 'Noite: Passa fome (Ronco do Mar)'],
        icon: 'party',
        needsReview: true,
    },
    {
        date: 27,
        month: 'Março',
        weekday: 'Sexta-feira',
        title: 'Retorno para Belo Horizonte',
        activities: [
            'Manhã: Manhã livre',
            'Tarde: 16:15 — Chegada no aeroporto',
            'Noite: 18:15 — Voo Fortaleza → Belo Horizonte',
            'Madrugada: Ônibus BH → casa',
        ],
        highlight: 'travel',
        icon: 'plane',
    },
];

export function TravelCalendar() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-100 px-6 py-4 rounded-2xl border-2 border-cyan-200 shadow-md mb-4">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
                    <h1 className="text-cyan-700 text-xl sm:text-2xl md:text-3xl font-bold">
                        Itinerário de Viagem
                    </h1>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                    Fortaleza & Jericoacoara • 16 a 27 de Março de 2025
                </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                    <span>Aniversário</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span>Beach Park</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span>Jericoacoara</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span>Viagem</span>
                </div>
            </div>

            {/* Aviso sobre Reservas */}
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 shadow-lg mb-8">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs uppercase text-amber-600 font-semibold mb-1">
                            Atenção
                        </p>
                        <h3 className="font-bold text-gray-800 text-base mb-2">
                            Dias que Necessitam Reserva
                        </h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <span className="text-sm font-medium text-amber-800">18/03 (Quarta)</span>
                        <span className="text-xs text-amber-700">Sushi Ryori</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <span className="text-sm font-medium text-amber-800">20/03 (Sexta)</span>
                        <span className="text-xs text-amber-700">Teatro José de Alencar</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <span className="text-sm font-medium text-amber-800">22/03 (Domingo)</span>
                        <span className="text-xs text-amber-700">Outback</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <span className="text-sm font-medium text-amber-800">25/03 (Quarta)</span>
                        <span className="text-xs text-amber-700">Elliot Magia</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <span className="text-sm font-medium text-amber-800">26/03 (Quinta)</span>
                        <span className="text-xs text-amber-700">Ronco do Mar</span>
                    </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-amber-800">
                        ⚠️ Recomendado fazer reservas com pelo menos 1 semana de antecedência!
                    </p>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {travelDays.map((day, index) => (
                    <DayCard key={index} day={day} />
                ))}
            </div>

            {/* Footer */}
            <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white border-2 border-cyan-200 rounded-2xl px-6 py-3 shadow-lg">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700 font-medium">Boa viagem! 🌴☀️</span>
                </div>
            </div>
        </div>
    );
}
