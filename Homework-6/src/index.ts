// ✅ 1. У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу, 
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


// Зарплпти виплачуютьсь із дебету. Якщо попередньо найманий співробітник то бухгалтерія виплачує зп. Якщо він співробітник, то зарплату виплачує сам департамент.
// створюється новий депртамент із новимим співробітниками, то цей департамент береться на бухгалтерію. Бухгалтреія виділяє певну кількість грошей.
// Можна зробити незалежний департамент від бухгалтерії а можна зробити так щоб бухгалтерія прийняла до себе на баланс. 
// При створені департаменту автоматично береться на баланс в бухгалтерію і виділяється якийсь баланс на розсуд
// З умови виходить бухгалтерія той самий департамент, але типу трохи інша. Теж мають працювати з понеділка по пятницю, 
// виконують якісь обовязки але в них є доступ до грошей і доступ до фінансових рахунків робітників.
// Бухгалтерію треба робити теж департаментом але розширити її можливостями.
// Фокус на розробку архітектури, подумати які будуть папки, які класи будуть, як вони будуть доповнювати один одного, як ми будем тримати департаменти, можливо UI якусь зробити

// interface Company {
//   name: "Hillel",
//   departaments: [],
// }

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

enum WebAgencyPosition {
  ProjectManager = "Project Manager",
  AccountExecutive = "Account Executive",
  UXDesigner = "UX Designer",
  UIDesigner = "UI Designer",
  FrontEndDeveloper = "Front-End Developer",
  BackEndDeveloper = "Back-End Developer",
  FullStackDeveloper = "Full-Stack Developer",
  WebDesigner = "Web Designer",
  GraphicDesigner = "Graphic Designer",
  ContentStrategist = "Content Strategist",
  SEOAnalyst = "SEO Analyst",
  MarketingSpecialist = "Marketing Specialist",
  QAEngineer = "QA Engineer",
  DevOpsEngineer = "DevOps Engineer",
  SystemsArchitect = "Systems Architect",
  TechnicalLead = "Technical Lead",
  ScrumMaster = "Scrum Master",
  DataAnalyst = "Data Analyst",
  CustomerSupportSpecialist = "Customer Support Specialist",
  Intern = "Intern",
}

enum WebAgencyDepartments {
  Development = "Development",
  Design = "Design",
  Finance = "Finance",
  HR = "Human Resources",
  ProjectManagement = "Project Management",
  Marketing = "Marketing and Sales",
  QAandTesting = "Quality Assurance and Testing",
  Other = "Other Spescialists"
}

enum Hired{
  Current = 'Current',
  Previous = 'Previous',
}

enum HiredExtend {
  Current = "Current",
  Previous = "Previous",
  All = "All",
}

interface IEmployee {
  id: number;
  name: string;
  surname: string;
  position: WebAgencyPosition;
  salaryInUSD: number;
  departament: WebAgencyDepartments;
  Hired: Hired;
}

interface IEmployeeExtends extends IEmployee{
  onBench: boolean;
  isFired: boolean;
}








// 1. У вас є сутність - Компанія, яка має назву ✅, список департаментів ✅, список попередньо найнятого персоналу ✅, 
// а також список усього персоналу компанії✅ - співробітники всіх департаментів✅ і попередньо найняті✅.
class Company {
  private companyName: string;
  private departaments: WebAgencyDepartments[];
  private listEmployee: Employee[];

  constructor(
    companyName: string,
    departaments: WebAgencyDepartments[],
    listEmployee: Employee[]
  ) {
    this.companyName = companyName;
    this.departaments = departaments;
    this.listEmployee = listEmployee;
  }

  getAllEmployeersData() {
    let data: IEmployeeExtends[] = [];

    this.listEmployee.forEach((element: Employee) => {
      data.push(element.EmployeersData);
    });

    return data;
  }

  getHiredEmployeersData(hired: Hired) {
    let data: IEmployeeExtends[] = [];

    this.listEmployee.forEach((element: Employee) => {
      if (element.EmployeersData.Hired === hired) {
        data.push(element.EmployeersData);
      }
    });

    return data;
  }

  // співробітники всіх департаментів
  getDepartamentsEmployeers() {
    console.log(this.getAllEmployeersData());
  }
}

// 2. Сутність Департамент - має назву, доменну область , список своїх співробітників і бюджет, що складається з дебіту і кредиту.
class Departaments {
  private departament: WebAgencyDepartments;

  constructor(company: Company, employee: Employee, departament: WebAgencyDepartments) {
    this.departament = departament;
    console.log(employee + " - Departaments Class was Initialized");
  }

  get getDepartament(): string {
    return this.departament;
  }
}


// Працівники
class Employee {
  private id: number;
  private name: string;
  private surname: string;
  private salaryInUSD: number;
  private position: WebAgencyPosition;
  private onBench: boolean;
  private isFired: boolean;
  private Hired: Hired;
  private departament: WebAgencyDepartments;

  // position - це посада
  constructor(
    id: number,
    name: string,
    surname: string,
    position: WebAgencyPosition,
    salaryInUSD: number,
    departament: WebAgencyDepartments,
    Hired: Hired
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salaryInUSD = salaryInUSD;
    this.position = position;
    this.onBench = true;
    this.isFired = false;
    this.Hired = Hired;
    this.departament = departament;

    // new Departaments(new Employee(id, name, surname, position, salaryInUSD, departament), departament);
  }

