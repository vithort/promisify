// importou promisify do módulo util
const { promisify } = require('util');
const { writeFile } = require('fs');

// promisifica a função writeFile
const writeFilePromisificado = promisify(writeFile);

writeFilePromisificado('arquivo.txt', 'conteúdo arquivo')
  .then(() => console.log('arquivo criado com sucesso!'))
  .catch(err => console.log(err));
