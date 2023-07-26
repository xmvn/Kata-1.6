const blur = document.querySelector('.blur')
const openCallBtn = document.querySelectorAll('.action-buttons__call')
const closeCallBtn = document.querySelector('.call__close-btn')
const call = document.querySelector('.call')
const callContainer = document.querySelector('.call__container')

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
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })

  blur.addEventListener('click', () => {
    call.classList.remove('call--opened')
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })
}
