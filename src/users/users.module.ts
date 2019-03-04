import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { City } from './city.entity';
import { Country } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, City, Country])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
