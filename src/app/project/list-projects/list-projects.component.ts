import { Component } from '@angular/core';
import { ProjectRepository } from '../../../shared/repository/project-repository';
import { Project } from '../../../dtos/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {

  ProjectList!: Project[];

  constructor(private repository: ProjectRepository) {
    repository.GetProjects().subscribe({
      next: (data: Project[]) => {
        this.ProjectList = data;
      }
    })

  }

}
