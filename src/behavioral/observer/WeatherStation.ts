/**
 * The Subject interface declares a set of methods for managing subscribers.
 * In this example, it represents the weather station that other components can observe.
 */
export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

/**
 * The Observer interface declares the update method, used by subjects.
 * In this example, it represents the weather displays that need to be updated.
 */
export interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

/**
 * WeatherStation implements the Subject interface and maintains a list of observers.
 * It notifies all observers when weather measurements change.
 */
export class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
} 