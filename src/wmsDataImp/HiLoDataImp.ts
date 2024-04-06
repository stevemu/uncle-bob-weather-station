import { HiLoData } from '../wmsData/HiLoData.ts';

export class HiLoDataImp implements HiLoData {
  constructor(
    public highValue: number,
    public lowValue: number,
    public highTime: Date,
    public lowTime: Date,
  ) {}

  currentReading(current: number, time: Date): boolean {
    let changed = false;
    if (current > this.highValue) {
      this.highValue = current;
      this.highTime = time;
      changed = true;
    }
    if (current < this.lowValue) {
      this.lowValue = current;
      this.lowTime = time;
      changed = true;
    }
    return changed;
  }

  newDay(initial: number, time: Date): void {
    this.highValue = this.lowValue = initial;
    this.highTime = this.lowTime = time;
  }
}
