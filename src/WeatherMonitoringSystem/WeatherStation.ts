import { Nimbus1Toolkit } from '../Nimbus1/Nimbus1Tookit.ts';
import { Observer } from '../Observer.ts';
import { AlarmClock } from './AlarmClock.ts';
import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export class WeatherStation {
  private temperatureSensor!: TemperatureSensor;
  private barometricPressureSensor!: BarometricPressureSensor;

  constructor() {
    const st = new Nimbus1Toolkit();

    const ac = new AlarmClock(st);

    this.temperatureSensor = new TemperatureSensor(ac, st);
    this.barometricPressureSensor = new BarometricPressureSensor(ac, st);
  }

  addTemperatureObserver(observer: Observer) {
    this.temperatureSensor.addObserver(observer);
  }

  addBarometricPressureObserver(observer: Observer) {
    this.barometricPressureSensor.addObserver(observer);
  }
}
