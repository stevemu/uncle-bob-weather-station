import { Nimbus1Toolkit } from './Nimbus1/Nimbus1Tookit.ts';
import { StreamingOutput } from './UI/StreamingOutput.ts';
import { WeatherStation } from './WeatherMonitoringSystem/WeatherStation.ts';

const st = new Nimbus1Toolkit();
const ws = new WeatherStation(st);
new StreamingOutput(ws);
