import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { MyTeamCardComponent } from './components/my-team-card/my-team-card.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamTrackerComponent } from './components/team-tracker/team-tracker.component';



@NgModule({
  exports: [
    TeamCardComponent,
    TeamCreateComponent,
    MyTeamCardComponent,
    TeamDetailsComponent,
    TeamTrackerComponent
  ],
  imports: [
    CommonModule,
    TeamCardComponent,
    TeamCreateComponent,
    MyTeamCardComponent,
    TeamDetailsComponent,
    TeamTrackerComponent
  ]
})
export class TeamModule { }
