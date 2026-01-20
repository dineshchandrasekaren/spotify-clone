export {};

declare global {
  interface Window {
    Clerk?: {
      session?: {
        getToken: () => Promise<string | null>;
      };
      loaded: boolean;
      signOut: () => any;
    };
  }
}
