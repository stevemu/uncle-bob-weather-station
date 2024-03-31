import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { Schedular } from './Schedular.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export class Nimbus1Schedular extends Schedular {
  private interval!: NodeJS.Timeout;

  constructor(
    temperatureSensor: TemperatureSensor,
    barometricPressureSensor: BarometricPressureSensor,
  ) {
    super(temperatureSensor, barometricPressureSensor);
  }

  start() {
    this.interval = setInterval(() => {
      this.tic();
    }, 500);
  }
}
