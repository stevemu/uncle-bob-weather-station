import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor';
import { StationToolkit } from './StationToolkit';

export class Nimbus1Toolkit implements StationToolkit {
  makeTemperature(): Nimbus1TemperatureSensor {
    return new Nimbus1TemperatureSensor();
  }
  makeBarometricPressure(): Nimbus1BarometricPressureSensor {
    return new Nimbus1BarometricPressureSensor();
  }
}
