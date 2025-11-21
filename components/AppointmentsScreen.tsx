import { ArrowLeft, Calendar, Plus, Clock, MapPin, Stethoscope } from 'lucide-react';

interface AppointmentsScreenProps {
  onBack: () => void;
}

export function AppointmentsScreen({ onBack }: AppointmentsScreenProps) {
  const appointments = [
    {
      doctor: 'Dr. Carlos Silva',
      specialty: 'Cardiologista',
      date: '15/12/2025',
      time: '14:00',
      location: 'Hospital São Lucas - Sala 302'
    },
    {
      doctor: 'Dra. Maria Santos',
      specialty: 'Endocrinologista',
      date: '20/12/2025',
      time: '10:30',
      location: 'Clínica Bem Estar - Sala 105'
    },
    {
      doctor: 'Dr. João Oliveira',
      specialty: 'Oftalmologista',
      date: '28/12/2025',
      time: '16:00',
      location: 'Centro Médico Vista - 2º andar'
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 bg-blue-600 text-white p-8 shadow-lg z-10">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={48} />
        </button>
        <h1 className="text-5xl">Consultas</h1>
      </div>
      
      <div className="px-8 py-12 flex flex-col items-center gap-8">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="w-[80%] bg-blue-100 hover:bg-blue-200 rounded-3xl p-10 shadow-lg transition-all"
          >
            <div className="flex items-start gap-6">
              <Stethoscope className="text-blue-600 flex-shrink-0" size={64} strokeWidth={2.5} />
              <div className="flex-1">
                <h3 className="text-4xl text-gray-800 mb-2">{appointment.doctor}</h3>
                <p className="text-3xl text-gray-700 mb-4">{appointment.specialty}</p>
                <div className="flex items-center gap-3 text-2xl text-gray-600 mb-2">
                  <Calendar size={32} />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center gap-3 text-2xl text-gray-600 mb-2">
                  <Clock size={32} />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-start gap-3 text-2xl text-gray-600">
                  <MapPin size={32} className="flex-shrink-0 mt-1" />
                  <span>{appointment.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-[80%] bg-blue-500 hover:bg-blue-600 text-white rounded-3xl p-10 shadow-lg transition-all hover:shadow-xl">
          <div className="flex items-center justify-center gap-6">
            <Plus size={64} strokeWidth={3} />
            <span className="text-3xl">Adicionar Consulta</span>
          </div>
        </button>
      </div>
    </div>
  );
}
