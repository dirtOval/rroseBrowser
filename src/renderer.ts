const urlButton = document.getElementById('url-button');
const urlInput = document.getElementById('url-input');
const responseP = document.getElementById('response');
const toneButton = document.getElementById('tone-button');

//deirdre: this isn't working because you need a bundler to wrap npm modules into the browser.
//try out vite.
//const Tone = window.electronAPI.Tone;

urlButton.addEventListener('click', async () => {
  const url = urlInput.value;
  const response = await window.ipcRenderer.urlSubmit(url);
  responseP.innerText = response;

})

//COMMENTED OUT FOR NOW
// const synth = new Tone.Synth().toDestination();
// const loop = new Tone.Loop((time) => {
//   synth.triggerAttackRelease('C2', '8n', time);
// }, '4n').start(0);
//
// toneButton.addEventListener('click', async () => {
//   await Tone.getTransport().start();
// })

//IS THIS FILE SUPERFLUOUS RN? IT SHOULD NOT BE. WE NEED SEPARATION.
//or rather, if not this file we probably shouldn't be doing everything on main.ts.
//keep it for now, but i could see getting rid of this thing if i don't find a use for it
