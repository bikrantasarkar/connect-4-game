var a = prompt("Player 1:Enter your name, you will be Blue");
var b = prompt("Player 2:Enter your name, you will be Red");
var c=0;

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
	if(ind>=0 && ind<=6)
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
})