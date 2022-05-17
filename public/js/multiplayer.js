

var bsGrid = ["","","","","","","","","",""]
var bsGridPlayer2 = ["","","","","","","","","",""]
var correct_answer_index = null;
var shipfound = false;
var selected_box = null;
var foundShipStack = [];
var markedGridPlayer2 = [true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true]
var markedGrid = [true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true]
var hitGrid = [""];
var hitGridPlayer2 = [""];
var ship1 = [""];
var ship2 = [""];
var ship3 = [""];
var ship4 = [""];
var ship5 = [""];
var ship1Player2 = [""];
var ship2Player2 = [""];
var ship3Player2 = [""];
var ship4Player2 = [""];
var ship5Player2 = [""];
var turn = 1;
var oneTurn = 0;
var boxCheck = true;
sb = false;

function findIndex (box) {
	for (var i = 0; i < bsGrid.length; i++) {
		if (bsGrid[i] == box) {
			return i;
		}
	}
}

function hideBoard()
{
	for (var i = 0; i < markedGrid.length; i++)
	{
		if(markedGrid[i] == true && hitGrid[i] == "not hit")
		{
			document.getElementById(bsGrid[i]).style.backgroundSize = "0% 0%";
		}
	}

	for (var j = 0; j < markedGridPlayer2.length; j++)
	{
		if(markedGridPlayer2[j] == true && hitGridPlayer2[j] == "not hit")
		{
			document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "0% 0%";
		}
	}
}

function unhidePlayer1()
{
	for (var i = 0; i < markedGrid.length; i++)
	{
		if(markedGrid[i] == true)
		{
			document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%";
		}
	}
}

function unhidePlayer2()
{
	for (var j = 0; j < markedGridPlayer2.length; j++)
	{
		if(markedGridPlayer2[j] == true)
		{
			document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "100% 100%";
		}
	}
}


$('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc2').hide();
	});
	
$('.popupCloseButton3').click(function(){
		$('.hover_bkgr_fricc3').hide();
		//add functionality to change turn and hide boards accordingly
		if(turn == 1)
		{
			unhidePlayer1();
		}
		else
		{
			unhidePlayer2();
		}
		
});

