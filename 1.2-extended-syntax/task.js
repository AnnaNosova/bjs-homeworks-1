'use strict'

function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        x[0] = (-b / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        marks.splice(5, marks.length - 5);
    } else if (marks.length === 0) {
        return 0;
    }
   
    let marksSum = 0;

    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }

    let averageMark = marksSum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date
    let result = (today.getFullYear() - dateOfBirthday.getFullYear() >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}