import { PersistentImp, PersistentData } from '../API/PersistentImp';

export class Nimbus1PersistentImp implements PersistentImp {
  private data: Record<string, PersistentData> = {};

  store(name: string, data: PersistentData): void {
    this.data[name] = data;
  }

  retrieve(name: string): PersistentData {
    if (this.data[name] === undefined) {
      throw new Error('No data found');
    }
    return this.data[name];
  }
}
