import { BarometricPressureSensorImp } from './BarometricPressureSensorImp.ts';

export class Nimbus1BarometricPressureSensor implements BarometricPressureSensorImp {
  read(): number {
    return Math.random() * 1000;
  }
}
