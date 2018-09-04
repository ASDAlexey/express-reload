const boot = require('./boot');
const server = require('./server');

boot().then(() => {
  const app = server();
  app.listen(3000, () => {
    console.log('Started on 3000');
  });
}).catch((err) => {
  console.log(err);
});
