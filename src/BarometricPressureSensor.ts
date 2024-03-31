import { AlarmClock } from './AlarmClock';
import { AlarmListener } from './AlarmListener';
import { Observer } from './Observer';

export class BarometricPressureSensor {
  private observers: Observer[] = [];

  constructor(alarmClock: AlarmClock) {
    alarmClock.wakeEvery(1000, {
      wakeUp: () => {
        const pressure = this.read();
        this.notifyObservers(pressure);
      },
    } as AlarmListener);
  }

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
