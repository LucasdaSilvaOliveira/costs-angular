import { Injectable, NgModule } from "@angular/core";
import { Variables } from "../variables";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ProjectRepository {

    private URL: string;
    constructor(private http: HttpClient) {
        this.URL = new Variables().BaseURL; 
    }

    GetProjects() {
        this.http.get(`${this.URL}api/Project/get-all`).subscribe({
            next: projects => {
                console.log(projects)
            }
        });
    }
}
