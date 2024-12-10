import { Component, OnInit } from '@angular/core';
import { ProjectRepository } from '../../../shared/repository/project-repository';
import { Project } from '../../../dtos/project';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent implements OnInit {

  projectList!: Project[];

  constructor(private repository: ProjectRepository, private router: Router) { }

  ngOnInit(): void {
    this.repository.GetProjects().subscribe({
      next: (data: Project[]) => {
        this.projectList = data;
      }
    })

    // Detectar mudanças na rota
    this.router.events.subscribe(() => {
      if (this.router.url.includes('/list')) {
        this.repository.GetProjects().subscribe({
          next: (data: Project[]) => {
            this.projectList = data;
          }
        })
      }
    });
  }

  RemoveProject(id: number) {
    this.repository.DeleteProject(id).subscribe(() => {
      this.router.navigate(["project/list-projects"]);
    });
  }
}
