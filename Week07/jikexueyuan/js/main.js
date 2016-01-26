$(function() {
    $("ul.hot-header li").mousemove(function(event) {
        var _this = $(this);
        if (_this.hasClass('hot_active')) {

        } else {
            _this.addClass('hot_active');
        }
        _this.prevAll().removeClass('hot_active');
        _this.nextAll().removeClass("hot_active");

        var showId = _this.data("show");
        $("#" + showId).show();
        $("#" + showId).prevAll().hide();
        $("#" + showId).nextAll().hide();
    });


    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true, //可选选项，自动滑动,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
        paginationElement: 'div',
        paginationHide: true
    })
    var mySwiper = new Swiper('.swiper-container1', {
        autoplay: 5000,
        loop: true ,//可选选项，自动滑动,
        slidesPerView: 4,
        slidesPerGroup: 4,
        prevButton: '.swiper-button-prev1',
        nextButton: '.swiper-button-next1'

    })

});
