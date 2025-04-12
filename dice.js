// *** ROUND 1 *** //
// Marko 4:3  Nikola    (4:3)
//    x10 round  ///

// *** WINER MARKO *** ///
let player1 = prompt("Unesite ime prvog igraca: ");
let player2 = prompt("Unesite ime drugog igraca: ");
let player1Dice = 0;
let player2Dice = 0;
player1Score = 0;
player2Score = 0;
let round = 0;

// console.log(" *** ROUND 1 *** ");
// console.log(player1 + player1Dice + " : " + player2Dice + player2);
// let x = Math.ceil(Math.random()) * 10;

// console.log(Math.ceil(Math.random() * 10));

for (round = 1; round <= 10; round++) {
	let player1Dice = Math.ceil(Math.random() * 6);
	let player2Dice = Math.ceil(Math.random() * 6);
	player1Score += player1Dice;
	player2Score += player2Dice;
	console.log(`%c *** ROUND ${round} *** `, "background: red; color: white;");
	console.log(
		`${player1} ${player1Dice} : ${player2Dice}  ${player2}             *** (${player1Score} : ${player2Score} ) ***`
	);
}

function score(round) {
	if (player1Score > player2Score) {
		console.log(
			`%c *** SCORE *** (${player1Score} : ${player2Score} ) *** WINER ===>>> ${player1} *** `,
			"background: blue; color: yellow; font-size: 25px;"
		);
	} else if (player1Score < player2Score) {
		console.log(
			`%c *** SCORE *** (${player1Score} : ${player2Score} ) *** WINER ===>>> ${player2} *** `,
			"background: blue; color: yellow; font-size: 25px;"
		);
	} else {
		console.log(
			`%c *** SCORE *** (${player1Score} : ${player2Score} ) *** WINER TIE *** `,
			"background: blue; color: yellow; font-size: 25px;"
		);
	}
}
score();
