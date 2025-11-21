import { ArrowLeft, Cake, Users, Calendar, Music, Palette, ShoppingBag, Heart } from 'lucide-react';
import type { Screen } from '../App';

interface SocialRemindersScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function SocialRemindersScreen({ onBack, onNavigate }: SocialRemindersScreenProps) {
  const socialEvents = [
    { 
      id: 1,
      icon: Cake, 
      title: 'Aniversário do João', 
      date: '5 de dezembro',
      description: 'Não esqueça de ligar para seu filho João no aniversário dele! Ele faz 45 anos.',
      color: 'bg-pink-100 hover:bg-pink-200', 
      iconColor: 'text-pink-600' 
    },
    { 
      id: 2,
      icon: Users, 
      title: 'Grupo da Terceira Idade', 
      subtitle: 'Toda terça-feira',
      description: 'Encontro do grupo da comunidade às 14h no Centro Comunitário. Venha conversar e fazer novos amigos!',
      color: 'bg-blue-100 hover:bg-blue-200', 
      iconColor: 'text-blue-600' 
    },
    { 
      id: 3,
      icon: Calendar, 
      title: 'Feira do Bairro', 
      subtitle: 'Sábados pela manhã',
      description: 'Feira de produtos locais no Parque Central. Frutas frescas, verduras e artesanato. Das 7h às 12h.',
      color: 'bg-green-100 hover:bg-green-200', 
      iconColor: 'text-green-600' 
    },
    { 
      id: 4,
      icon: Music, 
      title: 'Aula de Dança (UBS)', 
      subtitle: 'Segundas e quartas',
      description: 'Forró e sertanejo raiz na UBS do bairro. Aulas gratuitas às 16h. Traga roupa confortável!',
      color: 'bg-orange-100 hover:bg-orange-200', 
      iconColor: 'text-orange-600' 
    },
    { 
      id: 5,
      icon: Palette, 
      title: 'Aula de Artesanato (UBS)', 
      subtitle: 'Terças e quintas',
      description: 'Aprenda crochê, pintura e bordado. Material fornecido gratuitamente. Às 15h na UBS.',
      color: 'bg-purple-100 hover:bg-purple-200', 
      iconColor: 'text-purple-600' 
    },
    { 
      id: 6,
      icon: ShoppingBag, 
      title: 'Feira Pública 60+', 
      subtitle: 'Primeiro domingo do mês',
      description: 'Feira exclusiva para maiores de 60 anos com descontos especiais. Próxima: 3 de dezembro no Mercado Municipal.',
      color: 'bg-yellow-100 hover:bg-yellow-200', 
      iconColor: 'text-yellow-600' 
    },
    { 
      id: 7,
      icon: Heart, 
      title: 'Programa Viver Bem', 
      subtitle: 'Governo de Goiás',
      description: 'Ações de saúde, cultura e lazer para idosos. Cadastre-se no CRAS mais próximo. Benefícios e atividades gratuitas.',
      color: 'bg-red-100 hover:bg-red-200', 
      iconColor: 'text-red-600' 
    },
    { 
      id: 8,
      icon: Users, 
      title: 'Sarau Cultural Goiano', 
      subtitle: '15 de dezembro',
      description: 'Apresentações de viola, poesia e causos goianos. No Centro Cultural às 18h. Entrada gratuita com lanche.',
      color: 'bg-cyan-100 hover:bg-cyan-200', 
      iconColor: 'text-cyan-600' 
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-pink-50 to-white">
      <div className="sticky top-0 bg-pink-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-4xl">Lembretes Sociais da IA</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {socialEvents.map((event) => {
          const Icon = event.icon;
          return (
            <button
              key={event.id}
              onClick={() => onNavigate('socialEventDetail', event)}
              className={`w-[80%] ${event.color} rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              <div className="flex items-start gap-6">
                <Icon className={`${event.iconColor} flex-shrink-0`} size={64} strokeWidth={2.5} />
                <div className="flex-1 text-left">
                  <h3 className="text-4xl text-gray-800 mb-2">{event.title}</h3>
                  {event.subtitle && (
                    <p className="text-2xl text-gray-600">{event.subtitle}</p>
                  )}
                  {event.date && (
                    <p className="text-2xl text-gray-600">{event.date}</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
