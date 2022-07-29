//Main
const server = require('./src/app.js');
const port = process.env.API_PORT || 3001;

  server.listen(port, () => {
    console.log('%s listening at 3001'); 
  });
  
