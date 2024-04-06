import { AlarmClockImp } from '../API/AlarmClockImp.ts';
import { Nimbus1AlarmClockImp } from './Nimbus1AlarmClockImp.ts';
import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor.ts';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor.ts';
import { StationToolkit } from '../API/StationToolkit.ts';
import { PersistentImp } from '../API/PersistentImp.ts';
import { Nimbus1PersistentImp } from './Nimbus1PersistentImp.ts';

export class Nimbus1Toolkit implements StationToolkit {
  makePersistent(): PersistentImp {
    return new Nimbus1PersistentImp();
  }
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
