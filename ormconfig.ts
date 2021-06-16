import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'develop',
  password: 'aa1010aa',
  database: 'nest-crud',
  entities: [
    __dirname + 'src/modules/**/entities/*.entity{.ts,.js}',
  ],
  migrations: [
    './src/shared/infra/typeorm/migrations/*{.ts,.js}',
  ],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  synchronize: true,
}