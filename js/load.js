body = document.getElementsByTagName('body')[0];
heroImg = document.querySelector('.hero img');
heroHeading = document.querySelector('.hero-heading');
messageBubble = document.querySelector('#message');


body.classList.toggle('loading');
heroHeading.classList.add('initial-state');
heroImg.classList.add('initial-state')
messageBubble.classList.add('initial-state');

document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    console.log('loading completed');
    body.classList.remove('loading');

    heroImg.classList.remove('initial-state');
    heroHeading.classList.remove('initial-state');

    document.addEventListener('wheel', function() {
      console.log('moving');
      messageBubble.classList.remove('initial-state');
    });
    document.addEventListener('touchstartal', function() {
      console.log('moving');
      messageBubble.classList.remove('initial-state');
    });
  }
});
