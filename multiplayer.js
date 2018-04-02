

var getAnswer = function() {
    var answer = 0
    var answer = document.getElementById("Panswer").value;
    document.getElementById("Panswer").value=null;
    return answer
}

var answer = null

//alert(answer)

//getting player answer


var AnswerOrCheck = function()
{
    var tester = document.getElementById("tester");
    if(tester.innerHTML == "check")
    {

        var NoOfNo = answer.length;

        var corrections = ["starting"]

        var written = ["starting"]

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

                written.unshift("F")

                a = 10

            }

            else if(currentNum == answer[a])
            {

                console.log("pico\(" + currentNum + "\)")

                corrections.unshift("pico")

                written.unshift("P")

                a = 10

            }

            else if(a == NoOfNo - 1)
            {

                corrections.unshift("bagel")

                written.unshift("B")

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

        else
        {
            break;
        }

    }

    corrections.pop()

    written.pop()

    var p = document.getElementById("write");

    written = written.sort();

    written = written.toString();

    written = written.replace(/,/g, "");

    p.innerHTML += "<br>" + Panswer + " " + written;

    corrections = corrections.sort()

    alert(corrections)

    }
    else
    {
        answer = getAnswer();

        if(answer.length > 9)
        {
            alert("use a number with less than 10 digits")
        }
        else
        {
            tester.innerHTML = "check";
        }
    }
}