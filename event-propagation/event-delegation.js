const callBackFunc = (e) => {
    if(e.target.id !== 'categories') {
    window.location.href =  window.location.href + '/' + e.target.id
    }    
}
const categories = document.querySelector('#categories')
categories.addEventListener('click', callBackFunc)

/**
 * Handles keyup event on input field.
 * @param {Event} e - The event object.
 * @returns {void}
 */
const func = (e) => {
    if(e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase() 
    }
}

const handleTextUpperCase = document.querySelector('.input-field')
handleTextUpperCase.addEventListener('keyup', func)