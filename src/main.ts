import { AlarmClockImp } from './AlarmClockImp.ts';
import { Nimbus1BarometricPressureSensor } from './Nimbus1BarometricPressureSensor.ts';
import { Nimbus1TemperatureSensor } from './Nimbus1TemperatureSensor.ts';
import { StreamingOutput } from './StreamingOutput.ts';

const alarmClock = new AlarmClockImp();

const temperatureSensor = new Nimbus1TemperatureSensor(alarmClock);
const barometricPressureSensor = new Nimbus1BarometricPressureSensor(alarmClock);

new StreamingOutput(temperatureSensor, barometricPressureSensor);
