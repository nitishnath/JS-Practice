//Event Capturing
document.getElementById('grandparent').addEventListener('click', () => {
    console.log('clicked grandparent');
  }, true)

  document.getElementById('parent').addEventListener('click', () => {
    console.log('clicked parent');
  }, true)

  document.getElementById('child').addEventListener('click', () => {
    console.log('clicked child');
  })
  document.getElementById('son').addEventListener('click', () => {
    console.log('clicked son');
  })

//output: clicked grandparent, clicked parent, clicked child

//e.stopPropagation()

//event.target vs this.target vs event.currentTarget
// const grandparent = document.querySelector('div');
// const div = document.querySelector('div')
// const form = document.querySelector('form')
// const button = document.querySelector('button')

// div.addEventListener('click', func);
// button.addEventListener('click', func);
// form.addEventListener('click', func);

// function func(e) {
//   alert('currentTarget = ' + e.currentTarget.tagName + ', target = ' + e.target.tagName + ', this.target = ' + this.tagName)
// }