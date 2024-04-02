import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { Nimbus1AlarmClock } from './Nimbus1AlarmClock.ts';
import { Nimbus1Toolkit } from './Nimbus1Tookit.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const ac = new Nimbus1AlarmClock();

const st = new Nimbus1Toolkit();

const ts = new TemperatureSensor(ac, st);
const bps = new BarometricPressureSensor(ac, st);

new StreamingOutput(ts, bps);
