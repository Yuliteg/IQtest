export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if(element) return element;
  throw new Error(
    `Selector: ${selection}, no such element exist`
  )
}

export function updateProgressBar(id, data) {
  const progress = getElement('.progress-bar')
  progress.style.width =
    ((id / (data.length - 1)) * 100).toFixed(2) + "%";
}

export function clearcontent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}
