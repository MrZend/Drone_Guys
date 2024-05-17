import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TeamJoinComponent } from '../team-join/team-join.component';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [TeamJoinComponent],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {
  constructor(public dialog: MatDialog) {}

  joinTeam(event: any): Observable<any> {
    const dialogRef = this.dialog.open(TeamJoinComponent, {
      width: '50vw',
      height: '40vh',
      panelClass: 'details-dialog',
      closeOnNavigation: true
    });

    return dialogRef.afterClosed();
  }
}
