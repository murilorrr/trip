import {
    DollarSign,
    Plane,
    Hotel,
    UtensilsCrossed,
    Ticket,
    Car,
    ShoppingBag,
    Film,
    TrendingUp,
    AlertCircle,
} from 'lucide-react';
import React, { useState } from 'react';

interface CostItem {
    category: string;
    description: string;
    quantity: number;
    unitPrice: number;
    icon: React.ReactNode;
    needsReservation?: boolean;
}

export function TravelCosts() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const costs: CostItem[] = [
        {
            category: 'Transporte',
            description: 'Passagem aérea (ida) - BH → Fortaleza',
            quantity: 1,
            unitPrice: 450,
            icon: <Plane className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Passagem aérea (volta) - Fortaleza → BH',
            quantity: 1,
            unitPrice: 450,
            icon: <Plane className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Ônibus cidade → BH (ida e volta - 2 pessoas)',
            quantity: 4,
            unitPrice: 113,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Hospedagem',
            description: 'Hotel/Airbnb em Fortaleza (11 noites)',
            quantity: 11,
            unitPrice: 150,
            icon: <Hotel className="w-5 h-5" />,
        },
        {
            category: 'Atrações',
            description: 'Beach Park (ingresso 1 dia)',
            quantity: 1,
            unitPrice: 200,
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            category: 'Atrações',
            description: 'Jericoacoara (transporte + hospedagem 1 noite)',
            quantity: 1,
            unitPrice: 400,
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            category: 'Atrações',
            description: 'Passeios (buggy, lancha, atrações em Jeri)',
            quantity: 1,
            unitPrice: 250,
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            category: 'Alimentação',
            description: 'Refeições por dia (café, almoço, jantar)',
            quantity: 12,
            unitPrice: 80,
            icon: <UtensilsCrossed className="w-5 h-5" />,
        },
        {
            category: 'Alimentação',
            description: 'Rodízio Outback',
            quantity: 1,
            unitPrice: 120,
            icon: <UtensilsCrossed className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Alimentação',
            description: 'Rodízio Sushi',
            quantity: 1,
            unitPrice: 100,
            icon: <UtensilsCrossed className="w-5 h-5" />,
        },
        {
            category: 'Estabelecimentos',
            description: 'Elliot Magia (show)',
            quantity: 1,
            unitPrice: 300,
            icon: <Film className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Estabelecimentos',
            description: 'Shopping Rio Mar - Gamestation',
            quantity: 1,
            unitPrice: 120,
            icon: <Film className="w-5 h-5" />,
        },
        {
            category: 'Estabelecimentos',
            description: 'Sushi Ryori',
            quantity: 1,
            unitPrice: 300,
            icon: <UtensilsCrossed className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Estabelecimentos',
            description: 'Mercado dos Peixes (almoço)',
            quantity: 1,
            unitPrice: 400,
            icon: <UtensilsCrossed className="w-5 h-5" />,
        },
        {
            category: 'Estabelecimentos',
            description: 'Shopping 4D Cinema',
            quantity: 1,
            unitPrice: 120,
            icon: <Film className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Estabelecimentos',
            description: 'Outback',
            quantity: 1,
            unitPrice: 200,
            icon: <UtensilsCrossed className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Estabelecimentos',
            description: 'Two Brothers Pizza',
            quantity: 1,
            unitPrice: 84.99,
            icon: <UtensilsCrossed className="w-5 h-5" />,
            needsReservation: true,
        },
        {
            category: 'Transporte',
            description: 'Aluguel de carro (12 dias)',
            quantity: 1,
            unitPrice: 700,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Gasolina (estimativa - ~150km)',
            quantity: 1,
            unitPrice: 300,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Transfer/Van para Jericoacoara (ida e volta)',
            quantity: 2,
            unitPrice: 180,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Outros',
            description: 'Compras, lembranças, extras',
            quantity: 1,
            unitPrice: 300,
            icon: <ShoppingBag className="w-5 h-5" />,
        },
    ];

    const total = costs.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

    const costsByCategory = costs.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = 0;
        }
        acc[item.category] += item.quantity * item.unitPrice;
        return acc;
    }, {} as Record<string, number>);

    const filteredCosts = selectedCategory
        ? costs.filter((item) => item.category === selectedCategory)
        : costs;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            Transporte: 'bg-blue-100 border-blue-300 text-blue-700',
            Hospedagem: 'bg-purple-100 border-purple-300 text-purple-700',
            Atrações: 'bg-cyan-100 border-cyan-300 text-cyan-700',
            Alimentação: 'bg-orange-100 border-orange-300 text-orange-700',
            Estabelecimentos: 'bg-pink-100 border-pink-300 text-pink-700',
            Outros: 'bg-gray-100 border-gray-300 text-gray-700',
        };
        return colors[category] || colors.Outros;
    };

    const categories = Object.keys(costsByCategory);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                        <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-green-700 text-4xl font-bold">ESTIMATIVA DE CUSTOS</h1>
                    <div className="p-3 bg-green-100 rounded-full">
                        <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                </div>
                <p className="text-gray-600 text-lg">Valores estimados para 2 pessoas • 12 dias</p>
            </div>

            {/* Total Card - Destaque */}
            <div className="bg-gradient-to-br from-green-500 via-green-600 to-cyan-500 rounded-3xl p-8 shadow-2xl mb-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-white/90 text-sm font-semibold mb-1 uppercase tracking-wide">
                            Total Estimado
                        </p>
                        <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                            {formatCurrency(total)}
                        </p>
                        <div className="flex items-center gap-2 text-white/90">
                            <TrendingUp className="w-4 h-4" />
                            <p className="text-sm">{formatCurrency(total / 2)} por pessoa</p>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <p className="text-white/80 text-sm mb-1">Dias</p>
                        <p className="text-3xl font-bold text-white">12</p>
                        <p className="text-white/80 text-sm mt-1">Pessoas</p>
                        <p className="text-3xl font-bold text-white">2</p>
                    </div>
                </div>
            </div>

            {/* Resumo por Categoria */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Resumo por Categoria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => {
                        const total = costsByCategory[category];
                        const percentage =
                            (total /
                                costs.reduce(
                                    (sum, item) => sum + item.quantity * item.unitPrice,
                                    0,
                                )) *
                            100;
                        const isSelected = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(isSelected ? null : category)}
                                className={`group relative rounded-2xl border-2 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                                    isSelected
                                        ? 'ring-4 ring-cyan-500 ring-offset-2 scale-[1.02]'
                                        : 'hover:scale-[1.01]'
                                } bg-white border-gray-200 hover:border-cyan-300`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-600 mb-1 uppercase tracking-wide">
                                            {category}
                                        </h3>
                                        <p className="text-3xl font-bold text-gray-800">
                                            {formatCurrency(total)}
                                        </p>
                                    </div>
                                    {isSelected && (
                                        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Percentual do total</span>
                                        <span className="font-semibold text-gray-700">
                                            {percentage.toFixed(1)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${
                                                isSelected
                                                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600'
                                                    : 'bg-gradient-to-r from-gray-400 to-gray-500 group-hover:from-cyan-400 group-hover:to-cyan-500'
                                            }`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 text-center">
                                        {isSelected
                                            ? 'Clique para remover filtro'
                                            : 'Clique para filtrar'}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Detalhamento */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-6 md:p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Detalhamento dos Gastos</h2>
                    {selectedCategory && (
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="text-sm text-cyan-600 hover:text-cyan-700 font-semibold"
                        >
                            Limpar filtro
                        </button>
                    )}
                </div>
                <div className="space-y-3">
                    {filteredCosts.map((item, index) => {
                        const subtotal = item.quantity * item.unitPrice;
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600 group-hover:bg-cyan-200 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-gray-800">
                                                {item.description}
                                            </p>
                                            {item.needsReservation && (
                                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" />
                                                    Reserva
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.quantity} × {formatCurrency(item.unitPrice)}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-green-600">
                                        {formatCurrency(subtotal)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Aviso sobre Reservas */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-6 mb-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-red-800 text-lg mb-2">
                            📞 Estabelecimentos que Necessitam Reserva
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-red-700">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <strong>Elliot Magia</strong> - Reservar com antecedência
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <strong>Sushi Ryori</strong> - Reservar mesa
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <strong>Shopping 4D Cinema</strong> - Ingressos antecipados
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <strong>Outback</strong> - Reservar (especialmente fins de semana)
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <strong>Two Brothers Pizza</strong> - Reservar mesa
                            </div>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-red-800 bg-red-100 rounded-lg p-3">
                            ⚠️ Recomendado fazer reservas com pelo menos 1 semana de antecedência!
                        </p>
                    </div>
                </div>
            </div>

            {/* Observações */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-yellow-800 text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Observações Importantes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-yellow-700">
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>
                            Valores são estimativas e podem variar conforme época e disponibilidade
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Passagens aéreas variam muito - verificar promoções no Decolar</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Hospedagem pode ser mais barata se dividida com amigos</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Algumas atrações podem ter descontos para compras antecipadas</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>
                            Não inclui gastos com bebidas alcoólicas ou extras não planejados
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Considerar reserva de emergência de 10-15% do total</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
