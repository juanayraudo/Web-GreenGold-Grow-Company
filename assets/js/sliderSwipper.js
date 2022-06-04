var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth; 
    var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

    return direction;
}