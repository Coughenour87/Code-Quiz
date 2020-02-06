console.log(questions)
var startButton = document.getElementById('start')
var gameArea = document.getElementById('gameArea')
var timeArea = document.getElementById('time')
var count = 0
var time
var timer

function takeIntials(e){
    e.preventDefault()
    console.log('here')
    var intials = document.getElementById('intials').value.trim()
    console.log(intials)
}
function endOfQuiz() {

    timeArea.textContent = 'time: '+ time
    clearInterval(timer)
    gameArea.innerHTML = ""
    var questionTitle = document.createElement('h2')
    questionTitle.textContent = 'End of Game'
    gameArea.appendChild(questionTitle)
    var yourScore = document.createElement('div') 
    yourScore.textContent= 'Your final score is ' + time
    gameArea.appendChild(yourScore)
    var userIntials = document.createElement('form')
    userIntials.innerHTML=   'Enter Intials: <input type="text"  id="intials" value=""><button id="submit" type="submit"  class="btn btn-danger">Submit</button>'
    userIntials.onsubmit = takeIntials
    gameArea.appendChild(userIntials)

}
function startTimer() {
   timer = setInterval(function(){ 
        time --
        timeArea.textContent = 'time: '+ time
        if(time < 1){
            endOfQuiz()
            console.log('out of time')
        }


     }, 1000);
}


function questionClicked(whichOne) {
    console.log(whichOne)
    console.log(questions[count].choices[whichOne] === questions[count].answer)
    if(questions[count].choices[whichOne] !== questions[count].answer){
        time -= 5
    }
    count++
    if(count === questions.length){
        endOfQuiz()
    }else{
    askQuestion()
    }
}
function askQuestion() {
    gameArea.innerHTML = ""
    var questionTitle = document.createElement('h2')
    questionTitle.textContent = questions[count].title
    var questionList =  document.createElement('ul')
    questionList.setAttribute('class', "list-unstyled")
    for (let i = 0; i < questions[count].choices.length; i++) {
        
        var listItem = document.createElement('li')
        listItem.setAttribute('class', "mb-1")
        listItem.innerHTML = '<button  class="btn btn-danger" onclick = "questionClicked('+i+')">'+questions[count].choices[i]+'</button>'
        console.log(listItem)
        questionList.appendChild(listItem)
        
    }
    
    gameArea.appendChild(questionTitle)
    gameArea.appendChild(questionList)
    
}
function startQuiz() {
    time = 5 * questions.length
    console.log(timeArea)
    timeArea.textContent = 'time: '+ time
    askQuestion()
    startTimer()
}


startButton.onclick = startQuiz