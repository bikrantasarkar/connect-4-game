var a = prompt("Player 1:Enter your name, you will be Blue");
var b = prompt("Player 2:Enter your name, you will be Red");
//Player One:it is your turn,please pick a cloumn to drop your blue chip.
var c=0;

$("#name").text("Player 1: it is your turn, please pick a cloumn to drop your blue chip.");
$('.dot').click(function()
{
	c++;
	
		if(c%2==0)
	{
		$("#name").text("Player 1: it is your turn, please pick a cloumn to drop your blue chip.");
		$( this ). css( "background-color" ,"red");
	}
	else
	{
		$("#name").text("Player 2: it is your turn, please pick a cloumn to drop your Red chip.");
		$( this ). css( "background-color" ,"blue");
	}	
})