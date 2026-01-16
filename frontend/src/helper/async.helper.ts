import { CanceledError } from "axios";

function asynchronous(
  controller: (...args: any[]) => Promise<any>,
  onError?: (error: unknown) => void,
  onFinally?: () => void
) {
  return async (...args: any[]): Promise<any> => {
    try {
      return await controller(...args);
    } catch (error) {
      if (error instanceof CanceledError) return;
      onError?.(error);
    } finally {
      onFinally?.();
    }
  };
}

export default asynchronous;
