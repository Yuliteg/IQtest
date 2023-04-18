const quizContainer = document.querySelector('.quiz-container')

export const renderColor = (index, data) => {
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

export const renderRow = (index, data) => {
  let img = '../assets/img/imgquiz1.png'
  if (data[index]) {
    const renderRow = () => data[index].answers.map((opt) => `
    <li class="task-item task-item-row">
    <label>${opt.value}</label>
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