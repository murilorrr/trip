import {
    CheckCircle2,
    Circle,
    Phone,
    Globe,
    Map,
    FileText,
    Sun,
    Droplets,
    CreditCard,
    AlertTriangle,
    ExternalLink,
    Clipboard,
    Sparkles,
    Plane,
    Heart,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface ChecklistItem {
    id: string;
    label: string;
    category: 'documents' | 'clothes' | 'electronics' | 'hygiene' | 'other';
}

const STORAGE_KEY = 'trip-checklist';

export function TravelInfo() {
    // Carregar do localStorage ao inicializar
    const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : {};
        }
        return {};
    });

    // Salvar no localStorage sempre que o checklist mudar
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(checklist));
        }
    }, [checklist]);

    const toggleChecklist = (id: string) => {
        setChecklist((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            return updated;
        });
    };

    const checklistItems: ChecklistItem[] = [
        // Documentos
        { id: 'doc-1', label: 'RG ou CNH (válidos)', category: 'documents' },
        { id: 'doc-2', label: 'Passagem aérea (impressa ou digital)', category: 'documents' },
        { id: 'doc-3', label: 'Comprovante de hospedagem', category: 'documents' },
        { id: 'doc-5', label: 'Cartões de crédito/débito', category: 'documents' },
        { id: 'doc-6', label: 'Seguro viagem (se contratado)', category: 'documents' },
        // Roupas
        { id: 'clothes-1', label: 'Roupas de praia (biquíni/maiô, shorts)', category: 'clothes' },
        { id: 'clothes-2', label: 'Roupas leves para o dia', category: 'clothes' },
        { id: 'clothes-3', label: 'Roupas para sair à noite', category: 'clothes' },
        { id: 'clothes-4', label: 'Protetor solar (FPS alto)', category: 'clothes' },
        { id: 'clothes-5', label: 'Chapéu/Boné e óculos de sol', category: 'clothes' },
        { id: 'clothes-6', label: 'Tênis confortáveis e chinelos', category: 'clothes' },
        // Eletrônicos
        { id: 'elec-1', label: 'Carregadores de celular', category: 'electronics' },
        { id: 'elec-2', label: 'Power bank', category: 'electronics' },
        { id: 'elec-3', label: 'Câmera ou celular com boa câmera', category: 'electronics' },
        { id: 'elec-4', label: 'Fones de ouvido', category: 'electronics' },
        { id: 'elec-5', label: 'PC/Notebook (se necessário)', category: 'electronics' },
        // Higiene
        { id: 'hyg-1', label: 'Kit de higiene pessoal', category: 'hygiene' },
        { id: 'hyg-2', label: 'Medicamentos pessoais', category: 'hygiene' },
        { id: 'hyg-3', label: 'Repelente de insetos', category: 'hygiene' },
        { id: 'hyg-4', label: 'Kit de primeiros socorros básico', category: 'hygiene' },
        // Outros
        { id: 'other-1', label: 'Mala adequada para a viagem', category: 'other' },
        { id: 'other-2', label: 'Garrafa de água reutilizável', category: 'other' },
        { id: 'other-3', label: 'Dinheiro em espécie (pequena quantia)', category: 'other' },
    ];

    const emergencyContacts = [
        { name: 'Polícia', number: '190', type: 'emergency' },
        { name: 'Bombeiros', number: '193', type: 'emergency' },
        { name: 'SAMU', number: '192', type: 'emergency' },
        { name: 'Aeroporto de Fortaleza', number: '(85) 3392-1200', type: 'info' },
        { name: 'Central de Atendimento Gol', number: '0300 115 2121', type: 'info' },
    ];

    const usefulLinks = [
        {
            name: 'Google Maps',
            url: 'https://www.google.com/maps/place/Fortaleza,+CE',
            icon: <Map className="w-4 h-4" />,
        },
        {
            name: 'Beach Park',
            url: 'https://www.beachpark.com.br',
            icon: <Globe className="w-4 h-4" />,
        },
        {
            name: '123 Milhas',
            url: 'https://www.123milhas.com',
            icon: <Plane className="w-4 h-4" />,
        },
    ];

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'documents':
                return <FileText className="w-5 h-5" />;
            case 'clothes':
                return <Sun className="w-5 h-5" />;
            case 'electronics':
                return <CreditCard className="w-5 h-5" />;
            case 'hygiene':
                return <Droplets className="w-5 h-5" />;
            default:
                return <Clipboard className="w-5 h-5" />;
        }
    };

    const getCategoryStyle = (category: string) => {
        switch (category) {
            case 'documents':
                return {
                    bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
                    border: 'border-blue-200',
                    icon: 'bg-blue-100 text-blue-600',
                    text: 'text-blue-700',
                };
            case 'clothes':
                return {
                    bg: 'bg-gradient-to-br from-orange-50 to-amber-100',
                    border: 'border-orange-200',
                    icon: 'bg-orange-100 text-orange-600',
                    text: 'text-orange-700',
                };
            case 'electronics':
                return {
                    bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
                    border: 'border-purple-200',
                    icon: 'bg-purple-100 text-purple-600',
                    text: 'text-purple-700',
                };
            case 'hygiene':
                return {
                    bg: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
                    border: 'border-cyan-200',
                    icon: 'bg-cyan-100 text-cyan-600',
                    text: 'text-cyan-700',
                };
            default:
                return {
                    bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
                    border: 'border-gray-200',
                    icon: 'bg-gray-100 text-gray-600',
                    text: 'text-gray-700',
                };
        }
    };

    const getCategoryLabel = (category: string) => {
        const labels: Record<string, string> = {
            documents: 'Documentos',
            clothes: 'Roupas e Acessórios',
            electronics: 'Eletrônicos',
            hygiene: 'Higiene e Saúde',
            other: 'Outros',
        };
        return labels[category] || category;
    };

    const groupedChecklist = checklistItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, ChecklistItem[]>);

    const completedCount = Object.values(checklist).filter(Boolean).length;
    const totalCount = checklistItems.length;
    const progressPercentage = (completedCount / totalCount) * 100;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 max-w-6xl">
            {/* Header - Estilo aconchegante */}
            <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-100 px-6 py-4 rounded-2xl border-2 border-blue-200 shadow-md mb-4">
                    <Plane className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                    <h1 className="text-blue-700 text-xl sm:text-2xl md:text-3xl font-bold">
                        Informações Úteis
                    </h1>
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                </div>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                    Tudo organizado para sua viagem ser incrível ✨
                </p>
            </div>

            {/* Checklist de Preparação - Card estilo aconchegante */}
            <div className="bg-white border-2 border-emerald-300 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
                {/* Header do Checklist */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl shadow-sm">
                        <Clipboard className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                            Checklist de Viagem
                        </h2>
                        <p className="text-sm text-gray-500">
                            Marque os itens conforme for preparando
                        </p>
                    </div>
                </div>

                {/* Progress Bar com contador integrado */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-emerald-400 to-green-500 h-full rounded-full transition-all duration-500"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                        <span className="text-sm text-emerald-600 font-medium whitespace-nowrap">
                            {completedCount} de {totalCount}
                        </span>
                    </div>
                </div>

                {/* Categories */}
                <div className="divide-y divide-gray-100">
                    {Object.entries(groupedChecklist).map(([category, items]) => {
                        const style = getCategoryStyle(category);
                        return (
                            <div key={category} className="py-6 first:pt-0 last:pb-0">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`p-2.5 ${style.icon} rounded-xl`}>
                                        {getCategoryIcon(category)}
                                    </div>
                                    <h3 className="font-semibold text-gray-700 text-base">
                                        {getCategoryLabel(category)}
                                    </h3>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                                        {items.filter((i) => checklist[i.id]).length}/{items.length}
                                    </span>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                                    {items.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => toggleChecklist(item.id)}
                                            className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                                                checklist[item.id]
                                                    ? 'bg-emerald-50'
                                                    : 'bg-gray-50 hover:bg-gray-100'
                                            }`}
                                        >
                                            {checklist[item.id] ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            ) : (
                                                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                            )}
                                            <span
                                                className={`flex-1 text-sm ${
                                                    checklist[item.id]
                                                        ? 'line-through text-gray-400'
                                                        : 'text-gray-700'
                                                }`}
                                            >
                                                {item.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contatos de Emergência */}
            <div className="bg-white border-2 border-pink-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                <div className="flex items-start gap-3 mb-4">
                    <div className="p-6 bg-pink-100 rounded-2xl shadow-md">
                        <Phone className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm uppercase text-pink-600">Emergência</p>
                        <h3 className="text-gray-800 text-sm leading-relaxed">
                            Contatos de Emergência
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">Tenha estes números à mão</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {emergencyContacts.map((contact, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border-2 border-pink-300 shadow-md"
                        >
                            <div className="flex-1">
                                <p className="text-gray-800 text-sm mb-2">{contact.name}</p>
                                <a
                                    href={`tel:${contact.number.replace(/\s/g, '')}`}
                                    className="text-sm text-blue-600"
                                >
                                    {contact.number}
                                </a>
                            </div>
                            {contact.type === 'emergency' && (
                                <span className="px-6 py-3 bg-pink-100 text-pink-600 text-sm rounded-full">
                                    URGENTE
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Informações do Destino */}
            <div className="bg-white border-2 border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                <div className="flex items-start gap-3 mb-4">
                    <div className="p-6 bg-cyan-100 rounded-2xl shadow-md">
                        <Map className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm uppercase text-cyan-600">Destino</p>
                        <h3 className="text-gray-800 text-sm leading-relaxed">
                            Informações do Destino
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Dados essenciais para se situar
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border-2 border-cyan-400 shadow-md">
                        <p className="text-sm text-gray-600 mb-2">Clima em Março</p>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Quente e úmido (25-32°C) • Alta probabilidade de sol
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border-2 border-cyan-400 shadow-md">
                        <p className="text-sm text-gray-600 mb-2">Moeda</p>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Real (R$) • Cartões amplamente aceitos
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border-2 border-cyan-400 shadow-md">
                        <p className="text-sm text-gray-600 mb-2">Fuso Horário</p>
                        <p className="text-gray-800 text-sm leading-relaxed">UTC-3 (mesmo de BH)</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border-2 border-cyan-400 shadow-md">
                        <p className="text-sm text-gray-600 mb-2">Idioma</p>
                        <p className="text-gray-800 text-sm leading-relaxed">Português</p>
                    </div>
                </div>
            </div>

            {/* Links Úteis */}
            <div className="bg-white/60 border border-gray-200 rounded-2xl p-4 shadow-sm mb-8 mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-sm text-gray-500 font-medium">Links úteis</span>
                    <div className="flex flex-wrap gap-2">
                        {usefulLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-sm text-gray-700 hover:text-indigo-600 group"
                            >
                                <span className="text-indigo-500">{link.icon}</span>
                                <span>{link.name}</span>
                                <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-indigo-400" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dicas Importantes - Card estilo aconchegante */}
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl shadow-md">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs uppercase text-amber-600 font-semibold mb-1">
                            Atenção
                        </p>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                            Dicas Importantes
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Informações essenciais para aproveitar melhor
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-100 rounded-xl">
                                <Sparkles className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Segurança
                                </h4>
                                <p className="text-xs text-amber-700">
                                    Evite exibir objetos de valor em público, especialmente em
                                    praias
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-100 rounded-xl">
                                <Sun className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Protetor Solar
                                </h4>
                                <p className="text-xs text-amber-700">
                                    Reaplique a cada 2 horas, especialmente após entrar na água
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-100 rounded-xl">
                                <Droplets className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Hidratação
                                </h4>
                                <p className="text-xs text-amber-700">
                                    Beba bastante água, o clima é quente e úmido
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-100 rounded-xl">
                                <Map className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Transporte
                                </h4>
                                <p className="text-xs text-amber-700">
                                    Use apps de transporte (Uber) ou negocie valores antes em táxis
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4 md:col-span-2">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-100 rounded-xl">
                                <FileText className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Reservas
                                </h4>
                                <p className="text-xs text-amber-700">
                                    Faça reservas com antecedência, especialmente para restaurantes
                                    populares e passeios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
