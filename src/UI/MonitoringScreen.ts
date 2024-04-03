export interface MonitoringScreen {
  displayTemperature(temperature: number): void;
  displayPressure(pressure: number): void;
  displayPressureTrend(trend: number): void;
}
