import { PersistentImp } from '../API/PersistentImp';
import { StationToolkit } from '../API/StationToolkit';
import { HiLoData } from '../wmsdata/HiLoData';
import { HiLoDataImp } from '../wmsDataImp/HiLoDataImp';

export class HiLoDataProxy implements HiLoData {
  private pi: PersistentImp;
  private storageKey: string;
  private imp: HiLoDataImp;

  constructor(
    st: StationToolkit,
    private type: string,
    date: Date,
    init: number,
    initTime: Date,
  ) {
    this.pi = st.makePersistent();
    this.storageKey = this.calculateStorageKey(date);

    try {
      const storedData = this.pi.retrieve(this.storageKey);
      this.imp = new HiLoDataImp(
        storedData.highValue,
        storedData.lowValue,
        storedData.highTime,
        storedData.lowTime,
      );
      this.currentReading(init, initTime);
    } catch (error) {
      this.imp = new HiLoDataImp(init, init, initTime, initTime);
    }
  }

  calculateStorageKey(date: Date): string {
    return `${this.type}-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  currentReading(current: number, time: Date): boolean {
    const changed = this.imp.currentReading(current, time);
    if (changed) {
      this.store();
    }
    return changed;
  }

  newDay(initial: number, time: Date): void {
    this.store();
    this.imp.newDay(initial, time);
    this.storageKey = this.calculateStorageKey(new Date());
    this.store();
  }

  store() {
    try {
      this.pi.store(this.storageKey, {
        highValue: this.imp.highValue,
        lowValue: this.imp.lowValue,
        highTime: this.imp.highTime,
        lowTime: this.imp.lowTime,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
