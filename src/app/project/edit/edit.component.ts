import { Component, Input } from '@angular/core';
import { Project } from '../../../dtos/project';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Input() projectValues!: Project;
}
