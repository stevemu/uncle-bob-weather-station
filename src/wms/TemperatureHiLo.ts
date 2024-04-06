import { Observer } from '../WeatherStationComponent/Observer.ts';
import { AlarmClock } from './AlarmClock.ts';
import { TemperatureSensor } from './TemperatureSensor.ts';
import { WmsDataScope } from '../wmsData/WmsDataScope.ts';
import { HiLoData } from '../wmsData/HiLoData.ts';

export class TemperatureHiLo implements Observer {
  private hiLoData: HiLoData;

  constructor(alarmClock: AlarmClock, temperatureSensor: TemperatureSensor) {
    this.hiLoData = WmsDataScope.dataToolkit.getTempHiLoData();
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
