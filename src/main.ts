import { AlarmClockImp } from './AlarmClockImp.ts';
import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const alarmClock = new AlarmClockImp();

const temperatureSensor = new TemperatureSensor(alarmClock);
const barometricPressureSensor = new BarometricPressureSensor(alarmClock);

new StreamingOutput(temperatureSensor, barometricPressureSensor);
