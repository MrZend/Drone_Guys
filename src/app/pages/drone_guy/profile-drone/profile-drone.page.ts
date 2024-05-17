import { Component } from '@angular/core';
import { ProfileModule } from '../../../shared/drone_guy/modules/profile/profile.module';

@Component({
  selector: 'app-profile-drone',
  standalone: true,
  imports: [
    ProfileModule
  ],
  templateUrl: './profile-drone.page.html',
  styleUrl: './profile-drone.page.scss'
})
export class ProfileDroneComponent {
  protected name: string = "Vladyslav";
  protected email: string = "vlad04102002@gmail.com"

}
