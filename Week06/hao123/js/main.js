var navListenerElement = document.getElementById("navListener");
var navListener = function(e) {
    var target = EventUtil.getTarget(e);
    $("a.link2").removeClass("active");
    var parentNode = target.parentNode;
    var clazz = parentNode.getAttribute("class");
    parentNode.setAttribute("class", clazz + " active");
}

//注册监听事件
EventUtil.addHandler(navListenerElement, "click", navListener);

$(function() {
    $.cookie('the_cookie', 'the_value', {
        expires: 7
    });

    var theme = $.cookie('theme');
    if (theme) {
        changeTheme(theme);
    }

    $(".theme span").click(function() {
        var theme_select = $(this).data("theme");
        if (theme_select == 1) {
            changeTheme(1);
        } else if (theme_select == 2) {
            changeTheme(2);
        } else if (theme_select == 3) {
            changeTheme(3);
        } else if (theme_select == 4) {
            changeTheme(4);
        } else if (theme_select == 5) {
            changeTheme(5);
        }
        $.cookie('theme', theme_select);

    });

});

/**
 * 
 */
function changeTheme(o) {
    var link = $("<link rel='stylesheet' href='css/theme_" + o + ".css'>");
    $("head").append(link);
}
