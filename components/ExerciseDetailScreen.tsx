import { ArrowLeft, Clock, Info } from 'lucide-react';

interface ExerciseDetailScreenProps {
  onBack: () => void;
  exercise: any;
}

export function ExerciseDetailScreen({ onBack, exercise }: ExerciseDetailScreenProps) {
  const Icon = exercise.icon;

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-orange-50 to-white">
      <div className="sticky top-0 bg-orange-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">{exercise.title}</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        <div className="w-[80%] bg-orange-100 rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <Icon className="text-orange-600 mb-6" size={120} strokeWidth={2} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <Clock className="text-orange-600" size={48} />
            <div>
              <p className="text-2xl text-gray-600">Duração</p>
              <p className="text-3xl text-gray-800">{exercise.duration}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Info className="text-orange-600 flex-shrink-0 mt-1" size={48} />
            <div>
              <p className="text-2xl text-gray-600 mb-3">Como fazer</p>
              <p className="text-3xl text-gray-800 leading-relaxed">{exercise.description}</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-green-100 rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl text-gray-800 mb-4">Benefícios</h3>
          <ul className="space-y-3">
            <li className="text-2xl text-gray-700">✓ Melhora a circulação sanguínea</li>
            <li className="text-2xl text-gray-700">✓ Aumenta a flexibilidade</li>
            <li className="text-2xl text-gray-700">✓ Fortalece os músculos</li>
            <li className="text-2xl text-gray-700">✓ Reduz o estresse</li>
          </ul>
        </div>

        <div className="w-[80%] bg-yellow-100 rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl text-gray-800 mb-4">Importante</h3>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Faça os exercícios no seu ritmo. Se sentir qualquer desconforto ou dor, pare imediatamente e consulte seu médico.
          </p>
        </div>
      </div>
    </div>
  );
}
