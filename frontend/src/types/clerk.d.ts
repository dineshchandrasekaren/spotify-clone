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

export interface User {
  _id: string;
  clerkId: string;
  fullName: string;
  imageUrl: string;
}
