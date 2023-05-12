const moveToProjects = document.querySelector('.moveToProjects')
const moveToContacts = document.querySelector('.moveToContacts')
moveToProjects.addEventListener('click', event => {
    event.preventDefault()
    scrollTo(0, 550)
})

moveToContacts.addEventListener('click', event => {
    event.preventDefault()
    scrollTo(0, 5000)
})

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.imgRigth');
    
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
  
      // verifica se o elemento está visível na tela
      if (position < window.innerHeight) {
        element.classList.add('animate-scroll');
      }
    }
  });
  
  
  