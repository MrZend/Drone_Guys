import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-team-join',
  standalone: true,
  imports: [],
  templateUrl: './team-join.component.html',
  styleUrl: './team-join.component.scss'
})
export class TeamJoinComponent {
  constructor(private router: Router, public dialog: MatDialog) { }

  onClick(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    this.dialog.closeAll();
    this.router.navigate(['/drone/myteams/team']);
  }
}
