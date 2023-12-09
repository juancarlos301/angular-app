import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee } from '../../models';
import { CountEmployeesComponent } from '../count-employees';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, CountEmployeesComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  listEmployees: Employee[] = [
    { id: 1, lastname: 'valencia', name: 'Juan', salary: 2000, sex: 'male' },
    { id: 2, lastname: 'Montoya', name: 'Laura', salary: 1000, sex: 'female' },
    { id: 2, lastname: 'Montoya', name: 'Leo', salary: 3000, sex: 'female' },
    { id: 3, lastname: 'Montoya', name: 'Cubi', salary: 1000, sex: 'male' },
    { id: 4, lastname: 'Montoya', name: 'Buri', salary: 5000, sex: 'male' },
  ];

  radioSelected = 'all';

  getTotalEmployees(): number {
    return this.listEmployees.length;
  }

  getTotalEmployeesFemale(): number {
    return this.listEmployees.filter((item) => item.sex === 'female').length;
  }

  getTotalEmployeesMale(): number {
    return this.listEmployees.filter((item) => item.sex === 'male').length;
  }

  changeRadioSelected(newValue: string) {
    this.radioSelected = newValue;
  }

  countEmployeeRadioButtonChange(radioButtonSelected: string): void {
    this.radioSelected = radioButtonSelected;
  }
}
