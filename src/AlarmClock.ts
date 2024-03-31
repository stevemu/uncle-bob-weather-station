import { AlarmListener } from './AlarmListener.ts';

export interface AlarmClock {
  wakeEvery(interval: number, alarmListener: AlarmListener): void;
}
