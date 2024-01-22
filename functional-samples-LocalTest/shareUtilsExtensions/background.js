importScripts('utils/utils.js')

setInterval(() => {
  const utils = new Utils();
  const methodMsg = utils.getMethod();
  const functionMsg = getFunction();
  console.log(`${methodMsg} - ${functionMsg}`);
}, 5000)