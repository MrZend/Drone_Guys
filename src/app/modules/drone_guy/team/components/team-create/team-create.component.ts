import { Component } from '@angular/core';
import { AvatarComponent } from '../../../profile/components/avatar/avatar.component';

@Component({
  selector: 'app-team-create',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './team-create.component.html',
  styleUrl: './team-create.component.scss'
})
export class TeamCreateComponent {

}
