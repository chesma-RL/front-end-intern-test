// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    const campoInvalido = [];
    var erro = 0;

    if(nameLength == 0){
      campoInvalido.push('Preencha o seu nome..');
      erro += 1;

    }



    if(emailLength == 0){
      campoInvalido.push('Preencha o seu e-mail..');
      erro += 1;
    }


    if(messageLength == 0){
      campoInvalido.push('Escreva uma mensagem para nós e-e ');
      erro +=1;
    }



    if(erro >= 1){
      window.alert(campoInvalido);
      event.preventDefault();
    }else {
      window.alert('Dados enviados com sucesso');
      contactForm.submit;
    }
    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
    window.alert(`Botão enviar clicado! Conteúdo do campo nome: ${nameValue} (${nameLength} caracteres)`);

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
