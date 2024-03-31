import { AlarmListener } from './AlarmListener';

export interface AlarmClock {
  wakeEvery(interval: number, alarmListener: AlarmListener): void;
}
