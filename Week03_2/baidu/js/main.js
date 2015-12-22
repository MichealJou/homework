(function($) {

    $("[data-show='show']").each(function(index, elments) {
        $(elments).hover(function() {
            var _this = $(this);
            var showId = _this.data("show-id");
            $("#" + showId).show();
        }, function(e) {

            var _this = $(this);
            var showId = _this.data("show-id");
            var showIdDiv = $("#" + showId);
            $(showIdDiv).hide();
            $(showIdDiv).mouseover(function(){
                $(showIdDiv).show();
            });
           $(showIdDiv).mouseout(function(){
                $(showIdDiv).hide();
            });
        });

    });

})(jQuery);
