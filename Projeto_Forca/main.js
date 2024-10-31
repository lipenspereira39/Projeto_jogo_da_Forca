import entradaDados from "readline-sync";
import colecao_Dados from "./dados.js";
import {
  validaLetraDigitada,
  verificaJogoGanho,
  verificaLetraPresenteNaPalavra,
  jogadasRestantes,
  atualizaPalavraOculta,
  exibiMensagemFimDeJogo,
} from "./funcoes.js";

function jogarForca() { // Função principal do jogo

  // Escolhe aleatoriamente uma palavra da lista
  const palavraEscolhida = colecao_Dados[Math.floor(Math.random() * colecao_Dados.length)];

  // Oculta a palavra escolhida com 'underlines' deixando visivel somente a letra inicial
  let primeiraLetra = palavraEscolhida[0]
  let underline = "_".repeat(palavraEscolhida.length - 1)
  let palavraOculta = primeiraLetra + underline

  let erros = 0;
  let statusJogo = 'andamento' // Jogo inicia com o status 'andamento'

  console.log(`\n********** JOGO DA FORCA **********`);
  console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

  while (statusJogo === 'andamento') { // Loop continua enquanto o status do jogo estiver em 'andamento'

    console.log(`\nFruta: ${palavraOculta}`);

    // Recebe a letra digitada pelo usuário aceitando tanto maiuscula quanto minuscula
    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    if (validaLetraDigitada(letraDigitada)) {
      if (verificaLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)) {
        palavraOculta = atualizaPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
        if (verificaJogoGanho(palavraOculta, palavraEscolhida)) {
          statusJogo = 'venceu'
        }
      } else {
        erros++

        const chances = jogadasRestantes(erros)

        if(chances > 0) { //
          console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
        } else {
          statusJogo = 'perdeu' // Atualiza o status do jogo para 'perdeu' em caso de erros igual a 4
        }
      }
    } else {
      console.log("\nPor favor, digite uma letra válida.");
    }
  }
  
  exibiMensagemFimDeJogo(statusJogo);

}

jogarForca(); 