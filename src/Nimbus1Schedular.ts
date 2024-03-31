import { MonitoringScreen } from './MonitoringScreen.ts';
import { Schedular } from './Schedular.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

export class Nimbus1Schedular extends Schedular {
  private interval!: NodeJS.Timeout;

  constructor(monitoringScreen: MonitoringScreen, temperatureSensor: TemperatureSensor) {
    super(monitoringScreen, temperatureSensor);
  }

  start() {
    this.interval = setInterval(() => {
      this.tic();
    }, 500);
  }
}
