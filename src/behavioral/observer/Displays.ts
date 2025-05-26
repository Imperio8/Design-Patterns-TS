import { Observer } from "./WeatherStation";

/**
 * CurrentConditionsDisplay shows the current weather conditions.
 * It implements the Observer interface to receive weather updates.
 */
export class CurrentConditionsDisplay implements Observer {
  private temperature: number = 0;
  private humidity: number = 0;

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log("Current conditions:", this.temperature, "F degrees and", this.humidity, "% humidity");
  }
}

/**
 * StatisticsDisplay shows weather statistics.
 * It implements the Observer interface to receive weather updates.
 */
export class StatisticsDisplay implements Observer {
  private temperatures: number[] = [];
  private humidities: number[] = [];
  private pressures: number[] = [];

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperatures.push(temperature);
    this.humidities.push(humidity);
    this.pressures.push(pressure);
    this.display();
  }

  public display(): void {
    const avgTemp = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    const avgHumidity = this.humidities.reduce((a, b) => a + b, 0) / this.humidities.length;
    const avgPressure = this.pressures.reduce((a, b) => a + b, 0) / this.pressures.length;

    console.log("Avg/Max/Min temperature =", avgTemp.toFixed(1), "F");
    console.log("Avg/Max/Min humidity =", avgHumidity.toFixed(1), "%");
    console.log("Avg/Max/Min pressure =", avgPressure.toFixed(1), "hPa");
  }
}

/**
 * ForecastDisplay shows weather forecast.
 * It implements the Observer interface to receive weather updates.
 */
export class ForecastDisplay implements Observer {
  private currentPressure: number = 29.92;
  private lastPressure: number = 0;

  public update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  public display(): void {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure === this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
} 