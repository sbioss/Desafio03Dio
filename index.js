console.log("Digiti o numero de vitorias")
let winner = 80
console.log("Digiti o numero de derrotas")
let losser = 2
let result = pdl(winner,losser)


function pdl(winner, losser){
    let resultado = winner - losser
    return resultado
}


    if(result <= 10){
        let patente = "ferro"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result < 21){
        let patente = "Bronze"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result < 51){
        let patente = "Prata"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result < 81){
        let patente = "Ouro"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result < 91){
        let patente = "Diamante"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result <= 100){
        let patente = "Lendario"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }else if(result >= 101){
        let patente = "Imortal"
        console.log("o heroi tem de saldo  de vitorias " + result + " e estar no nivel de " +patente)
    }



            

