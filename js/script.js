const showMenu = () => {
  let header = document.querySelector('.header-container');
  let menu = document.querySelector('.nav-menu')

  header.classList.toggle('changeFlexFlow')
  menu.classList.toggle('showMenu')
}

window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  header.classList.add('background')
})