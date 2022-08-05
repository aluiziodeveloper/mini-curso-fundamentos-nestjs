import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])],
=======
import { DatabaseModule } from '../database/database.module';
import { coursesProviders } from './courses.providers';

@Module({
  imports: [DatabaseModule],
>>>>>>> b9e9cb9
  controllers: [CoursesController],
  providers: [CoursesService, ...coursesProviders],
})
export class CoursesModule {}
