import { Observer } from '../wmsComponent/Observer.ts';
import { AlarmClock } from './AlarmClock.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';
import { WmsDataScope } from '../wmsData/WmsDataScope.ts';
import { HiLoData } from '../wmsData/HiLoData.ts';
import { StationToolkit } from '../API/StationToolkit.ts';

export class TemperatureHiLo implements Observer {
  private hiLoData: HiLoData;

  constructor(st: StationToolkit, alarmClock: AlarmClock, temperatureSensor: TemperatureSensor) {
    this.hiLoData = WmsDataScope.dataToolkit.getTempHiLoData(
      st,
      new Date(),
      temperatureSensor.read(),
      new Date(),
    );
    alarmClock.wakeEveryDay({
      wakeUp: () => {
        this.hiLoData.newDay(temperatureSensor.read(), new Date());
      },
    });
    temperatureSensor.addObserver(this);
  }

  update(val: number): void {
    this.hiLoData.currentReading(val, new Date());
  }
}
