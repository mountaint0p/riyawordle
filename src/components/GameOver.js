import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
	const {
		board,
		setBoard,
		currAttempt,
		gameOver,
		onSelectLetter,
		correctWord,
		onDelete,
	} = useContext(AppContext);
	const date = new Date();
	const d = `${
		date.getMonth() + 1
	}/${date.getDate()}/${date.getFullYear()} Word`;
	return (
		<div className="gameOver">
			<h3>
				{gameOver.guessedWord ? "Yay you did it Riya!" : "Nice job riya 🙄"}
			</h3>

			{gameOver.guessedWord && (
				<h1>
					{d}: {correctWord}
				</h1>
			)}
			{gameOver.guessedWord && (
				<h3>You guessed in {currAttempt.attempt} attempts</h3>
			)}
			{!gameOver.guessedWord && <h3>Refresh and try again</h3>}
		</div>
	);
}

export default GameOver;
