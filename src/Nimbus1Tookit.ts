import { AlarmClockImp } from './AlarmClockImp.ts';
import { Nimbus1AlarmClockImp } from './Nimbus1AlarmClockImp.ts';
import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor.ts';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor.ts';
import { StationToolkit } from './StationToolkit.ts';

export class Nimbus1Toolkit implements StationToolkit {
  makeTemperature(): Nimbus1TemperatureSensor {
    return new Nimbus1TemperatureSensor();
  }
  makeBarometricPressure(): Nimbus1BarometricPressureSensor {
    return new Nimbus1BarometricPressureSensor();
  }
  makeAlarmClock(): AlarmClockImp {
    return new Nimbus1AlarmClockImp();
  }
}
