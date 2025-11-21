import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { BraceletDataScreen } from './components/BraceletDataScreen';
import { RemindersScreen } from './components/RemindersScreen';
import { MedicinesScreen } from './components/MedicinesScreen';
import { AppointmentsScreen } from './components/AppointmentsScreen';
import { WaterScreen } from './components/WaterScreen';
import { ExercisesScreen } from './components/ExercisesScreen';
import { SleepScreen } from './components/SleepScreen';
import { AISuggestionsScreen } from './components/AISuggestionsScreen';
import { SocialRemindersScreen } from './components/SocialRemindersScreen';
import { ExerciseDetailScreen } from './components/ExerciseDetailScreen';
import { SuggestionDetailScreen } from './components/SuggestionDetailScreen';
import { SocialEventDetailScreen } from './components/SocialEventDetailScreen';

export type Screen = 
  | 'onboarding'
  | 'home' 
  | 'braceletData' 
  | 'reminders' 
  | 'medicines' 
  | 'appointments' 
  | 'water' 
  | 'exercises' 
  | 'sleep' 
  | 'aiSuggestions' 
  | 'socialReminders'
  | 'exerciseDetail'
  | 'suggestionDetail'
  | 'socialEventDetail';

export interface NavigationState {
  screen: Screen;
  params?: any;
}

export default function App() {
  const [navigationState, setNavigationState] = useState<NavigationState>({ screen: 'onboarding' });
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const navigate = (screen: Screen, params?: any) => {
    setNavigationState({ screen, params });
  };

  const goBack = () => {
    setNavigationState({ screen: 'home' });
  };

  const handleOnboardingComplete = () => {
    setHasCompletedOnboarding(true);
    setNavigationState({ screen: 'home' });
  };

  const renderScreen = () => {
    if (!hasCompletedOnboarding && navigationState.screen === 'onboarding') {
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }

    switch (navigationState.screen) {
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      case 'braceletData':
        return <BraceletDataScreen onBack={goBack} />;
      case 'reminders':
        return <RemindersScreen onBack={goBack} />;
      case 'medicines':
        return <MedicinesScreen onBack={goBack} />;
      case 'appointments':
        return <AppointmentsScreen onBack={goBack} />;
      case 'water':
        return <WaterScreen onBack={goBack} />;
      case 'exercises':
        return <ExercisesScreen onBack={goBack} onNavigate={navigate} />;
      case 'sleep':
        return <SleepScreen onBack={goBack} />;
      case 'aiSuggestions':
        return <AISuggestionsScreen onBack={goBack} onNavigate={navigate} />;
      case 'socialReminders':
        return <SocialRemindersScreen onBack={goBack} onNavigate={navigate} />;
      case 'exerciseDetail':
        return <ExerciseDetailScreen onBack={() => navigate('exercises')} exercise={navigationState.params} />;
      case 'suggestionDetail':
        return <SuggestionDetailScreen onBack={() => navigate('aiSuggestions')} suggestion={navigationState.params} />;
      case 'socialEventDetail':
        return <SocialEventDetailScreen onBack={() => navigate('socialReminders')} event={navigationState.params} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1080px] h-[2340px] bg-white shadow-2xl rounded-3xl overflow-hidden">
        {renderScreen()}
      </div>
    </div>
  );
}