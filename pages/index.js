const elemetImage0 = document.querySelector('.elements__image0')
const popupImage = document.querySelector('.popup-image')
const elementsImage1 = document.querySelector('.elements__image1')
const elementsImage2 = document.querySelector('.elements__image2')
const button = document.querySelector('.popup__close')
const popupImagePhoto = document.querySelector('.popup-image__photo')

const elementsText0 = document.querySelector('.elements__text0')
const elementsText1 = document.querySelector('.elements__text1')
const elementsText2 = document.querySelector('.elements__text2')

const popupImageText = document.querySelector('.popup-image__text')

const buttonElement = document.querySelector('.elements__button-2')
const buttonElements1 = document.querySelector('.elements__button1')
const buttonElements2 = document.querySelector('.elements__button2')
const buttonElements3 = document.querySelector('.elements__button3')

const age = document.querySelector('.age')
const weigth = document.querySelector('.weigth')
const height = document.querySelector('.height') 
const chest = document.querySelector('.chest')
const hour = document.querySelector('.hour')
const check_out = document.querySelector('.check_out')
const payment = document.querySelector('.payment')

function openPopupImage0() {
    popupImage.classList.add('popup_opened')
    popupImageText.textContent = elementsText0.textContent 
    popupImagePhoto.src = elemetImage0.src
    age.textContent = ' Age: 23'
    weigth.textContent = 'Weigth: 55'
    height.textContent = 'Height: 168'   
    chest.textContent = 'Chest: 3' 
    hour.textContent = 'Hour: 120$'
    check_out.textContent = ' Check out: 120$'
    payment.textContent = '0x5Cb31F10b90eF89F67Ca346B1A28121822570d55'
}
elemetImage0.addEventListener('click', () => {
    openPopupImage0()
})

function openPopupImage1() {
    popupImage.classList.add('popup_opened')
    popupImageText.textContent = elementsText1.textContent 
    popupImagePhoto.src = elementsImage1.src
    age.textContent = ' Age: 19'
    weigth.textContent = 'Weigth: 55'
    height.textContent = 'Height: 171'
    chest.textContent = 'Chest: 2'
    hour.textContent = 'Hour: 150$'
    check_out.textContent = ' Check out: 150$'
    payment.textContent = '0xE005c5C87C697849A32296Ea6558051502b22F87'
}

elementsImage1.addEventListener('click', () => {
    openPopupImage1()
})

function openPopupImage2() {
    popupImage.classList.add('popup_opened')
    popupImageText.textContent = elementsText2.textContent 
    popupImagePhoto.src = elementsImage2.src
    age.textContent = ' Age: 22'
    weigth.textContent = 'Weigth: 59'
    height.textContent = 'Height: 164'
    chest.textContent = 'Chest: 2'
    hour.textContent = 'Hour: 135$'
    check_out.textContent = ' Check out: 135$'
    payment.textContent = '0x6706D5C873697849A33296Ea6558051502b22F65'
}
elementsImage2.addEventListener('click', () => {
    openPopupImage2()
})

function buttonRemove() {
    popupImage.classList.remove('popup_opened')
}

button.addEventListener('click', () => {
    buttonRemove()
})

buttonElements1.addEventListener('click', () => {
    openPopupImage0()
})
buttonElements2.addEventListener('click', () => {
    openPopupImage1()
})
buttonElements3.addEventListener('click', () => {
    openPopupImage2()
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
    buttonRemove()
    }
});

  