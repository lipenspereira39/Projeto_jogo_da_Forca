// Função que atualiza a palavra oculta
function atualizaPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('') // convertendo a palavra oculta em um array de caracteres
  
    for (let i = 0; i < palavraEscolhida.length; i++) { // loop que continua até o tamanho final da palavra escolhida
      if (palavraEscolhida[i] === letraDigitada) { // Verificando se cada letra da palavra escolhida é igual a letra digitada
        palavraOcultaArray[i] = letraDigitada // substituindo a letra na posição i
      }
    }
  
    return palavraOcultaArray.join('') // Retornando o array de caracteres convertido em uma string
  }
  
  // Função que verifica se a letra digitada é um caracter único e alfabético
  function validaLetraDigitada(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
      return true
    } else {
      return false
    }
  }
  
  function verificaJogoGanho(palavraOculta, palavraEscolhida) {
    if(palavraOculta === palavraEscolhida) {
      return true
    } else {
      return false
    }
  }
  
  
  // Função verifica se a letra digitada encontra-se na palavra escolhida
  function verificaLetraPresenteNaPalavra(palavraEscolhida, letraDigitada){
    if(palavraEscolhida.includes(letraDigitada)){
      return true
    } else {
      return false
    }
  }
  
  
  function jogadasRestantes(erros) {
    return 4 - erros
  }
  
  // Função verifica se o status do jogo e imprime uma mensagem informando se o jogo terminou em vitoria ou derrota
  function exibiMensagemFimDeJogo(statusJogo) {
    if (statusJogo === 'venceu') {
      console.log("\n********** VOCÊ VENCEU !! **********");
    } else {
      console.log("\n********** VOCÊ PERDEU !! **********");
    }
  }
  
  export {
    validaLetraDigitada,
    verificaJogoGanho,
    verificaLetraPresenteNaPalavra,
    jogadasRestantes,
    atualizaPalavraOculta,
    exibiMensagemFimDeJogo
  };