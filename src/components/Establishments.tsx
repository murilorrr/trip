import {
    UtensilsCrossed,
    ShoppingBag,
    Film,
    MapPin,
    Moon,
    Sun,
    ExternalLink,
    AlertCircle,
    Filter,
    Sparkles,
    DollarSign,
} from 'lucide-react';
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
                return {
                    border: 'border-orange-300',
                    bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
                    icon: 'text-orange-600',
                };
            case 'entertainment':
                return {
                    border: 'border-purple-300',
                    bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
                    icon: 'text-purple-600',
                };
            case 'shopping':
                return {
                    border: 'border-blue-300',
                    bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
                    icon: 'text-blue-600',
                };
            default:
                return {
                    border: 'border-gray-300',
                    bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
                    icon: 'text-gray-600',
                };
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 px-6 py-4 rounded-2xl border-2 border-purple-200 shadow-md mb-4">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                    <h1 className="text-purple-700 text-xl sm:text-2xl md:text-3xl font-bold">
                        Lugares para Conhecer
                    </h1>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                </div>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                    Sugestões de restaurantes, entretenimento e atrações em Fortaleza
                </p>
            </div>

            {/* Filtros por Categoria */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-lg mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Filter className="w-4 h-4 text-purple-600" />
                    </div>
                    <h2 className="font-semibold text-gray-800 text-sm">Filtrar por categoria</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedCategory === null
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Todos
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                                selectedCategory === category
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {getCategoryIcon(category)}
                            {getCategoryLabel(category)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lista de Estabelecimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {filteredEstablishments.map((establishment, index) => {
                    const style = getCategoryColor(establishment.category);
                    return (
                        <div
                            key={index}
                            className={`bg-white border-2 ${style.border} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all`}
                        >
                            {/* Header do Card */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3 flex-1">
                                    <div className={`p-2.5 ${style.bg} rounded-xl ${style.icon}`}>
                                        {getCategoryIcon(establishment.category)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-base mb-1 text-gray-800">
                                            {establishment.name}
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            {getCategoryLabel(establishment.category)}
                                        </span>
                                    </div>
                                </div>
                                {establishment.needsReservation && (
                                    <div className="px-2.5 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        Reserva
                                    </div>
                                )}
                            </div>

                            {/* Conteúdo */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <span className="text-sm text-gray-600">Valor estimado</span>
                                    <span className="font-bold text-lg text-gray-800">
                                        {establishment.price !== null
                                            ? formatCurrency(establishment.price)
                                            : 'Verificar'}
                                    </span>
                                </div>

                                {establishment.restriction && (
                                    <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                                        {establishment.restriction.includes('noite') ? (
                                            <Moon className="w-4 h-4 text-amber-600" />
                                        ) : (
                                            <Sun className="w-4 h-4 text-amber-600" />
                                        )}
                                        <span className="text-sm text-amber-700">
                                            {establishment.restriction}
                                        </span>
                                    </div>
                                )}

                                {establishment.link && (
                                    <a
                                        href={establishment.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 border border-purple-200 transition-colors text-sm font-semibold text-purple-700"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver promoção
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Total Estimado */}
            <div className="bg-white border-2 border-purple-300 rounded-2xl p-6 shadow-lg mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                        <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs uppercase text-purple-600 font-semibold mb-1">
                            Resumo
                        </p>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                            Total Estimado
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4">
                        <p className="text-sm text-gray-600 mb-2">Valor total</p>
                        <p className="text-2xl sm:text-3xl font-bold text-purple-700">
                            {formatCurrency(total)}
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4">
                        <p className="text-sm text-gray-600 mb-2">Estabelecimentos</p>
                        <p className="text-2xl sm:text-3xl font-bold text-purple-700">
                            {establishments.length}
                        </p>
                    </div>
                </div>
            </div>

            {/* Aviso sobre Reservas */}
            {filteredEstablishments.some((e) => e.needsReservation) && (
                <div className="bg-white border-2 border-red-300 rounded-2xl p-6 shadow-lg mb-8">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs uppercase text-red-600 font-semibold mb-1">
                                Atenção
                            </p>
                            <h3 className="font-bold text-gray-800 text-base mb-2">
                                Estabelecimentos que Necessitam Reserva
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {filteredEstablishments
                            .filter((e) => e.needsReservation)
                            .map((e, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 p-3 bg-red-50 rounded-xl border border-red-200"
                                >
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span className="text-sm font-medium text-red-700">
                                        {e.name}
                                    </span>
                                </div>
                            ))}
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-sm font-semibold text-red-800">
                            ⚠️ Recomendado fazer reservas com pelo menos 1 semana de antecedência!
                        </p>
                    </div>
                </div>
            )}

            {/* Dicas */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">Dicas Importantes</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-blue-700">
                                Verificar horários de funcionamento antes de ir
                            </span>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-blue-700">
                                Alguns estabelecimentos podem ter promoções ou descontos
                            </span>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-blue-700">
                                Reservar com antecedência para restaurantes populares
                            </span>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-blue-700">
                                Valores podem variar conforme o cardápio escolhido
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
