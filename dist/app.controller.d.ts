import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sum(body: {
        num1: number;
        num2: number;
    }): number;
    divide(body: {
        num1: number;
        num2: number;
    }): number;
}
