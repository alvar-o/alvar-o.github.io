body = document.getElementsByTagName('body')[0];
heroImg = document.querySelector('.hero img');
heroHeading = document.querySelector('.hero-heading');


body.classList.toggle('loading');

document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    console.log('loading completed');
    body.classList.toggle('loading');

    heroImg.classList.add('grow');
    heroHeading.classList.add('fade-in')
  }
});
