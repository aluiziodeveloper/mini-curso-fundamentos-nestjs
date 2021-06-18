import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesController {
  @Get('courses')
  findAll() {
    return 'Listagem de cursos';
  }
}
