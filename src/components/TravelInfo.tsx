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
    Download,
    ExternalLink,
    Clipboard,
} from 'lucide-react';
import React, { useState } from 'react';

interface ChecklistItem {
    id: string;
    label: string;
    category: 'documents' | 'clothes' | 'electronics' | 'hygiene' | 'other';
}

export function TravelInfo() {
    const [checklist, setChecklist] = useState<Record<string, boolean>>({});

    const toggleChecklist = (id: string) => {
        setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
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
            name: 'Google Maps - Fortaleza',
            url: 'https://www.google.com/maps/place/Fortaleza,+CE',
            icon: <Map className="w-4 h-4" />,
        },
        {
            name: 'Beach Park - Site Oficial',
            url: 'https://www.beachpark.com.br',
            icon: <Globe className="w-4 h-4" />,
        },
        {
            name: '123 Milhas - Passagens e Pacotes',
            url: 'https://www.123milhas.com',
            icon: <Globe className="w-4 h-4" />,
        },
    ];

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'documents':
                return <FileText className="w-4 h-4" />;
            case 'clothes':
                return <Sun className="w-4 h-4" />;
            case 'electronics':
                return <CreditCard className="w-4 h-4" />;
            case 'hygiene':
                return <Droplets className="w-4 h-4" />;
            default:
                return <Clipboard className="w-4 h-4" />;
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

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-blue-700 text-4xl font-bold">INFORMAÇÕES ÚTEIS</h1>
                    <div className="p-3 bg-blue-100 rounded-full">
                        <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <p className="text-gray-600 text-lg">Tudo que você precisa saber para sua viagem</p>
            </div>

            {/* Checklist de Preparação */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-6 md:p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Checklist de Preparação</h2>
                    <div className="bg-blue-50 rounded-full px-4 py-2">
                        <span className="text-blue-700 font-bold">
                            {completedCount}/{totalCount}
                        </span>
                    </div>
                </div>

                <div className="space-y-6">
                    {Object.entries(groupedChecklist).map(([category, items]) => (
                        <div key={category} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-4">
                                {getCategoryIcon(category)}
                                <h3 className="font-bold text-gray-700 text-lg">
                                    {getCategoryLabel(category)}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleChecklist(item.id)}
                                        className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                                            checklist[item.id]
                                                ? 'bg-green-50 border-2 border-green-300'
                                                : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                                        }`}
                                    >
                                        {checklist[item.id] ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                        <span
                                            className={`flex-1 ${
                                                checklist[item.id]
                                                    ? 'line-through text-gray-500'
                                                    : 'text-gray-800'
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Informações Importantes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Contatos de Emergência */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <Phone className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-red-800 text-xl">Contatos de Emergência</h3>
                    </div>
                    <div className="space-y-3">
                        {emergencyContacts.map((contact, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-white rounded-lg"
                            >
                                <div>
                                    <p className="font-semibold text-gray-800">{contact.name}</p>
                                    <p className="text-sm text-gray-600">{contact.number}</p>
                                </div>
                                {contact.type === 'emergency' && (
                                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                                        URGENTE
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Informações do Destino */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-cyan-100 rounded-lg">
                            <Map className="w-6 h-6 text-cyan-600" />
                        </div>
                        <h3 className="font-bold text-cyan-800 text-xl">Informações do Destino</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Clima em Março</p>
                            <p className="font-semibold text-gray-800">
                                Quente e úmido (25-32°C) • Alta probabilidade de sol
                            </p>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Moeda</p>
                            <p className="font-semibold text-gray-800">Real (R$) • Cartões amplamente aceitos</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Fuso Horário</p>
                            <p className="font-semibold text-gray-800">UTC-3 (mesmo de BH)</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Idioma</p>
                            <p className="font-semibold text-gray-800">Português</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Úteis */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Links Úteis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {usefulLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-300 transition-all group"
                        >
                            <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600 group-hover:bg-cyan-200">
                                {link.icon}
                            </div>
                            <span className="flex-1 font-semibold text-gray-800">{link.name}</span>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Dicas Importantes */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-yellow-800 text-xl mb-3">Dicas Importantes</h3>
                        <div className="space-y-2 text-sm text-yellow-700">
                            <div className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>
                                    <strong>Segurança:</strong> Evite exibir objetos de valor em público, especialmente
                                    em praias
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>
                                    <strong>Protetor Solar:</strong> Reaplique a cada 2 horas, especialmente após entrar
                                    na água
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>
                                    <strong>Hidratação:</strong> Beba bastante água, o clima é quente e úmido
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>
                                    <strong>Transporte:</strong> Use aplicativos de transporte (Uber) ou negocie valores
                                    antes em táxis
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>
                                    <strong>Reservas:</strong> Faça reservas com antecedência, especialmente para
                                    restaurantes populares
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

