import { Heart, Bell, Pill, Calendar, Droplet, Activity, Moon, Sparkles, Users, Watch } from 'lucide-react';
import type { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const menuItems = [
    { id: 'braceletData', icon: Heart, title: 'Dados da Pulseira', color: 'bg-red-100 hover:bg-red-200', iconColor: 'text-red-600' },
    { id: 'reminders', icon: Bell, title: 'Lembretes', color: 'bg-yellow-100 hover:bg-yellow-200', iconColor: 'text-yellow-600' },
    { id: 'medicines', icon: Pill, title: 'Remédios', color: 'bg-green-100 hover:bg-green-200', iconColor: 'text-green-600' },
    { id: 'appointments', icon: Calendar, title: 'Consultas', color: 'bg-blue-100 hover:bg-blue-200', iconColor: 'text-blue-600' },
    { id: 'water', icon: Droplet, title: 'Água (Hidratação)', color: 'bg-cyan-100 hover:bg-cyan-200', iconColor: 'text-cyan-600' },
    { id: 'exercises', icon: Activity, title: 'Exercícios Simples', color: 'bg-orange-100 hover:bg-orange-200', iconColor: 'text-orange-600' },
    { id: 'sleep', icon: Moon, title: 'Horário de Dormir', color: 'bg-indigo-100 hover:bg-indigo-200', iconColor: 'text-indigo-600' },
    { id: 'aiSuggestions', icon: Sparkles, title: 'Sugestões da IA', color: 'bg-purple-100 hover:bg-purple-200', iconColor: 'text-purple-600' },
    { id: 'socialReminders', icon: Users, title: 'Lembretes Sociais da IA', color: 'bg-pink-100 hover:bg-pink-200', iconColor: 'text-pink-600' },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-8 shadow-xl z-10">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/60 shadow-lg">
          <div className="flex items-center justify-center gap-6 mb-2">
            <div className="bg-gradient-to-br from-blue-400 to-purple-400 p-4 rounded-2xl shadow-md">
              <Watch size={56} className="text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Painel da Pulseira
            </h1>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-2xl shadow-md">
              <Heart size={56} className="text-white" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Screen)}
              className={`w-[80%] ${item.color} rounded-3xl p-10 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              <div className="flex items-center gap-6">
                <Icon className={`${item.iconColor}`} size={72} strokeWidth={2.5} />
                <span className="text-3xl text-gray-800">{item.title}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}