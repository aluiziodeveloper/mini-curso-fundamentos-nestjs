import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CoursesModule,
<<<<<<< HEAD
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'cursonestjs',
      entities: [__dirname + '/**/*.entity.js'],
      autoLoadEntities: false,
      synchronize: false,
    }),
=======
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'docker',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
>>>>>>> b9e9cb9
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
