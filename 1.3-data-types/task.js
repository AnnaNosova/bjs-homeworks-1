'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let currentDate = new Date ();
    let monthsAmount = Math.round((Math.abs(date.getTime() - currentDate.getTime())) / (1000 * 3600 * 24 * 30.5));

    
    let mortgageData = {
        percent: parseInt(percent),
        contribution: parseInt(contribution),
        amount: parseInt(amount),
        monthsAmount: monthsAmount,
    }


    for (let key in Object(mortgageData)) {
        if (isNaN(mortgageData[key]) || mortgageData[key] === undefined) {
            return `Параметр ${key} содержит неправильное значение ${mortgageData[key]}`;
        } 
    }

    mortgageData.index = mortgageData.percent / 100 / 12;
    console.log(mortgageData.index);
    let monthlyPayment = (mortgageData.amount - mortgageData.contribution) * (mortgageData.index + mortgageData.index / (((1 + mortgageData.index) ** mortgageData.monthsAmount) - 1));
    let totalAmount = new Number((monthlyPayment * mortgageData.monthsAmount).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    if (name === '' || name == undefined) {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}.`;
}