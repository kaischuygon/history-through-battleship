var bsGrid = ["", "", "", "", "", "", "", "", "", ""]
var bsGridAI = ["", "", "", "", "", "", "", "", "", ""]
var correct_answer_index = null;
var shipfound = false;
var selected_box = null;
var foundShipStack = [];
var markedGridAI = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
var markedGrid = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
var hitGrid = [""];
var ship1 = [""];
var ship2 = [""];
var ship3 = [""];
var ship4 = [""];
var ship5 = [""];
var ship1AI = [""];
var ship2AI = [""];
var ship3AI = [""];
var ship4AI = [""];
var ship5AI = [""];
sb = false;
function findIndex(box) {
	for (var i = 0; i < bsGrid.length; i++) {
		if (bsGrid[i] == box) {
			return i;
		}
	}
}

var correct = 0
var questionsanswered = 0
var won = 0
$('.popupCloseButton').click(function () {
	$('.hover_bkgr_fricc2').hide();
});

function createTables() {
	$('.hover_bkgr_fricc').show();
	$('.popupCloseButton').click(function () {
		$('.hover_bkgr_fricc').hide();
	});
	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var counterAI = 0;
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
			bsGridAI[counterAI] = letters[i] + numbers[j].toString();
			counterAI++;
		}
	}
	for (var i = 0; i < markedGridAI.length; i++) {
		markedGridAI[i] = false;
	}
	for (var i = 0; i < 5; i++) {
		var hv = Math.floor(Math.random() * 2) + 1;
		if (hv == 1) {
			if (i == 0) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(0, 1) == "J" || markedGridAI[random] == true || markedGridAI[random + 10] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 10] = true;
						ship1AI[0] = bsGrid[random];
						ship1AI[1] = bsGrid[random + 10]
					}
				}
			}
			else if (i == 1 || i == 2) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(0, 1) == "J" || bsGridAI[random].slice(0, 1) == "I" || markedGridAI[random] == true || markedGridAI[random + 10] == true || markedGridAI[random + 20] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 10] = true;
						markedGridAI[random + 20] = true;
						if (i == 1) {
							ship2AI[0] = bsGrid[random];
							ship2AI[1] = bsGrid[random + 10]
							ship2AI[2] = bsGrid[random + 20]
						}
						else {
							ship3AI[0] = bsGrid[random];
							ship3AI[1] = bsGrid[random + 10]
							ship3AI[2] = bsGrid[random + 20]
						}
					}
				}
			}
			else if (i == 3) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(0, 1) == "J" || bsGridAI[random].slice(0, 1) == "I" || bsGridAI[random].slice(0, 1) == "H" || markedGridAI[random] == true || markedGridAI[random + 10] == true || markedGridAI[random + 20] == true || markedGridAI[random + 30] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 10] = true;
						markedGridAI[random + 20] = true;
						markedGridAI[random + 30] = true;
						ship4AI[0] = bsGrid[random];
						ship4AI[1] = bsGrid[random + 10]
						ship4AI[2] = bsGrid[random + 20]
						ship4AI[3] = bsGrid[random + 30]
					}
				}
			}
			else {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(0, 1) == "J" || bsGridAI[random].slice(0, 1) == "I" || bsGridAI[random].slice(0, 1) == "H" || bsGridAI[random].slice(0, 1) == "G" || markedGridAI[random] == true || markedGridAI[random + 10] == true || markedGridAI[random + 20] == true || markedGridAI[random + 30] == true || markedGridAI[random + 40] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 10] = true;
						markedGridAI[random + 20] = true;
						markedGridAI[random + 30] = true;
						markedGridAI[random + 40] = true;
						ship5AI[0] = bsGrid[random];
						ship5AI[1] = bsGrid[random + 10]
						ship5AI[2] = bsGrid[random + 20]
						ship5AI[3] = bsGrid[random + 30]
						ship5AI[4] = bsGrid[random + 40]
					}
				}
			}
		}
		else {
			if (i == 0) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(1) == "10" || markedGridAI[random] == true || markedGridAI[random + 1] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 1] = true;
						ship1AI[0] = bsGrid[random];
						ship1AI[1] = bsGrid[random + 1]
					}
				}
			}
			else if (i == 1 || i == 2) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(1) == "10" || bsGridAI[random].slice(1) == "9" || markedGridAI[random] == true || markedGridAI[random + 1] == true || markedGridAI[random + 20] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 1] = true;
						markedGridAI[random + 2] = true;
						if (i == 1) {
							ship2AI[0] = bsGrid[random];
							ship2AI[1] = bsGrid[random + 1]
							ship2AI[2] = bsGrid[random + 2]
						}
						else {
							ship3AI[0] = bsGrid[random];
							ship3AI[1] = bsGrid[random + 1]
							ship3AI[2] = bsGrid[random + 2]
						}
					}
				}
			}
			else if (i == 3) {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(1) == "10" || bsGridAI[random].slice(1) == "9" || bsGridAI[random].slice(1) == "8" || markedGridAI[random] == true || markedGridAI[random + 1] == true || markedGridAI[random + 2] == true || markedGridAI[random + 3] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 1] = true;
						markedGridAI[random + 2] = true;
						markedGridAI[random + 3] = true;
						ship4AI[0] = bsGrid[random];
						ship4AI[1] = bsGrid[random + 1]
						ship4AI[2] = bsGrid[random + 2]
						ship4AI[3] = bsGrid[random + 3]
					}
				}
			}
			else {
				var check = false;
				while (check == false) {
					var random = Math.floor(Math.random() * 100);
					if (bsGridAI[random].slice(1) == "10" || bsGridAI[random].slice(1) == "9" || bsGridAI[random].slice(1) == "8" || bsGridAI[random].slice(1) == "7" || markedGridAI[random] == true || markedGridAI[random + 1] == true || markedGridAI[random + 2] == true || markedGridAI[random + 3] == true || markedGridAI[random + 4] == true) {
						check = false;
					}
					else {
						check = true;
						markedGridAI[random] = true;
						markedGridAI[random + 1] = true;
						markedGridAI[random + 2] = true;
						markedGridAI[random + 3] = true;
						markedGridAI[random + 4] = true;
						ship5AI[0] = bsGrid[random];
						ship5AI[1] = bsGrid[random + 1]
						ship5AI[2] = bsGrid[random + 2]
						ship5AI[3] = bsGrid[random + 3]
						ship5AI[4] = bsGrid[random + 4]

					}
				}
			}
		}
	}
	for (var i = 0; i < markedGrid.length; i++) {
		hitGrid[i] = "not hit"
	}
	// console.log(ship1AI);
	// console.log(ship2AI);
	// console.log(ship3AI);
	// console.log(ship4AI);
	// console.log(ship5AI);
}

