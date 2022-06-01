var problemas = ['10 + 15', '"10" + 2' , '"10" * 2' , '"10" / 3' , '"10" % 3' , '10 + true' , '10 == "10"' , '10 === "10"' , '10 < 11' , '10 > 12' , '10 <= 10.1' , '10 > 9.99' , '10 != "dez"' , '10 + true' , '"dez" + true' , '10 + false' , '10 * false' , '1 & 1' , '1 & 0' , '0 & 0' , '1 & 0' , '0 / 1' , '5 + 5 == 0' , '"5" + "5" == 10' , '"5" * 2 > 9' , '(10 + 10) * 2' , '10 + 10 *2'];

var operacoes = [10 + 15,"10" + 2, "10" * 2 , "10" / 3 , "10" % 3 , 10 + true , 10 == "10" , 10 === "10" , 10 < 11 , 10 > 12 , 10 <= 10.1 , 10 > 9.99 , 10 != "dez" , 10 + true , "dez" + true , 10 + false , 10 * false , 1 & 1 , 1 & 0 , 0 & 0 , 1 & 0 , 0 / 1 , 5 + 5 == 0 , "5" + "5" == 10 , "5" * 2 > 9 , (10 + 10) * 2 , 10 + 10 *2];

function resolverProblemas (){

//	var conteudoExibir = document.getElementById('conteudo');

	for (var i = 0; i < operacoes.length; i++) {
		var problema = problemas[i] + " = ";
  		var resposta = operacoes[i];
 		var tipoDados = typeof operacoes[i];
		
		//console.log(problemas[i] + " = " + operacoes[i] + " - Tipo de dado: " + typeof operacoes[i]);
 		var linha = document.createElement('tr');
		
		var listarProblema = document.createElement('td');
			linha.appendChild(listarProblema);
		
		var conteudoProblema = document.createTextNode(problema);
			listarProblema.appendChild(conteudoProblema);
  			listarProblema.classList.add('classe-problema');
		
  		var listarResposta = document.createElement('td');
			linha.appendChild(listarResposta);
		
		var conteudoResposta = document.createTextNode(resposta);
			listarResposta.appendChild(conteudoResposta);
 			listarResposta.classList.add('classe-resposta');
			if (resposta == true) {listarResposta.classList.add('classe-true');} else if (resposta == false) {listarResposta.classList.add('classe-false');} else {}
		
  		var listartipoDados = document.createElement('td');
			linha.appendChild(listartipoDados);
		
  		var conteudotipoDados = document.createTextNode(tipoDados);
			listartipoDados.appendChild(conteudotipoDados);
 			 listartipoDados.classList.add('classe-tipodados');
		
  //	 adiciona o novo elemento criado e seu conteúdo ao DOM
		
  		// var principal = document.getElementById("conteudo");
  		// document.body.insertBefore(linha, principal);

		var principal = document.getElementById("conteudo-th");
		principal.insertAdjacentElement("beforeend", linha);
	
}

}

resolverProblemas();



  function inserirProblema (){
	var capturarNovoProblema = document.getElementById("novoproblema").value;
  operacoes.push(capturarNovoProblema);
  problemas.push(capturarNovoProblema);
}


// Exercício 2

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

// primeiras respostas

/* a)	branco == “branco”
b)	branco == cinza
c)	carro === branco
d)	var cavalo = carro == “preto” ? “cinza” : “marrom”*/

var problemas2 = [branco == "branco", branco == cinza, carro === branco, cavalo = carro == "preto" ? "cinza" : "marrom"]

function problemaA() {
	/*for (var r = 0; r < problemas2.length; r++) {
		var problema2 = problemas2[r];
		console.log(problema2);
	}*/
	var problema1 = problemas2[0] == true ? problemas2[0] + " / Verdadeiro" : problemas2[0] + " / Falso";
	document.getElementById('resposta1').innerHTML = problema1;
	if (problemas2[0] == true) {resposta1.classList.add('classe-true');} else {resposta1.classList.add('classe-false'); }
}
problemaA();

function problemaB() {
	/*for (var r = 0; r < problemas2.length; r++) {
		var problema2 = problemas2[r];
		console.log(problema2);
	}*/
	var problema2 = problemas2[1] == true ? problemas2[1] + " / Verdadeiro" : problemas2[1] + " / Falso";
	document.getElementById('resposta2').innerHTML = problema2;
	if (problemas2[1] == true) {resposta2.classList.add('classe-true');} else {resposta2.classList.add('classe-false'); }
}
problemaB();

function problemaC() {
	/*for (var r = 0; r < problemas2.length; r++) {
		var problema2 = problemas2[r];
		console.log(problema2);
	}*/
	var problema3 = problemas2[2] == true ? problemas2[2] + " / Verdadeiro" : problemas2[2] + " / Falso";
	document.getElementById('resposta3').innerHTML = problema3;
	if (problemas2[2] == true) {resposta3.classList.add('classe-true');} else {resposta3.classList.add('classe-false'); }
}
problemaC();

function problemaD() {
	/*for (var r = 0; r < problemas2.length; r++) {
		var problema2 = problemas2[r];
		console.log(problema2);
	}*/
	var problema4 = problemas2[3] + ", pois se a var 'cavalo' recebe o valor da variável 'carro', e 'carro' é preto, como definido anteriormente, a resposta é verdadeira, e portanto a resposta é " + problemas2[3];
	document.getElementById('resposta4').innerHTML = problema4;
}
problemaD();


