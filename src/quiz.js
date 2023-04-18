import data from '../assets/data/data.js'
import { getElement } from "./utils.js";

const questions = document.getElementById('questions')
const progress = getElement('.progress-bar')
const content = getElement('.content')
const quizContainer = getElement('.quiz-container')
const nextBtn = getElement('.next-btn')

let results = {}

// display questions and options
const showQuestion = (index) => {
  quizContainer.dataset.currentStep = index;

  const renderOptions = () => data[index].answers.map((option, index) => `
    <li class="task-item">
   <label for=${option.value} class="label">
   <input
   type="radio"
   value=${option.value}
   name="radio"
   class="radiobtn"
   id=${option.value}
   >
   ${option.label}</label>
     </li>
  `).join("")

  quizContainer.innerHTML = `
  <div class="content__test-question">
    <p id="questions">
    ${data[index].question}
    </p>
  </div>

   <ul class="quiz-options">
 ${renderOptions()}
   </ul>
  `
}


content.addEventListener('click', (e) => {
  selectedOption(e)
  if (e.target.classList.contains('next-btn')) {
    nextBtn.disabled = true;
    showQuestion(Number(quizContainer.dataset.currentStep) + 1)
    updateProgressBar(Number(quizContainer.dataset.currentStep));
  }
})


content.addEventListener('change', (e) => {
  selectedOption(e)
  if (e.target.classList.contains('radiobtn')) {
    results[e.target.name] = e.target.value;
    nextBtn.disabled = false;
  }
})

function selectedOption (e) {
    quizContainer.querySelectorAll('li').forEach((option) => {
      option.addEventListener('click', (e) => {
         if(e.target.checked) {
          if (quizContainer.querySelector('.selected')) {
            const active = quizContainer.querySelector('.selected')
            active.classList.remove('selected')
          }
          option.classList.add('selected')
         }
         })
      }) 
}

function updateProgressBar(id) {
  progress.style.width =
    ((id / (data.length - 1)) * 100).toFixed(2) + "%";
}

showQuestion(0)
