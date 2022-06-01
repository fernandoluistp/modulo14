## Laços de repetição

for ([expressaoInicial]; [condicao]; [incremento]) {}

while ( [condicao]) {
    [execucao]
}

var contador = 0;
while (contador < 10 ) {
    contador++
}

var hora = 24;
while (hora > 0) {
    hora--;
    console.log (hora)
}

do {
    [execução]
} while ([execucao])

## Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

var nota = 0;

for (var i = 0; i < alunos.length; i++) {
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + notasAluno);

    for ( c = 0; c < notasAluno.length; c++ ){
        nota += notasAluno[c];
 }

 media =  nota / 4;

 if(media >= 7) {
     resultado = "aprovado";
 } else {
     resultado = "reprovado";
 }
 
 console.log ("Aluno " + notasAluno[i] + " - " + "Média: " + media + " - " + resultado )
}