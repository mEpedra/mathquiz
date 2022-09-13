var Player1name = localStorage.getItem("player1name")
var Player2name = localStorage.getItem("player2name")
var questionturn = "player1"
var answerturn = "player2"
console.log(Player1name)
console.log(Player2name)
var Player1score = 0
var Player2score = 0
document.getElementById("player1name").innerHTML=Player1name+"-"
document.getElementById("player2name").innerHTML=Player2name+"-"
document.getElementById("player1score").innerHTML=Player1score
document.getElementById("player2score").innerHTML=Player2score
document.getElementById("questionplayer").innerHTML="questionturn-"+Player1name
document.getElementById("answerplayer").innerHTML="answerturn-"+Player2name
function send() {
number1 = document.getElementById("number1").value
number2 = document.getElementById("number2").value
wordsmall=number1*number2
question="-<h4 id='worddisplay'>q-"+number1+"x"+number2+"</h4>"
inputbox="<br>answer-<input type='text' id ='inputcheck'>"
checkbtn ="<br><br> <button onclick='check()'class =' btn btn-info'>check</button>"
row =question+inputbox+checkbtn
document.getElementById("output").innerHTML = row
document.getElementById("number1").value = ""
document.getElementById("number2").value = ""
}
function check (){
getanswer =document.getElementById("inputcheck").value
answersmall=getanswer.toLowerCase()
if (answersmall== wordsmall) {
    if (answerturn== "player2") {
        Player1score= Player1score+1
        document.getElementById("player1score").innerHTML=Player1score
    }else{
        Player2score= Player2score+1
        document.getElementById("player2score").innerHTML=Player2score
    }
}
if (questionturn=="player1") {
questionturn="player2"
document.getElementById("questionplayer").innerHTML="questionturn-"+Player2name
} else {
    questionturn="player1"
    document.getElementById("questionplayer").innerHTML="questionturn-"+Player1name
}
if (answerturn=="player1") {
    answerturn="player2"
    document.getElementById("answerplayer").innerHTML="answerturn-"+Player2name
} else {
    answerturn="player1"
    document.getElementById("answerplayer").innerHTML="answerturn-"+Player1name
}
document.getElementById("inputcheck").value=""
}