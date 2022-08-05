import { DataSource } from 'typeorm';
import { CreateCoursesTable1628996880858 } from './migrations/1628996880858-CreateCoursesTable';
import { CreateTagsTable1628997630617 } from './migrations/1628997630617-CreateTagsTable';
import { CreateCoursesTagsTable1629405679806 } from './migrations/1629405679806-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1629406086494 } from './migrations/1629406086494-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1629406641111 } from './migrations/1629406641111-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1628996880858,
    CreateTagsTable1628997630617,
    CreateCoursesTagsTable1629405679806,
    AddCoursesIdToCoursesTagsTable1629406086494,
    AddTagsIdToCoursesTagsTable1629406641111,
  ],
});
