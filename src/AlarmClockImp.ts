import { ClockListener } from './ClockListener.ts';

export interface AlarmClockImp {
  register(listener: ClockListener): void;
}
