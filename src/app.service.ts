import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World2';
  }

  sum({ num1, num2 }: { num1: number; num2: number }) {
    return num1 + num2;
  }

  divide({ num1, num2 }: { num1: number; num2: number }) {
    return num1 / num2;
  }
}

//DAwpCIa26wEQz9E4UUdfaEaR