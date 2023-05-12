function adicionarNota() {
    // Pega os valores dos campos de formulário
    var numero = document.getElementById("numeroNota").value;
    var data = document.getElementById("dataNota").value;
    var valor = document.getElementById("valorNota").value;
  
    // Cria uma nova linha na tabela de notas fiscais
    var tabela = document.getElementById("tabelaNotas");
    var linha = tabela.insertRow();
    var colunaNumero = linha.insertCell(0);
    var colunaData = linha.insertCell(1);
    var colunaValor = linha.insertCell(2);
    var colunaAcoes = linha.insertCell(3);
  
}
// Define uma variável global para armazenar as notas fiscais
var notasFiscais = [];

// Função para adicionar uma nova nota fiscal
function adicionarNota() {
  // Pega os valores dos campos de formulário
  var numero = document.getElementById("numeroNota").value;
  var data = document.getElementById("dataNota").value;
  var valor = document.getElementById("valorNota").value;

  // Cria um objeto com as informações da nova nota fiscal
  var novaNota = {
    numero: numero,
    data: data,
    valor: valor
  };

  // Adiciona a nova nota fiscal ao array de notas fiscais
  notasFiscais.push(novaNota);

  // Atualiza a tabela de notas fiscais
  atualizarTabela();

  // Limpa os campos de formulário
  document.getElementById("numeroNota").value = "";
  document.getElementById("dataNota").value = "";
  document.getElementById("valorNota").value = "";
}

// Função para atualizar a tabela de notas fiscais
function atualizarTabela() {
  // Pega a tabela de notas fiscais
  var tabela = document.getElementById("tabelaNotas");

  // Limpa as linhas existentes da tabela
  while (tabela.rows.length > 1) {
    tabela.deleteRow(1);
  }

  // Adiciona as linhas da tabela com as notas fiscais
  for (var i = 0; i < notasFiscais.length; i++) {
    var linha = tabela.insertRow();
    var colunaNumero = linha.insertCell(0);
    var colunaData = linha.insertCell(1);
    var colunaValor = linha.insertCell(2);
    var colunaAcoes = linha.insertCell(3);

    colunaNumero.innerHTML = notasFiscais[i].numero;
    colunaData.innerHTML = notasFiscais[i].data;
    colunaValor.innerHTML = notasFiscais[i].valor;
    colunaAcoes.innerHTML = "<button onclick='editarNota(" + i + ")'>Editar</button>" +
                            "<button onclick='excluirNota(" + i + ")'>Excluir</button>";
  }
}

// Função para editar uma nota fiscal existente
function editarNota(index) {
  // Pega a nota fiscal a ser editada
  var nota = notasFiscais[index];

  // Preenche os campos de formulário com os valores da nota fiscal
  document.getElementById("numeroNota").value = nota.numero;
  document.getElementById("dataNota").value = nota.data;
  document.getElementById("valorNota").value = nota.valor;

  // Remove a nota fiscal do array de notas fiscais
  notasFiscais.splice(index, 1);

  // Atualiza a tabela de notas fiscais
  atualizarTabela();
}

// Função para excluir uma nota fiscal existente
function excluirNota(index) {
  // Remove a nota fiscal do array de notas fiscais
  notasFiscais.splice(index, 1);

  // Atualiza a tabela de notas fiscais
  atualizarTabela();
}

colunaAcoes.innerHTML = "<button onclick='editarNota(" + i + ")'>Editar</button>" +
"<button onclick='excluirNota(" + i + ")'>Excluir</button>" +
"<button onclick='imprimirNota(" + i + ")'>Imprimir</button>";
function imprimirNota(index) {
    // Pega a nota fiscal a ser impressa
    var nota = notasFiscais[index];
  
    // Gera o conteúdo da nota fiscal a ser impressa
    var conteudo = "Nota Fiscal\n" +
                   "Número: " + nota.numero + "\n" +
                   "Data: " + nota.data + "\n" +
                   "Valor: " + nota.valor;
  
    // Cria uma nova janela de impressão
    var janela = window.open("", "Nota Fiscal", "height=500,width=500");
  
    // Escreve o conteúdo da nota fiscal na janela de impressão
    janela.document.write("<pre>" + conteudo + "</pre>");
  
    // Fecha a janela de impressão após a impressão
    janela.onafterprint = function() {
      janela.close();
    };
  
    // Imprime a nota fiscal
    janela.print();
  }
  