import { MonitoringScreen } from './MonitoringScreen.ts';
import { Schedular } from './Schedular.ts';

export class Nimbus1Schedular extends Schedular {
  private interval!: NodeJS.Timeout;

  constructor(monitoringScreen: MonitoringScreen) {
    super(monitoringScreen);
  }

  start() {
    this.interval = setInterval(() => {
      this.tic();
    }, 500);
  }
}
