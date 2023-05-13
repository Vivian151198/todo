import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sum')
  sum(@Body() body: { num1: number; num2: number }) {
    const a = 5;
    return this.appService.sum(body);
  }

  @Post('/divide')
  divide(@Body() body: { num1: number; num2: number }) {
    return this.appService.divide(body);
  }
}
