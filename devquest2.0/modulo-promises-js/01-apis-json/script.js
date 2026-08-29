// isso é um objeto
const heroObject = {
  name: "Homem de ferro",
  age: 48,
  hasPowers: false,
};

console.log(heroObject.name);
console.log(typeof heroObject);

// isso é um json
const heroJson = '{"name": "Homem de ferro", "age": 48, "hasPowers": false}';

// transforma de json para objeto
// .parse/interpretar de String para Objeto
const hero = JSON.parse(heroJson);
console.log(hero.name);

// transforma de objeto para string
const heroString = JSON.stringify(heroObject);
console.log(typeof heroString);
