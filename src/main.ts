import { Nimbus1Schedular } from './Nimbus1Schedular.ts';
import { StreamingOutput } from './StreamingOutput.ts';

const streamingOutput = new StreamingOutput();
const nimbus1Schedular = new Nimbus1Schedular(streamingOutput);
nimbus1Schedular.start();