// e)	Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.

function problemaE() {
	var problema3 = (valor - 3000) / prestacao;
	console.log(problema3);
	document.getElementById('resposta5').innerHTML = problema3 + " prestações. Demonstração da operação: Sendo var valor = 30000 e var prestacao = 750, o cálculo deve ser (valor - 3000) / prestacao, que resulta em:(30.000 - 3000) / 750 = " + problema3 ;
}
problemaE();

// f)	Somando as variáveis de cores é formada uma string de quantos caracteres?

function problemaF() {
	var problema4 = (branco + preto + cinza).length;
	console.log(problema4);
	document.getElementById('resposta6').innerHTML = problema4 + ". Aqui somei o resultado das variáveis branco, preto e cinza, e contando o comprimento da string, totalizou " + problema4 + " caracteres." ;
}
problemaF();


// Calculadora de parcelas

function ocultarCampoPadrao(){
	if (document.getElementById("calcular_numero").checked = true) {
		ocultarNumeroParcela();} 
		else {ocultarValorParcela();}
}
ocultarCampoPadrao();

function exibirJuros(){
	document.getElementById("incluirjuros").style.display = "block";
}

function ocultarJuros(){
	document.getElementById("incluirjuros").style.display = "none";
}
ocultarJuros()

var checkboxJuros = document.getElementById("juroscheck");

checkboxJuros.addEventListener('change', (clique) => {
	if (clique.currentTarget.checked) {
		exibirJuros();
	} else {
		ocultarJuros();
	}
  })

function ocultarValorParcela(){
	document.getElementById("valorparcela").style.display = "none";
	document.getElementById("numeroparcela").style.display = "block";
	document.getElementById("containerjuros").style.display = "block";
	document.getElementById('botaocalcular').textContent = "Calcular valor das parcelas";
}

function ocultarNumeroParcela(){
	document.getElementById("numeroparcela").style.display = "none";
	document.getElementById("containerjuros").style.display = "none";
	document.getElementById("valorparcela").style.display = "block";
	document.getElementById('botaocalcular').textContent = "Calcular número das parcelas";
}


function calcularParcelas() {
	var valorCarro = parseInt(document.getElementById('valor_carro').value);
	var valorEntrada = parseInt(document.getElementById('valor_entrada').value);
	var valorParcela = parseInt(document.getElementById('valor_parcela').value);
	var numeroParcelas = parseInt(document.getElementById('numero_parcelas').value);
	var valorJuros = parseInt(document.getElementById('juros').value);

	if(document.getElementById('valor_carro').value.length == 0 || document.getElementById('valor_entrada').value.length == 0 || document.getElementById('calcular_numero').checked && document.getElementById('valor_parcela').value.length == 0 || document.getElementById('calcular_valor').checked && document.getElementById('numero_parcelas').value.length == 0 || checkboxJuros.checked && document.getElementById('juros').value.length == 0) {
		alert ("Preencha todos os campos");
	}

	else if (valorCarro <= 0 || valorParcela <= 0 || numeroParcelas <= 0 ) {
		alert ("Os valores não podem ser menores ou iguais a zero.")
	} 
	
	else if (valorCarro < valorParcela) {
		alert("O valor da parcela não pode ser maior que o valor do carro.")
	}

	else if (valorCarro < (valorEntrada + valorParcela)) {
		alert("O valor da parcela mais entrada não pode ser maior que o valor do carro.")
	}
	
	else if (valorCarro < valorEntrada) {
		alert("O valor da entrada não pode ser maior que o valor do carro.")
	} 
	
	else if ( document.getElementById('calcular_numero').checked) {
		//document.getElementById("numeroparcela").style.display = "none";
		document.getElementById("total-parcelas").style.display = "block";
		var valorTotal = (valorCarro - valorEntrada) / valorParcela;
		document.getElementById('total-parcelas').innerHTML = "O número total de parcelas para o veículo nas condições acima é de " + parseInt(valorTotal) + " parcelas.";
	}

	else if (document.getElementById('calcular_valor').checked && document.getElementById('juroscheck').checked == true){
		document.getElementById("total-parcelas").style.display = "block";
		var valorTotal = ((valorCarro - valorEntrada) / numeroParcelas) + ((valorCarro - valorEntrada) * (valorJuros / 100)) ;
		document.getElementById('total-parcelas').innerHTML = "O valor de parcelas para o veículo nas condições acima é de R$ " + valorTotal.toFixed(2) + " ."} 

	else if (document.getElementById('calcular_valor').checked && document.getElementById('juroscheck').checked == false){
		var valorTotal = (valorCarro - valorEntrada) / numeroParcelas;
		document.getElementById("total-parcelas").style.display = "block";
		document.getElementById('total-parcelas').innerHTML = "O valor de parcelas para o veículo nas condições acima é de R$ " + valorTotal.toFixed(2) + " ."} 

	
	
	else {alert ("Preencha todos os campos");}
}

function validar(obj){

	if (obj.value < 0) {
	obj.value = "";	
	}}

document.addEventListener ('submit', function( evento ) {
	
	evento.preventDefault();

})