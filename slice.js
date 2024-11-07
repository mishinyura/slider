
class Slice {
    obj;
    slider;
    widthCard;//Ширина слайда
    heightCard;//Высота слайда
    widthSlider;//Ширина контейнера слайдера
    heightSlider;//Высота контейнера слайдера
    activeCard;//Активный слайд
    prevCard;//Прошлый слайд
    nextCard;//Следующий слайд
    cardsList = [];
    countCards;//Количество слайдов
    amountPreview = 3;
    containerBtns;//Блок в котором лежат кнопки
    nextBtn;//Кнопка следующий слайд
    prevBtn;//Кнопка предыдущий слайд
    classObj = 'slice__obj';//Класс контейнера слайдера
    classSlider = 'slice__slider'//Класс слайдера
    classCard = 'slice__card';//Класс слайда
    classBtns = 'slice__btns';//Класс контейнера кнопок
    classNextBtn = 'slice__btn_next';//Класс кнопки следующий слайд
    classPrevBtn = 'slice__btn_prev';//Класс кнопки предыдущий слайд
    classActiveCard = 'active';//Класс активного слайда
    classPrevCard = 'prev';//Класс предыдущего слайда
    classNextCard = 'next';//Класс следующего слайда

    constructor(kwargs){
        this.obj = document.querySelector(kwargs.slider)
        this.setParam()
        console.log(this.nextBtn)
        // this.nextBtn.addEventListener('click', (btn) => {
        //     this.nextSlide(btn, this.cardsList, this.widthCard)
        // })
        this.nextBtn.addEventListener('click', this.test)
        this.prevBtn.addEventListener('click', (btn) => {
            this.prevSlide(btn, this.cardsList, this.widthCard)
        })
        window.addEventListener('resize', this.setParam)
    }

    searchActiveSlide() {
        console.log(ex.message)
        
    }

    createDublicateCard() {
        console.log('Create dublicate card')
    }

    setParam() {
        try{
            if (!this.obj) {
                throw new Error('Слайдер не найден')
            } else {
                this.obj.classList.add(this.classObj)
                this.slider = this.obj.querySelector('ul')
                this.slider.classList.add(this.classSlider)
                this.countCards = this.slider.childElementCount
                if (!this.countCards) {
                    throw new Error('Нет ни одного слайда')
                }
                for (let i = 0; i < this.countCards; ++i) {
                    this.cardsList.push(this.slider.children[i])
                }

                this.containerBtns = this.obj.querySelector('div')
                this.containerBtns.classList.add(this.classBtns)
                this.nextBtn = this.containerBtns.children[1]
                this.nextBtn.addEventListener('click', this.nextSlide)
                this.prevBtn = this.containerBtns.children[0]
                this.nextBtn.classList.add(this.classNextBtn)
                this.prevBtn.classList.add(this.classPrevBtn)
                this.widthSlider = this.obj.offsetWidth
                this.heightSlider = this.obj.offsetHeight
                this.widthCard = this.cardsList[0].offsetWidth
                this.heightCard = this.cardsList[0].offsetHeight
            }
        } catch (ex) {
            console.log(ex.message)
        }
    }

    test(dt){
        console.log(this) 
    }

    nextSlide(btn, obj, shift) {
        let data = document.querySelectorAll('.slider__slide')
        console.log(data)
        // console.log(obj)
        // if (obj) {
        //     for (let card of obj) {
        //         card.style.left = `-${shift}px`
        //     }
        // }
        
        // obj.style.left = '-200px'
    }

    prevSlide(btn, obj, shift) {
        console.log(btn.target)
        if (obj) {
            for (let card of obj) {
                card.style.left = `${shift}px`
            }
        }
        
    }

}