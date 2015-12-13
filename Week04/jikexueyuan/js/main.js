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

});
