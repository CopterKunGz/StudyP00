import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  getHello(): any {
    return { 
        message : 'Hello World!' 
    };
  }
}