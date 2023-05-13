import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/sum")
  sum(@Body()body: {num1: number; num2: number}) {
    let a;
    return this.appService.sum(body);
  }
}
