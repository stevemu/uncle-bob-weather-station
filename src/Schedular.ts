import { MonitoringScreen } from './MonitoringScreen.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export abstract class Schedular {
  private timePassed = 0;

  constructor(
    private monitoringScreen: MonitoringScreen,
    private temperatureSensor: TemperatureSensor,
  ) {}

  protected tic() {
    this.timePassed += 500;
    if (this.timePassed % 2000 === 0) {
      const temperature = this.temperatureSensor.read();
      this.monitoringScreen.displayTemperature(temperature);
    }
  }
}