function createTables (){
	$('.hover_bkgr_fricc').show();
	$('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
	var letters = ["A","B","C","D","E","F","G","H","I","J"];
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	var counterPlayer2 = 0;
	var counter = 0;
	for (var i = 0; i < letters.length; i++) {
		for (var j = 0; j < numbers.length; j++) {
			bsGrid[counter] = letters[i] + numbers[j].toString();
			counter++;
		}
	}
	for (var i = 0; i < markedGrid.length; i++) {
		markedGrid[i] = false;
	}
	for (var i = 0; i < letters.length; i++) {
		for (var j = 0; j < numbers.length; j++) {
			bsGridPlayer2[counterPlayer2] = letters[i] + numbers[j].toString();
			counterPlayer2++;
		}
	}
	for (var i = 0; i < markedGrid.length; i++) {
		markedGridPlayer2[i] = false;
	}
	for (var i = 0; i < markedGrid.length; i++) {
		hitGrid[i] = "not hit"
	}
	for (var i = 0; i < markedGrid.length; i++) {
		hitGridPlayer2[i] = "not hit"
	}
	// console.log(hitGridPlayer2)
	// console.log(markedGridPlayer2)
}


//I think I can add functionality to not let player 2 place ships until it is their turn
function placeShipPlayer1(id) {
	if (id == 'pick-ship1') {
		var column = document.getElementById("columns1").value;
		var row = document.getElementById("rows1").value;
		var hv = document.getElementById("hv1").value;
		if (hv == "1"){
			if (column == "J")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+20; i+=10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+20; i+=10) {
					document.getElementById(bsGrid[i]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%"; 
					document.getElementById(bsGrid[i]).disabled = true;
					markedGrid[i] = true;
					document.getElementById("pick-ship1").hidden = true;
					document.getElementById("pick-ship1-button1").hidden = true;
				}
				ship1[0] = bsGrid[index];
				ship1[1] = bsGrid[index + 10]
			}
		}
		else {
			if (row == "10")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				for (var i = index; i < index+2; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+2; j++) {
					document.getElementById(bsGrid[j]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[j]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[j]).style.textAlign = "center";
					document.getElementById(bsGrid[j]).disabled = true;
					markedGrid[j] = true;
					document.getElementById("pick-ship1").hidden = true;
					document.getElementById("pick-ship1-button1").hidden = true;
				}
				ship1[0] = bsGrid[index];
				ship1[1] = bsGrid[index + 1]
			}
		}
	}
	else if (id == 'pick-ship2' || id == 'pick-ship2-2') {
		if (document.getElementById("pick-ship1-button2").hidden != true && id == "pick-ship2-2") {
			document.getElementById("popfill").innerHTML = "Place your first ship before your second!"
			$('.hover_bkgr_fricc2').show();
			return;
		}
		var column = document.getElementById("columns2").value;
		var row = document.getElementById("rows2").value;
		var hv = document.getElementById("hv2").value;
		if (hv == "1"){
			if (column == "J" || column == "I")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+30; i+=10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+30; i+=10) {
					document.getElementById(bsGrid[i]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[i]).disabled = true;
					markedGrid[i] = true;
					if (id == "pick-ship2"){
						document.getElementById("pick-ship1-button2").hidden = true;
					}
					else {
						document.getElementById("pick-ship1-button2-2").hidden = true;
						document.getElementById("pick-ship2").hidden = true;
					}
				}
				if (id == 'pick-ship2') {
					ship2[0] = bsGrid[index];
					ship2[1] = bsGrid[index + 10]
					ship2[2] = bsGrid[index + 20]
				}
				else {
					ship3[0] = bsGrid[index];
					ship3[1] = bsGrid[index + 10]
					ship3[2] = bsGrid[index + 20]
				}
			}
		}
		else {
			if (row == "10" || row == "9")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGrid[index]);
				for (var i = index; i < index+3; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+3; j++) {
					document.getElementById(bsGrid[j]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[j]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[j]).style.textAlign = "center";
					document.getElementById(bsGrid[j]).disabled = true;
					markedGrid[j] = true;
					if (id == "pick-ship2"){
						document.getElementById("pick-ship1-button2").hidden = true;
					}
					else {
						document.getElementById("pick-ship1-button2-2").hidden = true;
						document.getElementById("pick-ship2").hidden = true;
					}
				}
				if (id == 'pick-ship2') {
					ship2[0] = bsGrid[index];
					ship2[1] = bsGrid[index + 1]
					ship2[2] = bsGrid[index + 2]
				}
				else {
					ship3[0] = bsGrid[index];
					ship3[1] = bsGrid[index + 1]
					ship3[2] = bsGrid[index + 2]
				}
			}
		}
	}
	else if (id == 'pick-ship3') {
		var column = document.getElementById("columns3").value;
		var row = document.getElementById("rows3").value;
		var hv = document.getElementById("hv3").value;
		if (hv == "1"){
			if (column == "J" || column == "I" || column == "H")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+40; i+=10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+40; i+=10) {
					document.getElementById(bsGrid[i]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[i]).disabled = true;
					markedGrid[i] = true;
					document.getElementById("pick-ship3").hidden = true;
					document.getElementById("pick-ship1-button3").hidden = true;
				}
				ship4[0] = bsGrid[index];
				ship4[1] = bsGrid[index + 10]
				ship4[2] = bsGrid[index + 20]
				ship4[3] = bsGrid[index + 30]
			}
		}
		else {
			if (row == "10" || row == "9" || row == "8")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGrid[index]);
				for (var i = index; i < index+4; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+4; j++) {
					document.getElementById(bsGrid[j]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[j]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[j]).style.textAlign = "center";
					document.getElementById(bsGrid[j]).disabled = true;
					markedGrid[j] = true;
					document.getElementById("pick-ship3").hidden = true;
					document.getElementById("pick-ship1-button3").hidden = true;
				}
				ship4[0] = bsGrid[index];
				ship4[1] = bsGrid[index + 1]
				ship4[2] = bsGrid[index + 2]
				ship4[3] = bsGrid[index + 3]
			}
		}
	}
	else {
		var column = document.getElementById("columns4").value;
		var row = document.getElementById("rows4").value;
		var hv = document.getElementById("hv4").value;
		if (hv == "1"){
			if (column == "J" || column == "I" || column == "H" || column == "G")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+50; i+=10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+50; i+=10) {
					document.getElementById(bsGrid[i]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%"; 
					document.getElementById(bsGrid[i]).disabled = true;
					markedGrid[i] = true;
					document.getElementById("pick-ship4").hidden = true;
					document.getElementById("pick-ship1-button4").hidden = true;
				}
				ship5[0] = bsGrid[index];
				ship5[1] = bsGrid[index + 10]
				ship5[2] = bsGrid[index + 20]
				ship5[3] = bsGrid[index + 30]
				ship5[4] = bsGrid[index + 40]
			}
		}
		else {
			if (row == "10" || row == "9" || row == "8" || row == "7")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				// console.log(selected)
				var index = findIndex(selected);
				for (var i = index; i < index+5; i++) {
					if (markedGrid[i] == true){
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+5; j++) {
					document.getElementById(bsGrid[j]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[j]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[j]).style.textAlign = "center";
					document.getElementById(bsGrid[j]).disabled = true;
					markedGrid[j] = true;
					document.getElementById("pick-ship4").hidden = true;
					document.getElementById("pick-ship1-button4").hidden = true;
				}
				ship5[0] = bsGrid[index];
				ship5[1] = bsGrid[index + 1]
				ship5[2] = bsGrid[index + 2]
				ship5[3] = bsGrid[index + 3]
				ship5[4] = bsGrid[index + 4]
			}
		}
	}
}

