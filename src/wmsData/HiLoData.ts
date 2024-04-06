export interface HiLoData {
  currentReading(val: number, time: Date): boolean;
  newDay(initial: number, time: Date): void;
}
