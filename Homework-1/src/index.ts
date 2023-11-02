class School {
  directions: string[] = [];

  addDirection(direction:string): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: string[] = [];
  private _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: string):void {
    this.levels.push(level);
  }
}

class Level {
  groups: string[] = [];

  private _name: string;
  private _program: string;

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: string): void {
    this.groups.push(group);
  }
}


class Group {
  _students: string[] = [];

  private directionName: string;
  private levelName: string;

  get students(): string[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  showPerformance(): string[] {
    const sortedStudents = this.students.sort(
      (a: any, b: any): number => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

interface Graduate {
    [subject: string]: number;
}

class Student {
  private firstName: string;
  private lastName: string;
  private birthYear: number;

  grades: Graduate = {};
  attendance: boolean[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: any = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}



const hilel = new School();

const react = new Direction("React");
      react.addLevel("Advanced");
const redux = new Direction("Redux");
      redux.addLevel("Advanced");

const react1 = new Level(react.name, "Basic")
const react2 = new Level(react.name, "Advanced")
const redux1 = new Level(redux.name, "Basic")
const redux2 = new Level(redux.name, "Advanced")

const student1 = new Student("viktor", "shmatko", 2000);
const student2 = new Student("olena", "barkich", 2001);
const student3 = new Student("maryna", "tatar", 2002);
const student4 = new Student("olga", "goodish", 2003);

const group55 = new Group("React", "God LVL")
group55.addStudent(student1.fullName)
group55.addStudent(student2.fullName)
group55.addStudent(student3.fullName)
group55.addStudent(student4.fullName)

student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);









