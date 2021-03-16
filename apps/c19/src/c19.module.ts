import { Module } from '@nestjs/common';
import { RegionalModule } from './regional/regional.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/test.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    RegionalModule,
  ],
})
export class C19Module {}
