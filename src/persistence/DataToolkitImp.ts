import { DataToolkit } from '../wmsdata/DataToolkit';
import { HiLoData } from '../wmsdata/HiLoData';
import { HiLoDataProxy } from './HiLoDataProxy';

export class DataToolkitImp implements DataToolkit {
  getTempHiLoData(): HiLoData {
    return new HiLoDataProxy('Temp');
  }
}
