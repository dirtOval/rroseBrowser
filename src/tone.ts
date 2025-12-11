import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
const loop = new Tone.Loop((time) => {
  synth.triggerAttackRelease('C5', '16n', time);
}, '8n').start(0);

const startTone = async () => { 
  await Tone.getTransport().start();
}

export { startTone };
