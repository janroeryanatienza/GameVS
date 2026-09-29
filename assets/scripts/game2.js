let players = [
	{ name: "player1", lifepoints: 100 },
	{ name: "player2", lifepoints: 100 }
];

// Returns 0 to 49 for attack points
const getRandNumber = () => Math.floor(Math.random() * 50);

// Returns 0, 1, or 2 (0: Scissors, 1: Rock, 2: Paper)
const getRandNumber2 = () => Math.floor(Math.random() * 3);

const disableButton1 = () => {
	$("#player02").prop("disabled", true);
	$("#player01").prop("disabled", false);
	$("#play").prop("disabled", true);
};

const disableButton2 = () => {
	$("#player01").prop("disabled", true);
	$("#player02").prop("disabled", false);
	$("#play").prop("disabled", true);
};

const disableAttackButtons = () => {
	$("#play").prop("disabled", false);
	$("#player01").prop("disabled", true);
	$("#player02").prop("disabled", true);
};

const hideAllButtons = () => {
	$("#player01").hide(500);
	$("#player02").hide(500);
	$("#play").hide(500);
};

$("#play").click(() => {
	let player1 = getRandNumber2();
	let player2 = getRandNumber2();
	
	$("#life02").css("color", "black");
	$("#life01").css("color", "black");

	// 0 = scissors, 1 = rock, 2 = paper
	if (player1 === 1 && player2 === 0) {
		$("#result").html("Player 1's turn!");
		$("#p1Attack").attr("src", "assets/images/stone01.png");
		$("#p2Attack").attr("src", "assets/images/scissors02.png");
		disableButton1();
	} else if (player2 === 1 && player1 === 0) {
		$("#result").html("Player 2's turn!");
		$("#p1Attack").attr("src", "assets/images/scissors01.png");
		$("#p2Attack").attr("src", "assets/images/stone02.png");
		disableButton2();
	} else if (player1 === 0 && player2 === 2) {
		$("#result").html("Player 1's turn!");
		$("#p1Attack").attr("src", "assets/images/scissors01.png");
		$("#p2Attack").attr("src", "assets/images/paper02.png");
		disableButton1();
	} else if (player2 === 0 && player1 === 2) {
		$("#result").html("Player 2's turn!");
		$("#p1Attack").attr("src", "assets/images/paper01.png");
		$("#p2Attack").attr("src", "assets/images/scissors02.png");
		disableButton2();
	} else if (player1 === 2 && player2 === 1) {
		$("#result").html("Player 1's turn!");
		$("#p1Attack").attr("src", "assets/images/paper01.png");
		$("#p2Attack").attr("src", "assets/images/stone02.png");
		disableButton1();
	} else if (player2 === 2 && player1 === 1) {
		$("#result").html("Player 2's turn!");
		$("#p1Attack").attr("src", "assets/images/stone01.png");
		$("#p2Attack").attr("src", "assets/images/paper02.png");
		disableButton2();
	} else {
		// Handles all draw conditions (0-0, 1-1, 2-2)
		$("#result").html("DRAW! Roll again.");
		if (player1 === 0) {
			$("#p1Attack").attr("src", "assets/images/scissors01.png");
			$("#p2Attack").attr("src", "assets/images/scissors02.png");
		} else if (player1 === 1) {
			$("#p1Attack").attr("src", "assets/images/stone01.png");
			$("#p2Attack").attr("src", "assets/images/stone02.png");
		} else {
			$("#p1Attack").attr("src", "assets/images/paper01.png");
			$("#p2Attack").attr("src", "assets/images/paper02.png");
		}
		disableAttackButtons();
	}
});

$("#player01").click(() => {
	players[1].lifepoints -= getRandNumber();
	$("#life02").html(players[1].lifepoints);
	disableAttackButtons();

	if (players[1].lifepoints <= 0) {
		$("#result").html("PLAYER 1 WINS!");
		$("#name1").html("EINSTEIN WINS!!!");
		$("#p1Attack").attr("src", "assets/images/einstein2.jpg");
		$("#p2Attack").attr("src", "assets/images/einstein.gif");
		hideAllButtons();
		$("#life02").css("color", "red");
		$("#life01").css("color", "blue");
	} else {
		$("#result").html("ROLL AGAIN!");
		$("#p1Attack").attr("src", "assets/images/einstein.gif");
		$("#p2Attack").attr("src", "assets/images/tesla.jpg");
		$("#life02").css("color", "red");
		$("#life01").css("color", "green");
	}
});

$("#player02").click(() => {
	players[0].lifepoints -= getRandNumber();
	$("#life01").html(players[0].lifepoints);
	disableAttackButtons();

	if (players[0].lifepoints <= 0) {
		$("#result").html("PLAYER 2 WINS!");
		$("#name2").html("TESLA WINS!!!");
		$("#p2Attack").attr("src", "assets/images/tesla2.jpg");
		$("#p1Attack").attr("src", "assets/images/tesla.gif");
		hideAllButtons();
		$("#life01").css("color", "red");
		$("#life02").css("color", "blue");
	} else {
		$("#result").html("ROLL AGAIN!");
		$("#p2Attack").attr("src", "assets/images/tesla.gif");
		$("#p1Attack").attr("src", "assets/images/einstein.jpg");
		$("#life01").css("color", "red");
		$("#life02").css("color", "green");
	}
});

$("#startButton").click(() => {
	$("#main").show(500);
	$("#startButton").hide(500);
});
