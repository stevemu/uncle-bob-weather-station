import { DataToolkit } from '../wmsData/DataToolkit.ts';
import { HiLoData } from '../wmsData/HiLoData.ts';
import { HiLoDataProxy } from './HiLoDataProxy.ts';

export class DataToolkitImp implements DataToolkit {
  getTempHiLoData(): HiLoData {
    return new HiLoDataProxy('Temp');
  }
}
