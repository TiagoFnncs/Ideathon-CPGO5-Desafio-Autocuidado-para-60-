import { ArrowLeft, Lightbulb } from 'lucide-react';

interface SuggestionDetailScreenProps {
  onBack: () => void;
  suggestion: any;
}

export function SuggestionDetailScreen({ onBack, suggestion }: SuggestionDetailScreenProps) {
  const Icon = suggestion.icon;

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-purple-50 to-white">
      <div className="sticky top-0 bg-purple-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">{suggestion.title}</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        <div className="w-[80%] bg-purple-100 rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <Icon className="text-purple-600 mb-6" size={120} strokeWidth={2} />
            <h2 className="text-4xl text-gray-800 mb-3 text-center">{suggestion.subtitle}</h2>
          </div>
          
          <div className="flex items-start gap-4">
            <Lightbulb className="text-purple-600 flex-shrink-0 mt-1" size={48} />
            <div>
              <p className="text-2xl text-gray-600 mb-3">Por que recomendamos</p>
              <p className="text-3xl text-gray-800 leading-relaxed">{suggestion.description}</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-green-100 rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl text-gray-800 mb-4">Como começar</h3>
          <ul className="space-y-3">
            <li className="text-2xl text-gray-700">1. Reserve um tempo tranquilo</li>
            <li className="text-2xl text-gray-700">2. Prepare-se confortavelmente</li>
            <li className="text-2xl text-gray-700">3. Faça no seu próprio ritmo</li>
            <li className="text-2xl text-gray-700">4. Aproveite o momento</li>
          </ul>
        </div>

        <button className="w-[80%] bg-purple-500 hover:bg-purple-600 text-white rounded-3xl p-12 shadow-lg transition-all hover:shadow-xl">
          <span className="text-4xl">Começar Agora</span>
        </button>
      </div>
    </div>
  );
}
