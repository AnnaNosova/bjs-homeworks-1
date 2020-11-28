'use strict'

function parseCount (count) {
    const result = Number.parseInt(count, 10);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount (count) {
    try {
        return parseCount(count);
    } catch(error) {
        return Error("Невалидное значение");
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        return Number(Math.sqrt((this.getPerimeter()/2) * (this.getPerimeter()/2 - this.a) * (this.getPerimeter()/2 - this.b) * (this.getPerimeter()/2 - this.c)).toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            getArea:() => `Ошибка! Треугольник не существует`,
            getPerimeter:() => `Ошибка! Треугольник не существует`
        };
    }
}
