import { AlarmListener } from './AlarmListener.ts';
import { ClockListener } from './ClockListener.ts';
import { StationToolkit } from './StationToolkit.ts';

export class AlarmClock implements ClockListener {
  private ticPassed: number = 0;
  private listeners: { l: AlarmListener; i: number }[] = [];

  constructor(st: StationToolkit) {
    const alarmClockImp = st.makeAlarmClock();
    alarmClockImp.register(this);
  }

  wakeEvery(interval: number, alarmListener: AlarmListener) {
    this.listeners.push({
      l: alarmListener,
      i: interval,
    });
  }

  tic(): void {
    this.ticPassed++;

    this.listeners.forEach((listener) => {
      if (this.ticPassed % listener.i === 0) {
        listener.l.wakeUp();
      }
    });
  }
}
