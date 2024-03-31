import { BarometricPressureObserver } from './BarometricPressureObserver.ts';
import { BarometricPressureTrendObserver } from './BarometricPressureTrendObserver.ts';
import { MonitoringScreen } from './MonitoringScreen.ts';
import { Observable } from './Observable.ts';
import { TemperatureObserver } from './TemperatureObserver.ts';

export class StreamingOutput implements MonitoringScreen {
  constructor(
    private temperatureObservable: Observable,
    private barometricPressureObservable: Observable,
  ) {
    const temperatureObserver = new TemperatureObserver(this);
    this.temperatureObservable.addObserver(temperatureObserver);
    const barometricPressureObserver = new BarometricPressureObserver(this);
    this.barometricPressureObservable.addObserver(barometricPressureObserver);
    const barometricPressureTrendObserver = new BarometricPressureTrendObserver(this);
    this.barometricPressureObservable.addObserver(barometricPressureTrendObserver);
  }

  displayPressureTrend(trend: number): void {
    console.log(`Pressure trend: ${trend}`);
  }

  displayTemperature(temperature: number) {
    console.log(`Temperature: ${temperature}`);
  }

  displayPressure(pressure: number) {
    console.log(`Pressure: ${pressure}`);
  }
}
