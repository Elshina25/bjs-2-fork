//Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'detective';
    }
}

//Задача №2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
      let findBook = this.books.find(book => book[type] === value);
      if (findBook) {
        return findBook;
      } else {
        return null;
      }
    }

    giveBookByName(bookName) {
        let indexBook = this.books.findIndex(book => book.name === bookName);
        if (indexBook >= 0) {
           return this.books.splice([indexBook], 1)[0];
        } else {
            return null;
        }
    }
}

const library1 = new Library('Библиотека им.А.П.Чехова');


library1.addBook(new NovelBook('Л.Н.Толстой', 'Война и Мир', 1954, 1270, 80));
library1.addBook(new FantasticBook('Дж.Мартин', 'Песнь льда и пламени', 2016, 960, 90));
library1.addBook(new DetectiveBook('Артур Конан Дойл', 'Приключения Шерлока Холмса', 1994, 2096, 50));
library1.addBook(new NovelBook('Пелам Гренвилл Вудхаус', 'Дева в беде', 1919, 358, 40));

const searchBook = library1.findBookBy('releaseDate', 1919);

console.log("Количество книг до выдачи: " + library1.books.length);
const deleteBook = library1.giveBookByName('Песнь льда и пламени');
console.log("Количество книг после выдачи: " + library1.books.length);
deleteBook._state = 10;
deleteBook.fix();
library1.addBook(deleteBook);

const searchBook1 = library1.findBookBy('name', 'Война и Мир');

console.log("Количество книг до выдачи: " + library1.books.length);
const deleteBook1 = library1.giveBookByName('Дева в беде');
console.log("Количество книг после выдачи: " + library1.books.length);
deleteBook1._state = 30;
deleteBook1.fix();
library1.addBook(deleteBook1);

//Задача №3

class Student {
    constructor(name, gender, age, marks) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (this.marks[subject] === undefined) {
           this.marks[subject] = [mark];
        } else if (mark < 1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        let marksSubject = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        let average = marksSubject/ this.marks[subject].length;
        return average; 
    }

    getAverage() {
       let arrMarks = Object.values(this.marks);;
       let sumArr = [].concat.apply([], arrMarks);
       let sumMarks = sumArr.reduce((acc, item) => acc + item, 0);
       let average = sumMarks / sumArr.length;
       return average;
    }
}

const student = new Student ('Helen Power', 'female', 21);
student.addMark(5, 'algebra');
student.addMark(3, 'geometry');
student.addMark(4, 'biology');
student.addMark(4, 'algebra');
student.addMark(5, 'chemistry');
student.addMark(2, 'foreign language');
student.addMark(3, 'geometry');
student.addMark(4, 'biology');
student.addMark(3, 'chemistry');
student.addMark(4, 'foreign language');
student.getAverageBySubject('algebra');
student.getAverage();
