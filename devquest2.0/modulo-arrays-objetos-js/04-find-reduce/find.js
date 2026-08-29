// FIND retorna somente o priomeiro numero/valor que satisfas a condiçao
// find((item, indece, array) => {})

const numeros = [1, 2, 3, 4, 5];

const primeiro = numeros.find((numero) => numero > 3);

console.log(primeiro); // 4
