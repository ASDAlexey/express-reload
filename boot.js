module.exports = function boot() {
  console.log('Connecting to the satellites...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Connected to satellites...');
      resolve();
    }, 500);
  });
};
