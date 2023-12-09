import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { EmployeeListComponent } from './components';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule, EmployeeListComponent],
})
export class AppComponent {
  constructor() {
    //setInterval(() => (this.disabled = false), 2000);
  }
}
