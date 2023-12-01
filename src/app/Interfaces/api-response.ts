export interface ApiResponse<T> {
    statusCode: number;
    isExitoso: boolean;
    errorMessages: string[] | null;
    resultado: T;
  }