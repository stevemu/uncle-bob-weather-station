import { BarometricPressureSensor } from './BarometricPressureSensor.ts';
import { Nimbus1Schedular } from './Nimbus1Schedular.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const temperatureSensor = new TemperatureSensor();
const barometricPressureSensor = new BarometricPressureSensor();

new StreamingOutput(temperatureSensor, barometricPressureSensor);

const nimbus1Schedular = new Nimbus1Schedular(temperatureSensor, barometricPressureSensor);
nimbus1Schedular.start();
