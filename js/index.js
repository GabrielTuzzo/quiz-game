const questions = [
    {
        question: "Whitch animal is a réptil?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Crocodile", correct: true },
            { text: "Blue Whale", correct: false },
            { text: "Ant", correct: false },
        ]
    },
    {
        question: "How many planets are in the solar system?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "8", correct: true },
            { text: "7", correct: false },
        ]
    },
    {
        question: "Whitch one is the largest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "White Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Whitch one is the smallest continent in the world?",
        answers: [
            { text: "América", correct: false },
            { text: "Ásia", correct: false },
            { text: "Europe", correct: false },
            { text: "Oceania", correct: true },
        ]
    },
    {
        question: "How old was the oldest animal ever recorded?",
        answers: [
            { text: "210 years old (White Shark)", correct: false },
            { text: "190 years old (Turtle)", correct: true },
            { text: "250 years old (Blue Whale)", correct: false },
            { text: "170 years old (White Crocodile)", correct: false },
        ]
    },
    {
        question: "How was the tallest person in history?",
        answers: [
            { text: "Robert Wadlow: 2,72 metros", correct: true },
            { text: "Sultan Kösen: 2,51 metros", correct: false },
            { text: "Brahim Takioullah: 2,46 metros", correct: false },
            { text: "Leonid Stadnyk: 2,57 metros", correct: false },
        ]
    },
    {
        question: "At how many degrees celsius does water boil",
        answers: [
            { text: "90°", correct: false },
            { text: "50°", correct: false },
            { text: "100°", correct: true },
            { text: "98°", correct: false },
        ]
    },
    {
        question: "The largest magnitude ever registered of an earthquake",
        answers: [
            { text: "9.5° magnitude", correct: true },
            { text: "9.8° magnitude", correct: false },
            { text: "9° magnitude", correct: false },
            { text: "8.5° magnitude", correct: false },
        ]
    },
    {
        question: "largest active volcanoes in the world (height)",
        answers: [
            { text: "Monte Etna", correct: false },
            { text: "Monte Fuji", correct: false },
            { text: "Ojos del Salado", correct: true },
            { text: "Mauna Loa", correct: false },
        ]
    },
    {
        question: "The oldest woman ever registered",
        answers: [
            { text: "123 anos e 182 dias", correct: false },
            { text: "121 anos e 68 dias", correct: false },
            { text: "124 anos e 131 dias", correct: false },
            { text: "122 anos e 164 dias", correct: true },
        ]
    },
]

/*-------------------------------------------------------------------------------------*/

const questionName = document.querySelector('#question')
const answers = document.querySelector('#btns-anwsers')
const content = document.getElementById('body')
const btnStart = document.querySelector('#btn-start-game')
const nextBtn = document.querySelector('#next-btn')

/*-------------------------------------------------------------------------------------*/

btnStart.addEventListener('click', () =>{
    body.style.display = 'block'
    btnStart.style.display = 'none'
})

/*-------------------------------------------------------------------------------------*/

body.style.display = 'none'
let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetQuestions()
    let currentQuestion = questions[currentQuestionIndex]
    let currentNum = currentQuestionIndex + 1
    questionName.innerHTML = currentNum + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answers.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetQuestions() {
    nextBtn.style.display = "none"
    while(answers.firstChild) {
        answers.removeChild(answers.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answers.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextBtn.style.display = "block"
    
}

function showScore() {
    resetQuestions()
    question.innerHTML = `You scored ${score} out of ${questions.length}!`  
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}

function handleNextBtn() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextBtn()
    } else {
        startQuiz()
    }
})

startQuiz()