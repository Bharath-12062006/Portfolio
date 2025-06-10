import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useScrollAnimation } from './utils/animations.tsx';

// Component to initialize animations
function AppWithAnimations() {
  useScrollAnimation();
  
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithAnimations />
  </StrictMode>
);