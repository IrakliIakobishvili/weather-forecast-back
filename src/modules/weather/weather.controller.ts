import {
    Controller,
    Get,
    Param
} from '@nestjs/common';
import { WeatherService } from './services/weather.service';
  
  @Controller('weather')
  export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get(':city') 
    getWeatherForecast(@Param('city') city: string) {
        return this.weatherService.getWeatherForecast(city);
    }
}