const { writeFile } = require('fs');

function criaArquivo(nome, conteudo) {

    return new Promise((resolve, reject) => {

        writeFile('arquivo.txt', 'conteúdo do arquivo', err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

criaArquivo()
    .then(() => console.log('arquivo criado com sucesso!'))
    .catch(err => console.log(err));