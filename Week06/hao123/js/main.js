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
    //设置主题
    var theme = getTheme("theme") ? getTheme("theme") : false;
    changeTheme(theme);
    
    $(".theme span").click(function() {
        var theme_select = $(this).data("theme");
        changeTheme(theme_select);

    });

});

/**
 * 改变主题
 */
function changeTheme(o) {
    if (o) {
        $("#theme").attr('href', 'css/theme_' + o + ".css");
        setTheme('theme', o);
    }

}

//存在缓存
function setTheme(k, v) {
    var localStorage = getLocalStorage();
    if (localStorage) {
        return localStorage.setItem(k, v);
    } else {
        $.cookie('the_cookie', 'the_value', {
            expires: 7
        });
        $.cookie(k, v);
    }

}

//获取
function getTheme(o) {
    var localStorage = getLocalStorage();
    if (localStorage) {
        return localStorage.getItem(o);
    } else {
        $.cookie(o);
    }

}
//获取浏览器缓存对象
function getLocalStorage() {
    if (typeof localStorage == "object") {
        return localStorage;
    } else if (typeof globalStorage == "object") {
        return globalStorage[location.host]
    } else {
        return false;
    }
}
