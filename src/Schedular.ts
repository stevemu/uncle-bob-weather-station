import { TemperatureSensor } from './TemperatureSensor.ts';

export abstract class Schedular {
  private timePassed = 0;

  constructor(private temperatureSensor: TemperatureSensor) {}

  protected tic() {
    this.timePassed += 500;
    if (this.timePassed % 2000 === 0) {
      const temp = this.temperatureSensor.read();
      this.temperatureSensor.notifyObservers(temp);
    }
  }
}
