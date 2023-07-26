const openFeedbackBtn = document.querySelectorAll('.action-buttons__chat')
const closeFeedbackBtn = document.querySelector('.feedback__close-btn')
const feedback = document.querySelector('.feedback')
const feedbackContainer = document.querySelector('.feedback__container')
const blur = document.querySelector('.blur')

export function openCloseFeedback() {
  for (let i = 0; i < openFeedbackBtn.length; i++) {
    let btn = openFeedbackBtn[i]
    btn.addEventListener('click', () => {
      feedback.classList.add('feedback--opened')
      feedbackContainer.style.display = 'flex'
      blur.classList.add('blur--active')
      document.body.style.overflow = 'hidden'
    })
  }

  closeFeedbackBtn.addEventListener('click', () => {
    feedback.classList.remove('feedback--opened')
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })

  blurSecond.addEventListener('click', () => {
    feedback.classList.remove('feedback--opened')
    blur.classList.remove('blur--active')
    document.body.style.overflow = ''
  })
}
