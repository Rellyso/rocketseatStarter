var idade = window.prompt('Digite sua idade')


function checaIdade(idade) {

    return new Promise(function (res, rej) {
        if (idade >= 18) {
            setTimeout(res('Maior que 18'), 2000)
        } else {
            setTimeout(rej('Menor que 18'), 2000)
        }
    })

}

checaIdade(idade)
    .then(res => {
        console.log(res)
    })
    .catch(rej => {
        console.log(rej)
    })
