// 1. ✅ Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.

// 2. ✅ Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, 
//    які приймають будь-які аргументи.

// 3. ✅Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

// 4. ✅Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну 
//    сигнатуру для додаткових динамічних властивостей.

// 5. ✅ Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

// 6. ✅ Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
//    (наприклад, чи всі значення є числами).


// 1
interface ISignature1 {
  [key: string | number]: string;
}

const obj1: ISignature1 = {};
obj1['key1'] = 'text1';
obj1[2] = 'text2';

console.log(obj1);


// 2
interface ISignature2 {
  [key: string]: (...args: any) => any
}

const obj2: ISignature2 = {};
obj2['firstFunction'] = (arg1: string, arg2: number) => {
  console.log(`Функція працює і виводить аргементи arg1: ${arg1} і arg2: ${arg1}`);
}

obj2["secondFunction"] = (arg1: 'string') => {
  console.log(`Виводимо тільки один аргумент arg1 ${arg1}`);
}

console.log(obj2);

// 3 Я не знаю чи я правильно зрозумів, що треба робити в цьому завдані
interface ISignature3 {
  [key: number]: string
}

const obj3: ISignature3 = {
  0: "Text 0",
  1: "Text 1",
  2: "Text 2"
}

console.log(obj3);
console.log(obj3[0], obj3[1], obj3[2]);

// 4
interface Region {
  name: string;
  [key: string | number | symbol]: any; // ну це типу динамічні властивості я так зрозумів (не знаю куди ще динамічніше)
}

const region: Region = {
  name: "Donetsk",
  occupation: true,
  birthdayYearOfTown: 1436,
}


// 5 
interface UserInfo {
  [key: number]: string;
}

interface User extends UserInfo {
  name: string;
  surname: string;
  email?: string;
  years?: number;
}

// 6 
interface UserBirthdayYear {
  [key: string]: number;
}

const obj6: UserBirthdayYear = {
  'Ivan': 2000,
  "Vova": 1995,
  "Viktor": 1997
};

// Ну типу я написав функцію, але код не скомпілиться всеодно. 
// Я так розумію це більше потрібно писати коли ми не знаєм що ми з сервака отримаєм?
function CheckNumber(obj: UserBirthdayYear){
  for (const key in obj) {
      if (typeof obj[key] !== 'number') {
          return false;
      }
  }
  return true;
} console.log(CheckNumber(obj6));