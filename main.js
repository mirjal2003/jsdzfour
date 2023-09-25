 function sklet(name, birth, god) {
    let age = god - birth;
    return name + ", Ваш возраст " + age;
  }
  
  
  let name = prompt ('Введите свое имя');
  let birth = +prompt  ('Введите год рождения');
  let god = +prompt ('Введите нынишний год');

  let resultss = sklet(name, birth, god);
  console.log(resultss);






  
function cifri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function znaki() {
  var operators = ['+', '-', '*', '/'];
  var randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function prim() {
  var number1 = cifri(1, 10);
  var number2 = cifri(1, 10);
  var operator = znaki();
  var problem = number1 + ' ' + operator + ' ' + number2;
  var answer = eval(problem); 

  var otvpolz = prompt('Сколько будет ' + problem + '?');

  if ((otvpolz  ) == answer) {
      console.log('Ваш ответ верный - ' + answer);
  } else {
      console.log('Ваш ответ неверный - ' + otvpolz + '. Правильный ответ - ' + answer + '!');
  }
}

var kolprim = +prompt('Введите количество математических примеров:');

for (var i = 0; i < kolprim; i++) {
  prim();
}
let end = alert ('Зайдите пожалуста в консоль разработчика')


 
  







 
  
  