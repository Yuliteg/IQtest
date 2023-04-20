import data from '../assets/data/data.js'
import { getElement } from "./helpers/utils.js";
import { updateProgressBar } from './helpers/utils.js';
import { selectedOption, selectedAddition } from './selectedFunctionality.js';
import { renderRow, renderColor, renderQuestions } from './renderFunctionality.js';
import { testPage } from '../pagesJs/testPage.js';
import { resultProcessing } from '../pagesJs/resultProcessing.js';
import { resultPage } from '../pagesJs/resultPage.js';
import { run_clock } from './helpers/timer.js';
import { clearcontent } from './helpers/utils.js';

const questions = document.getElementById('questions')
const btns = document.querySelectorAll('.btn-test')

let length = data.length - 1;
let results = {}
let withImage = false;

// display questions and options
const showQuestion = (index, quizContainer, nextBtn) => {
  quizContainer.dataset.currentStep = index;
  console.log(results);
  if (index === length) {
    nextBtn.textContent = "Результат"
  }
  if (index > length) {
    nextBtn.disabled = true
    clearcontent('#quiz-container')
    resultProcessing()
    setTimeout(() => {
      clearcontent('#content')
      resultPage()
    }, 2000)
  }

  if (data[index]) {
    if (data[index].modifier === 'colorpicker') {
      renderColor(index, data, quizContainer, nextBtn)
    } else if (data[index].modifier === 'image') {
      withImage = true;
      renderQuestions(index, data, withImage, quizContainer)
    } else {
      renderQuestions(index, data, withImage, quizContainer)
    }
    if (data[index].type === 'row') {
      withImage = true;
      renderRow(index, data, quizContainer, nextBtn)
    }
  }
}

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    clearcontent('#hide')
    testPage()

    const content = getElement('.content')
    const quizContainer = getElement('.quiz-container')
    const nextBtn = getElement('.next-btn')
    const opt = getElement('.quiz-options')

    showQuestion(0, quizContainer, nextBtn)
    eventListener(content, quizContainer, nextBtn)
  })
})

function eventListener(content, quizContainer, nextBtn) {
  content.addEventListener('click', (e) => {
    selectedOption(e, quizContainer)
    selectedAddition(e, quizContainer, nextBtn)
    if (e.target.classList.contains('next-btn')) {
      nextBtn.disabled = true;

      showQuestion(Number(quizContainer.dataset.currentStep) + 1, quizContainer, nextBtn)
      updateProgressBar(Number(quizContainer.dataset.currentStep), data);
    }
    content.addEventListener('change', (e) => {
      if (e.target.classList.contains('radiobtn')) {
        results[e.target.name] = [e.target.value];
        nextBtn.disabled = false;
      }
    })
  })
}
