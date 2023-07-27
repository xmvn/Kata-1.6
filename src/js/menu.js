const openMenuBtn = document.querySelector('.header__burger')
const closeMenuBtn = document.querySelector('.header__close-btn')
export const menu = document.querySelector('.menu')
const blur = document.querySelector('.blur')
import { call } from './call'
import { feedback } from './feedback'

export function openCloseMenu() {
  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('menu--opened')
    blur.classList.add('blur--active')
    document.body.style.overflow = 'hidden'
  })

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('menu--opened')
    if (
      !call.classList.contains('call--opened') &&
      !feedback.classList.contains('feedback--opened')
    ) {
      blur.classList.remove('blur--active')
    }
    document.body.style.overflow = ''
  })

  blur.addEventListener('click', () => {
    menu.classList.remove('menu--opened')
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })
}
