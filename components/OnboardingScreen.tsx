import { useState } from 'react';
import { Watch, Vibrate, Volume2, AlertTriangle, Brain, WifiOff, Nfc, ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      icon: Watch,
      title: 'Bem-vindo ao seu Assistente de Saúde',
      description: 'Este aplicativo funciona em conjunto com sua pulseira inteligente para cuidar da sua saúde e bem-estar todos os dias.',
      color: 'from-blue-400 to-purple-400',
      bgColor: 'bg-gradient-to-b from-blue-50 to-purple-50',
    },
    {
      icon: Vibrate,
      title: 'Vibrações Inteligentes',
      description: 'A pulseira vibra suavemente para lembrá-lo de tomar remédios, beber água, fazer exercícios e outras atividades importantes do seu dia.',
      color: 'from-green-400 to-emerald-400',
      bgColor: 'bg-gradient-to-b from-green-50 to-emerald-50',
    },
    {
      icon: Volume2,
      title: 'Alertas Sonoros',
      description: 'Em momentos importantes, como lembretes de consultas ou medicamentos urgentes, a pulseira emite sons para garantir que você não esqueça.',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-gradient-to-b from-yellow-50 to-orange-50',
    },
    {
      icon: AlertTriangle,
      title: 'Sinais de Emergência',
      description: 'Em situações de perigo detectadas (como batimentos irregulares ou quedas), a pulseira emite alertas fortes e pode notificar seus contatos de emergência.',
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-gradient-to-b from-red-50 to-pink-50',
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'A pulseira possui uma IA interna que processa todos os seus dados de saúde, aprende seus hábitos e oferece sugestões personalizadas para você.',
      color: 'from-purple-400 to-indigo-400',
      bgColor: 'bg-gradient-to-b from-purple-50 to-indigo-50',
    },
    {
      icon: WifiOff,
      title: 'Funciona Offline',
      description: 'Não precisa de internet! A pulseira funciona de forma independente com base nos dados enviados quando conectada ao celular.',
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'bg-gradient-to-b from-cyan-50 to-blue-50',
    },
    {
      icon: Nfc,
      title: 'Conexão via NFC',
      description: 'Para atualizar informações ou sincronizar dados coletados, basta aproximar a pulseira do celular. A conexão NFC é rápida e segura!',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'bg-gradient-to-b from-pink-50 to-rose-50',
    },
  ];

  const currentPageData = pages[currentPage];
  const Icon = currentPageData.icon;
  const isLastPage = currentPage === pages.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className={`h-full ${currentPageData.bgColor} flex flex-col`}>
      {/* Header com progresso */}
      <div className="p-8">
        <div className="flex gap-2 justify-center">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'w-16 bg-gradient-to-r ' + currentPageData.color 
                  : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 pb-12">
        {/* Ícone ilustrativo */}
        <div className={`bg-gradient-to-br ${currentPageData.color} p-12 rounded-full shadow-2xl mb-12 animate-pulse`}>
          <Icon size={120} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Título */}
        <h1 className="text-5xl text-center text-gray-800 mb-8 px-8 leading-tight">
          {currentPageData.title}
        </h1>

        {/* Descrição */}
        <p className="text-3xl text-center text-gray-700 leading-relaxed px-8">
          {currentPageData.description}
        </p>

        {/* Ilustração adicional para NFC */}
        {currentPage === 6 && (
          <div className="mt-12 flex items-center gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 p-6 rounded-2xl shadow-lg mb-3">
                <Watch size={64} className="text-white" strokeWidth={2.5} />
              </div>
              <p className="text-2xl text-gray-700">Pulseira</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <ChevronRight size={48} className="text-pink-500 animate-pulse" strokeWidth={3} />
              <ChevronRight size={48} className="text-pink-500 animate-pulse delay-100" strokeWidth={3} />
              <ChevronRight size={48} className="text-pink-500 animate-pulse delay-200" strokeWidth={3} />
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 p-6 rounded-2xl shadow-lg mb-3">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <p className="text-2xl text-gray-700">Celular</p>
            </div>
          </div>
        )}

        {/* Contador de página */}
        <p className="text-3xl text-gray-500 mt-12">
          {currentPage + 1} de {pages.length}
        </p>
      </div>

      {/* Botões de navegação */}
      <div className="p-8 flex gap-6">
        {currentPage > 0 && (
          <button
            onClick={handlePrevious}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-3xl p-8 shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            <div className="flex items-center justify-center gap-4">
              <ChevronLeft size={56} strokeWidth={3} />
              <span className="text-3xl">Anterior</span>
            </div>
          </button>
        )}
        
        <button
          onClick={handleNext}
          className={`${currentPage === 0 ? 'w-full' : 'flex-1'} bg-gradient-to-r ${currentPageData.color} hover:opacity-90 text-white rounded-3xl p-8 shadow-lg transition-all hover:shadow-xl active:scale-95`}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl">
              {isLastPage ? 'Começar' : 'Próximo'}
            </span>
            <ChevronRight size={56} strokeWidth={3} />
          </div>
        </button>
      </div>
    </div>
  );
}
