export {};

declare global {
  interface Window {
    env: { [key: string]: string };
  }
}

export const environment = {
  production: true
};
