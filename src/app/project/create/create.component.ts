import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../../dtos/project';
import { ProjectRepository } from '../../../shared/repository/project-repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  project!: FormGroup;

  constructor(
    private repository: ProjectRepository,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.project = this.formBuilder.group({
      name: "",
      budget: "",
      category: ""
    });
  }

  onSubmit() {
    let project = new Project(this.project.value.name, this.project.value.budget, this.project.value.category);
    this.repository.CreateProject(project).subscribe(() => {
      this.router.navigate(['project/list-projects']);
    });

  }
}
