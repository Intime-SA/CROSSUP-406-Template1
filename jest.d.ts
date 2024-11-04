import "@testing-library/jest-dom";

declare global {
  // Extend the Window interface
  interface Window {
    fetch: jest.Mock;
  }

  // Add common Jest globals
  const describe: typeof import("@jest/globals").describe;
  const it: typeof import("@jest/globals").it;
  const test: typeof import("@jest/globals").test;
  const expect: typeof import("@jest/globals").expect;
  const beforeEach: typeof import("@jest/globals").beforeEach;
  const afterEach: typeof import("@jest/globals").afterEach;
  const beforeAll: typeof import("@jest/globals").beforeAll;
  const afterAll: typeof import("@jest/globals").afterAll;
  const jest: typeof import("@jest/globals").jest;
}

export {};
