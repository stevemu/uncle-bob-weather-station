import { TemperatureSensor } from './TemperatureSensor.ts';

export class Nimbus1TemperatureSensor extends TemperatureSensor {
  read() {
    return Math.random() * 100;
  }
}
