var userInfo = "USER_INFO";
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
            $(showIdDiv).mouseover(function() {
                $(showIdDiv).show();
            });
            $(showIdDiv).mouseout(function() {
                $(showIdDiv).hide();
            });
        });
    });

})(jQuery);

//处理登录的拖拽事件
+ (function($) {
    //获取登录的节点
    var login_element = $("#login");
    var login_header = $("#login_header");
    var login_header1 = $("#login_header1");
    var is_move = false;
    var $top = 0;
    var $left = 0;
    $(login_header).mousedown(function(event) {
        //获取宽度
        $left = event.pageX - $(login_header).offset().left + ($(login_element).outerWidth(true) - $(login_element).outerWidth()) / 2;
        $top = event.pageY - $(login_header).offset().top + ($(login_element).outerHeight(true) - $(login_element).outerHeight()) / 2;

        is_move = true;
        $(document).mouseup(function(event) {
            is_move = false;
        });
        $(document).mousemove(function(event) {
            if (is_move) {
                var x = event.pageX - $left;
                var y = event.pageY - $top;
                $(login_element).css({
                    'left': x,
                    'top': y
                });
            }

        });
    });
    $(login_header1).mousedown(function(event) {
        //获取宽度
        $left = event.pageX - $(login_header1).offset().left + ($(login_element).outerWidth(true) - $(login_element).outerWidth()) / 2;
        $top = event.pageY - $(login_header1).offset().top + ($(login_element).outerHeight(true) - $(login_element).outerHeight()) / 2;

        is_move = true;
        $(document).mouseup(function(event) {
            is_move = false;
        });
        $(document).mousemove(function(event) {
            if (is_move) {
                var x = event.pageX - $left;
                var y = event.pageY - $top;
                $(login_element).css({
                    'left': x,
                    'top': y
                });
            }

        });
    });
    $("[data-close='close']").click(function() {
        $("#login").hide();
        $(".masklayer").hide();
    });
    $("#logo").click(function() {

        $("#login").show();
        $(".masklayer").show();
    });
})(jQuery);

$(function() {
    //点击登录
    $("#ss").click(function() {
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        if (!userName.length) {
            $("#mj_error").text("请输入账号");

        } else {
            if (!passWord.length) {
                $("#mj_error").text("请输入密码");
            } else {
                if (userName == 'test1' && passWord == '123456') {
                    var sessionStorage = getSessionStorage();
                    sessionStorage.setItem("userInfo", 1);
                    $("#login").hide();
                    $(".masklayer").hide();
                    $("#left_header").removeClass('hidden');
                    $(".header").removeClass('cl_header_bottom');
                    $("#logo_ed").removeClass('hidden');
                    $("#logo").hide();
                    $(".yidong_tp").removeClass("yidong_tp");
                } else {
                    $("#mj_error").text("账号或密码错误");
                }
            }
        }


    });
    var isL = isLogin();

    if (!isL) {
        $("#left_header").addClass('hidden');
        $(".header").addClass('cl_header_bottom');
        $("#logo_ed").addClass('hidden');
    } else {

        $("#left_header").removeClass('hidden');
        $(".header").removeClass('cl_header_bottom');
        $("#logo_ed").removeClass('show');
        $("#logo").hide();
        $(".yidong_tp").removeClass("yidong_tp");
    }

    $("#pop_yemian").click(function() {
        $("#login_yemian").hide();
        $("#qrcode_login").show();
    });
    $("#qrcode_login_footer").click(function() {
        $("#login_yemian").show();
        $("#qrcode_login").hide();

    });
    $(".open").focus(function() {

        $(this).parent().addClass("mj_input_focus");
    });
    $(".open").blur(function() {
        $(this).parent().removeClass("mj_input_focus");
    });
    //退出登录
    $("#logout").click(function() {
        var sessionStorage = getSessionStorage();
        sessionStorage.removeItem("userInfo");
        $("#left_header").addClass('hidden');
        $(".header").addClass('cl_header_bottom');
        $("#logo_ed").addClass('hidden');
        $("#logo").show();
        $(".right_header").addClass("yidong_tp");
    });

    //隐藏
    $("#right_more_product").hover(function() {
        $("#right_bar_nav").fadeIn();
    });
    $("#right_bar_nav").mouseleave(function() {
        $(this).fadeOut();
    });

    $(".s-menu-item").click(function() {
        $(".current").removeClass("current");
        $(this).addClass("current");
        $(".s-ctner-contents").hide();
        var a = $(this).data("id");

        $("#" + a).show();


    });

});
//检查用户是否登录
function isLogin() {
    var userInfo = getUserInfo("userInfo");
    if (userInfo) {
        return true;
    } else {
        return false;
    }

}


//根据key 获取用户的基本的信息
function getUserInfo(o) {
    var sessionStorage = getSessionStorage();

    if (sessionStorage) {
        return sessionStorage.getItem(o);
    }
}


function getSessionStorage() {
    if (window.sessionStorage) {
        return sessionStorage;
    } else {
        return false;
    }
}
