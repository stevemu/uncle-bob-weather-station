import { WmsDataScope } from '../wmsData/WmsDataScope.ts';
import { DataToolkitImp } from './DataToolkitImp.ts';

export class PersistentScope {
  public static init() {
    WmsDataScope.dataToolkit = new DataToolkitImp();
  }
}
