export default class Senha{
    constructor(quantidade, maiuscula, minuscula, numero, simbolo){
        this.quantidade = quantidade
        this.maiuscula = maiuscula
        this.minuscula = minuscula
        this.numero = numero
        this.simbolo = simbolo
    }

    numeroAleatorio(length){
        return Math.floor(Math.random() * length)
    }

    gerarMaiuscula(){
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(this.maiuscula === true){
            return letrasMaiusculas[this.numeroAleatorio(letrasMaiusculas.length)]
        }
        
        return
    }

    gerarMinuscula(){
        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"

        if(this.minuscula === true){
            return letrasMinusculas[this.numeroAleatorio(letrasMinusculas.length)]
        }

        return
    }

    gerarNumero(){
        const numeros = "123456789"

        if(this.numero === true){
            return numeros[this.numeroAleatorio(numeros.length)]
        }

        return
    }

    gerarSimbolo(){
        const simbolos = "!@#$%¨&*()_=-§+[~];:.,\|/?"

        if(this.simbolo === true){
            return simbolos[this.numeroAleatorio(simbolos.length)]
        }

        return
    }

    gerarSenha(){
        let senhaArray = []

        for(let i = 0; i < this.quantidade; i++){
            senhaArray.push(this.gerarMaiuscula())
            senhaArray.push(this.gerarMinuscula())
            senhaArray.push(this.gerarNumero())
            senhaArray.push(this.gerarSimbolo())
        }

        return senhaArray.join('').slice(0, this.quantidade) || 'Nada Selecionado'
    }
}
