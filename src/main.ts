import { StreamingOutput } from './UI/StreamingOutput.ts';
import { WeatherStation } from './WeatherMonitoringSystem/WeatherStation.ts';

const ws = new WeatherStation();
new StreamingOutput(ws);
