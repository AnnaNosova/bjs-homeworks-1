class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state *= 1.5;
    }
    set state(state) {
        this.newState = state;
        if (this.newState < 0) {
            return this.newState = 0;
        } else if (this.newState > 100) {
            return this.newState = 100;
        } 
    }
    get state() {
        return this.newState;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

class Library {

    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        if(!type || !value) {
            return null;
        }
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value){
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName){
        if(!bookName) {
            return null;
        }
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name == bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


class StudentLog {
    constructor (name) {
        this.name = name;
        this.grades = {}
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 || grade > 5 || grade !== Number(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.grades[subject].length;
        } if (this.grades.hasOwnProperty(subject)) {
            this.grades[subject].push(Number(grade));
        } else {
            this.grades[subject] = [];
            this.grades[subject].push(Number(grade));
        }

        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {

        if (this.grades.hasOwnProperty(subject)) {

            let marksSum = 0;
            
            for (let i = 0; i < this.grades[subject].length; i++) {
                marksSum += this.grades[subject][i];
            } 
        
            return (marksSum / this.grades[subject].length).toFixed(2); 

        } 
        else {
            return 0;
        }
    }

    getTotalAverage() {
        let gradesSum = 0;
        let allSubjectsArray = Object.values(this.grades)
        let allGradesArray = [];
        for (let i = 0; i < allSubjectsArray.length; i++) {
            for (let j = 0; j < allSubjectsArray[i].length; j++) {
                allGradesArray.push(allSubjectsArray[i][j]);
            }
        }

        for (let i = 0; i < allGradesArray.length; i++) {
            gradesSum += allGradesArray[i];
        }
        return gradesSum / allGradesArray.length;
    }
}


const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) 



log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage());