import { ArrowLeft, Droplet, Plus } from 'lucide-react';
import { useState } from 'react';

interface WaterScreenProps {
  onBack: () => void;
}

export function WaterScreen({ onBack }: WaterScreenProps) {
  const [glassesConsumed, setGlassesConsumed] = useState(6);
  const dailyGoal = 8;
  const percentage = (glassesConsumed / dailyGoal) * 100;

  const addGlass = () => {
    setGlassesConsumed(prev => prev + 1);
  };

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-cyan-50 to-white">
      <div className="sticky top-0 bg-cyan-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Água (Hidratação)</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        <div className="w-[80%] bg-cyan-100 rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col items-center">
            <Droplet className="text-cyan-600 mb-6" size={96} strokeWidth={2.5} fill="currentColor" />
            <h2 className="text-3xl text-gray-700 mb-4">Progresso Diário</h2>
            <div className="text-7xl text-cyan-600 mb-6">{glassesConsumed}/{dailyGoal}</div>
            <p className="text-3xl text-gray-700 mb-8">copos de água</p>
            
            <div className="w-full bg-cyan-200 rounded-full h-12 mb-4 overflow-hidden">
              <div 
                className="bg-cyan-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
            <p className="text-3xl text-cyan-700">{Math.min(percentage, 100).toFixed(0)}% da meta</p>
          </div>
        </div>
        
        <button 
          onClick={addGlass}
          className="w-[80%] bg-cyan-500 hover:bg-cyan-600 text-white rounded-3xl p-12 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <div className="flex items-center justify-center gap-6">
            <Plus size={72} strokeWidth={3} />
            <span className="text-4xl">Registrar Copo</span>
          </div>
        </button>

        <div className="w-[80%] bg-blue-100 rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl text-gray-800 mb-4">Dica de Hidratação</h3>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Beba água regularmente ao longo do dia. Mantenha-se hidratado para melhorar sua saúde e bem-estar!
          </p>
        </div>
      </div>
    </div>
  );
}