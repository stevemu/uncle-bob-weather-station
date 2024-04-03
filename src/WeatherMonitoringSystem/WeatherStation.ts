import { Nimbus1Toolkit } from '../Nimbus1/Nimbus1Tookit';
import { Observer } from '../Observer';
import { AlarmClock } from './AlarmClock';
import { BarometricPressureSensor } from './BarometricPressureSensor';
import { TemperatureSensor } from './TemperatureSensor';

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
