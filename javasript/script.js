alert("ALGODAO DOCE")
const nome = "Ronan"//constante - valor nao muda
let sobrenome = "Anacleto" //mais moderno - exige ser criada antes de usar
var idade = "Teste" // nao exige ser criada antes de usar

let numero = 100
if(numero>50){
    //se verdadeiro
}else if(numero<10){
    //se falso na primeira e verdadeiro na segunda
}else{
    //se falso em ambas
}

//if ternario
//condição ? verdadeiro:falso

numero>50 ? alert ("Verdade"): alert("Mentira")
switch (numero) {
    case 100:
        alert ("Entrou no 100")
        break;
    case 50:
        alert ("Entrou no 50")
        break;
    case 10:
        alert ("Entrou no 10")
        break
    default:
        break;
}

//LAÇO DE REPETIÇAO

//FOR - mais organizado - inicio e fim determinados

//for(vlr_inicial; condicao de parada; incremento){}

for (let i= 0; i < 10; i++) {
    const element = array[index];
}

//while - permite laços infinitos
//while(condição){comando que provoca a parada}
while (numero>10){
    numero -=10 //mesma coisa que numero=numero-10
}

//DO...WHILE
//DO {} WHILE ();
do {
    console.log(valor)
    valor--
} while (numero=10);

//funcao
//function nome(parametros){codigos}
function salvar(nome,idade) {
    console.log(`Nome: ${nome} - Idade ${idade}`)
}

salvar("Ronan",30)