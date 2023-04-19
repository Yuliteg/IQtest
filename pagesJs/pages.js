import { run_clock } from "../src/timer.js";
const headerText = document.querySelector(".header_p")

const time_in_minutes = 10;
const current_time = Date.parse(new Date());
const deadline = new Date(current_time + time_in_minutes * 60 * 1000);

export function resultProcessing() {
  const innerHTML = `<div class=content__test-question>
  <p class=res_processing>Обработка результатов</p>
  </div>
  <div class="loader my_loader"></div>
  <div class="content__test-question loader_text">
  <p>Определение стиля мышления...........</p>
  </div>
  `
  document.getElementById("#quiz-container").innerHTML += innerHTML;
}

export function resultPage() {
  headerText.innerHTML = "Готово!"
  const innerHTML = `
   <div class=content__test-question>
    <p class=res_header>Ваш результат рассчитан</p>
    <p class=res_text><span>Вы относитесь к 3%</span> респондентов, чей <br>
     уровень интеллекта более чем на <br>
      15 пунктов отличается от среднего в <br>
      большую или меньшую сторону!</p>
      <p class="res_header green">Скорее получите свой результат!
      </p>
   </div>
   <div class=res_card>
     <p class=res_card-text>В целях защиты персональных <br>
      данных результат теста, их <br>
      подробная интерпретация и <br>
      рекомендации доступны в виде <br>
       голосового сообщения по звонку <br>
       с вашего мобильного телефона
       </p>
   </div>
   <div content__test-question>
    <p class="res_card-text green">Звоните скорее, запись доступна всего</p>
    <p class="res_card-text green nospace" id=#clockdiv>
     10:00 МИНУТ
    </p>
   </div>
   <div  class=res_button-container>
    <button class="btn flex res_btn">
     <img src="../assets/svg/phone.svg"/>
     <p class=res_card-text>позвонить и прослушать <br>
     результат </p>
    </button>
   </div>
  `
  document.getElementById("#content").innerHTML += innerHTML;
  run_clock('clockdiv',deadline)
}

