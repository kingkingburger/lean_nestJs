import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('WORKSPACE')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // GET
  getHello(): string {
    return this.appService.getHello();
  }
}
