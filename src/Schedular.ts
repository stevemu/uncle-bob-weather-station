import { MonitoringScreen } from './MonitoringScreen.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export abstract class Schedular {
  private timePassed = 0;
  private temperatureSensor = new TemperatureSensor();

  constructor(private monitoringScreen: MonitoringScreen) {}

  protected tic() {
    this.timePassed += 500;
    if (this.timePassed % 2000 === 0) {
      const temperature = this.temperatureSensor.read();
      this.monitoringScreen.displayTemperature(temperature);
    }
  }
}
