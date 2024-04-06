import { DataToolkit } from '../wmsdata1/DataToolkit';
import { HiLoData } from '../wmsdata1/HiLoData';
import { HiLoDataProxy } from './HiLoDataProxy';

export class DataToolkitImp implements DataToolkit {
  getTempHiLoData(): HiLoData {
    return new HiLoDataProxy('Temp');
  }
}
