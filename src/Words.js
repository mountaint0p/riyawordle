import wordBank from "./wordle-bank.txt";
import riyaWords from "./riya-word.txt";

export const boardDefault = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

export const generateWordSet = async () => {
	let wordSet;
	let todaysWord;
	await fetch(riyaWords)
		.then((response) => response.text())
		.then((result) => {
			const wordArr = result.split("\n");
			const date = new Date();
			const day = date.getDate();
			todaysWord = wordArr[Math.floor((day - 8) % 19)];
		});
	await fetch(wordBank)
		.then((response) => response.text())
		.then((result) => {
			const wordArr = result.split("\n");
			wordSet = new Set(wordArr);
		});
	return { wordSet, todaysWord };
};