  salaryUpgradeInUSD(value: number) {
    this.salaryInUSD += value;
  }

  goToBench(value: boolean): void {
    this.onBench = value;
    console.log(
      value === true
        ? `${this.fullName} is now on the bench`
        : `${this.fullName} is working now`
    );
  }

  fire(value: boolean): void {
    this.isFired = value;
    console.log(
      value === true
        ? `${this.fullName} is fired `
        : `${this.fullName} is working now`
    );
  }

  displayInfo() {
    console.log(`Id: ${this.id}`);
    console.log(`Full Name: ${this.fullName}`);
    console.log(`Salary in USD: ${this.salaryInUSD}`);
    console.log(`Position (role in company): ${this.position}`);
    console.log(`Is ${this.fullName} on beanch now: ${this.onBench}`);
    console.log(`Is ${this.fullName}:  ${this.isFired}`);
    console.log(`currentEmployees: ${this.Hired}`);
  }

  get fullName(): string {
    return `${capitalizeFirstLetter(this.name)} ${capitalizeFirstLetter(
      this.surname
    )}`;
  }

  get EmployeersData() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      salaryInUSD: this.salaryInUSD,
      position: this.position,
      onBench: this.onBench,
      isFired: this.isFired,
      departament: this.departament,
      Hired: this.Hired,
    };
  }

  get getDepartament(): WebAgencyDepartments {
    return this.departament;
  }
}

const companyDepartamentList: WebAgencyDepartments[] = [
  WebAgencyDepartments.Development,
  WebAgencyDepartments.Design,
  WebAgencyDepartments.Finance,
  WebAgencyDepartments.HR,
  WebAgencyDepartments.Marketing,
  WebAgencyDepartments.Other,
  WebAgencyDepartments.ProjectManagement,
  WebAgencyDepartments.QAandTesting,
];

const employee1: Employee = new Employee(1, "Olexandr", "Gorohov", WebAgencyPosition.GraphicDesigner, 500, WebAgencyDepartments.Design, Hired.Previous);
const employee2: Employee = new Employee(2, "Dmytro", "Budzin", WebAgencyPosition.CustomerSupportSpecialist, 300, WebAgencyDepartments.Other, Hired.Previous);
const employee3: Employee = new Employee(3, "Viktor", "Poslavskiy", WebAgencyPosition.MarketingSpecialist, 700, WebAgencyDepartments.Marketing, Hired.Current);
const employee4: Employee = new Employee(4, "Vova", "Potap", WebAgencyPosition.MarketingSpecialist, 900, WebAgencyDepartments.Marketing, Hired.Current);
const employee5: Employee = new Employee(5, "Igor", "Lastochkin", WebAgencyPosition.GraphicDesigner, 1500, WebAgencyDepartments.Design, Hired.Current);
const employee6: Employee = new Employee(6, "Vova", "Pupkin", WebAgencyPosition.FullStackDeveloper, 1200, WebAgencyDepartments.Development, Hired.Previous);

const employee7 = new Employee(7, "Viktor", "Shmatko", WebAgencyPosition.GraphicDesigner, 5000, WebAgencyDepartments.Design, Hired.Current);
const employee8 = new Employee(8, "Veronika", "Sereda", WebAgencyPosition.CustomerSupportSpecialist, 6000, WebAgencyDepartments.Other, Hired.Current);
const employee9 = new Employee(9, "Igor", "Bandura", WebAgencyPosition.MarketingSpecialist, 7000, WebAgencyDepartments.Marketing, Hired.Current);
const employee10 = new Employee(10, "Dmytro", "Panchkak", WebAgencyPosition.MarketingSpecialist, 7500, WebAgencyDepartments.Marketing, Hired.Current);
const employee11 = new Employee(11, "Igor", "Lastochkin", WebAgencyPosition.GraphicDesigner, 3500, WebAgencyDepartments.Design, Hired.Current);
const employee12 = new Employee(12, "Vova", "Pupkin", WebAgencyPosition.FullStackDeveloper, 4500, WebAgencyDepartments.Development, Hired.Current);

const companyPreviousHiredPersonal: Employee[] = [
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



const company1 = new Company("CodeStudio", companyDepartamentList, companyPreviousHiredPersonal);
// console.log(company1.getHiredEmployeersData(Hired.Current));
console.log(company1.getDepartamentsEmployeers());





























// employee1.fire(true);
// employee2.fire(true);
// employee3.fire(true);
// employee4.fire(true);
// employee5.fire(true);
// employee6.fire(true);


// const full: Employee[] = [
//   employee1,
//   employee2,
//   employee3,
//   employee4,
//   employee5,
//   employee6,
//   employee7,
//   employee8,
//   employee9,
//   employee10,
//   employee11,
//   employee12,
// ];



// let fired: Employee[] = []

// for (let i = 0; i < full.length; i++) {
//   const element = full[i];
//   if(element.EmployeersData.isFired === true){
//     fired.push(element);
//   }
// }