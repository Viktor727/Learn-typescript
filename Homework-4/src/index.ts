enum colors {
    blue = "blue",
    red = "red",
    green = "green",
    yellow = "yellow",
    black = "black",
    white = "white",
    gray = "gray",
    purple = "purple",
    orange = "orange",
    pink = "pink"
}


abstract class Shape {
    constructor(protected readonly name: string, protected readonly color: colors) {}

    abstract get calculateArea(): number;

    shapeName(): string{
        return this.name;
    }

    shapeColor(): string{
        return this.color;
    }
}

class Rectangle extends Shape {
  constructor(
    readonly name: string,
    readonly color: colors,
    private length: number,
    private width: number
  ) {
    super(name, color);
  }

  get calculateArea(): number {
    return this.length * this.width;
  }

  print(): void {
    console.log("Formula: length * width");
  }
}

class Square extends Shape {
  constructor(
    readonly name: string,
    readonly color: colors,
    private side1: number,
    private side2: number
  ) {
    super(name, color);
  }

  get calculateArea(): number {
    return this.side1 * this.side2;
  }

  print(): void{
    console.log("Formula: Area = side * side")
  }
}

class Circle extends Shape {
  readonly pi: number = 3.14;

  constructor(
    readonly name: string,
    readonly color: colors,
    private radius: number
  ) {
    super(name, color);
  }

  get calculateArea(): number {
    return (this.radius * this.radius) * this.pi;
  }
}

class Triangle extends Shape {
  readonly pi: number = 3.14;

  constructor(
    readonly name: string,
    readonly color: colors,
    private base: number,
    private height: number
  ) {
    super(name, color);
  }

  get calculateArea(): number {
    return this.base * this.height * 0.5;
  }
}





const rectangle1 = new Rectangle("rectangle", colors.pink, 5, 5);
console.log(rectangle1.shapeName());
console.log(rectangle1.shapeColor());
console.log(rectangle1.calculateArea);

console.log("")

const square1 = new Square("square", colors.blue, 10, 10);
console.log(square1.shapeName());
console.log(square1.shapeColor());
console.log(square1.calculateArea); 

console.log("");

const circle1 = new Circle("circle", colors.blue, 10);
console.log(circle1.shapeName());
console.log(circle1.shapeColor());
console.log(circle1.calculateArea); 

console.log("");

const triangle1 = new Triangle("triangle", colors.blue, 10, 5);
console.log(triangle1.shapeName());
console.log(triangle1.shapeColor());
console.log(triangle1.calculateArea); 

console.log("");

rectangle1.print();
square1.print();