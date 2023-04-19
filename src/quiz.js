import data from '../assets/data/data.js'
import { getElement } from "./utils.js";
import { updateProgressBar } from './utils.js';
import { selectedOption, selectedAddition } from './selectedFunctionality.js';
import { renderRow, renderColor, renderQuestions } from './renderFunctionality.js';

const questions = document.getElementById('questions')
const content = getElement('.content')
const quizContainer = getElement('.quiz-container')
const nextBtn = getElement('.next-btn')
const opt = getElement('.quiz-options')

let length = data.length - 1;

let results = {}
let withImage = false;

// display questions and options
const showQuestion = (index) => {
  quizContainer.dataset.currentStep = index;

  if (index === length) {
    nextBtn.textContent = "Результат"
  }
  if (index > length) {
    console.log('finish');
    clearcontent('#quiz-container')
    resultProcessing()
  }

  if (data[index]) {
    if (data[index].modifier === 'colorpicker') {
      renderColor(index, data)
    } else if (data[index].modifier === 'image') {
      withImage = true;
      renderQuestions(index, data, withImage)
    } else {
      renderQuestions(index, data, withImage)
    }
    if (data[index].type === 'row') {
      withImage = true;
      renderRow(index, data)
    }
  }
}

content.addEventListener('click', (e) => {
  selectedOption(e)
  selectedAddition(e)
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

function clearcontent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function resultProcessing() {
  const innerHTML = `<div class=content__test-question>
  <p class=res_processing>Обработка результатов</p>
  </div>`
  document.getElementById("#quiz-container").innerHTML += innerHTML;
}

showQuestion(7)
