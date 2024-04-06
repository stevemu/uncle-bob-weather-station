import { Nimbus1Toolkit } from './Nimbus1/Nimbus1Tookit.ts';
import { StreamingOutput } from './UI/StreamingOutput.ts';
import { PersistentScope } from './persistence/PersistentScope.ts';
import { WeatherStation } from './wms/WeatherStation.ts';

PersistentScope.init();
const st = new Nimbus1Toolkit();
const ws = new WeatherStation(st);
new StreamingOutput(ws);
