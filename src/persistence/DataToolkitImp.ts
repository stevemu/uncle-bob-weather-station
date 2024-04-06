import { DataToolkit } from '../wmsData/DataToolkit';
import { HiLoData } from '../wmsData/HiLoData';
import { HiLoDataProxy } from './HiLoDataProxy';

export class DataToolkitImp implements DataToolkit {
  getTempHiLoData(): HiLoData {
    return new HiLoDataProxy('Temp');
  }
}
