var a = prompt("Player 1:Enter your name, you will be Blue");
var b = prompt("Player 2:Enter your name, you will be Red");
var c=0;
var start="on"

var ball = new Array(35); 
for (var i = 0; i < 35; i++)
{
	ball[i]="grey";
 	console.log(ball[i]);
}

$("#name").text("Player 1: it is your turn, please pick a cloumn to drop your blue chip.");
$('.dot').click(function()
{
	
	var ind=$(this).index();
	console.log(ind);
	if(ind>=0 && ind<=6 && start=="on")
	{
		c++;//counter
		var r=ind+42;
			if(c%2==0)
			{
				
				for(var i=r;i>=ind;i-=7)
				{
					if(ball[i]=="grey")
					{
						$("#name").text("Player 1: it is your turn, please pick a column to drop your blue chip.");
						$('.dot').eq(i).css("background-color","red");
						ball[i]="red";
						break;
					}
				}
			}
			else
			{
				
				for(var i=r;i>=ind;i-=7)
				{
					if(ball[i]=="grey")
					{
						$("#name").text("Player 2: it is your turn, please pick a column to drop your red chip.");
						$('.dot').eq(i).css("background-color","blue");
						ball[i]="blue";
						break;
					}

				}
			}	
		

	}

	if(diaR()==true || hor()==true || ver()==true || diaL()==true)
	{
		start="off";
		$('h3').fadeOut('fast');
		$('h4').fadeOut('fast');
		if(c%2==0)
		{
			$("h2").text("Player2: "+b+" HAVE WON");

		}
		else
		{
			$("h2").text("Player1: "+a+" HAVE WON");
		}
		$("h3").text("Refresh to play again");

	}
})




function colorMatch(one,two,three,four)
{
	return(one === two && one === three && one === four && one !="grey"  && one !== undefined)
}

function hor()
{
	for(var i=35;i>=0;i--)
	{
		if(colorMatch(ball[i],ball[i+1],ball[i+2],ball[i+3]))
		{
			console.log("Hori");
			return true;
		}
		else
		{
			continue;
		}
	}
}

function ver()
{
	for(var i=35;i>=0;i--)
	{
		if(colorMatch(ball[i],ball[i+7],ball[i+14],ball[i+21]))
		{
			console.log("Ver");
			return true;
		}
		else
		{
			continue;
		}
	}
}

function diaR()
{
	for(var i=35;i>=0;i--)
	{
		if(colorMatch(ball[i],ball[i-6],ball[i-12],ball[i-18]))
		{
			console.log("diaR");
			return true;
		}
		else
		{
			continue;
		}
	}
}

function diaL()
{
	for(var i=35;i>=0;i--)
	{
		if(colorMatch(ball[i],ball[i-8],ball[i-16],ball[i-24]))
		{
			console.log("diaL");
			return true;
		}
		else
		{
			continue;
		}
	}
}
