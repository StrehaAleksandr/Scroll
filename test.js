'use strict';

var pageHeight = document.documentElement.scrollHeight;
var clientHeight = document.documentElement.clientHeight;

var list = document.querySelector('.navigation-list');
var discrptions = document.querySelectorAll('.item-discription');

function onWindowScroll() {
    if (window.pageYOffset > clientHeight) {
        list.classList.add('js-row');
        discrptions.forEach(function(item) {
            item.classList.add('js-discription-row');
        })
    }
    else {
        list.classList.remove('js-row');
        discrptions.forEach(function(item) {
            item.classList.remove('js-discription-row');
        })
    }
    console.log(window.pageYOffset);
}

window.addEventListener('scroll', onWindowScroll);