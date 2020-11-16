'use strict';

//task 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D > 0) {
        return console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else if (result.D === 0) {
        return console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D < 0) {
        return console.log('Уравнение не имеет вещественных корней');
    };
}

showSolutionsMessage (1,2,3);
showSolutionsMessage (7,20,-3)
showSolutionsMessage (2,4,2)
console.log('');


//task 2

function getAverageScore(data) {
    let sum = 0;
    let counter = 0;
    let averageMarks = Object.assign({}, data);
    if (Object.keys(averageMarks).length === 0) {
        averageMarks.average = 0;
    } else {
        for (let key in Object(averageMarks)) {
            if (averageMarks[key].length === 0) {
               averageMarks[key] = 0; 
            } else {
                averageMarks[key] = getAverageMark(averageMarks[key]);
            }
            sum += averageMarks[key];
            counter++;
        }
        averageMarks.average = sum / counter;
    }
    return console.log(averageMarks);
}


function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum/marks.length;
}

console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],   
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4],
    //german: [5,5,5,5,5,5],
    //geograhpy: [5,4,4,5],
}));

//task 3
console.log('');

function getPersonData(secretData) {
    secretData.firstName = secretData.aaa;
    delete secretData.aaa;
    secretData.lastName = secretData.bbb;
    delete secretData.bbb;

    for (let i in secretData) {
        secretData[i] = getDecodedValue(secretData[i]);
    }
  return secretData;
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    } else {
        return 'Эмильо';
    }
}


console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));