// promisify.js mais enxuto
const { promisify } = require('util');

// realizou o require já promisificando
const writeFile = promisify(require('fs').writeFile);

writeFile('arquivo.txt', 'conteúdo arquivo')
  .then(() => console.log('arquivo criado com sucesso!'))
  .catch(err => console.log(err));