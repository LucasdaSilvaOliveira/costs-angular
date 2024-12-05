import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectRepository } from '../shared/repository/project-repository';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'costs-angular';

  constructor(private repository: ProjectRepository) {
    repository.GetProjects().subscribe({
      next: data => {
        console.log('JSON Data:', data)
      },
      // error: error => {
      //   console.error('Error fetching JSON data:', error)
      //   if (error instanceof HttpErrorResponse) {
      //     console.error('Error Status:', error.status);
      //     console.error('Error Message:', error.message);
      //     console.error('Error Details:', error.error);
      //   }
      // }
    });
  }

}
