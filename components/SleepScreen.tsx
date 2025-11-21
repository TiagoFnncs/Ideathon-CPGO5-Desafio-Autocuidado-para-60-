import { ArrowLeft, Moon, Clock, TrendingUp, Lightbulb } from 'lucide-react';

interface SleepScreenProps {
  onBack: () => void;
}

export function SleepScreen({ onBack }: SleepScreenProps) {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-indigo-50 to-white">
      <div className="sticky top-0 bg-indigo-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Horário de Dormir</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        <div className="w-[80%] bg-indigo-100 rounded-3xl p-10 shadow-lg">
          <div className="flex items-start gap-6">
            <Clock className="text-indigo-600 flex-shrink-0" size={64} strokeWidth={2.5} />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-800 mb-3">Horário Recomendado</h3>
              <p className="text-5xl text-indigo-700 mb-2">22:00</p>
              <p className="text-2xl text-gray-600">Dormir cedo ajuda na recuperação</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-purple-100 rounded-3xl p-10 shadow-lg">
          <div className="flex items-start gap-6">
            <Moon className="text-purple-600 flex-shrink-0" size={64} strokeWidth={2.5} />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-800 mb-3">Horário Detectado</h3>
              <p className="text-5xl text-purple-700 mb-2">22:30</p>
              <p className="text-2xl text-gray-600">Ontem você dormiu às 22:30</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-cyan-100 rounded-3xl p-10 shadow-lg">
          <div className="flex items-start gap-6">
            <TrendingUp className="text-cyan-600 flex-shrink-0" size={64} strokeWidth={2.5} />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-800 mb-3">Qualidade do Sono</h3>
              <p className="text-5xl text-cyan-700 mb-2">Boa</p>
              <p className="text-2xl text-gray-600">Eficiência de sono: 85%</p>
              <p className="text-2xl text-gray-600">Tempo total: 7h 30min</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-green-100 rounded-3xl p-10 shadow-lg">
          <div className="flex items-start gap-6">
            <Lightbulb className="text-green-600 flex-shrink-0" size={64} strokeWidth={2.5} />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-800 mb-4">Sugestões de Relaxamento</h3>
              <ul className="space-y-3">
                <li className="text-2xl text-gray-700">• Leitura leve antes de dormir</li>
                <li className="text-2xl text-gray-700">• Música calma e relaxante</li>
                <li className="text-2xl text-gray-700">• Evitar telas 1h antes de dormir</li>
                <li className="text-2xl text-gray-700">• Chá de camomila</li>
                <li className="text-2xl text-gray-700">• Ambiente escuro e silencioso</li>
                <li className="text-2xl text-gray-700">• Respiração profunda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
