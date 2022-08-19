//задача 1

function parseCount(productCount) {
    let parseNum = Number.parseInt(productCount);
    if (isNaN(parseNum)) {
        throw new Error('Невалидное значение');
    } return parseNum;
}
parseCount(123);

function validateCount(productCount) {
    try {
        return parseCount(productCount);
    } catch(error) {
        return error;
    }
}

validateCount('56');

//задача 2

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (sideA + sideB < sideC || sideB + sideC < sideA || sideA + sideC < sideB) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        const semiPerimetr = 0.5*(this.sideA + this.sideB + this.sideC);
        return parseFloat(Math.sqrt(semiPerimetr*(semiPerimetr - this.sideA)*(semiPerimetr - this.sideB)*(semiPerimetr - this.sideC)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b , c);
    } catch (error) {
        return { getPerimeter: () => 'Ошибка! Треугольник не существует',
            getArea: () => 'Ошибка! Треугольник не существует' };
    }
}

getTriangle(5, 4, 6);
getTriangle(1, 10, 3)

