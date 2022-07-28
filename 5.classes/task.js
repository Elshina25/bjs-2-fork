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

console.log(library1);
console.log(library1.addBook(new NovelBook('Л.Н.Толстой', 'Война и Мир', 1954, 1270, 80)));
console.log(library1.addBook(new FantasticBook('Дж.Мартин', 'Песнь льда и пламени', 2016, 960, 90)));
console.log(library1.addBook(new DetectiveBook('Артур Конан Дойл', 'Приключения Шерлока Холмса', 1994, 2096, 50)));
console.log(library1.addBook(new NovelBook('Пелам Гренвилл Вудхаус', 'Дева в беде', 1919, 358, 40)));

const searchBook = library1.findBookBy('releaseDate', 1919);
console.log(searchBook);

console.log("Количество книг до выдачи: " + library1.books.length);
const deleteBook = library1.giveBookByName('Песнь льда и пламени');
console.log(deleteBook);
console.log("Количество книг после выдачи: " + library1.books.length);
console.log(deleteBook._state = 10);
console.log(deleteBook.fix());
console.log(library1.addBook(deleteBook));

const searchBook1 = library1.findBookBy('name', 'Война и Мир');
console.log(searchBook);

console.log("Количество книг до выдачи: " + library1.books.length);
const deleteBook1 = library1.giveBookByName('Дева в беде');
console.log(deleteBook1);
console.log("Количество книг после выдачи: " + library1.books.length);
console.log(deleteBook1._state = 30);
console.log(deleteBook1.fix());
console.log(library1.addBook(deleteBook1));
