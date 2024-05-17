import { Component } from '@angular/core';
import { TeamModule } from '../../../shared/drone_guy/modules/team/team.module';

@Component({
  selector: 'app-my-team-drone',
  standalone: true,
  imports: [TeamModule],
  templateUrl: './my-team-drone.component.html',
  styleUrl: './my-team-drone.component.scss'
})
export class MyTeamDroneComponent {

}
