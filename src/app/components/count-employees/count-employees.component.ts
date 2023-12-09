import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-count-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './count-employees.component.html',
  styleUrl: './count-employees.component.css',
})
export class CountEmployeesComponent {
  @Input() all: number;
  @Input() male: number;
  @Input() female: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  constructor() {
    this.all = 0;
    this.male = 0;
    this.female = 0;
  }
  radioButtonSelected = 'all';

  radiochange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }
}
