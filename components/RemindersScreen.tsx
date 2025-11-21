import { ArrowLeft, Bell, Plus, Clock } from 'lucide-react';

interface RemindersScreenProps {
  onBack: () => void;
}

export function RemindersScreen({ onBack }: RemindersScreenProps) {
  const reminders = [
    { title: 'Tomar remédio da pressão', time: '08:00', date: 'Hoje' },
    { title: 'Beber água', time: '10:00', date: 'Hoje' },
    { title: 'Caminhada no parque', time: '16:00', date: 'Hoje' },
    { title: 'Ligar para filho João', time: '18:00', date: 'Hoje' },
    { title: 'Consulta com Dr. Silva', time: '14:00', date: 'Amanhã' },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-yellow-50 to-white">
      <div className="sticky top-0 bg-yellow-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Lembretes</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="w-[80%] bg-yellow-100 hover:bg-yellow-200 rounded-3xl p-10 shadow-lg transition-all"
          >
            <div className="flex items-start gap-6">
              <Bell className="text-yellow-600 flex-shrink-0" size={64} strokeWidth={2.5} />
              <div className="flex-1">
                <h3 className="text-3xl text-gray-800 mb-3">{reminder.title}</h3>
                <div className="flex items-center gap-3 text-2xl text-gray-600">
                  <Clock size={32} />
                  <span>{reminder.time} - {reminder.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-[80%] bg-green-500 hover:bg-green-600 text-white rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl">
          <div className="flex items-center justify-center gap-6">
            <Plus size={64} strokeWidth={3} />
            <span className="text-3xl">Adicionar Lembrete</span>
          </div>
        </button>
      </div>
    </div>
  );
}
