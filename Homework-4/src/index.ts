// 1.✅ Хорошою практикою вважається писати назву enum та пропертів в ньому з великої літери 
// 2.✅ Реалізація класів повинна базуватися на інтерфейсах, існує навіть такий підхід, коли ми спочатку створюємо абстракції, 
// а потім відповідно до цих абстракцій пишемо наші класи, тобто тут я б виділив інтерфейс IShape і заімплементив його до класу Shape

// 3.✅ Методи getName і getColor (Доречі, зазвичай ім'я методів мають бути дієсловами, адже це дія, тобто getColor, getShape, calculateSomething і тд, 
// інакше інші розробники можуть подумати, що це звичайні поля) виглядають мені зайвими, адже просто можна прибрати protected, та стукатись до полів напряму 
// ззовні. Або зробити поля name та color приватними і додати гетери до них.

// 4.✅ calculateArea не повинен бути гетером. Гетери використовуються для того, щоб просто повернути значення якогось поля (тому назви гетерів завжди іменники),
// а от якщо потрібно виконати якісь операції, наразі це розрахувати площу і повернути її значення, то calculateArea має бути звичайним методом і 
// сама назва нам про це говорить (calculateArea - якась дія, дієслово)
// 5.✅ Якщо є якась додаткова логіка (поля або методи), яка має слідкувати певним правилам і може бути присутня в різних класах, вона також має бути 
// описана в окремому інтерфейсі. Наприклад print можна описати у інтерфейсі IPrintable, де зазначити, що класи, які імплементують цей інтерфейс повинні 
// мати цей метод, який повинен повертати void. Бо наразі кожен клас може описувати цей метод по своєму, десь ми можемо повернути строку, десь число, 
// десь не повернути нічого і помилки не буде
// 6. ✅ Число PI можна отримати з  Math.PI, так ми будемо мати максимально точне значення і позбудемося зайвого поля.
// 7. ✅ Triangle зараз також має пропертю Pi, хоча вона йому не потрібна)
// 8. ✅ В назвах пропертів і методів раджу уникати таких назв як side1, side2 і давати більш конкретні назви. наприклад width та height. 
// Square наприклад взагалі не потрібен розмір двох сторін для розрахунку площі, адже його сторони рівні

enum Colors {
  Blue = "blue",
  Red = "red",
  Green = "green",
  Yellow = "yellow",
  Black = "black",
  White = "white",
  Gray = "gray",
  Purple = "purple",
  Orange = "orange",
  Pink = "pink",
}

interface IShape {
  calculateArea(): number;
}

interface IPrintable {
  print(): void;
}

abstract class Shape implements IShape {
  constructor(readonly name: string, readonly color: Colors) {}

  abstract calculateArea(): number;
}

class Rectangle extends Shape implements IPrintable {
  constructor(
    readonly name: string,
    readonly color: Colors,
    private length: number,
    private width: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return this.length * this.width;
  }

  print(): void {
    console.log("Formula: length * width");
  }
}

class Square extends Shape implements IPrintable {
  constructor(
    readonly name: string,
    readonly color: Colors,
    private widthOrHeight: number,
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return this.widthOrHeight * this.widthOrHeight;
  }

  print(): void {
    console.log("Formula: Area = width * height");
  }
}

class Circle extends Shape {
  constructor(
    readonly name: string,
    readonly color: Colors,
    private radius: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return (this.radius * this.radius) * Math.PI;
  }
}

class Triangle extends Shape {
  constructor(
    readonly name: string,
    readonly color: Colors,
    private base: number,
    private height: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return this.base * this.height * 0.5;
  }
}





const rectangle1 = new Rectangle("rectangle", Colors.Pink, 5, 5);
console.log(rectangle1.name);
console.log(rectangle1.color);
console.log(rectangle1.calculateArea());

console.log("")

const square1 = new Square("square", Colors.Blue, 10);
console.log(square1.name);
console.log(square1.color);
console.log(square1.calculateArea()); 

console.log("");

const circle1 = new Circle("circle", Colors.Blue, 10);
console.log(circle1.name);
console.log(circle1.color);
console.log(circle1.calculateArea()); 

console.log("");

const triangle1 = new Triangle("triangle", Colors.Blue, 10, 5);
console.log(triangle1.name);
console.log(triangle1.color);
console.log(triangle1.calculateArea()); 

console.log("");

rectangle1.print();
square1.print();