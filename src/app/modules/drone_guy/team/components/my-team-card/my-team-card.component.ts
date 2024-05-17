import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-team-card',
  standalone: true,
  imports: [],
  templateUrl: './my-team-card.component.html',
  styleUrl: './my-team-card.component.scss'
})
export class MyTeamCardComponent {
  constructor(private router: Router) {}

  openMyTeamPage(): any {
    this.router.navigate(['/drone/myteams/team']);
  }
}
