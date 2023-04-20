import { getElement } from "./utils.js";

  const toggleSidebar = getElement('.header__burger');
  const sidebarOverlay = getElement('.sidebar-overlay');
  const closeBtn = getElement('.sidebar__close');

  toggleSidebar.addEventListener('click', () => {
    sidebarOverlay.classList.add('show')
  })

  closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show')
  })

export function closeSidebar() {
  sidebarOverlay.classList.remove('show')
}