function placeShipPlayer2(id) {
	if (turn == 1) {
		document.getElementById("popfill").innerHTML = "Player 1 must place all of their ships first!"
		$('.hover_bkgr_fricc2').show();
		return;
	}
	if (id == 'pick-ship1-Player2') {
		var column = document.getElementById("columns1-Player2").value;
		var row = document.getElementById("rows1-Player2").value;
		var hv = document.getElementById("hv1").value;
		if (hv == "1"){
			if (column == "J")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+20; i+=10) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+20; i+=10) {
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundSize = "100% 100%"; 
					document.getElementById(bsGridPlayer2[i] + "-2").disabled = true;
					markedGridPlayer2[i] = true;
					document.getElementById("pick-ship1-Player2").hidden = true;
					document.getElementById("pick-ship1-button1-Player2").hidden = true;
				}
				ship1Player2[0] = bsGridPlayer2[index];
				ship1Player2[1] = bsGridPlayer2[index + 10]
			}
		}
		else {
			if (row == "10")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				for (var i = index; i < index+2; i++) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+2; j++) {
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[j] + "-2").style.textAlign = "center";
					document.getElementById(bsGridPlayer2[j] + "-2").disabled = true;
					markedGridPlayer2[j] = true;
					document.getElementById("pick-ship1-Player2").hidden = true;
					document.getElementById("pick-ship1-button1-Player2").hidden = true;
				}
				ship1Player2[0] = bsGridPlayer2[index];
				ship1Player2[1] = bsGridPlayer2[index + 1]
			}
		}
	}
	else if (id == 'pick-ship2-Player2' || id == 'pick-ship2-2-Player2') {
		if (document.getElementById("pick-ship1-button2-Player2").hidden != true && id == "pick-ship2-2-Player2") {
			document.getElementById("popfill").innerHTML = "Place your first ship before your second!"
			$('.hover_bkgr_fricc2').show();
			return;
		}
		var column = document.getElementById("columns2-Player2").value;
		var row = document.getElementById("rows2-Player2").value;
		var hv = document.getElementById("hv2").value;
		if (hv == "1"){
			if (column == "J" || column == "I")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+30; i+=10) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+30; i+=10) {
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[i] + "-2").disabled = true;
					markedGridPlayer2[i] = true;
					if (id == "pick-ship2-Player2"){
						document.getElementById("pick-ship1-button2-Player2").hidden = true;
					}
					else {
						document.getElementById("pick-ship1-button2-2-Player2").hidden = true;
						document.getElementById("pick-ship2-Player2").hidden = true;
					}
				}
				if (id == 'pick-ship2-Player2') {
					ship2Player2[0] = bsGridPlayer2[index];
					ship2Player2[1] = bsGridPlayer2[index + 10]
					ship2Player2[2] = bsGridPlayer2[index + 20]
				}
				else {
					ship3Player2[0] = bsGridPlayer2[index];
					ship3Player2[1] = bsGridPlayer2[index + 10]
					ship3Player2[2] = bsGridPlayer2[index + 20]
				}
			}
		}
		else {
			if (row == "10" || row == "9")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGridPlayer2[index]);
				for (var i = index; i < index+3; i++) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+3; j++) {
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[j] + "-2").style.textAlign = "center";
					document.getElementById(bsGridPlayer2[j] + "-2").disabled = true;
					markedGridPlayer2[j] = true;
					if (id == "pick-ship2-Player2"){
						document.getElementById("pick-ship1-button2-Player2").hidden = true;
					}
					else {
						document.getElementById("pick-ship1-button2-2-Player2").hidden = true;
						document.getElementById("pick-ship2-Player2").hidden = true;
					}
				}
				if (id == 'pick-ship2-Player2') {
					ship2Player2[0] = bsGridPlayer2[index];
					ship2Player2[1] = bsGridPlayer2[index + 1]
					ship2Player2[2] = bsGridPlayer2[index + 2]
				}
				else {
					ship3Player2[0] = bsGridPlayer2[index];
					ship3Player2[1] = bsGridPlayer2[index + 1]
					ship3Player2[2] = bsGridPlayer2[index + 2]
				}
			}
		}
	}
	else if (id == 'pick-ship3-Player2') {
		var column = document.getElementById("columns3-Player2").value;
		var row = document.getElementById("rows3-Player2").value;
		var hv = document.getElementById("hv3").value;
		if (hv == "1"){
			if (column == "J" || column == "I" || column == "H")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+40; i+=10) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+40; i+=10) {
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[i] + "-2").disabled = true;
					markedGridPlayer2[i] = true;
					document.getElementById("pick-ship3-Player2").hidden = true;
					document.getElementById("pick-ship1-button3-Player2").hidden = true;
				}
				ship4Player2[0] = bsGridPlayer2[index];
				ship4Player2[1] = bsGridPlayer2[index + 10]
				ship4Player2[2] = bsGridPlayer2[index + 20]
				ship4Player2[3] = bsGridPlayer2[index + 30]
			}
		}
		else {
			if (row == "10" || row == "9" || row == "8")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGridPlayer2[index]);
				for (var i = index; i < index+4; i++) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+4; j++) {
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[j] + "-2").style.textAlign = "center";
					document.getElementById(bsGridPlayer2[j] + "-2").disabled = true;
					markedGridPlayer2[j] = true;
					document.getElementById("pick-ship3-Player2").hidden = true;
					document.getElementById("pick-ship1-button3-Player2").hidden = true;
				}
				ship4Player2[0] = bsGridPlayer2[index];
				ship4Player2[1] = bsGridPlayer2[index + 1]
				ship4Player2[2] = bsGridPlayer2[index + 2]
				ship4Player2[3] = bsGridPlayer2[index + 3]
			}
		}
	}
	else {
		var column = document.getElementById("columns4-Player2").value;
		var row = document.getElementById("rows4-Player2").value;
		var hv = document.getElementById("hv4").value;
		if (hv == "1"){
			if (column == "J" || column == "I" || column == "H" || column == "G")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index+50; i+=10) {
					if (markedGridPlayer2[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index+50; i+=10) {
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[i] + "-2").style.backgroundSize = "100% 100%"; 
					document.getElementById(bsGridPlayer2[i] + "-2").disabled = true;
					markedGridPlayer2[i] = true;
					document.getElementById("pick-ship4-Player2").hidden = true;
					document.getElementById("pick-ship1-button4-Player2").hidden = true;
				}
				ship5Player2[0] = bsGridPlayer2[index];
				ship5Player2[1] = bsGridPlayer2[index + 10]
				ship5Player2[2] = bsGridPlayer2[index + 20]
				ship5Player2[3] = bsGridPlayer2[index + 30]
				ship5Player2[4] = bsGridPlayer2[index + 40]
			}
		}
		else {
			if (row == "10" || row == "9" || row == "8" || row == "7")
			{
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
			$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				// console.log(selected)
				var index = findIndex(selected);
				for (var i = index; i < index+5; i++) {
					if (markedGridPlayer2[i] == true){
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
			$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index+5; j++) {
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGridPlayer2[j] + "-2").style.backgroundSize = "100% 100%";
					document.getElementById(bsGridPlayer2[j] + "-2").style.textAlign = "center";
					document.getElementById(bsGridPlayer2[j] + "-2").disabled = true;
					markedGridPlayer2[j] = true;
					document.getElementById("pick-ship4-Player2").hidden = true;
					document.getElementById("pick-ship1-button4-Player2").hidden = true;
				}
				ship5Player2[0] = bsGridPlayer2[index];
				ship5Player2[1] = bsGridPlayer2[index + 1]
				ship5Player2[2] = bsGridPlayer2[index + 2]
				ship5Player2[3] = bsGridPlayer2[index + 3]
				ship5Player2[4] = bsGridPlayer2[index + 4]
			}
		}
	}
}

