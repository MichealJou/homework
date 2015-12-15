/**
 * @author michale jou
 * @version 1.0.0
 *
 */

window.onload = function() {
    var btnscore = document.getElementById("btnscore");

    btnscore.onclick = function() {
        getScore();
    }
}

function getScore() {
    var score = document.getElementById("score");
    var scoreresult = document.getElementById("scoreresult");
    var scoreVal = score.value;
    if (isNumeric(scoreVal)) {
        var result = calculationScore(scoreVal);
        switch (result) {
            case 1:
                {
                    scoreresult.innerText = "一等生!";
                    break;
                };
            case 2:
                {
                    scoreresult.innerText = "二等生!";
                    break;
                };
            case 3:
                {
                    scoreresult.innerText = "三等生!";
                    break;
                };
            case 4:
                {
                    scoreresult.innerText = "四等生!";
                    break;
                };
            case 5:
                {
                    scoreresult.innerText = "五等生!";
                    break;
                };
            case 6:
                {
                    scoreresult.innerText = "六等生!";
                    break;
                };
            case 7:
                {
                    scoreresult.innerText = "七等生!";
                    break;
                };
            case 8:
                {
                    scoreresult.innerText = "八等生!";
                    break;
                };
            case 9:
                {
                    scoreresult.innerText = "九等生!";
                    break;
                };
            case 10:
                {
                    scoreresult.innerText = "十等生!";
                    break;
                };
            default:
                {
                    scoreresult.innerText = "不合法数字";
                    break;
                }

        }
    } else {
        scoreresult.innerText = "请输入分数!";
    }

}

/**
 *
 */
function calculationScore(score) {

    if (0 <= score && score <= 10) {
        return 10;
    } else if (10 < score && score <= 20) {
        return 9;
    } else if (20 < score && score <= 30) {
        return 8;
    } else if (30 < score && score <= 40) {
        return 7;
    } else if (40 < score && score <= 50) {
        return 6;
    } else if (50 < score && score <= 60) {
        return 5;
    } else if (60 < score && score <= 70) {
        return 4;
    } else if (70 < score && score <= 80) {
        return 3;
    } else if (80 < score && score <= 90) {
        return 2;
    } else if (90 < score && score <= 100) {
        return 1;
    } else {
        return 0;
    }
}

function isNumeric(obj) {
    return obj - parseFloat(obj) >= 0;
}