function placeShip(id) {
	if (id == 'pick-ship1') {
		var column = document.getElementById("columns1").value;
		var row = document.getElementById("rows1").value;
		var hv = document.getElementById("hv1").value;
		if (hv == "1") {
			if (column == "J") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index + 20; i += 10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index + 20; i += 10) {
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
			if (row == "10") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				for (var i = index; i < index + 2; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index + 2; j++) {
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
		if (hv == "1") {
			if (column == "J" || column == "I") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index + 30; i += 10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index + 30; i += 10) {
					document.getElementById(bsGrid[i]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[i]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[i]).disabled = true;
					markedGrid[i] = true;
					if (id == "pick-ship2") {
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
			if (row == "10" || row == "9") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGrid[index]);
				for (var i = index; i < index + 3; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index + 3; j++) {
					document.getElementById(bsGrid[j]).style.backgroundImage = "url(https://pngimg.com/uploads/anchor/anchor_PNG11.png)";
					document.getElementById(bsGrid[j]).style.backgroundSize = "100% 100%";
					document.getElementById(bsGrid[j]).style.textAlign = "center";
					document.getElementById(bsGrid[j]).disabled = true;
					markedGrid[j] = true;
					if (id == "pick-ship2") {
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
		if (hv == "1") {
			if (column == "J" || column == "I" || column == "H") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index + 40; i += 10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index + 40; i += 10) {
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
			if (row == "10" || row == "9" || row == "8") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				// console.log(index);
				// console.log(bsGrid[index]);
				for (var i = index; i < index + 4; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index + 4; j++) {
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
		if (hv == "1") {
			if (column == "J" || column == "I" || column == "H" || column == "G") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				var index = findIndex(selected);
				for (var i = index; i < index + 50; i += 10) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var i = index; i < index + 50; i += 10) {
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
			if (row == "10" || row == "9" || row == "8" || row == "7") {
				document.getElementById("popfill").innerHTML = "Ship out of Bounds!"
				$('.hover_bkgr_fricc2').show();
				return;
			}
			else {
				var selected = column + row;
				// console.log(selected)
				var index = findIndex(selected);
				for (var i = index; i < index + 5; i++) {
					if (markedGrid[i] == true) {
						document.getElementById("popfill").innerHTML = "Ship already placed there!"
						$('.hover_bkgr_fricc2').show();
						return;
					}
				}
				for (var j = index; j < index + 5; j++) {
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

function AITurn() {
	var check = checkArea();
	var box = foundShipStack[0];
	var turnover = false;
	if (foundShipStack.length == 0) {
		shipfound = false;
	}
	if (shipfound) {
		var index = findIndex(box);
		// console.log(index);
		var direction = Math.floor(Math.random() * 4) + 1;
		while (turnover == false) {
			if (direction == 1) {
				if (index != 9 && index != 19 && index != 29 && index != 39 && index != 49 && index != 59 && index != 69 && index != 79 && index != 89 && index != 99) {
					if (markedGrid[index + 1] == true && hitGrid[index + 1] == "not hit") {
						document.getElementById(bsGrid[index + 1]).style.backgroundImage = "url('https://i.gifer.com/WwaK.gif')";
						document.getElementById(bsGrid[index + 1]).style.backgroundSize = "100% 100%";
						hitGrid[index + 1] = "hit"
						var t = findShip(bsGrid[index + 1]);
						turnover = true;
						shipfound = true;
						foundShipStack.push(bsGrid[index + 1]);
					}
					else if (hitGrid[index + 1] == "not hit") {
						document.getElementById(bsGrid[index + 1]).classList.add('box-miss');
						hitGrid[index + 1] = "miss";
						turnover = true;
					}
					else {
						direction = 2;
					}
				}
				else {
					direction = 2;
				}
			}
			if (direction == 2) {
				if (index != 0 && index != 10 && index != 20 && index != 30 && index != 40 && index != 50 && index != 60 && index != 70 && index != 80 && index != 90) {
					if (markedGrid[index - 1] == true && hitGrid[index - 1] == "not hit") {
						document.getElementById(bsGrid[index - 1]).style.backgroundImage = "url('https://i.gifer.com/WwaK.gif')";
						document.getElementById(bsGrid[index - 1]).style.backgroundSize = "100% 100%";
						hitGrid[index - 1] = "hit"
						var t = findShip(bsGrid[index - 1]);
						turnover = true;
						shipfound = true;
						foundShipStack.push(bsGrid[index - 1]);
					}
					else if (hitGrid[index - 1] == "not hit") {
						document.getElementById(bsGrid[index - 1]).classList.add('box-miss');
						hitGrid[index - 1] = "miss";
						turnover = true;
					}
					else {
						direction = 3;
					}
				}
				else {
					direction = 3;
				}
			}
			if (direction == 3) {
				if (index < 90) {
					if (markedGrid[index + 10] == true && hitGrid[index + 10] == "not hit") {
						document.getElementById(bsGrid[index + 10]).style.backgroundImage = "url('https://i.gifer.com/WwaK.gif')";
						document.getElementById(bsGrid[index + 10]).style.backgroundSize = "100% 100%";
						hitGrid[index + 10] = "hit"
						var t = findShip(bsGrid[index + 10]);
						turnover = true;
						shipfound = true;
						foundShipStack.push(bsGrid[index + 10]);
					}
					else if (hitGrid[index + 10] == "not hit") {
						document.getElementById(bsGrid[index + 10]).classList.add('box-miss');
						hitGrid[index + 10] = "miss";
						turnover = true;
					}
					else {
						direction = 4;
					}
				}
				else {
					direction = 4;
				}
			}
			if (direction == 4) {
				if (index > 9) {
					if (markedGrid[index - 10] == true && hitGrid[index - 10] == "not hit") {
						document.getElementById(bsGrid[index - 10]).style.backgroundImage = "url('https://i.gifer.com/WwaK.gif')";
						document.getElementById(bsGrid[index - 10]).style.backgroundSize = "100% 100%";
						hitGrid[index - 10] = "hit"
						var t = findShip(bsGrid[index - 10]);
						turnover = true;
						shipfound = true;
						foundShipStack.push(bsGrid[index - 10]);
					}
					else if (hitGrid[index - 10] == "not hit") {
						document.getElementById(bsGrid[index - 10]).classList.add('box-miss');
						hitGrid[index - 10] = "miss";
						turnover = true;
					}
					else {
						direction = 1;
					}
				}
				else {
					direction = 1;
				}
			}
		}
	}
	else {
		while (turnover == false) {
			var random = Math.floor(Math.random() * 100);
			if (markedGrid[random] == true && hitGrid[random] == "not hit") {
				document.getElementById(bsGrid[random]).style.backgroundImage = "url('https://i.gifer.com/WwaK.gif')";
				document.getElementById(bsGrid[random]).style.backgroundSize = "100% 100%";
				hitGrid[random] = "hit"
				var t = findShip(bsGrid[random]);
				turnover = true;
				shipfound = true;
				foundShipStack.push(bsGrid[random])
			}
			else if (hitGrid[random] == "not hit") {
				document.getElementById(bsGrid[random]).classList.add('box-miss');
				hitGrid[random] = "miss";
				shipfound = false;
				turnover = true;
			}
		}
	}
	checkEndGame();
}

function checkArea() {
	for (var i = 0; i < foundShipStack.length; i++) {
		var check = 0;
		var index = findIndex(foundShipStack[i]);
		if (index != 9 && index != 19 && index != 29 && index != 39 && index != 49 && index != 59 && index != 69 && index != 79 && index != 89 && index != 99) {
			if (hitGrid[index + 1] == "hit" || hitGrid[index + 1] == "miss") {
				check = check + 1;
			}
		}
		if (index == 9 || index == 19 || index == 29 || index == 39 || index == 49 || index == 59 || index == 69 || index == 79 || index == 89 || index == 99) {
			check = check + 1;
		}
		if (index != 0 && index != 10 && index != 20 && index != 30 && index != 40 && index != 50 && index != 60 && index != 70 && index != 80 && index != 90) {
			if (hitGrid[index - 1] == "hit" || hitGrid[index - 1] == "miss") {
				check = check + 1;
			}
		}
		if (index == 0 || index == 10 || index == 20 || index == 30 || index == 40 || index == 50 || index == 60 || index == 70 || index == 80 || index == 90) {
			check = check + 1;
		}
		if (index < 90) {
			if (hitGrid[index + 10] == "hit" || hitGrid[index + 10] == "miss") {
				check = check + 1;
			}
		}
		if (index + 10 >= 100) {
			check = check + 1;
		}
		if (index > 9) {
			if (hitGrid[index - 10] == "hit" || hitGrid[index - 10] == "miss") {
				check = check + 1;
			}
		}
		if (index - 10 < 0) {
			check = check + 1;
		}
		if (check >= 4) {
			foundShipStack.splice(i, 1);
			i = i - 1;
		}
	}
}

function findShip(space) {
	for (var i = 0; i < ship1.length; i++) {
		if (ship1[i] == space) {
			ship1[i] = "hit";
		}
	}
	for (var i = 0; i < ship2.length; i++) {
		if (ship2[i] == space) {
			ship2[i] = "hit";
		}
	}
	for (var i = 0; i < ship3.length; i++) {
		if (ship3[i] == space) {
			ship3[i] = "hit";
		}
	}
	for (var i = 0; i < ship4.length; i++) {
		if (ship4[i] == space) {
			ship4[i] = "hit";
		}
	}
	for (var i = 0; i < ship5.length; i++) {
		if (ship5[i] == space) {
			ship5[i] = "hit";
		}
	}
}

function findShipAI(space) {
	for (var i = 0; i < ship1AI.length; i++) {
		if (ship1AI[i] == space) {
			ship1AI[i] = "hit";
		}
	}
	for (var i = 0; i < ship2AI.length; i++) {
		if (ship2AI[i] == space) {
			ship2AI[i] = "hit";
		}
	}
	for (var i = 0; i < ship3AI.length; i++) {
		if (ship3AI[i] == space) {
			ship3AI[i] = "hit";
		}
	}
	for (var i = 0; i < ship4AI.length; i++) {
		if (ship4AI[i] == space) {
			ship4AI[i] = "hit";
		}
	}
	for (var i = 0; i < ship5AI.length; i++) {
		if (ship5AI[i] == space) {
			ship5AI[i] = "hit";
		}
	}
}

function home() {
	document.querySelector('#endGameButton').click()
}

function checkEndGame() {
	if (checkSunkenShipsPlayer() == true) {
		document.getElementById("popfill").innerHTML = "You lost! The enemy sunk all your ships. Fight harder in the next battles!"
		$('.hover_bkgr_fricc2').show();
		setTimeout(home, 1000);
	}
	else if (checkSunkenShipsAI() == true) {
		document.getElementById("popfill").innerHTML = "You won! You destroyed all of the enemy ships. Continue to fight!"
		won = 1
		$('.hover_bkgr_fricc2').show();
		setTimeout(home, 1000);
	}
	else {
		return false;
	}
}

function checkSunkenShipsPlayer() {
	var check = true;
	var image = 0;
	for (var i = 0; i < ship1.length; i++) {
		if (ship1[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship2.length; i++) {
		if (ship2[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship3.length; i++) {
		if (ship3[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship4.length; i++) {
		if (ship4[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship5.length; i++) {
		if (ship5[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	return check;
}

function checkSunkenShipsAI() {
	var check = true;
	var image = 0;
	for (var i = 0; i < ship1AI.length; i++) {
		if (ship1AI[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship2AI.length; i++) {
		if (ship2AI[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship3AI.length; i++) {
		if (ship3AI[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship4AI.length; i++) {
		if (ship4AI[i] != "hit") {
			check = false;
		}
		else {
			image = image + 1;
		}
	}
	image = 0;
	for (var i = 0; i < ship5AI.length; i++) {
		if (ship5AI[i] != "hit") {
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
	if (validateStart()) {
		document.getElementById("popfill").innerHTML = "Game has already begun!"
		$('.hover_bkgr_fricc2').show();
	}
	else if (document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true) {
		sb = true;
		document.getElementById("popfill").innerHTML = "The battle begins. Good luck!"
		$('.hover_bkgr_fricc2').show();
	}
	else {
		document.getElementById("popfill").innerHTML = "Place all of your ships and before starting the game! Press Start Game when you are ready!"
		$('.hover_bkgr_fricc2').show();
	}
}

function validateStart() {
	if (sb == true && document.getElementById("pick-ship1").hidden == true && document.getElementById("pick-ship2").hidden == true && document.getElementById("pick-ship3").hidden == true && document.getElementById("pick-ship4").hidden == true) {
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
	var answerArray = [q['correct_answer'], q['incorrect_answers'][0], q['incorrect_answers'][1], q['incorrect_answers'][2]];
	shuffleArray(answerArray);
	for (i = 0; i < answerArray.length; i++) {
		var id = 'qText' + (i + 1);
		document.getElementById(id).innerHTML = answerArray[i];
		if (answerArray[i] == q['correct_answer']) {
			correct_answer_index = i + 1;
		}
	}
}

async function get_triviadb() {
	if (!validateStart()) {
		return;
	}
	else {
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
		request.onload = function () {
			const question = request.response;
			populate_trivia_modal(question.results[0]);
		}
	}
}

function toggle() {
	$("#triviaModal").modal("toggle")
}

function validate_answer() {
	document.getElementById('submit-button').setAttribute('disabled', '')
	document.getElementById('qRadio1').disabled = true;
	document.getElementById('qRadio2').disabled = true;
	document.getElementById('qRadio3').disabled = true;
	document.getElementById('qRadio4').disabled = true;
	var radios = document.getElementsByName('trivia_radio');
	var selected = null;
	for (i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			selected = radios[i].value;
			break;
		}
	}
	if (selected == correct_answer_index) {
		document.getElementById('correct-incorrect').innerHTML = '&check;  Correct';
		var index = findIndex(selected_box.id.substring(0, selected_box.id.length - 3));
		if (markedGridAI[index] == true) {
			selected_box.classList.add('box-hit');
			selected_box.disabled = true;
			findShipAI(selected_box.id.substring(0, selected_box.id.length - 3));
		}
		else {
			selected_box.classList.add('box-miss');
			selected_box.disabled = true;
		}
		correct++
		questionsanswered++
	} else {
		document.getElementById('correct-incorrect').innerHTML = '&times;  Incorrect';
		questionsanswered++
	}
	document.getElementById('qRadio1').checked = false;
	document.getElementById('qRadio2').checked = false;
	document.getElementById('qRadio3').checked = false;
	document.getElementById('qRadio4').checked = false;
	setTimeout(toggle, 2000)
	checkEndGame();
	setTimeout(AITurn, 3000);
}

function end_game() {
	document.getElementById('correct').value = correct
	document.getElementById('questionsanswered').value = questionsanswered
	document.getElementById('won').value = won
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