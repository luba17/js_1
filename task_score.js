// Составить расчет среднего балла за домашние задания студента по модулям: введение, git, js
let introduction = 100;
let git = 130;
let js = 150;
let averagePoint = (introduction + git + js)/3;

let userName = "Luba";
let surname = "Muratova";
let userName2 = userName.slice(0,-3);

console.log(`Average point for all hometask by ${userName2}. ${surname}: ${averagePoint}`);