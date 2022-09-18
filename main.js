"use strict";
// const arryCards = ["2", "5", "6", "туз", "король", "король"];

// function findCardIndex(cards, wantedCard) {
// 	console.log(`мы ищем карту ${wantedCard}`);

// 	for (let index in cards) {
// 		let card = cards[index];
// 		console.log(`вытянули карту ${card}`);

// 		if (card === wantedCard) {
// 			console.log(`мы нашли карту ${wantedCard}!`);
// 			return index;
// 		}
// 	}

// 	console.log(`в колоде не карты ${wantedCard}!`);
// 	return -1;
// }

// const aceIndex = findCardIndex(arryCards, "2");
// console.log(aceIndex);

// function checkAge(age) {
// 	console.log(`вам ${age} лет`);
// 	if (age >= 18) return;
// 	{
// 		console.log("школота");
// 		console.log(`потерпи еще ${18 - age} лет до совершеннолетия`);
// 	}
// }
// checkAge(2);
// checkAge(18);
// checkAge(23);

// function generateNumberRandom(n, m) {
// 	let range = Math.abs(m - n);
// 	let numberInRange = Math.round(Math.random() * range);
// 	let min = Math.min(n, m);

// 	console.log(range);
// 	console.log(numberInRange);
// 	console.log(min);

// 	return min + numberInRange;
// }

// const resault = generateNumberRandom(0, 20);

// console.log(resault);

const validEmail = [
	"valid@email.com",
	"valid1@email.com",
	"valid2@email.com",
	"valid3@email.com",
	"valid4@email.com",
];
const blackList = [
	"invalidvalid@email.com",
	"invalidvalid1@email.com",
	"invalidvalid2@email.com",
	"invalidvalid3@email.com",
	"invalidvalid4@email.com",
];
