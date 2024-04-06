import { Observer } from '../WeatherStationComponent/Observer';
import { AlarmClock } from './AlarmClock';
import { TemperatureSensor } from './TemperatureSensor';
import { WmsDataScope } from '../wmsdata/WmsDataScope';
import { HiLoData } from '../wmsdata/HiLoData';

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
