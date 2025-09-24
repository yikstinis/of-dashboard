import '@testing-library/jest-dom';

// Application container test fails with "ReferenceError: ResizeObserver is not defined" error.
// Seems like recharts package depends on ResizeObserver API which is not available in JSDOM environment.
// TODO: Check it later, maybe we should mock it differently...
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
