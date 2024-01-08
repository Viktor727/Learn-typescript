// ✅ 1. Вам необхідно написати додаток Todo list. У списку нотаток повинні бути методи для додавання нового запису, 
// видалення, редагування та отримання повної інформації про нотатку за ідентифікатором, а так само отримання списку всіх нотаток. 
// Крім цього, у користувача має бути можливість позначити нотатку, як виконану, і отримання інформації про те, 
// скільки всього нотаток у списку і скільки залишилося невиконаними. Нотатки не повинні бути порожніми.

// ✅ 2. Кожний нотаток має назву, зміст, дату створення ( або редагування) та статус. Нотатки бувають двох типів. 
// Дефолтні та такі, які вимагають підтвердження при редагуванні.

// ✅ 3. Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка за ім'ям або змістом.

// ✅ 4. Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.

// ❗️УВАГА: ЗАВДАННЯ 2 Я ЗРОБИВ ТАК, ЩО ЮЗЕРУ ПОТРІБНО МАТИ ПРАВА РЕДАГУВАННЯ. Я НЕ РОЗУМІВ, ЩО ТУТ ВІД МЕНЕ ХОЧУТЬ
enum EStatus {
  InProgress = "In Progress",
  Completed = "Completed", 
  Cancelled = "Cancelled"
}

enum EType {
  Default = "Default",
  Request = "Request"
}

enum ESort {
  Status = "Status",
  Time = "Time"  
}

interface ITodoItem{
  id: number,
  name: string, 
  description: string, 
  date: Date, 
  status: EStatus,
  type: EType
}

// 1. Вам необхідно написати додаток Todo list✅. У списку нотаток повинні бути методи для додавання нового запису✅, 
// видалення✅, редагування✅ та отримання повної інформації про нотатку за ідентифікатором✅, а так само отримання списку всіх нотаток✅. 
// Крім цього, у користувача має бути можливість позначити нотатку, як виконану✅, і отримання інформації про те, 
// скільки всього нотаток у списку✅ і скільки залишилося невиконаними✅. Нотатки не повинні бути порожніми.✅
class TodoList {
  private _name: string;
  private _items: TodoItem[];

  constructor(name: string, items: TodoItem[]) {
    this._name = name;
    this._items = items;
  }

  private findIndexById(idToFind: number): number {
    return this._items.findIndex((item) => item.id === idToFind);
  }

  private findName(name: string): number {
    return this._items.findIndex((item) => item.name === name);
  }

  private findDescription(description: string): number {
    return this._items.findIndex((item) => item.description === description);
  }

  sort(type: ESort) {
    if(ESort.Status){
      this._items = this._items.sort();
      return this._items.sort();
    } else if(ESort.Time){
      this._items.sort((a, b) => a.date.valueOf() - b.date.valueOf());

    }
  }

  createItem(TodoItem: TodoItem): void {
    this._items.push(TodoItem);
  }

  removeTodoItemById(idToRemove: number): TodoItem[] {
    const array = this._items.filter((item) => item.id !== idToRemove);
    this._items = array;
    return array;
  }

  editTodoItemById(idToEdit: number, name: string, description: string): void {
    if (idToEdit) {
      const index = this.findIndexById(idToEdit);
      this._items[index].setProperties(
        name,
        description,
        new Date(),
        EStatus.InProgress
      );
    }
  }

  statusDone(id: number): void {
    if (id) {
      const index = this.findIndexById(id);
      this._items[index].status = EStatus.Completed;
    }
  }

  getInfoById(idInformation: number): TodoItem {
    const index = this.findIndexById(idInformation);
    console.log(
      `Id: ${this._items[index].id} 
      Name: ${this._items[index].name}  
      Description: ${this._items[index].description} 
      Date: ${this._items[index].date}
      Status: ${this._items[index].status}`
    );
    return this._items[index];
  }

  getAllInfo(idInformation: number): TodoItem[] {
    const index = this.findIndexById(idInformation);
    this._items.forEach((element) => {
      console.log(
        `Id: ${element.id} 
        Name: ${element.name}  
        Description: ${element.description} 
        Date: ${element.date}
        Status: ${element.status}`
      );
    });
    return this._items;
  }

  getInfoStatuses(): void {
    console.log(
      `Cancelled: ${
        this._items.filter((item) => item.status === EStatus.Cancelled).length
      }`
    );
    console.log(
      `InProgress: ${
        this._items.filter((item) => item.status === EStatus.InProgress).length
      }`
    );
    console.log(
      `Completed: ${
        this._items.filter((item) => item.status === EStatus.Completed).length
      }`
    );
  }

  get list(): TodoItem[] {
    return this._items;
  }
}


// 2. Кожний нотаток має назву✅, зміст✅, дату створення✅ ( або редагування)✅ та статус✅. Нотатки бувають двох типів. ✅
// Дефолтні✅ та такі, які вимагають підтвердження✅ при редагуванні.
class TodoItem implements ITodoItem {
  private _id: number;
  private _name: string;
  private _description: string;
  private _date: Date;
  private _status: EStatus;
  private _type: EType;

  constructor(
    id: number,
    name: string,
    description: string,
    date: Date,
    status: EStatus,
    type: EType
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._date = date;
    this._status = status;
    this._type = type;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get date(): Date {
    return this._date;
  }

  get status(): EStatus {
    return this._status;
  }

  get type(): EType {
    return this._type;
  }

  setProperties(
    name: string,
    description: string,
    date: Date,
    status: EStatus
  ): void {
    if(this._type !== EType.Request){
      if (this._name !== "") {
        this._name = name;
        this._description = description;
        this._date = date;
        this._status = status;
      } else {
        console.log("Помилка: Нотатки не повинні бути порожніми.");
      }
    } else{
       console.log("Помилка: Вам потрібно мати права редагування");
    }
  }

  set status(data) {
    this._status = data;
  }
}

const item1 = new TodoItem(1, "Todo 1", "Description for Todo 1", new Date("2018-03-10"), EStatus.InProgress, EType.Default);
const item2 = new TodoItem(2, "Todo 2", "Description for Todo 2", new Date("2021-05-11"), EStatus.InProgress, EType.Default);
const item3 = new TodoItem(3, "Todo 3", "Description for Todo 3", new Date("2023-03-13"), EStatus.InProgress, EType.Default);

const todoList = new TodoList("Todo List", [item1, item2, item3]);
todoList.removeTodoItemById(1);
todoList.editTodoItemById(2, "Todo 2 Updated", "Description for Todo 2 Updated");
console.log(todoList.list);

