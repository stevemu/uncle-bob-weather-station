import { BarometricPressureSensor } from './BarometricPressureSensor';

export class Nimbus1BarometricPressureSensor extends BarometricPressureSensor {
  read() {
    return Math.random() * 100;
  }
}
