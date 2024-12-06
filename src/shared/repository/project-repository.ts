import { Injectable } from "@angular/core";
import { Variables } from "../variables";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProjectRepository {

  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = new Variables().BaseURL;
  }

  GetProjects(): Observable<any> {
    return this.http.get<any>(`${this.URL}api/Project/get-all`,
      {
        responseType: "json",
      })
      .pipe(
      catchError(error => {
        console.error('Error fetching JSON data:', error);
        return throwError(()=> new Error('Something went wrong; please try again later.'));
      })
    );
  }
}
