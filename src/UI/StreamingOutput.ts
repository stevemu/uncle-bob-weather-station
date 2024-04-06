import { WeatherStationComponent } from '../wmsComponent/WeatherStationComponent.ts';
import { BarometricPressureObserver } from './BarometricPressureObserver.ts';
import { BarometricPressureTrendObserver } from './BarometricPressureTrendObserver.ts';
import { MonitoringScreen } from './MonitoringScreen.ts';
import { TemperatureObserver } from './TemperatureObserver.ts';

export class StreamingOutput implements MonitoringScreen {
  constructor(ws: WeatherStationComponent) {
    const temperatureObserver = new TemperatureObserver(this);
    ws.addTemperatureObserver(temperatureObserver);
    const barometricPressureObserver = new BarometricPressureObserver(this);
    const barometricPressureTrendObserver = new BarometricPressureTrendObserver(this);
    ws.addBarometricPressureObserver(barometricPressureObserver);
    ws.addBarometricPressureObserver(barometricPressureTrendObserver);
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
