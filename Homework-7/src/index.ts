// export function keys<U extends object>(obj: U) {
//   const currentKeys = [];

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) currentKeys.push(key);
//   }

//   return currentKeys;
// }

// export function values<U extends object>(obj: U) {
//   const currentValues = [];

//   for (let key in obj) {
//     currentValues.push(obj[key]);
//   }

//   return currentValues;
// }


// export function createMap<T>(list: T[]) {
//   return function<U>(cb: (x: T) => U): U[] {
//     const result = [];

//     for (let el of list) {
//       result.push(cb(el));
//     }

//     return result;
//   };
// }





// 1. ✅ Написати функцію convertToString, яка може приймати аргумент будь якого типу та повертати його 
// у вигляді строки (за допомогою методу toString). Якщо цього методу немає, тоді повертати undefined
function convertToString<T>(value: T): string | undefined{
  if(value && typeof value.toString === "function"){
    return value.toString();
  } else{
    return undefined;  
  }
} 

console.log(convertToString(5));
console.log(convertToString(true));
console.log(convertToString(4.25232));
console.log(convertToString(''));
console.log(convertToString('HELLO'));
console.log(convertToString(null));
console.log(convertToString(undefined));


// 2. ✅ Написати функцію sortEntities, яка має сортувати різні об'єкти, які мають id за зростанням 
// або за зменшенням. Функція приймає 2 аргументи - масив об'єктів та ключове слово desc 
// або asс, відповідно до нього буде відбуватися сортування. 

enum ESortingBy {
  Asc = "Asc",
  Desc = "Desc",
}

enum ECourses {
  English = 'English',
  Typescript = 'Typescript',
  JavaScript = 'Javascript',
  NextJS = 'Nextjs',
}

interface IStrudents {
  id: number, 
  fullName: string,
  yearOfBirthday: Date,
  courseLearning: ECourses,
  mediumScore: number
}

// Не найкращий метод сортування, але він працює
function sortEntities(strudents: IStrudents[], sortingBy: ESortingBy): IStrudents[] | undefined {
  if (sortingBy === ESortingBy.Asc) {
    console.log("Asc");
    return strudents.sort((a, b) =>
      b.id.toString().localeCompare(a.id.toString())
    );
  } else if (sortingBy === ESortingBy.Desc) {
    console.log("Desc");
    return strudents.sort((a, b) =>
      a.id.toString().localeCompare(b.id.toString())
    );
  }

  return undefined;
}

const arrayStrudents: IStrudents[] = [
  {
    id: 5,
    fullName: "Viktor Shmatko",
    yearOfBirthday: new Date(2000, 1, 15),
    courseLearning: ECourses.Typescript,
    mediumScore: 100,
  },
  {
    id: 3,
    fullName: "Veronika Sereda",
    yearOfBirthday: new Date(1900, 2, 23),
    courseLearning: ECourses.English,
    mediumScore: 99,
  },
  {
    id: 8,
    fullName: "Albert Einstein",
    yearOfBirthday: new Date(1953, 2, 23),
    courseLearning: ECourses.NextJS,
    mediumScore: 100,
  },
];

console.log(sortEntities(arrayStrudents, ESortingBy.Desc));
console.log(sortEntities(arrayStrudents, ESortingBy.Asc));