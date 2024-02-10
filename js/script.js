document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const headerList = document.querySelector('.header__list');

    burgerIcon.addEventListener('click', function () {
        headerList.classList.toggle('active');
    });
});
