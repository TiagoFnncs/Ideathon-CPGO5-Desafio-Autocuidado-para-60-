import { ArrowLeft, Pill, Plus, Clock, Calendar } from 'lucide-react';

interface MedicinesScreenProps {
  onBack: () => void;
}

export function MedicinesScreen({ onBack }: MedicinesScreenProps) {
  const medicines = [
    { name: 'Losartana', dose: '50mg', time: '08:00 e 20:00', frequency: 'Diariamente' },
    { name: 'Sinvastatina', dose: '20mg', time: '22:00', frequency: 'Diariamente' },
    { name: 'Metformina', dose: '850mg', time: '08:00, 14:00 e 20:00', frequency: 'Diariamente' },
    { name: 'Omeprazol', dose: '20mg', time: '07:30', frequency: 'Diariamente' },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-green-50 to-white">
      <div className="sticky top-0 bg-green-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Remédios</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {medicines.map((medicine, index) => (
          <div
            key={index}
            className="w-[80%] bg-green-100 hover:bg-green-200 rounded-3xl p-10 shadow-lg transition-all"
          >
            <div className="flex items-start gap-6">
              <Pill className="text-green-600 flex-shrink-0" size={64} strokeWidth={2.5} />
              <div className="flex-1">
                <h3 className="text-4xl text-gray-800 mb-3">{medicine.name}</h3>
                <p className="text-3xl text-gray-700 mb-3">Dose: {medicine.dose}</p>
                <div className="flex items-center gap-3 text-2xl text-gray-600 mb-2">
                  <Clock size={32} />
                  <span>{medicine.time}</span>
                </div>
                <div className="flex items-center gap-3 text-2xl text-gray-600">
                  <Calendar size={32} />
                  <span>{medicine.frequency}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-[80%] bg-green-500 hover:bg-green-600 text-white rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl">
          <div className="flex items-center justify-center gap-6">
            <Plus size={64} strokeWidth={3} />
            <span className="text-3xl">Adicionar Remédio</span>
          </div>
        </button>
      </div>
    </div>
  );
}
