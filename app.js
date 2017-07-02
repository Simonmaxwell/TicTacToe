$(document).ready(function() {
	$(".cell").click(function() {
		let row = parseInt($(this).attr("data")[0]);
		console.log(row);
		console.log($(this).attr("data"));
	});
});





// game begins on turn x; any box clicked during a turn is given a value of turnname;
// clicking a box trigges a check of the table data, if no victory conditions are present the turn order advances;
// When a victory condition is present a winner is declared;





let board = [
	[],
	[],
	[]
];

let victoryConditions = [
  [[0,0], [1,1], [2,2]], // Down-Right diagonal
  [[0,0], [1,0], [2,0]], // Top row
];