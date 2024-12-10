import { Injectable } from "@angular/core";
import { Variables } from "../variables";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Project } from "../../dtos/project";

@Injectable({ providedIn: 'root' })
export class ProjectRepository {

  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = new Variables().BaseURL;
  }

  GetProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.URL}api/Project/get-all`,
      {
        responseType: "json",
      })
      .pipe(
        catchError(error => {
          console.error('Error fetching JSON data:', error);
          return throwError(() => new Error('Something went wrong; please try again later.'));
        })
      );
  }

  GetProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.URL}api/Project/get-by-id/${id}`,
      {
        responseType: "json",
      })
      .pipe(
        catchError(error => {
          console.error('Error fetching in Search By Id JSON Data:', error);
          return throwError(() => new Error('Something went wrong; please try again later.'));
        })
      );
  }

  DeleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}api/Project/delete/${id}`)
    .pipe(
      catchError(error => {
        console.error('Error delete:', error);
        return throwError(() => new Error('Something went wrong; please try again later.'));
      })
    )
  }

  CreateProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.URL}api/Project/add`, project)
    .pipe(
      catchError(error => {
        console.error('Error post:', error);
        return throwError(() => new Error('Something went wrong; please try again later.'));
      })
    );;
  }
}
