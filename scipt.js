const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); /*toggles between the class name of an element.
    'nav-open' and 'nav-toggle' will be related to one another. */
})