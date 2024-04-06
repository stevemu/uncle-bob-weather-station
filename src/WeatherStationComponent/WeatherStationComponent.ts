import { Observer } from './Observer.ts';

export interface WeatherStationComponent {
  addTemperatureObserver(observer: Observer): void;
  addBarometricPressureObserver(observer: Observer): void;
}
