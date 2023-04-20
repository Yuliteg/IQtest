import { run_clock } from "../src/helpers/timer.js";
import { getElement } from "../src/helpers/utils.js";
import { renderUser } from "../src/renderFunctionality.js";
const headerText = document.querySelector(".header_p")

const time_in_minutes = 10;
const current_time = Date.parse(new Date());
const deadline = new Date(current_time + time_in_minutes * 60 * 1000);

export function resultPage() {
  const textContainer = getElement('.hero__intro-header-text')
  textContainer.innerHTML = `<p class=header_p>Готово!
  </p>`
  renderUser()

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
   <div class="user_data-container"></div>
  `
  getElement(".content").innerHTML += innerHTML;
  run_clock('clockdiv', deadline)
}