import { getElement } from "./helpers/utils.js";
import { getUser } from "./request/request.js";

function withImgCheck(withImage, index) {
  if(withImage && index === 9) {
    return `
    <div class="img-quiz-container">
    <img src='../assets/svg/imageTest.svg' class="img-quiz"/>
    </div>
    `
  } else {
    return ``
  }
}

export const renderQuestions = (index, data, withImage, quizContainer) => {
  let img;

  if (data[index]) {
    const renderOptions = () => data[index].answers.map((option, index) => `
    <li class="task-item">
     <label for=${option.value} class="label">
   <input type="radio" value=${option.value}
   name=${option.value} class="radiobtn"
   id=${option.value}
   > ${option.label}</label>
     </li>
  `).join("")

    quizContainer.innerHTML = `
  <div class="content__test-question">
    <p id="questions">
    ${data[index].question}
    </p>
  </div>

  ${withImgCheck(withImage, index)}
  
   <ul class="quiz-options">
   ${renderOptions()}
   </ul>
  `
  }
}

export const renderColor = (index, data, quizContainer, nextBtn) => {
  if (data[index]) {
    const renderCol = () => data[index].answers.map((opt) => `
    <li class="task-item task-item-color" style=background-color:${opt.value}
    name=${opt.name} value=${opt.value}
    >
      </li>
    `).join("")
    quizContainer.innerHTML = `
    <div class="content__test-question">
      <p id="questions">
      ${data[index].question}
      </p>
    </div>
  
     <ul class="quiz-options quiz-options-color">
     ${renderCol()}
     </ul>
    `
  }
}

export const renderRow = (index, data, quizContainer, nextBtn) => {
  let img;
  if(index === 7) {
     img = '../assets/img/imgquiz1.png'
  } else if(index === 10) {
     img = '../assets/img/imgquiz2.png'
  }

  if (data[index]) {
    const renderRow = () => data[index].answers.map((opt) => `
    <li class="task-item task-item-row">
    ${opt.value}
      </li>
    `).join("")
    quizContainer.innerHTML = `
    <div class="content__test-question">
      <p id="questions">
      ${data[index].question}
      </p>
      <div class="img-quiz-container">
      <img src=${img} class="img-quiz"/>
      </div>
    </div>
  
     <ul class="quiz-options quiz-options-color row">
     ${renderRow()}
     </ul>
    `
  }
}

export async function renderUser() {
  let user = await getUser();
  const innerHTML = `
  <p class="res_header user_info">Информация о пользователе</p>
  <div class="user_data">
   <div class=col1>
     <p>Имя:</p>
     <p>Рост:</p>
     <p>Вес:</p>
     <p>Цвет волос:</p>
   </div>
   <div class=col2>
   <p>${user.name}</p>
   <p>${user.height}</p>
   <p>${user.mass}</p>
   <p>${user.hair_color}</p>
   </div>
  </div>
  `
  const userDataContainer = getElement('.user_data-container')
  userDataContainer.innerHTML += innerHTML
}