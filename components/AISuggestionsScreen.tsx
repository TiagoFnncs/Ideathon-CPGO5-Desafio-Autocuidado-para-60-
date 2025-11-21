import { ArrowLeft, Footprints, Wind, Brain, Music, Newspaper } from 'lucide-react';
import type { Screen } from '../App';

interface AISuggestionsScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function AISuggestionsScreen({ onBack, onNavigate }: AISuggestionsScreenProps) {
  const suggestions = [
    { 
      id: 1,
      icon: Footprints, 
      title: 'Caminhada Leve', 
      subtitle: 'Recomendado para você',
      description: 'Baseado no seu histórico, uma caminhada de 20 minutos no parque seria ideal agora. A temperatura está agradável e você já cumpriu 80% da meta de passos.',
      color: 'bg-orange-100 hover:bg-orange-200', 
      iconColor: 'text-orange-600' 
    },
    { 
      id: 2,
      icon: Wind, 
      title: 'Alongamento', 
      subtitle: 'Você está sentado há 2 horas',
      description: 'Hora de se alongar! Movimente-se por 5 minutos para melhorar a circulação e reduzir a tensão muscular.',
      color: 'bg-green-100 hover:bg-green-200', 
      iconColor: 'text-green-600' 
    },
    { 
      id: 3,
      icon: Brain, 
      title: 'Jogo Cognitivo Simples', 
      subtitle: 'Exercite a mente',
      description: 'Palavras-cruzadas, sudoku ou jogos de memória são ótimos para manter a mente ativa. Dedique 15 minutos hoje.',
      color: 'bg-purple-100 hover:bg-purple-200', 
      iconColor: 'text-purple-600' 
    },
    { 
      id: 4,
      icon: Music, 
      title: 'Música da Sua Época', 
      subtitle: 'Relaxe com suas favoritas',
      description: 'Que tal ouvir clássicos dos anos 60 e 70? Música traz boas memórias e melhora o humor. Playlist personalizada disponível.',
      color: 'bg-pink-100 hover:bg-pink-200', 
      iconColor: 'text-pink-600' 
    },
    { 
      id: 5,
      icon: Newspaper, 
      title: 'Leitura de Notícias', 
      subtitle: 'Mantenha-se informado',
      description: 'Notícias selecionadas de fontes confiáveis sobre sua região, saúde e cultura. Informação de qualidade para você.',
      color: 'bg-blue-100 hover:bg-blue-200', 
      iconColor: 'text-blue-600' 
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-purple-50 to-white">
      <div className="sticky top-0 bg-purple-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Sugestões da IA</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;
          return (
            <button
              key={suggestion.id}
              onClick={() => onNavigate('suggestionDetail', suggestion)}
              className={`w-[80%] ${suggestion.color} rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              <div className="flex items-start gap-6">
                <Icon className={`${suggestion.iconColor} flex-shrink-0`} size={64} strokeWidth={2.5} />
                <div className="flex-1 text-left">
                  <h3 className="text-4xl text-gray-800 mb-2">{suggestion.title}</h3>
                  <p className="text-2xl text-gray-600">{suggestion.subtitle}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
