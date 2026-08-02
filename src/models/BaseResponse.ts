export interface BaseResponse<T> {
    appName: string;
    timestamp: Date;
    status: number;
    result: T;
    message: string;
}