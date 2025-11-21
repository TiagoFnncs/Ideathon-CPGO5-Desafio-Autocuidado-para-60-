import { ArrowLeft, Heart, TrendingUp, Footprints, MapPin, Armchair, Moon, Bell } from 'lucide-react';

interface BraceletDataScreenProps {
  onBack: () => void;
}

export function BraceletDataScreen({ onBack }: BraceletDataScreenProps) {
  const dataCards = [
    { icon: Heart, title: 'Batimentos Cardíacos', value: '72 bpm', status: 'Normal', color: 'bg-red-100', iconColor: 'text-red-600' },
    { icon: TrendingUp, title: 'Histórico de Batimentos', value: 'Últimas 24h', status: 'Média: 68 bpm', color: 'bg-orange-100', iconColor: 'text-orange-600' },
    { icon: Footprints, title: 'Passos Diários', value: '4.523', status: 'Meta: 5.000', color: 'bg-green-100', iconColor: 'text-green-600' },
    { icon: MapPin, title: 'Distância Percorrida', value: '3.2 km', status: 'Hoje', color: 'bg-blue-100', iconColor: 'text-blue-600' },
    { icon: Armchair, title: 'Tempo em Pé / Sentado', value: '4h em pé', status: '6h sentado', color: 'bg-purple-100', iconColor: 'text-purple-600' },
    { icon: Moon, title: 'Horas de Sono', value: '7h 30min', status: 'Ontem à noite', color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { icon: TrendingUp, title: 'Qualidade do Sono', value: 'Boa', status: '85% eficiência', color: 'bg-cyan-100', iconColor: 'text-cyan-600' },
    { icon: Bell, title: 'Alertas Recebidos', value: '2 alertas', status: 'Últimas 24h', color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-red-50 to-white">
      <div className="sticky top-0 bg-red-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Dados da Pulseira</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {dataCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`w-[80%] ${card.color} rounded-3xl p-10 shadow-lg`}
            >
              <div className="flex items-start gap-6">
                <Icon className={`${card.iconColor} flex-shrink-0`} size={64} strokeWidth={2.5} />
                <div className="flex-1">
                  <h3 className="text-3xl text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-4xl text-gray-900 mb-2">{card.value}</p>
                  <p className="text-2xl text-gray-600">{card.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}