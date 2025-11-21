import { ArrowLeft, Info, Calendar, MapPin } from 'lucide-react';

interface SocialEventDetailScreenProps {
  onBack: () => void;
  event: any;
}

export function SocialEventDetailScreen({ onBack, event }: SocialEventDetailScreenProps) {
  const Icon = event.icon;

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-pink-50 to-white">
      <div className="sticky top-0 bg-pink-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-4xl">{event.title}</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        <div className="w-[80%] bg-pink-100 rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <Icon className="text-pink-600 mb-6" size={120} strokeWidth={2} />
            {event.subtitle && (
              <h2 className="text-3xl text-gray-700 mb-2 text-center">{event.subtitle}</h2>
            )}
            {event.date && (
              <h2 className="text-3xl text-gray-700 mb-2 text-center">{event.date}</h2>
            )}
          </div>
          
          <div className="flex items-start gap-4">
            <Info className="text-pink-600 flex-shrink-0 mt-1" size={48} />
            <div>
              <p className="text-2xl text-gray-600 mb-3">Detalhes</p>
              <p className="text-3xl text-gray-800 leading-relaxed">{event.description}</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-blue-100 rounded-3xl p-10 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <Calendar className="text-blue-600 flex-shrink-0" size={48} />
            <div>
              <p className="text-2xl text-gray-600">Quando</p>
              <p className="text-3xl text-gray-800">{event.date || event.subtitle || 'Veja descrição acima'}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 flex-shrink-0" size={48} />
            <div>
              <p className="text-2xl text-gray-600">Onde</p>
              <p className="text-3xl text-gray-800">Veja detalhes na descrição</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] bg-green-100 rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl text-gray-800 mb-4">Lembrete</h3>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Vamos adicionar um lembrete para você não esquecer deste evento! Aproveite para participar e se divertir.
          </p>
        </div>

        <button className="w-[80%] bg-pink-500 hover:bg-pink-600 text-white rounded-3xl p-12 shadow-lg transition-all hover:shadow-xl">
          <span className="text-4xl">Adicionar ao Calendário</span>
        </button>
      </div>
    </div>
  );
}
