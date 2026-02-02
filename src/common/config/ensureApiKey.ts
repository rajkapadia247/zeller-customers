if (!sessionStorage.getItem('apiKey')) {
  const key = window.prompt('Enter API key');
  if (key) {
    sessionStorage.setItem('apiKey', key);
  }
}
