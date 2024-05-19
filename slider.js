class slider{
    slider = '';
    constructor(class_name, kwargs){
        if (document.querySelector(class_name)) {
            this.slider = document.querySelector(class_name);
            this.btns = this.slider.querySelectorAll('button');
            this.prevBtn = this.btns[0] || null
            this.nextBtn = this.btns[1] || null
            this.pagination = this.slider.querySelector('div')
            this.slider.classList.add('sldr_class')
            if(kwargs) {
                this.userKwargs = kwargs;
                set_config();
            }
            this.main()
        } else {
            console.log('Слайдер, по указанному классу/идентификатору, на странице не найден!')
        }
    }

    set_config() {
        this.sliderContainer = this.slider.querySelector('ul');//ul в слайдере
        this.update_param();
        
    }

    update_param() {
        console.log(this.slider);
        this.widthContainer = this.sliderContainer.offsetWidth;//Ширина ul в слайдере
        this.heightContainer = this.sliderContainer.offsetHeight;//Высота ul в слайдере
    }

    prevSlider() {
        console.log('prevSlider()')
    }

    nextSlider() {
        console.log('nextSlider()')
    }

    main() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', this.prevSlider)
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', this.nextSlider)
        }
        window.addEventListener('resize', this.update_param)
    }

    
}