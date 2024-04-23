import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-user-scrum',
  templateUrl: './user-scrum.component.html',
  styleUrl: './user-scrum.component.scss'
})
export class UserScrumComponent {
constructor(private router: Router){}
  ngOnInit() {
    this.router.navigate(['/board']);
  }

}
