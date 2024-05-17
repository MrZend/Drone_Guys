import { Component } from '@angular/core';
import { TeamModule } from '../../../shared/drone_guy/modules/team/team.module';

@Component({
  selector: 'app-my-teams-drone',
  standalone: true,
  imports: [ TeamModule ],
  templateUrl: './my-teams-drone.component.html',
  styleUrl: './my-teams-drone.component.scss'
})
export class MyTeamsDroneComponent {

}
