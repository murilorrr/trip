import { UtensilsCrossed, ShoppingBag, Film, MapPin, Moon, Sun, ExternalLink, AlertCircle, Filter } from 'lucide-react';
import React, { useState } from 'react';

interface Establishment {
    name: string;
    price: number | null;
    link?: string;
    restriction?: string;
    category: 'restaurant' | 'entertainment' | 'shopping' | 'attraction';
    needsReservation?: boolean;
}

export function Establishments() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const establishments: Establishment[] = [
        {
            name: 'Elliot Magia',
            price: 300,
            restriction: 'Somente à noite',
            category: 'entertainment',
            needsReservation: true,
        },
        {
            name: 'Shopping Rio Mar - Gamestation',
            price: 120,
            category: 'entertainment',
        },
        {
            name: 'Sushi Ryori',
            price: 300,
            restriction: 'Somente à noite',
            category: 'restaurant',
            needsReservation: true,
        },
        {
            name: 'Mercado dos Peixes',
            price: 400,
            restriction: 'Somente de dia - almoço',
            category: 'restaurant',
        },
        {
            name: 'Shopping 4D Cinema',
            price: 120,
            category: 'entertainment',
            needsReservation: true,
        },
        {
            name: 'Outback',
            price: 200,
            restriction: 'Somente à noite',
            category: 'restaurant',
            needsReservation: true,
        },
        {
            name: 'Two Brothers Pizza',
            price: 84.99,
            link: 'https://www.barato.com.br/fortaleza/rodizio-two-brothers',
            restriction: 'Somente à noite',
            category: 'restaurant',
            needsReservation: true,
        },
    ];

    const formatCurrency = (value: number | null) => {
        if (value === null) return 'Verificar valor';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'restaurant':
                return <UtensilsCrossed className="w-5 h-5" />;
            case 'entertainment':
                return <Film className="w-5 h-5" />;
            case 'shopping':
                return <ShoppingBag className="w-5 h-5" />;
            default:
                return <MapPin className="w-5 h-5" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'restaurant':
                return 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300 text-orange-800';
            case 'entertainment':
                return 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300 text-purple-800';
            case 'shopping':
                return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300 text-blue-800';
            default:
                return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 text-gray-800';
        }
    };

    const getCategoryLabel = (category: string) => {
        const labels: Record<string, string> = {
            restaurant: 'Restaurante',
            entertainment: 'Entretenimento',
            shopping: 'Shopping',
            attraction: 'Atração',
        };
        return labels[category] || category;
    };

    const total = establishments.reduce((sum, item) => sum + (item.price || 0), 0);
    const filteredEstablishments = selectedCategory
        ? establishments.filter((item) => item.category === selectedCategory)
        : establishments;

    const categories = Array.from(new Set(establishments.map((e) => e.category)));

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                        <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                    <h1 className="text-purple-700 text-4xl font-bold">ESTABELECIMENTOS</h1>
                    <div className="p-3 bg-purple-100 rounded-full">
                        <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                </div>
                <p className="text-gray-600 text-lg">Sugestões de lugares para conhecer em Fortaleza</p>
            </div>

            {/* Filtros por Categoria */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-700">Filtrar por categoria:</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                            selectedCategory === null
                                ? 'bg-purple-600 text-white shadow-lg scale-105'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Todos
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                                selectedCategory === category
                                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {getCategoryIcon(category)}
                            {getCategoryLabel(category)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lista de Estabelecimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredEstablishments.map((establishment, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border-2 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${getCategoryColor(
                            establishment.category
                        )}`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-white/50 rounded-lg backdrop-blur-sm">
                                    {getCategoryIcon(establishment.category)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-1">{establishment.name}</h3>
                                    <span className="text-xs font-semibold opacity-75 uppercase">
                                        {getCategoryLabel(establishment.category)}
                                    </span>
                                </div>
                            </div>
                            {establishment.needsReservation && (
                                <div className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Reserva
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                                <span className="text-sm font-semibold">Valor:</span>
                                <span className="font-bold text-xl">
                                    {establishment.price !== null
                                        ? formatCurrency(establishment.price)
                                        : 'Verificar'}
                                </span>
                            </div>

                            {establishment.restriction && (
                                <div className="flex items-center gap-2 p-3 bg-white/30 rounded-lg">
                                    {establishment.restriction.includes('noite') ? (
                                        <Moon className="w-4 h-4" />
                                    ) : (
                                        <Sun className="w-4 h-4" />
                                    )}
                                    <span className="text-sm font-medium">{establishment.restriction}</span>
                                </div>
                            )}

                            {establishment.link && (
                                <a
                                    href={establishment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors text-sm font-semibold"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver promoção
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Total Estimado */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl p-8 shadow-2xl mb-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-white/90 text-sm font-semibold mb-1 uppercase tracking-wide">
                            Total Estimado
                        </p>
                        <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {formatCurrency(total)}
                        </p>
                        <p className="text-white/80 text-sm">
                            Todos os estabelecimentos (valores conhecidos)
                        </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <p className="text-white/80 text-sm mb-1">Estabelecimentos</p>
                        <p className="text-3xl font-bold text-white">{establishments.length}</p>
                    </div>
                </div>
            </div>

            {/* Aviso sobre Reservas */}
            {filteredEstablishments.some((e) => e.needsReservation) && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-6 mb-6 shadow-lg">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-red-800 text-lg mb-2">
                                ⚠️ Estabelecimentos que Necessitam Reserva
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-red-700">
                                {filteredEstablishments
                                    .filter((e) => e.needsReservation)
                                    .map((e, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            <strong>{e.name}</strong>
                                        </div>
                                    ))}
                            </div>
                            <p className="mt-3 text-sm font-semibold text-red-800 bg-red-100 rounded-lg p-3">
                                Recomendado fazer reservas com pelo menos 1 semana de antecedência!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Dicas */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-4 flex items-center gap-2">
                    💡 Dicas Importantes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-700">
                    <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Verificar horários de funcionamento antes de ir</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Alguns estabelecimentos podem ter promoções ou descontos</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Reservar com antecedência para restaurantes populares</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Valores podem variar conforme o cardápio escolhido</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
