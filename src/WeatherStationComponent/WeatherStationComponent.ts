import { Observer } from '../WeatherMonitoringSystem/Observer';

export interface WeatherStationComponent {
  addTemperatureObserver(observer: Observer): void;
  addBarometricPressureObserver(observer: Observer): void;
}
