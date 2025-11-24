
const urlButton = document.getElementById('url-button');
const urlInput = document.getElementById('url-input');
const responseP = document.getElementById('response');
urlButton.addEventListener('click', async () => {
  const url = urlInput.value;
  const response = await window.electronAPI.urlSubmit(url);
  responseP.innerText = response;

})
