import { DollarSign, Plane, Hotel, UtensilsCrossed, Ticket, Car, ShoppingBag } from 'lucide-react';
import React from 'react';

interface CostItem {
    category: string;
    description: string;
    quantity: number;
    unitPrice: number;
    icon: React.ReactNode;
}

export function TravelCosts() {
    const costs: CostItem[] = [
        {
            category: 'Transporte',
            description: 'Passagem aérea (ida) - BH → Fortaleza (já comprada)',
            quantity: 1,
            unitPrice: 450,
            icon: <Plane className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Passagem aérea (volta) - Fortaleza → BH (estimada)',
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
        },
        {
            category: 'Alimentação',
            description: 'Rodízio Sushi',
            quantity: 1,
            unitPrice: 100,
            icon: <UtensilsCrossed className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Uber/Táxi em Fortaleza (2x por dia, 12 dias)',
            quantity: 24,
            unitPrice: 30,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Transfer/Van para Jericoacoara (ida e volta)',
            quantity: 1,
            unitPrice: 180,
            icon: <Car className="w-5 h-5" />,
        },
        {
            category: 'Transporte',
            description: 'Outros deslocamentos (Beach Park, Cumbuco, etc)',
            quantity: 1,
            unitPrice: 150,
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

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <DollarSign className="w-10 h-10 text-green-600" />
                    <h1 className="text-green-700 text-3xl font-bold">ESTIMATIVA DE CUSTOS</h1>
                    <DollarSign className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-gray-600">Valores estimados para 2 pessoas</p>
            </div>

            {/* Resumo por Categoria */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {Object.entries(costsByCategory).map(([category, total]) => (
                    <div
                        key={category}
                        className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg"
                    >
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">{category}</h3>
                        <p className="text-2xl font-bold text-cyan-600">{formatCurrency(total)}</p>
                    </div>
                ))}
            </div>

            {/* Detalhamento */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Detalhamento dos Gastos</h2>
                <div className="space-y-4">
                    {costs.map((item, index) => {
                        const subtotal = item.quantity * item.unitPrice;
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="text-cyan-600">{item.icon}</div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">{item.description}</p>
                                        <p className="text-sm text-gray-500">
                                            {item.quantity} × {formatCurrency(item.unitPrice)}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">
                                        {formatCurrency(subtotal)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Total */}
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-white text-lg font-semibold mb-2">TOTAL ESTIMADO</p>
                        <p className="text-white/80 text-sm">Para 2 pessoas (12 dias)</p>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-bold text-white mb-2">{formatCurrency(total)}</p>
                        <p className="text-white/80 text-sm">
                            {formatCurrency(total / 2)} por pessoa
                        </p>
                    </div>
                </div>
            </div>

            {/* Observações */}
            <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3">⚠️ Observações Importantes:</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• Valores são estimativas e podem variar conforme época e disponibilidade</li>
                    <li>• Passagens aéreas variam muito - verificar promoções no Decolar</li>
                    <li>• Hospedagem pode ser mais barata se dividida com amigos</li>
                    <li>• Algumas atrações podem ter descontos para compras antecipadas</li>
                    <li>• Não inclui gastos com bebidas alcoólicas ou extras não planejados</li>
                    <li>• Considerar reserva de emergência de 10-15% do total</li>
                </ul>
            </div>
        </div>
    );
}

