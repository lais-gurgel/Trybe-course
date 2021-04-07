fs = require('fs'); 

fs.readFile('./guia-do-linkedin.pdf', (err, data) => {
  if (err) throw err;
  console.log(data);
});