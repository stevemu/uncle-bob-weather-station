import { Observer } from '../WeatherStationComponent/Observer.ts';
import { AlarmClock } from './AlarmClock.ts';
import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';
import { WeatherStationComponent } from '../WeatherStationComponent/WeatherStationComponent.ts';
import { StationToolkit } from '../API/StationToolkit.ts';

export class WeatherStation implements WeatherStationComponent {
  private temperatureSensor!: TemperatureSensor;
  private barometricPressureSensor!: BarometricPressureSensor;

  constructor(st: StationToolkit) {
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
