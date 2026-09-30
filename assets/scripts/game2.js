let players = [
	{ name: "player1", lifepoints: 100 },
	{ name: "player2", lifepoints: 100 }
];

const getRandNumber = () => Math.floor(Math.random() * 50);
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
	$("#reset").show(500);
};

// Helper function to show damage popup
const showDamagePopup = (elementId, damageAmount) => {
	const $el =$(elementId);
	let popupContent = "";
	if (damageAmount >= 20) {
		popupContent = `<strong style="color: #ff2222; font-size: 1.2em; display: block; text-transform: uppercase;">CRITICAL!</strong> -${damageAmount}`;
	} else {
		popupContent = `-${damageAmount}`;
	}

	$el.stop(true, true)
	   .html(popupContent)
	   .css({ display: "block", opacity: 1, top: "10%" })
	   .animate({ top: "-10%", opacity: 0 }, 2000, function () {
		   $(this).css("display", "none");
	   });
};

$("#play").click(() => {
	// Disable Play button during countdown
	$("#play").prop("disabled", true);
	$("#life02").css("color", "black");
	$("#life01").css("color", "black");

	let counter = 3;
	$("#result").html(counter);

	// Start 3-second timer
	let countdownInterval = setInterval(() => {
		counter--;
		if (counter > 0) {
			$("#result").html(counter);
		} else {
			clearInterval(countdownInterval);
			
			// Determine outcomes after countdown finishes
			let player1 = getRandNumber2();
			let player2 = getRandNumber2();

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
		}
	}, 1000);
});

// Player 1 Attacks Player 2
$("#player01").click(() => {
	let damage = getRandNumber();
	players[1].lifepoints -= damage;
	if (players[1].lifepoints < 0) players[1].lifepoints = 0;
	
	$("#life02").html(players[1].lifepoints);
	showDamagePopup("#damageP2", damage);
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

// Player 2 Attacks Player 1
$("#player02").click(() => {
	let damage = getRandNumber();
	players[0].lifepoints -= damage;
	if (players[0].lifepoints < 0) players[0].lifepoints = 0;

	$("#life01").html(players[0].lifepoints);
	showDamagePopup("#damageP1", damage);
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

// Reset Game State
$("#reset").click(() => {
	players[0].lifepoints = 100;
	players[1].lifepoints = 100;

	$("#life01").html(100).css("color", "black");
	$("#life02").html(100).css("color", "black");

	$("#name1").html("Player 1");
	$("#name2").html("Player 2");

	$("#p1Attack").attr("src", "assets/images/einstein.jpg");
	$("#p2Attack").attr("src", "assets/images/tesla.jpg");

	$("#result").html("");

	$("#player01").show().prop("disabled", true);
	$("#player02").show().prop("disabled", true);
	$("#play").show().prop("disabled", false);
	$("#reset").hide();
});

$("#startButton").click(() => {
	$("#main").show(500);
	$("#startButton").hide(500);
});
