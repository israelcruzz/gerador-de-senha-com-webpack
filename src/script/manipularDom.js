import Gerador from "./geradorSenha";

const btnGerador = document.querySelector('.btn-gerador')
const campoSenha = document.querySelector('.gerar-senha')
const inputQuantidade = document.querySelector('.quantidade_caracters')
const inputMaiuscula = document.querySelector('.maiusculas')
const inputMinuscula = document.querySelector('.minusculas')
const inputNumeros = document.querySelector('.numeros')
const inputSimbolos = document.querySelector('.simbolos')

export default function geradorSenhaDom(){
    btnGerador.addEventListener('click', (e) => {
        e.preventDefault()

        const detalhesDom = {
            quantidade: inputQuantidade.value,
            maiuscula: inputMaiuscula.checked,
            minuscula: inputMinuscula.checked,
            numeros: inputNumeros.checked,
            simbolos: inputSimbolos.checked
        }

        let gerarSenha = new Gerador(detalhesDom.quantidade, detalhesDom.maiuscula, detalhesDom.minuscula, detalhesDom.numeros, detalhesDom.simbolos)

        campoSenha.innerHTML = gerarSenha.gerarSenha()
    })
}