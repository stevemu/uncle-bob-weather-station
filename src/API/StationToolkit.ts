import { AlarmClockImp } from './AlarmClockImp.ts';
import { BarometricPressureSensorImp } from './BarometricPressureSensorImp.ts';
import { TemperatureSensorImp } from './TemperatureSensorImp.ts';

export interface StationToolkit {
  makeTemperature(): TemperatureSensorImp;
  makeBarometricPressure(): BarometricPressureSensorImp;
  makeAlarmClock(): AlarmClockImp;
}
