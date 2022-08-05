import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
<<<<<<< HEAD
import {CoursesModule} from '../../src/courses/courses.module'
=======
import { CoursesModule } from '../../src/courses/courses.module';
>>>>>>> b9e9cb9
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationPipe } from '@nestjs/common';
import { CreateCourseDto } from '../../src/courses/dto/create-course.dto';
import { HttpStatus } from '@nestjs/common';

describe('Courses: /courses', () => {
  let app: INestApplication;

  const course: CreateCourseDto = {
    name: 'Nestjs com TypeORM',
    description: 'Criando apis restful com nestjs',
<<<<<<< HEAD
    tags: ['nestjs', 'typeorm', 'nodejs', 'typescript']
=======
    tags: ['nestjs', 'typeorm', 'nodejs', 'typescript'],
>>>>>>> b9e9cb9
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
<<<<<<< HEAD
      imports: [CoursesModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'docker',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true,
    })],
=======
      imports: [
        CoursesModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5433,
          username: 'postgres',
          password: 'docker',
          database: 'testdb',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
>>>>>>> b9e9cb9
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
<<<<<<< HEAD
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));
=======
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
>>>>>>> b9e9cb9

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create POST /courses', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .send(course)
      .expect(HttpStatus.CREATED)
<<<<<<< HEAD
      .then(({body}) => {
        const expectdCourse = jasmine.objectContaining({
          ...course,
          tags: jasmine.arrayContaining(
            course.tags.map(
              name => jasmine.objectContaining({name})
            )
          )
        })
        expect(body).toEqual(expectdCourse)
      })
  });
});
=======
      .then(({ body }) => {
        const expectdCourse = jasmine.objectContaining({
          ...course,
          tags: jasmine.arrayContaining(
            course.tags.map((name) => jasmine.objectContaining({ name })),
          ),
        });
        expect(body).toEqual(expectdCourse);
      });
  });
});

// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { CoursesModule } from '../../src/courses/courses.module';
// import { ValidationPipe } from '@nestjs/common';
// import { CreateCourseDto } from '../../src/courses/dto/create-course.dto';
// import { HttpStatus } from '@nestjs/common';
// import { DataSource } from 'typeorm';

// describe('Courses: /courses', () => {
//   let app: INestApplication;

//   const course: CreateCourseDto = {
//     name: 'Nestjs com TypeORM',
//     description: 'Criando apis restful com nestjs',
//     tags: ['nestjs', 'typeorm', 'nodejs', 'typescript'],
//   };

//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       providers: [
//         {
//           provide: 'DATA_SOURCE',
//           useFactory: async () => {
//             const dataSource = new DataSource({
//               type: 'postgres',
//               host: 'dbtest',
//               port: 5433,
//               username: 'postgres',
//               password: 'docker',
//               database: 'testdb',
//               entities: [__dirname + '../../**/*.entity.js'],
//               synchronize: true,
//             });
//             return dataSource.initialize();
//           },
//         },
//       ],
//       imports: [CoursesModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();

//     app.useGlobalPipes(
//       new ValidationPipe({
//         whitelist: true,
//         forbidNonWhitelisted: true,
//         transform: true,
//       }),
//     );

//     await app.init();
//   });

//   afterAll(async () => {
//     await app.close();
//   });

//   it('Create POST /courses', () => {
//     console.log(app);
//     return request(app.getHttpServer())
//       .post('/courses')
//       .send(course)
//       .expect(HttpStatus.CREATED)
//       .then(({ body }) => {
//         const expectdCourse = jasmine.objectContaining({
//           ...course,
//           tags: jasmine.arrayContaining(
//             course.tags.map((name) => jasmine.objectContaining({ name })),
//           ),
//         });
//         expect(body).toEqual(expectdCourse);
//       });
//   });
// });
>>>>>>> b9e9cb9
