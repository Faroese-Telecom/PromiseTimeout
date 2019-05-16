const PromiseTimeout = async (timeoutInMiliseconds, timeoutMessage, promise) => {
  let id;
  // Create a promise that rejects in ms milliseconds
  let timeout = new Promise((resolve, reject) => {
    id = setTimeout(() => {
      clearTimeout(id);
      reject(timeoutMessage);
    }, timeoutInMiliseconds);
  })

  // Returns a race between our timeout and the passed in promise
  return Promise.race([
    promise,
    timeout
  ]);
};
export default PromiseTimeout;