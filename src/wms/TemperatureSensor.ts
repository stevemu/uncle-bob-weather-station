import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';
import { Observable } from '../wmsComponent/Observable.ts';
import { Observer } from '../wmsComponent/Observer.ts';
import { StationToolkit } from '../API/StationToolkit.ts';
import { TemperatureSensorImp } from '../API/TemperatureSensorImp.ts';

export class TemperatureSensor implements Observable {
  private observers: Observer[] = [];
  private lastTemp: number = 0;
  private sensorImp!: TemperatureSensorImp;

  constructor(alarmClock: AlarmClock, st: StationToolkit) {
    alarmClock.wakeEvery(1, {
      wakeUp: () => {
        this.check();
      },
    } as AlarmListener);
    this.sensorImp = st.makeTemperature();
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
