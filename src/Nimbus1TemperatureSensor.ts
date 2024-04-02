import { TemperatureSensorImp } from './TemperatureSensorImp.ts';

export class Nimbus1TemperatureSensor implements TemperatureSensorImp {
  read(): number {
    return Math.random() * 100;
  }
}
