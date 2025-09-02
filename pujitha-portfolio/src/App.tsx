import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Expertise from './components/Expertise';
import Timeline from './components/Timeline';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const modeChange = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${mode}-theme`);
  }, [mode]);

  return (
    <>
      <Navigation parentToChild={{ mode }} modeChange={modeChange} />
      <Main />
      <Expertise />
      <Timeline />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
