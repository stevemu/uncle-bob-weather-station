import { AlarmClock } from './AlarmClock.ts';
import { AlarmListener } from './AlarmListener.ts';

export class AlarmClockImp implements AlarmClock {
  wakeEvery(interval: number, alarmListener: AlarmListener) {
    setInterval(() => {
      alarmListener.wakeUp();
    }, interval);
  }
}
