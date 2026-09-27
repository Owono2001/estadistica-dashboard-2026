import '@testing-library/jest-dom';

// Polyfill para ResizeObserver (Recharts lo necesita en los tests)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};