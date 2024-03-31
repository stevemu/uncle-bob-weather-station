import { MonitoringScreen } from './MonitoringScreen.ts';
import { Observable } from './Observable.ts';
import { TemperatureObserver } from './TemperatureObserver.ts';

export class StreamingOutput implements MonitoringScreen {
  constructor(private observable: Observable) {
    const temperatureObserver = new TemperatureObserver(this);
    this.observable.addObserver(temperatureObserver);
  }

  displayTemperature(temperature: number) {
    console.log(`Temperature: ${temperature}`);
  }

  displayPressure(pressure: number) {
    console.log(`Pressure: ${pressure}`);
  }
}
