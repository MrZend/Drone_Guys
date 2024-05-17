import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TeamDetailsComponent } from '../team-details/team-details.component';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {

  constructor(public dialog: MatDialog) {}

  openTeamDetails(event: any): Observable<any> {
    const dialogRef = this.dialog.open(TeamDetailsComponent, {
      width: '80vw',
      height: '80vh',
      panelClass: 'details-dialog',
      closeOnNavigation: true
    });

    return dialogRef.afterClosed();
  }
}
