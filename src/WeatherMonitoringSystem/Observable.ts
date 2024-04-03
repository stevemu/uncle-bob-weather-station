import { Observer } from '../WeatherStationComponent/Observer.ts';

export interface Observable {
  addObserver(observer: Observer): void;
  notifyObservers(temp: number): void;
}