function findShip (space) {
	for (var i = 0; i < ship1.length; i++) {
		if (ship1[i] == space){
			ship1[i] = "hit";
		}
	}
	for (var i = 0; i < ship2.length; i++) {
		if (ship2[i] == space){
			ship2[i] = "hit";
		}
	}
	for (var i = 0; i < ship3.length; i++) {
		if (ship3[i] == space){
			ship3[i] = "hit";
		}
	}
	for (var i = 0; i < ship4.length; i++) {
		if (ship4[i] == space){
			ship4[i] = "hit";
		}
	}
	for (var i = 0; i < ship5.length; i++) {
		if (ship5[i] == space){
			ship5[i] = "hit";
		}
	}
}

function findShipPlayer2 (space) {
	for (var i = 0; i < ship1Player2.length; i++) {
		if (ship1Player2[i] == space){
			ship1Player2[i] = "hit";
		}
	}
	for (var i = 0; i < ship2Player2.length; i++) {
		if (ship2Player2[i] == space){
			ship2Player2[i] = "hit";
		}
	}
	for (var i = 0; i < ship3Player2.length; i++) {
		if (ship3Player2[i] == space){
			ship3Player2[i] = "hit";
		}
	}
	for (var i = 0; i < ship4Player2.length; i++) {
		if (ship4Player2[i] == space){
			ship4Player2[i] = "hit";
		}
	}
	for (var i = 0; i < ship5Player2.length; i++) {
		if (ship5Player2[i] == space){
			ship5Player2[i] = "hit";
		}
	}
	// console.log(ship3Player2)
}

