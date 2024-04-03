import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';
import { BarometricPressureSensorImp } from '../API/BarometricPressureSensorImp.ts';
import { Observer } from '../Observer.ts';
import { StationToolkit } from '../API/StationToolkit.ts';

export class BarometricPressureSensor {
  private observers: Observer[] = [];
  private lastPressure: number = 0;
  private sensorImp!: BarometricPressureSensorImp;

  constructor(alarmClock: AlarmClock, st: StationToolkit) {
    alarmClock.wakeEvery(1, {
      wakeUp: () => {
        this.check();
      },
    } as AlarmListener);
    this.sensorImp = st.makeBarometricPressure();
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(temp: number): void {
    this.observers.forEach((observer) => observer.update(temp));
  }

  check(): void {
    const pressure = this.read();
    if (pressure !== this.lastPressure) {
      this.notifyObservers(pressure);
    }
    this.lastPressure = pressure;
  }

  read(): number {
    return this.sensorImp.read();
  }
}
