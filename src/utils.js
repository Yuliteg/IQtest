export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if(element) return element;
  throw new Error(
    `Selector: ${selection}, no such element exist`
  )
}