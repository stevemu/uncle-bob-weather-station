import { AlarmClock } from './AlarmClock.ts';
import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { Nimbus1Toolkit } from './Nimbus1Tookit.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const st = new Nimbus1Toolkit();

const ac = new AlarmClock(st);

const ts = new TemperatureSensor(ac, st);
const bps = new BarometricPressureSensor(ac, st);

new StreamingOutput(ts, bps);
