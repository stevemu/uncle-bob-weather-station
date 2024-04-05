export interface PersistentImp {
  store(name: string, jsonString: string): void;
  retrieve(name: string): string;
}
