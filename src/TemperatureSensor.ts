import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';
import { Observable } from './Observable.ts';
import { Observer } from './Observer.ts';
import { TemperatureSensorImp } from './TemperatureSensorImp.ts';

export class TemperatureSensor implements Observable {
  private observers: Observer[] = [];
  private lastTemp: number = 0;

  constructor(
    alarmClock: AlarmClock,
    private sensorImp: TemperatureSensorImp,
  ) {
    alarmClock.wakeEvery(1000, {
      wakeUp: () => {
        this.check();
      },
    } as AlarmListener);
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(temp: number): void {
    this.observers.forEach((observer) => observer.update(temp));
  }

  check(): void {
    const temp = this.read();
    if (Math.abs(temp - this.lastTemp) > 0.1) {
      this.lastTemp = temp;
      this.notifyObservers(temp);
    }
  }

  read(): number {
    return this.sensorImp.read();
  }
}
