const animal = {
    //Atributos do objeto - CHAVE : VALOR
    nome: "lulu",
    tamanho: "mini",
    raca: "Pit Monster",
    cor: "bege",
    idade: 2,
    dono: {
        nome: "joao",
        cpf: "11111111111"
    }
}

let tela = document.getElementById('tela')

tela.innerHTML = JSON.stringify(animal, null,1)

//DESESTRUTURACAO DE OBJETO
const {nome, idade} = animal

//utilizando o 
tela.innerHTML = `Nome: ${nome} Idade: ${(idade ?? 'Nao informado')}`

// ?? - os valores falsos são nulos ou undefined 
const {dono} = animal
tela.innerHTML = JSON.stringify(dono,null,1)

//REST OPERATOR

const mostraTexto = (nome, ...brinquedos) => {
    let texto = `O animal ${nome} gosta dos brinquedos: `
    let texto_brinquedos = ''
    brinquedos.forEach(e =>{
        texto_brinquedos += `${e}`
    })

    texto += texto_brinquedos
    return texto
}

function ativaTexto(){
    let tela = document.getElementById('tela')

    tela.innerText = mostraTexto('totó','bolinha')
}