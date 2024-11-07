class slider {
  amountPresentSlides = 3
  constructor(cls, param) {
    console.log('Конструктор')
    this.container = document.querySelector(cls) || NaN,
    this.nextBtn = document.querySelector(param.navigation.next) || NaN,
    this.prevBtn = document.querySelector(param.navigation.prev) || NaN,
    this.amountPresentSlides = param.amountPresentSlides || 1
    console.log(this.container, this.nextBtn, this.prevBtn, this.amountPresentSlides)
    this.main()
  }

  parameterUpdate() {
    console.log('UP')
  }

  nextSlide() {
    console.log('next')
  }

  prevSlide() {
    console.log('prev')
  }

  main() {
    console.log(this.nextBtn)
    this.nextBtn.addEventListener('click', this.nextSlide);
    this.prevBtn.addEventListener('click', this.prevSlide);
    window.addEventListener('resize', this.parameterUpdate);
  }


}

new slider('.slider', {
  direction: 'vertical',
  loop: true,
  // amountPresentSlides: 3,

  navigation: {
    next: '.slider__btn_next',
    prev: '.slider__btn_prev',
  },
})