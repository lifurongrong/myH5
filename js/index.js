
let mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',//垂直方向
    loop: 'true',//可循环
    on: {
        init() {
            // let h = innerHeight;
            // let item5 = document.getElementById('item5');
            // let distance = (h - item5.clientHeight - item5.offsetTop) / 2;
            // console.log(h, item5.clientHeight, item5.offsetTop, distance);

            // $('.slide2 [data-m]').css({
            //     'transform': `translateY(-${distance}px)`,
            // })

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
            });
        },
        slideChange: function () {
            let swiperIndex = this.activeIndex;
            swiperIndex = swiperIndex == 4 ? 1 : (swiperIndex == 0 ? 3 : swiperIndex);
            $('.swiper-slide [data-m]').removeClass('animate');
            $(`.slide${swiperIndex} [data-m]`).addClass('animate');
            $('.currentBar').css({ width: 100 / 3 * swiperIndex + '%' })
        }
    }
});



