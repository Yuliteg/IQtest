const anchor = document.querySelector('a[href="#scroll-info"]')
const scrollDetail = document.querySelector('a[href="#scroll-detail"]')

anchor.addEventListener("click", function(e) {
  e.preventDefault()
  const blockId = anchor.getAttribute('href')
  document.querySelector("" + blockId).scrollIntoView({
    behavior: "smooth",
    block: 'center', 
    inline: 'nearest'
  })
})

scrollDetail.addEventListener("click", function(e) {
  e.preventDefault()
  const blockId = scrollDetail.getAttribute('href')
  document.querySelector("" + blockId).scrollIntoView({
    behavior: "smooth",
    block: 'center', 
    inline: 'nearest'
  })
})