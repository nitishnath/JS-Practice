// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     //Getter
//     get area() {
//         return this.calcArea()
//     }
//     //Method
//     calcArea() {
//         return this.height * this.width
//     }

//     *getSides() {
//         yield this.height;
//         yield this.width;
//     }
// }

// const square = new Rectangle(20, 20)
// console.log(square.area, 'area')
// console.log([...square.getSides()], 'getSides')

//Behind the scene
function Rectangle(height, width) {
    this.height = height;
    this.width = width;
}

Rectangle.prototype.area = function() {
    return this.calcArea()
}

Rectangle.prototype.calcArea = function() {
    return this.height * this.width;
}

Rectangle.prototype.getSides = function *() {
    yield this.height;
    yield this.width;
}

const square = new Rectangle(10, 10)
console.log(square.area(), 'area1')
console.log(square.calcArea(), 'calcArea1')
console.log([...square.getSides()], 'getSides1')