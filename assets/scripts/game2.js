let players = [
	{
		"name" : "player1",
		"lifepoints" : 100
	},
	{
		"name" : "player2",
		"lifepoints" : 100
	}
];

const getRandNumber = () => { //for attack points
	return (Math.random()*50).toFixed(0);
}

const getRandNumber2 = () => { //for jackempoy
	return (Math.random()*2).toFixed(0);
}

const disableButton1 = () => {
	$("#player02").attr("disabled", true);
	$("#player01").attr("disabled", false);
	$("#play").attr("disabled", true);
}

const disableButton2 = () => {
	$("#player01").attr("disabled", true);
	$("#player02").attr("disabled", false);
	$("#play").attr("disabled", true);
}

const disableAllButtons = () => {
	$("#player02").attr("disabled", true);
	$("#player01").attr("disabled", true);
	$("#play").attr("disabled", true);
}

const disableAttackButtons = () => {
	$("#play").attr("disabled", false);
	$("#player01").attr("disabled", true);
	$("#player02").attr("disabled", true);
}

const hideAllButtons = () => {
	$("#player01").hide(1000);
	$("#player02").hide(1000);
	$("#play").hide(1000);
}

$("#play").click(() => {
	let player1 = Number(getRandNumber2());
	let player2 = Number(getRandNumber2());
	$("#life02").css("color", "black");
	$("#life01").css("color", "black");
	//2 beats 1, 1 beats 0, 0 beats 2
	//0 = scissors; 2 = paper; 1 = stone 
	if (player1==1 && player2==0) {
		$("#result").html("Player1's turn!");
		$("#p1Attack").attr("src", "assets/images/stone01.png");
		$("#p2Attack").attr("src", "assets/images/scissors02.png");
		disableButton1();
	} else if (player2==1 && player1==0) {
		$("#result").html("Player2's turn!");
		$("#p1Attack").attr("src", "assets/images/scissors01.png");
		$("#p2Attack").attr("src", "assets/images/stone02.png");
		disableButton2();
	} else if (player1==0 && player2==2) {
		$("#result").html("Player1's turn!");
		$("#p1Attack").attr("src", "assets/images/scissors01.png");
		$("#p2Attack").attr("src", "assets/images/paper02.png");
		disableButton1();
	} else if (player2==0 && player1==2) {
		$("#result").html("Player2's turn!");
		$("#p1Attack").attr("src", "assets/images/paper01.png");
		$("#p2Attack").attr("src", "assets/images/scissors02.png");
		disableButton2();
	} else if (player1==2 && player2==1) {
		$("#result").html("Player1's turn!");
		$("#p1Attack").attr("src", "assets/images/paper01.png");
		$("#p2Attack").attr("src", "assets/images/stone02.png");
		disableButton1();
	} else if (player2==2 && player1==1) {
		$("#result").html("Player2's turn!");
		$("#p1Attack").attr("src", "assets/images/stone01.png");
		$("#p2Attack").attr("src", "assets/images/paper02.png");
		disableButton2();
	} else if (player1==0 && player2==0) {
		$("#result").html("DRAW!");
		$("#p1Attack").attr("src", "assets/images/scissors01.png");
		$("#p2Attack").attr("src", "assets/images/scissors02.png");
		disableAttackButtons();
	} else if (player1==1 && player2==1) {
		$("#result").html("DRAW!");
		$("#p1Attack").attr("src", "assets/images/stone01.png");
		$("#p2Attack").attr("src", "assets/images/stone02.png");
		disableAttackButtons();
	} else if (player1==2 && player2==2) {
		$("#result").html("DRAW!");
		$("#p1Attack").attr("src", "assets/images/paper01.png");
		$("#p2Attack").attr("src", "assets/images/paper02.png");
		disableAttackButtons();
	}
});

$("#player01").click(() => { //player 1 attacks player 2
	players[1].lifepoints -= Number(getRandNumber());
	$("#life02").html(players[1].lifepoints);
	$("#player01").attr("disabled", true);
	$("#play").attr("disabled", false);
	if (players[1].lifepoints <= 0){
		$("#result").html("PLAYER 1 WINS!");
		$("#name1").html("EINSTEIN WINS!!!");
		$("#p1Attack").attr("src", "assets/images/einstein2.jpg");
		$("#p2Attack").attr("src", "assets/images/einstein.gif");
		hideAllButtons();
		$("#life02").css("color", "red");
		$("#life01").css("color", "blue");
	} else {
		$("#result").html("PLAY AGAIN!");
		$("#p1Attack").attr("src", "assets/images/einstein.gif");
		$("#p2Attack").attr("src", "assets/images/tesla.jpg");
		$("#life02").css("color", "red");
		$("#life01").css("color", "green");
	}
});


$("#player02").click(() => {
	players[0].lifepoints -= Number(getRandNumber());
	$("#life01").html(players[0].lifepoints);
	$("#player02").attr("disabled", true);
	$("#play").attr("disabled", false);
	if (players[0].lifepoints <= 0){
		$("#result").html("PLAYER 2 WINS!");
		$("#name2").html("TESLA WINS!!!");
		$("#p2Attack").attr("src", "assets/images/tesla2.jpg");
		$("#p1Attack").attr("src", "assets/images/tesla.gif");
		hideAllButtons();
		$("#life01").css("color", "red");
		$("#life02").css("color", "blue");
	} else {
		$("#result").html("PLAY AGAIN!");
		$("#p2Attack").attr("src", "assets/images/tesla.gif");
		$("#p1Attack").attr("src", "assets/images/einstein.jpg");
		$("#life01").css("color", "red");
		$("#life02").css("color", "green");
	}
});

$("#startButton").click(() =>{
	$("#main").attr("visibility", "visible");
	$("#main").show(1000);
	$("#startButton").hide(1000);
});
