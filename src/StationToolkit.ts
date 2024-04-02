import { BarometricPressureSensorImp } from './BarometricPressureSensorImp';
import { TemperatureSensorImp } from './TemperatureSensorImp';

export interface StationToolkit {
  makeTemperature(): TemperatureSensorImp;
  makeBarometricPressure(): BarometricPressureSensorImp;
}
