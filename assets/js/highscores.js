var highScoreArea = document.getElementById("highScores")
function printToScreen(params) {
    
    var highScores = JSON.parse(localStorage.getItem("highScore"))
    if(highScores){

        highScores.sort(function(a, b){return b.score - a.score});
        
        var unorderList = document.createElement("ul")
        
        highScores.forEach(score => {
            var listItem = document.createElement("li")
            listItem.textContent = "Intials: "+ score.intials + " score: " + score.score
            unorderList.appendChild(listItem)
        });
        
        highScoreArea.appendChild(unorderList)
    }
    else{
        highScoreArea.innerHTML = "<h2>No Highscores!</h2>"
    }
}
printToScreen()
function clearScore() {
    localStorage.clear()
    printToScreen()
}
