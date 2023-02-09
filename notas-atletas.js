function calculaMedia(atletas) {
  atletas.forEach(atleta => {
    let nome = atleta.nome;
    let notas = atleta.notas;
    notas = notas.sort();
    let notasComputadas = notas.slice(1,4);
    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota;
    });
    let media = soma / notasComputadas.length;
    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notasComputadas}`);
    console.log(`Média Válida: ${media}`);
  });
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

calculaMedia(atletas);
