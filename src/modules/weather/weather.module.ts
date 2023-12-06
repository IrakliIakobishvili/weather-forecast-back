import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './services/weather.service';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}