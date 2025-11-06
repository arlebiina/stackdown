// Define a sequência exata de teclas para o "Konami Code"
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Inicializa um índice (contador) para rastrear o progresso do usuário na sequência
let konamiIndex = 0;

// Adiciona um "ouvinte de eventos" global que espera por teclas sendo pressionadas
document.addEventListener('keydown', function(event) {
  
  // Verifica se a tecla pressionada (event.key) é a tecla correta na posição atual (konamiIndex)
  if (event.key === konamiCode[konamiIndex]) {
    
    // Se a tecla estiver correta, avança o índice para esperar a próxima tecla
    konamiIndex++;
    
    // Verifica se o usuário completou a sequência (o índice é igual ao tamanho do array)
    if (konamiIndex === konamiCode.length) {
      
      // Se a sequência estiver completa, chama a função do "easter egg"
      triggerEasterEgg();
      
      // Reseta o índice para que o código possa ser inserido novamente
      konamiIndex = 0; 
    }
  } else {
    // Se a tecla pressionada estiver errada, quebra a sequência e reseta o índice
    konamiIndex = 0; 
  }
});

// Define a função que será executada quando o código for inserido corretamente
function triggerEasterEgg() {

  // Alerta o usuário que ele conseguiu
  alert('uau! :0 você desbloqueou a função festa!');
  
  // Define um array de cores (estilo arco-íris) para o efeito
  const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
  
  // Inicializa um índice para rastrear qual cor está sendo exibida
  let colorIndex = 0;

  // Define uma função interna para mudar a cor do fundo
  function changeColor() {
    // Aplica a cor atual do array ao 'backgroundColor' do <body>
    document.body.style.backgroundColor = colors[colorIndex];
    
    // Avança o índice de cor. O operador '%' (módulo) faz o índice voltar a 0
    // quando ele chega ao fim do array, criando um loop infinito.
    colorIndex = (colorIndex + 1) % colors.length;
  }

  // Inicia um intervalo (setInterval) que chama a função 'changeColor' repetidamente
  // a cada 500 milissegundos (meio segundo)
  const colorInterval = setInterval(changeColor, 500);

  // Define um tempo limite (setTimeout) para parar o efeito de festa
  // (Neste caso, 10.000.000 ms = 10.000 segundos, ou aprox. 2.7 horas)
  setTimeout(() => {
    // Para a execução repetida do 'setInterval'
    clearInterval(colorInterval);
    
    // Reseta a cor de fundo do body para o padrão (removendo o estilo)
    document.body.style.backgroundColor = ''; 
  }, 10000000);
}
