import { AlarmClockImp } from './AlarmClockImp.ts';
import { ClockListener } from './ClockListener.ts';

export class Nimbus1AlarmClockImp implements AlarmClockImp {
  private listeners: ClockListener[] = [];

  constructor() {
    setInterval(() => {
      this.listeners.forEach((listener) => {
        listener.tic();
      });
    }, 1000);
  }

  register(listener: ClockListener): void {
    this.listeners.push(listener);
  }
}