function home () {
	window.location.href = "/endscreen";
}

function checkEndGame() {
	if (checkSunkenShipsPlayer() == true){
		document.getElementById("popfill").innerHTML = "Player 2 won! You destroyed all of the Player 1's ships. Continue to fight!"
		$('.hover_bkgr_fricc2').show();
		setTimeout(home, 5000);
	}
	else if (checkSunkenShipsPlayer2() == true) {
		document.getElementById("popfill").innerHTML = "Player 1 won! You destroyed all of the Player 2's ships. Continue to fight!"
		$('.hover_bkgr_fricc2').show();
		setTimeout(home, 5000);
	}
	else {
		return false;
	}
}

function checkSunkenShipsPlayer() {
	var check = true;
	var image = 0;
	for (var i = 0; i < ship1.length; i++) {
		if (ship1[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship2.length; i++) {
		if (ship2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship3.length; i++) {
		if (ship3[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship4.length; i++) {
		if (ship4[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship5.length; i++) {
		if (ship5[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	return check;
}

function checkSunkenShipsPlayer2() {
	var check = true;
	var image = 0;
	for (var i = 0; i < ship1Player2.length; i++) {
		if (ship1Player2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship2Player2.length; i++) {
		if (ship2Player2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship3Player2.length; i++) {
		if (ship3Player2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship4Player2.length; i++) {
		if (ship4Player2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship5Player2.length; i++) {
		if (ship5Player2[i] != "hit"){
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	return check;
}

function startbutton() {
	if (validatesb()) {
		document.getElementById("popfill").innerHTML = "Game has already begun!"
		$('.hover_bkgr_fricc2').show();
	}
	else if (document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true && document.getElementById("pick-ship1-Player2").hidden == true && document.getElementById("pick-ship2-Player2").hidden == true && document.getElementById("pick-ship3-Player2").hidden == true && document.getElementById("pick-ship4-Player2").hidden == true){
		sb = true;
		playerTurnModalStart();
	}
	else {
		document.getElementById("popfill").innerHTML = "Place all of your ships and before starting the game! Press Start Game when you are ready!"
			$('.hover_bkgr_fricc2').show();
	}
}

function validatesb() {
	if (sb == true && document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true && document.getElementById("pick-ship1-Player2").hidden == true && document.getElementById("pick-ship2-Player2").hidden == true && document.getElementById("pick-ship3-Player2").hidden == true && document.getElementById("pick-ship4-Player2").hidden == true) {
		return true;
	}
	else {
		return false;
	}
}

function validateStart() {
	if (sb == true && document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true && document.getElementById("pick-ship1-Player2").hidden == true && document.getElementById("pick-ship2-Player2").hidden == true && document.getElementById("pick-ship3-Player2").hidden == true && document.getElementById("pick-ship4-Player2").hidden == true) {
		return true;
	}
	else {
		document.getElementById("popfill").innerHTML = "Place all of your ships and before starting the game! Press Start Game when you are ready!"
			$('.hover_bkgr_fricc2').show();
		return false;
	}
}

function selected_button(t) {
    selected_box = t;
    if (selected_box.id.slice(-2) == "-2" && turn != 1)
	{
		boxCheck = false;
		return;
	}
	if (selected_box.id.slice(-2) != "-2" && turn == 1)
	{
		boxCheck = false;
		return;
	}
	boxCheck = true;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function populate_trivia_modal(q) {
	document.getElementById('triviaModalLabel').innerHTML = q['question'];
	var answerArray = [q['correct_answer'] , q['incorrect_answers'][0], q['incorrect_answers'][1], q['incorrect_answers'][2]];
	shuffleArray(answerArray);
	for(i = 0; i < answerArray.length; i++) {
	  	var id = 'qText' + (i+1);
	    document.getElementById(id).innerHTML = answerArray[i];
	    if(answerArray[i] == q['correct_answer']) {
	        correct_answer_index = i + 1;
	    }
	}
}

function get_triviadb() {
	if (!validateStart()) {
		return;
	}
	else {
		if(oneTurn == 0)
		{
			$("#triviaModal").modal("toggle");
			document.getElementById('submit-button').removeAttribute('disabled');
			document.getElementById('correct-incorrect').innerHTML = '';
			document.getElementById('qRadio1').disabled = false;
			document.getElementById('qRadio2').disabled = false;
			document.getElementById('qRadio3').disabled = false;
			document.getElementById('qRadio4').disabled = false;
			let requestURL = `https://opentdb.com/api.php?amount=1&token=${apitoken}&category=23&difficulty=easy&type=multiple`;
			let request = new XMLHttpRequest();
			request.open('GET', requestURL);
			request.responseType = 'json';
			request.send();
			request.onload = function() {
	        const question = request.response;
			populate_trivia_modal(question.results[0]);
			
	    }
		}
		else
		{
			document.getElementById("popfill").innerHTML = "The turn must be ended before the battle continues!"
			$('.hover_bkgr_fricc2').show();
		}
	}
}

function toggle () {
	$("#triviaModal").modal("toggle")
}

function playerTurnModal()
{
	if(turn == 1)
	{
		if (document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true) {
			turn = 0;
			oneTurn = 0;
			document.getElementById("popturn").innerHTML = "Next Player Turn!"
			$('.hover_bkgr_fricc3').show();
			hideBoard();
		}
		else {
			document.getElementById("popfill").innerHTML = "Place all of your ships and before ending your turn!"
			$('.hover_bkgr_fricc2').show();
		}
	}
	else
	{
		if (document.getElementById("pick-ship1-Player2").hidden == true && document.getElementById("pick-ship2-Player2").hidden == true && document.getElementById("pick-ship3-Player2").hidden == true && document.getElementById("pick-ship4-Player2").hidden == true) {
			turn = 1;
			oneTurn = 0;
			document.getElementById("popturn").innerHTML = "Next Player Turn!"
			$('.hover_bkgr_fricc3').show();
			hideBoard();
		}
		else {
			document.getElementById("popfill").innerHTML = "Place all of your ships and before ending your turn!"
			$('.hover_bkgr_fricc2').show();
		}
	}

}

function playerTurnModalStart()
{
	if(turn != 1)
	{
		turn = 1;
		oneTurn = 0;
	}
	document.getElementById("popturn").innerHTML = "The battle begins. It is Player 1's turn. Good luck!"
	$('.hover_bkgr_fricc3').show();
	hideBoard();

}

/*
*************************** 
Need to create functionalty in below function to accomodate both boards
***************************
*/

function validate_answer() {
	if (boxCheck == false) {
		document.getElementById("popfill").innerHTML = "Don't hit your own ships! You lost your turn for betrayal!"
		$('.hover_bkgr_fricc2').show();
		$("#triviaModal").modal("hide")
		playerTurnModal();
		return;
	}
	oneTurn = 1;
    document.getElementById('submit-button').setAttribute('disabled','')
    document.getElementById('qRadio1').disabled = true;
    document.getElementById('qRadio2').disabled = true;
    document.getElementById('qRadio3').disabled = true;
    document.getElementById('qRadio4').disabled = true;
    var radios = document.getElementsByName('trivia_radio');
    var selected = null;
    for(i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selected = radios[i].value; 
            break;
        }
	}
    if(selected == correct_answer_index) {
        document.getElementById('correct-incorrect').innerHTML = '&check;  Correct';
		if(turn == 1)
		{
			// console.log(selected_box.id.substring(0, selected_box.id.length-2))
			var index = findIndex(selected_box.id.substring(0, selected_box.id.length-2));
			if (markedGrid[index] == true) {
				document.getElementById(selected_box.id).style.backgroundImage = "url(https://i.gifer.com/WwaK.gif)";
				document.getElementById(selected_box.id).style.backgroundSize = "100% 100%";
				selected_box.disabled = true;
				findShipPlayer2(selected_box.id.substring(0, selected_box.id.length-2));
				hitGridPlayer2[index] = "hit";
			}
			else {
				selected_box.classList.add('box-miss');
				selected_box.disabled = true;
				hitGridPlayer2[index] = "miss";
			}
		}
		else
		{
			var index = findIndex(selected_box.id);
			if (markedGridPlayer2[index] == true) {
				document.getElementById(selected_box.id).style.backgroundImage = "url(https://i.gifer.com/WwaK.gif)";
				document.getElementById(selected_box.id).style.backgroundSize = "100% 100%";
				selected_box.disabled = true;
				findShip(selected_box.id);
				hitGrid[index] = "hit";
			}
			else {
				selected_box.classList.add('box-miss');
				selected_box.disabled = true;
				hitGrid[index] = "miss";
			}

		}
    
    } else {
        document.getElementById('correct-incorrect').innerHTML = '&times;  Incorrect';
    }
    document.getElementById('qRadio1').checked = false;
    document.getElementById('qRadio2').checked = false;
    document.getElementById('qRadio3').checked = false;
    document.getElementById('qRadio4').checked = false;
    setTimeout(toggle, 2000)
	checkEndGame();
	// console.log(hitGridPlayer2)
}

var apitoken

function tokenRequest() {
	let requestURL = 'https://opentdb.com/api_token.php?command=request';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		console.log(request.response.response_message)
	}
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(request.response.token)
		  }, 500);
	});
}

async function getToken() {
	apitoken = await tokenRequest();
}

getToken()