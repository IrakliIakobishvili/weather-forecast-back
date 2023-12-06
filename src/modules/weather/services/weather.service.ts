import { Injectable } from '@nestjs/common';
import { forecast } from './forecast';
const sdk = require('api')('@climacell-docs/v4.0.1#1fjyyjlnwykur2')

@Injectable()
export class WeatherService {
  private apiKey = process.env.PRIVATE_API_KEY;

  constructor() {
    sdk.auth(this.apiKey);
  }

  async getWeatherForecast(city: string) {
    try {
      const response = await sdk.weatherForecast({ city });
      return response.data;
    } catch (error) {
      // throw new Error(`Error fetching weather forecast: ${error.message}`);
      return forecast;
    }
  }
}
