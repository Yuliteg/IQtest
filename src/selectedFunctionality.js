import { getElement } from "./utils.js";

export function selectedOption(e, quizContainer) {
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

export function selectedAddition(e, quizContainer, nextBtn) {
  if (e.target.classList.contains('task-item-color')) {
    if (quizContainer.querySelector('.selected-color')) {
      const active = quizContainer.querySelector('.selected-color')
      active.classList.remove('selected-color')
    }
    e.target.classList.add('selected-color')
    nextBtn.disabled = false;
  } else if(e.target.classList.contains('task-item-row')) {
    if (quizContainer.querySelector('.selected-color')) {
      const active = quizContainer.querySelector('.selected-color')
      active.classList.remove('selected-color')
    }
    e.target.classList.add('selected-color')
    nextBtn.disabled = false;
  }
}