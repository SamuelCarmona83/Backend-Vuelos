import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';
import { Vuelo } from './vuelos/vuelo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Vuelo],
    synchronize: true,
  }) ,VuelosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
