//generating number

var NoOfNo = prompt("how many numbers would you like to use \n (1-9)");

var getNumber = function() 
{
	return Math.floor(Math.random()*10);
}

var generator = function()
{

	var numbers = []

	for(a=0;a < NoOfNo; a++) 
	{
  		var number = getNumber()

		for(i=0; i < numbers.length + 1; i++) 
		{

			if(number === numbers[i]) 
			{

        	number = getNumber()

			i = -1

			}

			else 
			{

				if(i === numbers.length) 
				{

				numbers[a] = number

            	i = 10

				console.log(number)

				}

			}

		}

	}

	numbers = numbers.join("")

	return numbers

}

var answer = generator()

//alert(answer)

//getting player answer



var check = function() 
{

	var corrections = ["starting"];

	var written = ["starting"];

	Panswer = document.getElementById('Panswer').value;

	console.log(Panswer);

	for(i=0; i <= NoOfNo - 1; i++) 
	{

		var currentNum = Panswer[i];

		console.log("doing first loop");

		for(a=0; a <= NoOfNo - 1; a++) 
		{

			console.log("doing second loop");

			if(currentNum == answer[i])
			{

				console.log("firmi \(" + currentNum + "\)");

				corrections.unshift("firmi");

				written.unshift("F");

				a = 10;

			}

			else if(currentNum == answer[a])
			{

				console.log("pico\(" + currentNum + "\)");

				corrections.unshift("pico");

				written.unshift("P");

				a = 10;

			}

			else if(a == NoOfNo - 1)
			{

				corrections.unshift("bagel");

				written.unshift("B");

				console.log("bagel \(" + currentNum + "\)");

			}

		}

	}

	for(i=0; i <= NoOfNo - 1; i++)
	{
		if(corrections[i] == "firmi")
		{
			if(i == NoOfNo - 1)
			{
				console.log("winner");

				var img = document.createElement("img");
				img.src = "YouWin.jpg";

				var imgPlace = document.getElementById("michael");
				imgPlace.appendChild(img);
			}
		}
		else
		{
			break;
		}
	}

	corrections.pop()
	written.pop()
	var p = document.getElementById("write")
	written = written.sort();
	written = written.toString();
	written = written.replace(/,/g, "");
	p.innerHTML += "<br>" + Panswer + " " + written;
	corrections = corrections.sort()
	alert(corrections)
	
}

var cycles = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var cycle = function(num)

{

	var numBeingCycled = 						   document.getElementById(num);

	if(cycles[num] < 3) 

	{

		cycles[num] = cycles[num] + 1;

	}

	else

	{

		cycles[num] = 0

	};

	

	if(cycles[num] == 0)

	{

		var newNum = num

	}

	else if(cycles[num] == 1)

	{

		var newNum = num + " " + "X";

	}

	else if(cycles[num] == 2)

	{

		var newNum = num + " " + "O";

	}

	else if(cycles[num] == 3)
    {
        var newNum = num + " " + "?"
    }
    else
	{

		alert("error\(cycle not 0-3\)");

	}

		document.getElementById(num).innerHTML=newNum;

	}