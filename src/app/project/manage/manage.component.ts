import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [EditComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {

}
