import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';
import { BarometricPressureSensorImp } from './BarometricPressureSensorImp.ts';
import { Observer } from './Observer.ts';

export class BarometricPressureSensor {
  private observers: Observer[] = [];
  private lastPressure: number = 0;

  constructor(
    alarmClock: AlarmClock,
    private barometricPressureSensorImp: BarometricPressureSensorImp,
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
    const pressure = this.read();
    if (Math.abs(pressure - this.lastPressure) > 0.1) {
      this.notifyObservers(pressure);
    }
  }

  read(): number {
    return this.barometricPressureSensorImp.read();
  }
}
