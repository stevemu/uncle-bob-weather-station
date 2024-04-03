import { MonitoringScreen } from './MonitoringScreen.ts';
import { Observer } from '../WeatherMonitoringSystem/Observer.ts';

export class TemperatureObserver implements Observer {
  constructor(private monitoringScreen: MonitoringScreen) {}

  update(val: number): void {
    this.monitoringScreen.displayTemperature(val);
  }
}
