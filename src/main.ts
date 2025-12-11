import './style.css'
// import * as Tone from 'tone';
import {startTone} from './tone';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Time To Browse The World Wide Web!</h1>
    <input type="text" id="url-input" />
    <label for="url-input">Input URL</label>
    <button id='url-button' type="button">Go</button>
    <p>response:</p>
    <p id="response"></p>
    <button id="tone-button" type="button">Play</button>
  </div>
`

const urlButton = document.getElementById('url-button');
const urlInput = document.getElementById('url-input');
const responseP = document.getElementById('response');
const toneButton = document.getElementById('tone-button');

//deirdre: this isn't working because you need a bundler to wrap npm modules into the browser.
//try out vite.

urlButton.addEventListener('click', async () => {
  const url = urlInput.value;
  const response = await window.ipcRenderer.urlSubmit(url);
  responseP.innerText = response;

})

// const synth = new Tone.Synth().toDestination();
// const loop = new Tone.Loop((time) => {
//   synth.triggerAttackRelease('C5', '16n', time);
// }, '8n').start(0);

toneButton.addEventListener('click', async () => {
  // await Tone.getTransport().start();
  startTone();
})

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
