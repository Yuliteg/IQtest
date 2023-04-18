
export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if(element) return element;
  throw new Error(
    `Selector: ${selection}, no such element exist`
  )
}


const progress = getElement('.progress-bar')

export function updateProgressBar(id, data) {
  progress.style.width =
    ((id / (data.length - 1)) * 100).toFixed(2) + "%";
}