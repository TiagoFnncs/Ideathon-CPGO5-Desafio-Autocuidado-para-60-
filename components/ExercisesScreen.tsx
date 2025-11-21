import { ArrowLeft, Activity, Wind, Hand, ArrowUp, Heart } from 'lucide-react';
import type { Screen } from '../App';

interface ExercisesScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function ExercisesScreen({ onBack, onNavigate }: ExercisesScreenProps) {
  const exercises = [
    { 
      id: 1,
      icon: Activity, 
      title: 'Caminhada Leve', 
      duration: '15-30 minutos',
      description: 'Caminhe em ritmo confortável, mantendo a postura ereta. Ótimo para o coração e circulação.',
      color: 'bg-orange-100 hover:bg-orange-200', 
      iconColor: 'text-orange-600' 
    },
    { 
      id: 2,
      icon: Wind, 
      title: 'Alongamento', 
      duration: '10 minutos',
      description: 'Alongue braços, pernas e coluna suavemente. Melhora a flexibilidade e reduz dores.',
      color: 'bg-green-100 hover:bg-green-200', 
      iconColor: 'text-green-600' 
    },
    { 
      id: 3,
      icon: Hand, 
      title: 'Flexão de Punhos', 
      duration: '5 minutos',
      description: 'Movimente os punhos em círculos, abra e feche as mãos. Previne rigidez nas articulações.',
      color: 'bg-blue-100 hover:bg-blue-200', 
      iconColor: 'text-blue-600' 
    },
    { 
      id: 4,
      icon: ArrowUp, 
      title: 'Elevação de Braços', 
      duration: '5-10 minutos',
      description: 'Levante os braços lateralmente até a altura dos ombros. Fortalece músculos dos braços.',
      color: 'bg-purple-100 hover:bg-purple-200', 
      iconColor: 'text-purple-600' 
    },
    { 
      id: 5,
      icon: Heart, 
      title: 'Respiração Guiada', 
      duration: '10 minutos',
      description: 'Inspire profundamente pelo nariz e expire pela boca. Reduz estresse e ansiedade.',
      color: 'bg-pink-100 hover:bg-pink-200', 
      iconColor: 'text-pink-600' 
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-orange-50 to-white">
      <div className="sticky top-0 bg-orange-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Exercícios Simples</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {exercises.map((exercise) => {
          const Icon = exercise.icon;
          return (
            <button
              key={exercise.id}
              onClick={() => onNavigate('exerciseDetail', exercise)}
              className={`w-[80%] ${exercise.color} rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              <div className="flex items-start gap-6">
                <Icon className={`${exercise.iconColor} flex-shrink-0`} size={64} strokeWidth={2.5} />
                <div className="flex-1 text-left">
                  <h3 className="text-4xl text-gray-800 mb-3">{exercise.title}</h3>
                  <p className="text-2xl text-gray-600">{exercise.duration}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
