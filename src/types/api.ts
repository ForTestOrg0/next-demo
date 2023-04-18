export interface APIWarpperProps<T> {
  code: number;
  data: T;
  generated_at: number;
  message: string;
}