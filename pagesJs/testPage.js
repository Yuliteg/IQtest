import { getElement } from "../src/utils.js"

export function testPage() {
  const brainImg = getElement('.header__icon-container')
  const textContainer = getElement('.hero__intro-header-text')
  textContainer.innerHTML = `<p class=header_p>тест на определение IQ
  </p>`
  brainImg.innerHTML = `<img src="../assets/img/brain.png"
  alt="brain-img"
  class="header__icon-img">`

  const innerHTML = `
  <section class="content">
  <div class="content__container" id="#content">
    <div class="content__progress-container">
      <div class="progress-bar"></div>
    </div>

    <div class="quiz-container" id="#quiz-container">
      <ul class="quiz-options">
      </ul>
    </div>

    <div class="content__next-btn-container">
      <button class="btn next-btn" disabled>Далее</button>
    </div>
  </section>
  `
  document.getElementById("#hide").innerHTML += innerHTML;
}