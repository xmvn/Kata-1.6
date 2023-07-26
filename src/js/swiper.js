import Swiper from 'swiper/bundle'
const breakpoint = window.matchMedia('(min-width:768px)')
const swipers = document.querySelectorAll('.swiper-container')

export function swiperInit() {
  swipers.forEach((element) => {
    let mySwiper
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true)
        return
      } else if (breakpoint.matches === false) {
        return enableSwiper()
      }
    }
    const enableSwiper = function () {
      mySwiper = new Swiper(element, {
        slideClass: 'card',
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        pagination: {
          el: element.querySelector('.swiper-pagination'),
          clickable: true
        }
      })
    }
    breakpoint.addEventListener('change', () => {
      breakpointChecker()
    })
    breakpointChecker()
  })
}
