'use strict';

String.prototype.isPalindrome = function() {
    let str = this.toLowerCase().replace(/[^а-я]/g,"");
    if (str.length > 0) {
        for (let i = 0; i < str.length/2; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    } else {
        return Error;
    }
}


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else {
        let marksSum = 0;
        for (let i = 0; i < marks.length; i++) {
            marksSum += Number(marks[i]);
        }
        let averageMark = Math.round(marksSum / marks.length);

        return averageMark;
    }
}

function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Number(new Date(birthday));
    let age = diff / (365.25*24*60*60*1000);
    let verdict;
    if (age < 18) {
        verdict = false;
    } else {
        verdict = true;
    }
    return verdict;
}