"use strict";
class School {
    constructor() {
        this.directions = [];
    }
    addDirection(direction) {
        this.directions.push(direction);
    }
}
class Direction {
    get name() {
        return this._name;
    }
    constructor(name) {
        this.levels = [];
        this._name = name;
    }
    addLevel(level) {
        this.levels.push(level);
    }
}
class Level {
    constructor(name, program) {
        this.groups = [];
        this._name = name;
        this._program = program;
    }
    get name() {
        return this._name;
    }
    get program() {
        return this._program;
    }
    addGroup(group) {
        this.groups.push(group);
    }
}
class Group {
    get students() {
        return this._students;
    }
    constructor(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    addStudent(student) {
        this._students.push(student);
    }
    showPerformance() {
        const sortedStudents = this.students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        [this.lastName, this.firstName] = value.split(" ");
    }
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
    setGrade(subject, grade) {
        this.grades[subject] = grade;
    }
    markAttendance(present) {
        this.attendance.push(present);
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this.attendance.filter((present) => present).length /
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
const react1 = new Level(react.name, "Basic");
const react2 = new Level(react.name, "Advanced");
const redux1 = new Level(redux.name, "Basic");
const redux2 = new Level(redux.name, "Advanced");
const student1 = new Student("viktor", "shmatko", 2000);
const student2 = new Student("olena", "barkich", 2001);
const student3 = new Student("maryna", "tatar", 2002);
const student4 = new Student("olga", "goodish", 2003);
const group55 = new Group("React", "God LVL");
group55.addStudent(student1.fullName);
group55.addStudent(student2.fullName);
group55.addStudent(student3.fullName);
group55.addStudent(student4.fullName);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
