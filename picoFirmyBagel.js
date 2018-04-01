//generating number

var NoOfNo = prompt("how many numbers would you like to use \n (1-9)");

var getNumber = function() {

var num = (Math.floor(Math.random()*10))

return num;

}

var generator = function(){

var numbers = []

  for(a=0;a < NoOfNo; a++) {

  var number = getNumber()

	for(i=0; i < numbers.length + 1; i++) {

		if(number === numbers[i]) {

        number = getNumber()

		   i = -1

			}

		else {

		  if(i === numbers.length) {

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

alert(answer)



//getting player answer



var check = function() {

var corrections = ["starting"]

Panswer = document.getElementById('Panswer').value

console.log(Panswer)

for(i=0; i <= NoOfNo - 1; i++) {

var currentNum = Panswer[i]

console.log("doing first loop")

for(a=0; a <= NoOfNo - 1; a++) {

console.log("doing second loop")

if(currentNum == answer[i])

{

console.log("firmy \(" + currentNum + "\)")

corrections.unshift("firmy")

a = 10

}

else if(currentNum == answer[a])

{

console.log("pico\(" + currentNum + "\)")

corrections.unshift("pico")

a = 10

}

else if(a == NoOfNo - 1)

{

corrections.unshift("bagel")

console.log("bagel \(" + currentNum + "\)")

}

}

}

corrections.pop()

corrections = corrections.sort()

alert(corrections)

}

