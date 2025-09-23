const blocos = document.querySelectorAll("#bloco")
const mesa = document.getElementById('mesa')
const telaFinal = document.querySelector('.tela-vitoria-empate')
const textoFinal = document.querySelector('.texto-vitoria-empate')
const botaoReiniciar = document.getElementById('botao-reiniciar')
const inputX = document.getElementById('nome-x')
const inputO = document.getElementById('nome-o')
const botaoPronto = document.getElementById('botao-pronto')
const painelNomes = document.querySelector('.painel-nomes')

function pronto() {

    const nomeX = inputX.value
    const nomeO = inputO.value

    if (nomeX == '' || nomeO == '') {
        alert('Digite Nomes Válidos Para Poder Jogar')
    } else {
        painelNomes.style.display = 'none'
    }
}

botaoPronto.addEventListener('click', () => {
    pronto()
})

let vezCirculo = false

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const comecarJogo = () => {
    for (const bloco of blocos) {
        bloco.addEventListener("click", clique, { once: true })
    }

    vezCirculo = false
    
    mesa.classList.add("x")
}

function verificarVitoria(jogadorAtual) {
    return combinacoesVitoria.some((combination) => {
        return combination.every((index) => {
            return blocos[index].classList.contains(jogadorAtual)
        })
    })
}

const verificarEmpate = () => {
    return [...blocos].every(bloco => {
        return bloco.classList.contains('x') ||
            bloco.classList.contains('o')
    })
}

botaoReiniciar.addEventListener('click', () => {
    blocos.forEach(bloco => {
        telaFinal.style.display = 'none'
        mesa.classList.remove('x')
        mesa.classList.remove('o')
        bloco.classList.remove('x')
        bloco.classList.remove('o')

        comecarJogo()
    })
})

const terminarJogo = (empate) => {

    const nomeX = inputX.value
    const nomeO = inputO.value

    telaFinal.style.display = 'flex'

    if (empate) {
        textoFinal.innerHTML = '<p class="empate">EMPATE!</p>'
    } else {
        if (mesa.classList.contains('o')) {
            textoFinal.innerHTML = `<p><p class="vitoria-o">${nomeO.toUpperCase()}</p>Ganhou!</p>`
        } else if (mesa.classList.contains('x')) {
            textoFinal.innerHTML = `<p><p class="vitoria-x">${nomeX.toUpperCase()}</p>Ganhou!</p>`
        }
    }
}

const trocarJogador = () => {
    vezCirculo = !vezCirculo

    mesa.classList.remove("x")
    mesa.classList.remove("o")

    if (vezCirculo) {
        mesa.classList.add("o")
    } else {
        mesa.classList.add("x")
    }
}

const clique = (e) => {
    const bloco = e.target
    const adicionarClasse = vezCirculo ? "o" : "x"

    bloco.classList.add(adicionarClasse)

    const vitoria = verificarVitoria(adicionarClasse)

    const empate = verificarEmpate()

    if (empate) {
        terminarJogo(true)
    } else if (vitoria) {
        terminarJogo(false)
    }

    trocarJogador()

}

comecarJogo()