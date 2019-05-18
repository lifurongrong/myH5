let num = 0;
let mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',//垂直方向
    loop: 'true',//可循环
    on: {
        init() {
            let w = innerHeight;
            $('#listBg').css({
                width: w * 1.8 + 'px',
                height: w * 1.8 + 'px'
            });
            $('#line2').css({
                width: w * 1.8 + 'px',
                height: w * 1.8 + 'px'
            })
        },
        slideChange: function () {
            // console.log(this.$el[0].querySelectorAll('[data-m="move"]'));
            console.log(this);
            
            num > 2 ? num = 0 : null;
            num++;
            console.log(num);
            
        }
    }
})


let $musicIcon = $('.music_icon');
let isRunning = false;
$musicIcon.on('click', function () {
    if (isRunning) {
        $(this).css({ animationPlayState: 'paused' });
        isRunning = false;
    } else {
        $(this).css({ animationPlayState: 'running' });
        isRunning = true;
    }
})