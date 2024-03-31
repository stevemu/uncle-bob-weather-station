import { Nimbus1Schedular } from './Nimbus1Schedular.ts';
import { StreamingOutput } from './StreamingOutput.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';

const temperatureSensor = new TemperatureSensor();
new StreamingOutput(temperatureSensor);

const nimbus1Schedular = new Nimbus1Schedular(temperatureSensor);
nimbus1Schedular.start();
