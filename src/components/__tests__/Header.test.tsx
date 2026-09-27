import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../Header';
import { LanguageProvider } from '@/context/LanguageContext';

// Mock de matchMedia para componentes responsivos
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Header Component', () => {
  it('renders the corporate Navigation brand and links', () => {
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );
    
    // Verificamos que el contenedor de la marca o los elementos de navegación carguen
    const navElement = document.querySelector('nav');
    expect(navElement).toBeTruthy();

    // Verificamos elementos clave del menú del Dashboard corporativo
    expect(navElement?.textContent).toMatch(/Telemetry/i);
  });
});