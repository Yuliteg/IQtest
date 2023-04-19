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