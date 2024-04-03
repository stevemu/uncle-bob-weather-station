import { Observer } from './Observer';

export interface WeatherStationComponent {
  addTemperatureObserver(observer: Observer): void;
  addBarometricPressureObserver(observer: Observer): void;
}
