import { MonitoringScreen } from './MonitoringScreen.ts';

export class StreamingOutput implements MonitoringScreen {
  constructor() {}

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
