var prompt = require('prompt-sync').prompt;
//global victory condition//


//pretty graphics//
var boardboundryH = '~~~~~~~';

//board array//
var board = [0,0,0,0,0,0,0,0,0];

//function to draw board
var boardOnScreen = function() {
	console.log('  1 2 3')
	console.log(boardboundryH);
	console.log('1' + '|' + board[0] + '|' + board[1] + '|' + board[2] + '|');
	console.log('2' + '|' + board[3] + '|' + board[4] + '|' + board[5] + '|');
	console.log('3' + '|' + board[6] + '|' + board[7] + '|' + board[8] + '|');
	console.log(boardboundryH);
}


//welcome//
console.log('WELCOME TO TIC TAC TOE');

//player names defined//
console.log('Enter Player 1 name');
var name1 = prompt().toLowerCase();

console.log('Enter Player 2 name');
var name2 = prompt().toLowerCase();


var checkWin = function() {
	var check = (board[0] + board[1] + board[2]);
	var check2 = (board[3] + board[4] + board[5]);
	var check3 = (board[6] + board[7] + board[8]);
	var check4 = (board[0] + board[3] + board[6]);
	var check5 = (board[1] + board[4] + board[7]);
	var check6 = (board[2] + board[5] + board[8]);
	var check7 = (board[0] + board[4] + board[8]);
	var check8 = (board[6] + board[4] + board[2]);
	if ((check === ('XXX' || 'OOO')) || (check2 === ('XXX' || 'OOO')) || (check3 === ('XXX' || 'OOO')) || (check4 === ('XXX' || 'OOO')) || (check5 === ('XXX' || 'OOO')) || (check6 === ('XXX' || 'OOO')) || (check7 === ('XXX' || 'OOO')) || (check8 === ('XXX' || 'OOO'))) {
		return true;		
	} else {
		return false;
	}
}
//confirm ready to play//
console.log('Ready to play y/n?');
var ready = prompt().toLowerCase();

while (ready !== 'y' && ready !== 'n') {
	console.log('Ready to play y/n?');
	var ready = prompt().toLowerCase();
}
if (ready === 'y') {
	console.log('Let\'s get it on!');
} else if (ready ==='n') {
	console.log('adios');
	return;
} 

var win = false;
var player1 = true;
var player2 = false;
//Make it loop both turns//
while (win === false) {

if (player1) {
win = checkWin();
//PLAYER ONE MOVE
console.log(name1 + ' you\'re up!');

boardOnScreen();

var determine1 = function() {
	boardOnScreen();
	console.log('enter your move with coordinates y x | make sure to seperate with a space');
	var move = prompt();
	if (move === '1 1' && board[0] === 0) {
		board[0] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '1 2' && board[1] === 0) {
		board[1] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '1 3' && board[2] === 0) {
		board[2] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '2 1' && board[3] === 0) {
		board[3] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '2 2' && board[4] === 0) {
		board[4] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '2 3' && board[5] === 0) {
		board[5] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '3 1' && board[6] === 0) {
		board[6] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '3 2' && board[7] === 0) {
		board[7] = 'X' ;
		boardOnScreen();
		return true;
	} else if (move === '3 3' && board[8] === 0) {
		board[8] = 'X' ;
		boardOnScreen();
		return true;
	} 
		console.log('invalid coordinates');
		console.log('try again you dummy');
		boardOnScreen();
		return false;
}
while(!determine1()) {
	determine1();
}
win = checkWin();
if (win) {
	console.log(name1 + ' WINS!')
	} else {
		player1 = false;
		player2= true;
	}
}
if (player2) {
win = checkWin();
//PLAYER TWO MOVE

console.log(name2 + ' you\'re up!');

boardOnScreen();

var determine2 = function() {
	boardOnScreen();
	console.log('enter your move with coordinates y x | make sure to seperate with a space');
	var move = prompt();
	console.log(board);
	if (move === '1 1' && board[0] === 0) {
		board[0] = 'O' ;
	} else if (move === '1 2' && board[1] === 0) {
		board[1] = 'O' ;
		return true;
	} else if (move === '1 3' && board[2] === 0) {
		board[2] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '2 1' && board[3] === 0) {
		board[3] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '2 2' && board[4] === 0) {
		board[4] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '2 3' && board[5] === 0) {
		board[5] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '3 1' && board[6] === 0) {
		board[6] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '3 2' && board[7] === 0) {
		board[7] = 'O' ;
		boardOnScreen();
		return true;
	} else if (move === '3 3' && board[8] === 0) {
		board[8] = 'O' ;
		boardOnScreen();
		return true;
	} 
		console.log('invalid coordinates');
		console.log('try again you dummy');
		return false;

}
while(!determine2()) {
	determine2();
}
win = checkWin();
if (win) {
	console.log(name2 + ' WINS!')
	} else {
		player1 = true;
		player2= false;
	}
}
}

