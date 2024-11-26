import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";
import { CreateServiceComponent } from "../create-service/create-service.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [EditComponent, CreateServiceComponent, CommonModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  toggleEditProjectForms: boolean = false;
  toggleServiceForms:boolean = false;

  ToggleServiceForms() {
    this.toggleServiceForms = !this.toggleServiceForms; 
  }

  ToggleEditProjectForms() {
    this.toggleEditProjectForms = !this.toggleEditProjectForms;
  }
}
