import data from '../assets/data/data.js'
import { getElement } from "./utils.js";
import { updateProgressBar } from './utils.js';
import { selectedColor, selectedOption } from './selectedFunctionality.js';

const questions = document.getElementById('questions')
const content = getElement('.content')
const quizContainer = getElement('.quiz-container')
const nextBtn = getElement('.next-btn')

let results = {}
let color;

// display questions and options
const showQuestion = (index) => {
  quizContainer.dataset.currentStep = index;

  const renderColor = () => data[index].answers.map((opt) => `
  <li class="task-item task-item-color" style=background-color:${opt.value}>
    </li>
  `).join("")
  quizContainer.innerHTML = `
  <div class="content__test-question">
    <p id="questions">
    ${data[index].question}
    </p>
  </div>

   <ul class="quiz-options quiz-options-color">
   ${renderColor()}
   </ul>
  `


  if (index === 4 || index === 5) {
    renderColor()
  } else {
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
}


content.addEventListener('click', (e) => {
  selectedOption(e)
  selectedColor(e)
  if (e.target.classList.contains('next-btn')) {
    nextBtn.disabled = true;
    showQuestion(Number(quizContainer.dataset.currentStep) + 1)
    updateProgressBar(Number(quizContainer.dataset.currentStep), data);
  }
})


content.addEventListener('change', (e) => {
  selectedOption(e)
  if (e.target.classList.contains('radiobtn')) {
    results[e.target.name] = e.target.value;
    nextBtn.disabled = false;
  }
})


showQuestion(1)
