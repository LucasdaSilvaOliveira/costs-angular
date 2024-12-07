import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './project/create/create.component';
import { ListProjectsComponent } from './project/list-projects/list-projects.component';
import { ManageComponent } from './project/manage/manage.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "project/create", component: CreateComponent},
    {path: "project/list-projects", component: ListProjectsComponent},
    {path: "project/manage/:id", component: ManageComponent},
];
