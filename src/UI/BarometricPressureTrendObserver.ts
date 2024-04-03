import { MonitoringScreen } from './MonitoringScreen.ts';
import { Observer } from '../Observer.ts';

export class BarometricPressureTrendObserver implements Observer {
  private lastPressure = 0;

  constructor(private monitoringScreen: MonitoringScreen) {}

  update(val: number): void {
    const pressureDiff = val - this.lastPressure;
    this.monitoringScreen.displayPressureTrend(pressureDiff);

    this.lastPressure = val;
  }
}
