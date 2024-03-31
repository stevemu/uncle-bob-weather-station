import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';
import { Observable } from './Observable.ts';
import { Observer } from './Observer.ts';

export class TemperatureSensor implements Observable {
  private observers: Observer[] = [];

  constructor(alarmClock: AlarmClock) {
    alarmClock.wakeEvery(1000, {
      wakeUp: () => {
        const temp = this.read();
        this.notifyObservers(temp);
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
