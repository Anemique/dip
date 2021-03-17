// Размеры рабочей области браузера пользователя
let windowInnerHeight = document.documentElement.clientHeight;
let windowInnerWidth = document.documentElement.clientWidth;
$(window).resize(function() {
    windowInnerHeight = document.documentElement.clientHeight;
    windowInnerWidth = document.documentElement.clientWidth;
    $('.section').css({'width': windowInnerWidth, 'height': windowInnerHeight})
    $('.main-grid').css('height', windowInnerHeight)
});

// Горизонтальный скролл + размеры блоков под размер браузера

$(document).ready(function () {
    $('html, body').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * windowInnerWidth);
        e.preventDefault();
    });
});
$('.section').css({'width': windowInnerWidth, 'height': windowInnerHeight})
$('.main-grid').css('height', windowInnerHeight)

// Паралакс для элементов

let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// Управление svg из под img

$('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});


// Стрелка скрола
$('.arrow-down').click(function () {
    $('html, body').scrollLeft(windowInnerWidth);
})



