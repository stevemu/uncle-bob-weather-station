import { BarometricPressureObserver } from './UI/BarometricPressureObserver.ts';
import { BarometricPressureTrendObserver } from './UI/BarometricPressureTrendObserver.ts';
import { StreamingOutput } from './UI/StreamingOutput.ts';
import { TemperatureObserver } from './UI/TemperatureObserver.ts';
import { WeatherStation } from './WeatherMonitoringSystem/WeatherStation.ts';

const so = new StreamingOutput();

const temperatureObserver = new TemperatureObserver(so);
const barometricPressureObserver = new BarometricPressureObserver(so);
const barometricPressureTrendObserver = new BarometricPressureTrendObserver(so);

const ws = new WeatherStation();
ws.addTemperatureObserver(temperatureObserver);
ws.addBarometricPressureObserver(barometricPressureObserver);
ws.addBarometricPressureObserver(barometricPressureTrendObserver);
