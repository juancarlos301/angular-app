export class Employee {
  id: number;
  name: string;
  lastname: string;
  salary: number;
  sex: string;

  constructor(
    id: number,
    name: string,
    lastname: string,
    salary: number,
    sex: string
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.salary = salary;
    this.sex = sex;
  }
}
