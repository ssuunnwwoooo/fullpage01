$(function () {

    $('.Main_content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        /* 반응형일때 풀페이지빼기 */
        scrollOverflow: true,
        easing: 'easeOutBounce',
        afterRender: function () {
            $('.Main_content .section').eq(0).addClass('on')
        },


        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },


        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') { //스크롤 업 하면 사라짐
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });

})