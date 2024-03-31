import { Observer } from './Observer';

export class BarometricPressureSensor {
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
