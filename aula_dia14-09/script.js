function lerFormulario (){
    let formulario = document.querySelectorAll("input")
    let espaco = document.getElementById("espaco")
    let saldo = formulario[0].value - formulario[1].value
    
    if(saldo>0){
        espaco.innerHTML = `Seu saldo é:${saldo}
                            <span class="verde">${saldo}</span>`
    }else{
        espaco.innerHTML = `Seu saldo é:${saldo}
                            <span class="vermelho">${saldo}</span>` 
    }

    espaco.innerHTML = `Seu saldo é de: ${saldo}`
}

function colocarCor(){
    var colocarCor = document.getElementById("");
    colocarCor.classList.add("");
}
