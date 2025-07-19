let toggle = false

const callBackFunc = (event) => {    
    if(event.target.className !== 'modal' && event.target.className !=='modal-content'){
       toggle = !toggle
       container.style.display = toggle ? 'flex' : 'none'
    }
}

const modalClose = () => {
    container.style.display = 'none'
}

const container = document.querySelector('.modalContainer')
const buttonClick = document.querySelector('button');
const closeBtn = document.getElementById('closeModal');
buttonClick.addEventListener('click', (e) => callBackFunc(e))
container.addEventListener('click', (e) => callBackFunc(e))
closeBtn.addEventListener('click', modalClose)