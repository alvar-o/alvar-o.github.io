

const body = document.getElementsByTagName('body')[0],
      heroImg = document.querySelector('.hero img'),
      heroHeading = document.querySelector('.hero-heading'),
      projects = document.querySelector('.projects'),
      hide = document.querySelector('.hide-all')

// body.classList.toggle('loading');
heroHeading.classList.add('initial-state');
heroImg.classList.add('initial-state');
projects.classList.add('hidden')


window.addEventListener('DOMContentLoaded', reveal);

function reveal() {
  setTimeout(() => {
    hide.classList.add('fade')
    // body.classList.remove('loading');

    heroImg.classList.remove('initial-state');
    heroHeading.classList.remove('initial-state');

    window.addEventListener('touchmove', revealProjects);
    window.addEventListener('wheel', revealProjects);

    projects.addEventListener('click', closeProjects)
    setTimeout(() => hide.remove(), 1000)
  }, 700)
}

function revealProjects(e) {
  console.log(e.wheelDeltaY);
  if (e.wheelDeltaY < 0) {
    projects.classList.remove('hidden')
    projects.classList.add('reveal')
  }
  else {
    closeProjects()
  }
}

function closeProjects() {
  projects.classList.add('hidden')
  projects.classList.remove('reveal')

}