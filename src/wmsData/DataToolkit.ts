import { StationToolkit } from '../API/StationToolkit.ts';
import { HiLoData } from './HiLoData.ts';

export interface DataToolkit {
  getTempHiLoData(st: StationToolkit, date: Date, init: number, initTime: Date): HiLoData;
}
