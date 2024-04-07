import { StationToolkit } from '../API/StationToolkit.ts';
import { DataToolkit } from '../wmsData/DataToolkit.ts';
import { HiLoData } from '../wmsData/HiLoData.ts';
import { HiLoDataProxy } from './HiLoDataProxy.ts';

export class DataToolkitImp implements DataToolkit {
  getTempHiLoData(st: StationToolkit, date: Date, init: number, initTime: Date): HiLoData {
    return new HiLoDataProxy(st, 'temp', date, init, initTime);
  }
}
