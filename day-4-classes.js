class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get perimeter() {
        return this.perimeter();
    }

    perimeter() {
        return this.arr.reduce((a, b) => a + b);
    }
}
