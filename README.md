# Jogo da Velha
Site básico que usa HTML,  CSS e JavaSript para montar um jogo da vellha completamente funcional.


O site funciona da seguinte maneira:

A "mesa" do jogo (traços que forman o jogo da velha) foi criada usando 9 divs que foram colocadas dentro de uma main com display grid, isso faz com que seja criada as 9 divs em 3 colunas e 3 linhas, foi então colocado bordas brancas em todas as divs pra que seja criado o "desenho" de 9 quadrados, depois foram removidas as bordas apenas das laterais, de cima e de baixo desse desenho e isso resultou no desenho perfeito do Jogo Da Velha.

Para criar o Xis e o Círculo, foram usados formas e hover no CSS, assim é possível ver o Xis ou Círculo só de passar o mouse pena tela.

No JavaScript para que fosse possível clicar na mesa do jogo e adicionar o símbolo, foi criada uma função que adiciona o Círculo se for a vez dele de jogar, se não for, o Xis será adicionado, toda essa adição de símbolos é feita pelo JS que adiciona a classe "x" ou "o" na div correspondente.

Para verificar se houve uma vitória, foi armazenado em um array todas as combinações possíveis de vitória, se uma das combinações for identificada, display: flex é aplicado em uma tela de vitória/empate e mostra quem foi o vencedor e um botão de reiniciar também é mostrado (ex: Círculo Venceu!).

Para identificar se houve um empate, o JS lê todas as divs, se todas estiverem com uma classe "x" ou "o" e não for identificada nenhuma vitória, a mesma tela de vitória/empate é mostrada mas com o texto "Empate!" e novamente o botão reiniciar é mostrado.

Para reiniciar o jogo quando o botão de reiniciar é clicado, o JS remove todas as classes das divs e aplica display: none na tela de vitória/empate e ativa a função comecarJogo() que organiza a ordem de quem começará o jogo para que não ocorreça o erro de aparecer o Xis no hover mas o Círculo ser aplicado.
