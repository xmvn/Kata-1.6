const blur = document.querySelector('.blur')
const openCallBtn = document.querySelectorAll('.action-buttons__call')
const closeCallBtn = document.querySelector('.call__close-btn')
export const call = document.querySelector('.call')
const callContainer = document.querySelector('.call__container')
import { feedback } from './feedback'
import { menu } from './menu'

export function openCloseCall() {
  for (let i = 0; i < openCallBtn.length; i++) {
    let btn = openCallBtn[i]
    btn.addEventListener('click', () => {
      call.classList.add('call--opened')
      callContainer.style.display = 'flex'
      blur.classList.add('blur--active')
      document.body.style.overflow = 'hidden'
    })
  }

  closeCallBtn.addEventListener('click', () => {
    call.classList.remove('call--opened')
    if (
      !feedback.classList.contains('feedback--opened') &&
      !menu.classList.contains('menu--opened')
    ) {
      blur.classList.remove('blur--active')
    }

    document.body.style.overflow = ''
  })

  blur.addEventListener('click', () => {
    call.classList.remove('call--opened')
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })
}
