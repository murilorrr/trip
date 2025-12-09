import { MapPin, Palmtree } from 'lucide-react';
import { DayCard } from './DayCard';
import React from 'react';

export interface TravelDay {
    date: number;
    month: string;
    weekday: string;
    title: string;
    activities: string[];
    highlight?: 'birthday' | 'beach-park' | 'travel';
    icon?: 'plane' | 'party' | 'waves' | 'bus';
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
            'Noite: Two Brothers Pizza cocó',
        ],
        highlight: 'travel',
        icon: 'plane',
    },
    {
        date: 17,
        month: 'Março',
        weekday: 'Terça-feira',
        title: 'Primeiro dia na cidade',
        activities: ['Manhã: praia de sabiaguaba', 'Tarde e Noite: Shopping Rio Mar Fortaleza'],
        icon: 'waves',
    },
    {
        date: 18,
        month: 'Março',
        weekday: 'Quarta-feira',
        title: 'Dia livre',
        activities: [
            'Manhã: Mercado dos Peixes ou praia perto',
            'Almoço: Mercado dos Peixes',
            'Tarde: descanso',
            'Noite: Sushi Ryori',
        ],
        icon: 'waves',
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
            'Opção 1: 🎡 Beach Park (se não foi sábado)',
            'Opção 2: ⛰️ Guaramiranga (serra)',
            'Opção 3: Outro passeio em grupo',
            'Comemorar aniversários no fim de semana',
            'Combinar com o pessoal',
        ],
        highlight: 'beach-park',
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
        icon: 'plane',
    },
    {
        date: 25,
        month: 'Março',
        weekday: 'Quarta-feira',
        title: 'Dia livre em Fortaleza',
        activities: [
            'Opções:',
            '🌴 Dunas (mais bonito e perto que Morro Branco)',
            '🏛️ Museu da Cachaça',
            '🏖️ Feirinha Beira-Mar + passeio',
            '⛰️ Guaramiranga (serra)',
        ],
        icon: 'waves',
    },
    {
        date: 26,
        month: 'Março',
        weekday: 'Quinta-feira',
        title: 'Último dia de passeio',
        activities: [
            'Opções:',
            '🎡 Repetir Beach Park (se quiser)',
            '🏖️ Praia do Tatu (gêiseres naturais)',
            '🐟 Rodízio de Sushi',
        ],
        highlight: 'beach-park',
        icon: 'waves',
    },
    {
        date: 27,
        month: 'Março',
        weekday: 'Sexta-feira',
        title: 'Retorno',
        activities: [
            '🏖️ Sabiaguaba (se tiver tempo)',
            '16:15 — Chegada no aeroporto',
            '18:15 — Voo Fortaleza → Belo Horizonte',
            'Ônibus BH → casa',
        ],
        highlight: 'travel',
        icon: 'plane',
    },
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
