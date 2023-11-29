import { Controller, Get, Header } from '@nestjs/common';
import { config } from './config';

@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/plain')
  getHello(): string {
    return ` _____  _____ _____  ______ 
|  __ \\|_   _|  __ \\|  ____|
| |__) | | | | |  | | |__   
|  _  /  | | | |  | |  __|  
| | \\ \\ _| |_| |__| | |____ 
|_|  \\_\\_____|_____/|______|

       ${config.serviceName}-Service
`;
  }
}
