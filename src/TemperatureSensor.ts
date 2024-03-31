import { Observable } from './Observable.ts';
import { Observer } from './Observer.ts';

export class TemperatureSensor implements Observable {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(temp: number): void {
    this.observers.forEach((observer) => observer.update(temp));
  }

  read() {
    return Math.random() * 100;
  }
}
