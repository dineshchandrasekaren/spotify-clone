class CustomError extends Error {
  constructor(message: string, public code: number, public key?: string) {
    super(message);
  }
}

export default CustomError;
