// 3. Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
// 4. Вам потрібно зробити свій аналог утіліти Pick, яка конструює новий тип, який буде включати 
//    в себе лише параметри передані в цю утіліту. Наприклад:
// interface User {
//   name: string;
//   age: number;
//   permission: string[];
// }


// let newUser: TPick<User, "name" | "age";
// повинен створити новий тип, який має включати в себе лише проперті name та age, без permissions


// 1.✅ Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

enum course {
  Typescript = 'Typescript',
  JavaScript = "Javascript",
  Nextjs = 'NextJS',
  Nodejs = 'NodeJS',
  Webflow = 'Webflow'
}

interface student {
  name: string;
  surname: string;
  age: number;
  courses: course[];
  address: {
    street: string;
    city: string;
    zipCode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}

// type DeepReadonlyFirstVersion<T> = {
//   readonly [Key in keyof T]: T[Key];
// };

// Якщо чесно я думав воно буде працювати тільки для першого рівня, 
// але воно чомусь для всіх рівнів працює

type DeepReadonly<T> = {
  readonly [Key in keyof T]: T[Key] extends object ? DeepReadonly<T[Key]> : T[Key];
};

let student1: DeepReadonly<student> = {
  name: "Viktor",
  surname: "Shmatko",
  age: 24,
  courses: [course.Typescript, course.JavaScript],
  address: {
    street: "Gaydamatska st.",
    city: "Ternopil",
    zipCode: 46000,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
};

// student1.name = 'rhe'; // - не дає змінити, значить працює
// student1.address.street = 'Dovbush st.'; // - не дає змінити, значить працює
// student1.address.coordinates.latitude = -53.496; // - не дає змінити, значить працює

// 2.✅ Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості 
//    вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
  readonly [Key in keyof T]-?: T[Key] extends object ? DeepReadonly<T[Key]> : T[Key];
};

let student2: DeepRequireReadonly<student> = {
  name: "Viktor",
  surname: "Shmatko",
  age: 24,
  courses: [course.Typescript, course.JavaScript],
  address: {
    street: "Gaydamatska st.",
    city: "Ternopil",
    zipCode: 46000,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
};


// 3. ✅ Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

type User = {
  name: string,
  age: number
}

type Getters<T extends string> = Uppercase<T>;

type UpperCaseKeys<T> = {
  [Key in keyof T & string as Getters<Key>]: T[Key];
};

type T = UpperCaseKeys<User>;

let users2: T = {
  NAME: "HE",
  AGE: 1,
};

// 4.✅ Вам потрібно зробити свій аналог утіліти Pick, яка конструює новий тип, який буде включати 
//    в себе лише параметри передані в цю утіліту. Наприклад:
// interface User {
//   name: string;
//   age: number;
//   permission: string[];
// }


// Ну це мені нагадує коли я перевіряв чи є наявна айдішка в обєкті, якщо є то пускаєм далі
type PickAnalog<T, K extends keyof T> = {
  [Key in K] : T[Key];
}

interface User3 {
  name: string;
  age: number;
  permission: string[];
}

type UsePick = PickAnalog<User3, 'name' | 'age'>;

let user3: UsePick = {
  name: 'string',
  age: 61
}