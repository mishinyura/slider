const sliderContainer = document.querySelector('.slider');
const slider = sliderContainer.querySelector('.slider__slides');
const btnPrev = sliderContainer.querySelector('.slider__btn_prev');
const btnNext = sliderContainer.querySelector('.slider__btn_next');
const slide = slider.querySelectorAll('.slider__slide');
const classActiveSlide = 'active-slide';
const classPrevSlide = 'prev-slide';
const classNextSlide = 'next-slide';
const transformNoStyleTemp = 'scale(.9) translate'
const transformStyleTemp = 'scale(1) translate'

let widthSlide;
let widthSlider;
let activeSlide;
let prevSlide;
let nextSlide;
let transformValue;
let countPresentSlide = 3;

const editStyleSlide = () => {
  //Действия до обновления переменной с активным слайдом
  prevSlide.style.transform = `${transformNoStyleTemp}(${widthSlide * countPresentSlide}px)`
  activeSlide.style.transform = `${transformNoStyleTemp}(${-(transformValue+transformValue*10/100 + 4)}px)`
  nextSlide.classList.add(classActiveSlide)
  nextSlide.classList.remove(classNextSlide)
  prevSlide.classList.remove(classPrevSlide)
  activeSlide.classList.remove(classActiveSlide)
  activeSlide.classList.add(classPrevSlide)
  //Обновляем объект с активным классом
  activeSlide = slider.querySelector(`.${classActiveSlide}`)
  console.log(activeSlide)
  //Действия после обновления переменной с активным слайдом
  activeSlide.style.transform = `${transformStyleTemp}(${-(transformValue)}px)` //transformValue-transformValue*10/100
  if (activeSlide.nextElementSibling) {
    nextSlide = activeSlide.nextElementSibling
    activeSlide.nextElementSibling.classList.add(classNextSlide)
  }
  nextSlide.style.transform = `${transformNoStyleTemp}(${-(transformValue+transformValue*10/100 + 4)}px)`
  transformValue += widthSlide;
}

const parameterUpdate = () => {
  widthSlide = slide[0].clientWidth;
  transformValue = widthSlide;
};

parameterUpdate()


const nextFromBtn = () => {
  activeSlide = slider.querySelector(`.${classActiveSlide}`) //Обновляем объект с активным классом
  console.log(slider.children)
  if (activeSlide.nextElementSibling) {
    nextSlide = activeSlide.nextElementSibling;
    prevSlide = activeSlide.previousElementSibling;
    editStyleSlide();
  }
  console.log(slider.children[slide.length - 1])
  if (slider.children[slide.length - 1].classList.contains(classActiveSlide)) {
    slider.children[0].classList.add(classNextSlide)
  }
  
  console.log(activeSlide)
};

const prevFromBtn = () => {};


btnNext.addEventListener('click', nextFromBtn);
btnPrev.addEventListener('click', prevFromBtn);
document.addEventListener('resize', parameterUpdate);

// setInterval(() => {
//   nextFromBtn();
// }, 5000)