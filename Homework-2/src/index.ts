interface Lectures {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: string;
  courses: string[];
  contacts: {
    email: string;
    phoneNumber: number;
    address?: string;
  };
}

// interface StudentInt {
//   firstName: string;
//   lastName: string;
//   birthDate: number;
// }

enum Status {
  InProgress = 0,
  Completed,
  Failed,
}

class School {
  // IMPLEMENT METHODS
  // DONE 'add area', DONE
  // DONE 'remove area', DONE
  // DONE 'add lecturer', DONE
  // DONE 'remove lecturer' DONE

  // ТУТ Я МУСИВ ПОСТАВИТИ any, але воно концепт не має порушити
  private _areas: any = [];
  private _lecturers: Lectures[] = []; // Name, surname, position, company, experience, courses, contacts

  constructor(areas: Area, lectures: Lectures[]) {
    this._areas = areas;
    this._lecturers = lectures;
  }

  addArea(value: Area): void {
    this._areas.push(value);
  }

  removeArea(value: number): void {
    this._areas.splice(value, 1);
  }

  addLecturer(value: Lectures): void {
    this._lecturers.push(value);
  }

  removeLecturer(value: number): void {
    this._lecturers.splice(value, 1);
  }

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lectures[] {
    return this._lecturers;
  }
}

class Area {
  // DONE implement getters for fields and 'remove level' methods DONE
  // DONE implement getters for fields and 'add level' methods DONE
  private _levels: Level[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  addLevel(value: Level): void {
    this._levels.push(value);
  }

  removeLevel(value: number): void {
    this._levels.splice(value, 1);
  }
}

class Level {
  // DONE implement getters for fields and 'remove group' methods DONE
  // DONE implement getters for fields and 'add group' methods DONE
  private _description: string;
  private _name: string;

  private _groups: Group[] = [];

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(value: Group): void {
    this._groups.push(value);
  }

  removeGroup(value: number): void {
    this._groups.splice(value, 1);
  }

  get groups(): Group[] {
    return this._groups;
  }
}

// зрозумів дякую за пояснення
// DONE
class Group {
  // DONE implement getters for fields 'remove student' methods DONE
  // DONE implement getters for fields 'add student' methods DONE
  // DONE implement getters for fields 'set status' methods DONE
  private _directionName: string;
  private _levelName: string;

  private _area: string;
  private _status: Status;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

  constructor(
    directionName: string,
    levelName: string,
    status: Status,
    area: string
  ) {
    this._directionName = directionName;
    this._levelName = levelName;

    this._status = status;
    this._area = area;
  }

  setStatus(value: Status): void {
    this._status = value;
  }

  addStudent(value: Student): void {
    this._students.push(value);
  }

  removeStudent(value: number): void {
    // START FROM ZERO
    this._students.splice(value, 1);
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students.sort(
      (a: any, b: any): number =>
        b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

// DONE
class Student {
  // DONE implement 'set grade' method DONE
  // DONE implement 'set visit' method DONE

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;

  private _grades: number[] = []; // workName: mark
  private _visits: boolean[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  get firstName(): string {
    return `${this._firstName}`;
  }

  get lastName(): string {
    return `${this._lastName}`;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  // зро-умів логіку
  // set fullName(value: string) {
  //   [this._lastName, this._firstName] = value.split(" ");
  // }

  set grade(value: number) {
    this._grades.push(value);
  }

  set visit(value: boolean) {
    this._visits.push(value);
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (this._visits.filter((present: boolean) => present).length / this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}  

// START
// зрозумів, дуже дякую за пояснення
const student1 = new Student("Viktor", "Shmatko", 2000);
const student2 = new Student("Veronika", "Sereda", 1999);
console.log(student1.fullName);

const group1 = new Group("Frontend", "Advanced", 0, "Ukraine");
group1.setStatus(0);
group1.addStudent(student1);
group1.addStudent(student2);
group1.removeStudent(1);

const level1 = new Level('Advance', "It is advance level");
level1.addGroup(group1);

const area1 = new Area("Ternopil")
area1.addLevel(level1);

const lecturer1 = {
  name: "viktor",
  surname: "shmatko",
  position: "frontend",
  company: "softserve",
  experience: "1000+ years",
  courses: ["front", "webflow"],
  contacts: {
    email: "viktorshmatko228@gmail.com",
    phoneNumber: 38073773719
  },
};

const lecturer2 = {
  name: "viktor",
  surname: "shmatko",
  position: "frontend",
  company: "softserve",
  experience: "1000+ years",
  courses: ["front", "webflow"],
  contacts: {
    email: "viktorshmatko228@gmail.com",
    phoneNumber: 38073773719,
  },
};
const school1 = new School(area1, [lecturer1, lecturer2]);



