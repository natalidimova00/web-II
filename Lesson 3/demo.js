let hero = "Shadow";
let health = 100;
let level = 1;
let coins = 50;

console.log("Герой: " + hero);
console.log("Здраве: " + health);
console.log("Ниво: " + level);
console.log("Монети: " + coins + '\n');

// Дракон ни изгори и ни намали здравето с 30. Селянин ни открадна 10 монети.
health = health - 30; // health -= 30;
console.log("Оставащо здраве: " + health)
coins = coins - 10; // coins -= 10;
console.log("Оставащи монети: " + coins + '\n')

// Героят ни загуби още 15 здраве. Но намери 100 монети.
health -= 15;
coins += 100;
console.log("Оставащо здраве: " + health)
console.log("Оставащи монети: " + coins + '\n')

if (coins >= 50) {
  console.log("Вратата се отвори! 🚪");
} else {
  console.log("Съжалявам, но нямаш достатъчно монети! 🔒");
}

// Златна и Сребърна врата 
if (coins >= 100) {
  console.log("Отвори се златната врата! ");
} else if (coins >= 50) {
  console.log("Отвори се сребърната врата!");
} else {
  console.log("Съжалявам, но нямаш достатъчно монети! 🔒");
}

let heroPower = 80;
let dragonPower = 65;

if (heroPower > dragonPower){
  console.log("Победа! Героят победи дракона! 🏆🏆");
} else if (dragonPower > heroPower) {
  console.log("Драконът е по-силен!");
} else {
  console.log("Равенство!");
}