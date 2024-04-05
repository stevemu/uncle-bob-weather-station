import { Observer } from './Observer.ts';

export interface Observable {
  addObserver(observer: Observer): void;
  notifyObservers(temp: number): void;
}
