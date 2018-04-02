var getAnswer = function() {
//    var answer = 0
    var answer = getElementById('answer').innerHTML;
    return answer
}

var answer = getAnswer()

//alert(answer)



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

console.log("firmi \(" + currentNum + "\)")

corrections.unshift("firmi")

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

for(i=0; i <= NoOfNo - 1; i++)
{
if(corrections[i] == "firmi")
{
if(i == NoOfNo - 1)
{
	console.log("winner")
	var img = document.createElement("img");
	img.src = "YouWin.jpg";

	var imgPlace = document.getElementById("michael");
	imgPlace.appendChild(img)
}
}
}

corrections.pop()

corrections = corrections.sort()

alert(corrections)

}
