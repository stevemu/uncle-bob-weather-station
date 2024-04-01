import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';

export class Nimbus1AlarmClock implements AlarmClock {
  wakeEvery(interval: number, alarmListener: AlarmListener) {
    setInterval(() => {
      alarmListener.wakeUp();
    }, interval);
  }
}
