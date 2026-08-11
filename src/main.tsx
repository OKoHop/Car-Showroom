import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Car-Showroom">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);
