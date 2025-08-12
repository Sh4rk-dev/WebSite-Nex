import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './app/App';
import { ModalProvider } from './context/ModalContext';
import { SideBarProvider } from './context/SideBarContext';

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: This is a valid use case as we are sure the root element exists.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <SideBarProvider>
          <App />
        </SideBarProvider>
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>
);
