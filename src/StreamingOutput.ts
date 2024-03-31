import { MonitoringScreen } from './MonitoringScreen';

export class StreamingOutput implements MonitoringScreen {
  displayTemperature(temperature: number) {
    console.log(`Temperature: ${temperature}`);
  }

  displayPressure(pressure: number) {
    console.log(`Pressure: ${pressure}`);
  }
}
