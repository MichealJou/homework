var result = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];


window.onload = function() {

    var relust1 = document.getElementById("btnre");
    relust1.onclick = function() {
        var r = searchCal();
        var text = document.getElementById("relust");
        text.innerText = r;
    }
}



function searchCal() {
    var re = result.unique2();
    var resultHtml = "数组:";
    var s = new Array();
    var b = new Array();
    var f = new Array();
    var e = new Array();
    for (var i = 0; i < re.length; i++) {
        var v = re[i];
        var num = 0;
        var array = new Array();
        for (var j = 0; j < result.length; j++) {

            var vj = result[j];
            if (vj == v) {
                num++;
                array.push(j);
            }

        }
        f.push(v);
        s.push(v + ":" + num);
        e.push(v + ":[" + array + "]");
        b.push(array);
    }


    return resultHtml + " " + f.toString() + " 个数： " + s.toString() + " 位置：" + e.toString();
}

Array.prototype.unique2 = function() {
    this.sort(); //先排序
    var res = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== res[res.length - 1]) {
            res.push(this[i]);
        }
    }
    return res;
}
