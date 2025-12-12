import * as Tone from 'tone';


//effects. effects are cool!
const reverb = new Tone.Reverb(5).toDestination();
const delay = new Tone.FeedbackDelay('4n', 0.75).connect(reverb);

// const player = new Tone.Player();
// player.connect(delay);
// player.connect(reverb);

//synths. eventually these will be synth-making functions i bet
const synth = new Tone.Synth().connect(delay);
// const loop = new Tone.Loop((time) => {
//   synth.triggerAttackRelease(440, '8n', time);
// }, '1n').start(0);

// const seq = new Tone.Sequence((time, note) => {
//     synth.triggerAttackRelease(note, 0.1, time);
//     // subdivisions are given as subarrays
// }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);

// const part = new Tone.Part(((time, note) => {
//     // the notes given as the second element in the array
//     // will be passed in as the second argument
//     synth.triggerAttackRelease(note, "8n", time);
// }), [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]).start(0);
// part.loop = true;
//entry point for main
const startTone = async () => { 
  await Tone.getTransport().start();
}

const partMaker = (freqList) => {
  const newPart = new Tone.Part((time, note) => {
    synth.triggerAttackRelease(note, "8n", time);
  }, freqList).start(Tone.now());
  // newPart.loop = true;
}
export { startTone, partMaker };
