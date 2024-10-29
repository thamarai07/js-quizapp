const questions = [
  {
    question: "Which is the largest Animal in the world?",
    id: 1,
    answers: [
      { id: 1, text: "Shark", istrue: false },
      { id: 2, text: "Blue Whale", istrue: true },
      { id: 3, text: "Elephant", istrue: false },
      { id: 4, text: "Giraffe", istrue: false },
    ],
  },
  {
    question: "What is the capital of France?",
    id: 2,
    answers: [
      { id: 1, text: "Berlin", istrue: false },
      { id: 2, text: "Madrid", istrue: false },
      { id: 3, text: "Paris", istrue: true },
      { id: 4, text: "Rome", istrue: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    id: 3,
    answers: [
      { id: 1, text: "Earth", istrue: false },
      { id: 2, text: "Jupiter", istrue: false },
      { id: 3, text: "Mars", istrue: true },
      { id: 4, text: "Saturn", istrue: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    id: 4,
    answers: [
      { id: 1, text: "Mark Twain", istrue: false },
      { id: 2, text: "William Shakespeare", istrue: true },
      { id: 3, text: "Jane Austen", istrue: false },
      { id: 4, text: "Charles Dickens", istrue: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    id: 5,
    answers: [
      { id: 1, text: "O2", istrue: false },
      { id: 2, text: "H2O", istrue: true },
      { id: 3, text: "CO2", istrue: false },
      { id: 4, text: "H2", istrue: false },
    ],
  },
];

const quiz__q = document.getElementById("quiz__q");
const quiz__a = document.getElementById("quiz__a");
const nextbtn = document.getElementById("next-btn");

let currentqeustionIndex = 0;
let score = 0;

function startquiz() {
  currentqeustionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showquestion();
}

function showquestion() {
  resetBtn();
  quiz__q.innerHTML = "";
  let currentquestion = questions[currentqeustionIndex];
  let questionnumber = currentqeustionIndex + 1;
  quiz__q.innerHTML = questionnumber + ". " + currentquestion.question;

  currentquestion.answers.forEach((vu) => {
    const buttons = document.createElement("button");
    buttons.innerHTML = vu.text;

    buttons.classList.add("btn");
    quiz__a.append(buttons);

    if (vu.istrue) {
      buttons.dataset.istrue = vu.istrue;
    }

    buttons.addEventListener("click", setAnswer);
  });
}

function resetBtn() {
  nextbtn.style.display = "none";

  while (quiz__a.firstChild) {
    quiz__a.removeChild(quiz__a.firstChild);
  }
}

function setAnswer(e) {
  const selectBTN = e.target;

  const isCorrect = selectBTN.dataset.istrue === "true";
  if (isCorrect) {
    selectBTN.classList.add("correct");
    score++;
  } else {
    selectBTN.classList.add("incorrect");
  }

  Array.from(quiz__a.children).forEach((button) => {
    if (button.dataset.istrue == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextbtn.style.display = "block";
}



function showScore() {
    resetBtn();
    quiz__q.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextBtn (){
    
    currentqeustionIndex++;
    if(currentqeustionIndex < questions.length ){
        showquestion();
    }else {
        showScore();
    }
}

nextbtn.addEventListener("click",function(){
    if(currentqeustionIndex < questions.length){
        handleNextBtn();
    }else{
        startquiz();
    }
})

startquiz();
