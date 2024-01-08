"use strict";
// 1. У вас є сутність - Компанія, яка має назву✅, список департаментів✅, список попередньо найнятого персоналу, ✅
// а також список усього персоналу компанії - співробітники всіх департаментів і попередньо найняті.
// 2. Сутність Департамент - має назву, доменну область, список своїх співробітників і бюджет, що складається з дебіту і кредиту.
// 3. Так само у неї існують методи для обчислення балансу виходячи з поточного бюджету, додавання нових співробітників 
// і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з минулого відділу.
// 4. Сутність Попередньо найнятого співробітника має ім'я, прізвище, зарплата та номер банківського рахунку.
// 5. Сутність Співробітника - ім'я, прізвище, платіжну інформацію, зарплату, статус (активний, неактивний, у неоплачуваній відпустці) 
// і знання про департамент, до якого він прикріплений.
// 6. Так само у нас є сутність Бухгалтерія, яка є департаментом і має властивість баланс, а також методи для взяття 
// на баланс співробітника або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
// 7. Попередньо найняті співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.
// interface Company {
//   name: "Hillel",
//   departaments: [],
// }
function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
var WebAgencyPosition;
(function (WebAgencyPosition) {
    WebAgencyPosition["ProjectManager"] = "Project Manager";
    WebAgencyPosition["AccountExecutive"] = "Account Executive";
    WebAgencyPosition["UXDesigner"] = "UX Designer";
    WebAgencyPosition["UIDesigner"] = "UI Designer";
    WebAgencyPosition["FrontEndDeveloper"] = "Front-End Developer";
    WebAgencyPosition["BackEndDeveloper"] = "Back-End Developer";
    WebAgencyPosition["FullStackDeveloper"] = "Full-Stack Developer";
    WebAgencyPosition["WebDesigner"] = "Web Designer";
    WebAgencyPosition["GraphicDesigner"] = "Graphic Designer";
    WebAgencyPosition["ContentStrategist"] = "Content Strategist";
    WebAgencyPosition["SEOAnalyst"] = "SEO Analyst";
    WebAgencyPosition["MarketingSpecialist"] = "Marketing Specialist";
    WebAgencyPosition["QAEngineer"] = "QA Engineer";
    WebAgencyPosition["DevOpsEngineer"] = "DevOps Engineer";
    WebAgencyPosition["SystemsArchitect"] = "Systems Architect";
    WebAgencyPosition["TechnicalLead"] = "Technical Lead";
    WebAgencyPosition["ScrumMaster"] = "Scrum Master";
    WebAgencyPosition["DataAnalyst"] = "Data Analyst";
    WebAgencyPosition["CustomerSupportSpecialist"] = "Customer Support Specialist";
    WebAgencyPosition["Intern"] = "Intern";
})(WebAgencyPosition || (WebAgencyPosition = {}));
var WebAgencyDepartments;
(function (WebAgencyDepartments) {
    WebAgencyDepartments["Development"] = "Development";
    WebAgencyDepartments["Design"] = "Design";
    WebAgencyDepartments["ProjectManagement"] = "Project Management";
    WebAgencyDepartments["MarketingAndSales"] = "Marketing and Sales";
    WebAgencyDepartments["QAandTesting"] = "Quality Assurance and Testing";
})(WebAgencyDepartments || (WebAgencyDepartments = {}));
// const myDepartment: WebAgencyDepartments = WebAgencyDepartments.Development;
// console.log(`My department: ${myDepartment}`);
// Працівники
class Employee {
    // position - це посада
    constructor(id, name, surname, position, salaryInUSD) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salaryInUSD = salaryInUSD;
        this.position = position;
        this.onBench = true;
        this.isFired = false;
    }
    salaryUpgradeInUSD(value) {
        this.salaryInUSD += value;
    }
    goToBench(value) {
        this.onBench = value;
        console.log(value === true ? `${this.fullName} is now on the bench` : `${this.fullName} is working now`);
    }
    fire(value) {
        this.isFired = value;
        console.log(value === true ? `${this.fullName} is fired ` : `${this.fullName} is working now`);
    }
    displayInfo() {
        console.log(`Id: ${this.id}`);
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Salary in USD: ${this.salaryInUSD}`);
        console.log(`Position (role in company): ${this.position}`);
        console.log(`Is ${this.fullName} on beanch now: ${this.onBench}`);
        console.log(`Is ${this.fullName}:  ${this.isFired}`);
    }
    get fullName() {
        return `${capitalizeFirstLetter(this.name)} ${capitalizeFirstLetter(this.surname)}`;
    }
    get userData() {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            salaryInUSD: this.salaryInUSD,
            position: this.position,
            onBench: this.onBench,
            isFired: this.isFired
        };
    }
}
const employee1 = new Employee(1, "Olexandr", "Gorohov", WebAgencyPosition.GraphicDesigner, 500);
const employee2 = new Employee(2, "Dmytro", "Budzin", WebAgencyPosition.CustomerSupportSpecialist, 300);
const employee3 = new Employee(3, "Viktor", "Poslavskiy", WebAgencyPosition.MarketingSpecialist, 700);
const employee4 = new Employee(4, "Vova", "Potap", WebAgencyPosition.MarketingSpecialist, 900);
const employee5 = new Employee(5, "Igor", "Lastochkin", WebAgencyPosition.GraphicDesigner, 1500);
const employee6 = new Employee(6, "Vova", "Pupkin", WebAgencyPosition.FullStackDeveloper, 1200);
const employee7 = new Employee(7, "Viktor", "Shmatko", WebAgencyPosition.GraphicDesigner, 5000);
const employee8 = new Employee(8, "Veronika", "Sereda", WebAgencyPosition.CustomerSupportSpecialist, 6000);
const employee9 = new Employee(9, "Igor", "Bandura", WebAgencyPosition.MarketingSpecialist, 7000);
const employee10 = new Employee(10, "Dmytro", "Panchkak", WebAgencyPosition.MarketingSpecialist, 7500);
const employee11 = new Employee(11, "Igor", "Lastochkin", WebAgencyPosition.GraphicDesigner, 3500);
const employee12 = new Employee(12, "Vova", "Pupkin", WebAgencyPosition.FullStackDeveloper, 4500);
employee1.fire(true);
employee2.fire(true);
employee3.fire(true);
employee4.fire(true);
employee5.fire(true);
employee6.fire(true);
const full = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5,
    employee6,
    employee7,
    employee8,
    employee9,
    employee10,
    employee11,
    employee12,
];
const fired = [];
for (let i = 0; i < full.length; i++) {
    const element = full[i];
    console.log(element);
    // if(element.userData.isFired === true){
    // }
}
class Departaments {
    constructor(name) {
        this.name = name;
    }
}
class Company {
    constructor(companyName, departaments, listEmployeeExist) {
        this.companyName = companyName;
        this.departaments = departaments;
    }
}
