import { Nimbus1AlarmClock } from './Nimbus1AlarmClock.ts';
import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor.ts';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const alarmClock = new Nimbus1AlarmClock();

const nimbus1TemperatureSensor = new Nimbus1TemperatureSensor();
const temperatureSensor = new TemperatureSensor(alarmClock, nimbus1TemperatureSensor);
const barometricPressureSensor = new Nimbus1BarometricPressureSensor(alarmClock);

new StreamingOutput(temperatureSensor, barometricPressureSensor);
