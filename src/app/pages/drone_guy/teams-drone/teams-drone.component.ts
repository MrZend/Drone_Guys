import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { TeamModule } from '../../../shared/drone_guy/modules/team/team.module';
import { TeamCreateComponent } from '../../../shared/drone_guy/modules/team/components/team-create/team-create.component';


@Component({
  selector: 'app-teams-drone',
  standalone: true,
  imports: [
     TeamModule
    ],
  templateUrl: './teams-drone.component.html',
  styleUrl: './teams-drone.component.scss'
})
export class TeamsDroneComponent {
  constructor(public dialog: MatDialog) {}

  openCreateForm(event: any): Observable<any> {
    const dialogRef = this.dialog.open(TeamCreateComponent, {
      width: '60vw',
      height: '60vh',
      panelClass: 'details-dialog',
      closeOnNavigation: true
    });

    return dialogRef.afterClosed();
  }
}
