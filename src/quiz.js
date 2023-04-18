import data from '../assets/data/data.js'
import { getElement } from "./utils.js";
import { updateProgressBar } from './utils.js';
import { selectedColor, selectedOption } from './selectedFunctionality.js';
import { renderRow, renderColor } from './renderFunctionality.js';

const questions = document.getElementById('questions')
const content = getElement('.content')
const quizContainer = getElement('.quiz-container')
const nextBtn = getElement('.next-btn')

let results = {}
let withImage = false;

// display questions and options
const showQuestion = (index) => {
  quizContainer.dataset.currentStep = index;

  if (data[index].modifier === 'colorpicker') {
    renderColor(index, data)
  } else if (data[index].modifier === 'image') {
    withImage = true;
    renderQuestions(index, withImage)
  }  else {
    renderQuestions(index)
  }
  if(data[index].type === 'row') {
    withImage = true;
    renderRow(index, data)
  }
}

const renderQuestions = (index, withImage) => {
  let img;

  if(withImage && index === 9) {
     img = '../assets/svg/imageTest.svg'
  } 

  if (data[index]) {
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

  ${withImage && `
  <div class="img-quiz-container">
  <img src=${img} class="img-quiz"/>
  </div>
  `}

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
  if (e.target.classList.contains('radiobtn')) {
    results[e.target.name] = e.target.value;
    nextBtn.disabled = false;
  }
})

showQuestion(2)
