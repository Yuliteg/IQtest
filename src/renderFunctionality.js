
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
   name="radio" class="radiobtn"
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