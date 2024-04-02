import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { Nimbus1AlarmClock } from './Nimbus1AlarmClock.ts';
import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor.ts';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const ac = new Nimbus1AlarmClock();

const ts = new TemperatureSensor(ac, new Nimbus1TemperatureSensor());
const bps = new BarometricPressureSensor(ac, new Nimbus1BarometricPressureSensor());

new StreamingOutput(ts, bps);
