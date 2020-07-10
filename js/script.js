const target = document.querySelectorAll('[data-animacao]');
const animacaoClass = 'anima';
function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            
            element.classList.add(animacaoClass);
        }
    })
}

window.addEventListener('scroll', function() {
    animeScroll();
})