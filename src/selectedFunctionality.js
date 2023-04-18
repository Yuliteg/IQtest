import { getElement } from "./utils.js";

const quizContainer = getElement('.quiz-container')
const nextBtn = getElement('.next-btn')

export function selectedColor(e) {
  quizContainer.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', (e) => {
      if (e.target.classList.contains('task-item-color')) {
        nextBtn.disabled = false;
        if (quizContainer.querySelector('.selected-color')) {
          const active = quizContainer.querySelector('.selected-color')
          active.classList.remove('selected-color')
        }
        option.classList.add('selected-color')
      }
    })
  })
}

export function selectedOption(e) {
  quizContainer.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', (e) => {
      if (e.target.checked) {
        if (quizContainer.querySelector('.selected')) {
          const active = quizContainer.querySelector('.selected')
          active.classList.remove('selected')
        }
        option.classList.add('selected')
      }
    })
  })
}