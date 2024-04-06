export interface PersistentData {
  highValue: number;
  lowValue: number;
  highTime: Date;
  lowTime: Date;
}

export interface PersistentImp {
  store(name: string, data: PersistentData): void;
  retrieve(name: string): PersistentData;
}
