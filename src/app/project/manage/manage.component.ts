import { Component, OnInit, inject } from '@angular/core';
import { EditComponent } from "../edit/edit.component";
import { CreateServiceComponent } from "../create-service/create-service.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectRepository } from '../../../shared/repository/project-repository';
import { Project } from '../../../dtos/project';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [EditComponent, CreateServiceComponent, CommonModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent implements OnInit {
  toggleEditProjectForms: boolean = false;
  toggleServiceForms: boolean = false;
  project!: Project;

  private activatedRoute = inject(ActivatedRoute);
  id = this.activatedRoute.snapshot.params['id'];

  constructor(private repository: ProjectRepository) { }

  ngOnInit(): void {
    this.repository.GetProjectById(this.id).subscribe(
      {
        next: (data => {
          this.project = data;
        })
      }
    );
  }

  ToggleServiceForms() {
    this.toggleServiceForms = !this.toggleServiceForms;
  }

  ToggleEditProjectForms() {
    this.toggleEditProjectForms = !this.toggleEditProjectForms;
  }
}
