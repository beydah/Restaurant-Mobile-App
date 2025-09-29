
'use client';

import { useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import Onboarding from '../components/Onboarding';
import Login from '../components/Login';
import HomePage from './home/page';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login' | 'app'>('splash');

  const handleSplashComplete = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('login');
  };

  const handleLoginSuccess = () => {
    setCurrentScreen('app');
  };

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (currentScreen === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (currentScreen === 'login') {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return <HomePage />;
}
