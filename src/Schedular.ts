import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export abstract class Schedular {
  private timePassed = 0;

  constructor(
    private temperatureSensor: TemperatureSensor,
    private barometricPressureSensor: BarometricPressureSensor,
  ) {}

  protected tic() {
    this.timePassed += 500;
    if (this.timePassed % 2000 === 0) {
      const temp = this.temperatureSensor.read();
      this.temperatureSensor.notifyObservers(temp);
    }
    if (this.timePassed % 4000 === 0) {
      const pressure = this.barometricPressureSensor.read();
      this.barometricPressureSensor.notifyObservers(pressure);
    }
  }
}
