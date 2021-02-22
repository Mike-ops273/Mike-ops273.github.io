const navToggle = document.querySelector('.nav_toggle'); 
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); /*toggles between the class name of an element.
    'nav-open' and 'nav-toggle' will be related to one another. */
}) 

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/**ARROW */
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });
/** */