const blocos = document.querySelectorAll("#bloco")
const mesa = document.getElementById('mesa')
const telaFinal = document.querySelector('.tela-vitoria-empate')
const textoFinal = document.querySelector('.texto-vitoria-empate')

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

function verificarVitoria(jogadorAtual) {
    return combinacoesVitoria.some((combination) => {
        return combination.every((index) => {
            return blocos[index].classList.contains(jogadorAtual)
        })
    })
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
    if (vitoria) {
        telaFinal.style.display = 'flex'

        if (mesa.classList.contains('o')) {
            textoFinal.innerHTML = 'Círculo Ganhou!'
        } else if (mesa.classList.contains('x')) {
            textoFinal.innerHTML = 'Xis Ganhou!'
        } else { 
            
        }
        
        
    }

    trocarJogador()
}

for (const bloco of blocos) {
    bloco.addEventListener("click", clique, {once:true})
}