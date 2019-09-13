const { promisify } = require('util');

// faz o require já promisificando
const writeFile = promisify(require('fs').writeFile);

(async function () {
    try {
        await writeFile('arquivo.txt', 'conteúdo arquivo');
        console.log('arquivo criado com sucesso!');
    } catch (err) {
        console.log(err);
    }
})();