import { WmsDataScope } from '../wmsData/WmsDataScope';
import { DataToolkitImp } from './DataToolkitImp';

export class PersistentScope {
  public static init() {
    WmsDataScope.dataToolkit = new DataToolkitImp();
  }
}
