import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDroneComponent } from '../../pages/drone_guy/profile-drone/profile-drone.page';
import { TeamsDroneComponent } from '../../pages/drone_guy/teams-drone/teams-drone.component';
import { OrdersDroneComponent } from '../../pages/drone_guy/orders-drone/orders-drone.component';
import { SettingsDroneComponent } from '../../pages/drone_guy/settings-drone/settings-drone.component';
import { MyTeamDroneComponent } from '../../pages/drone_guy/my-team-drone/my-team-drone.component';
import { MyTeamsDroneComponent } from '../../pages/drone_guy/my-teams-drone/my-teams-drone.component';

const routes: Routes = [
  {
    path: '', component: ProfileDroneComponent
  },
  {
    path: 'profile', component: ProfileDroneComponent
  },
  {
    path: 'teams', component: TeamsDroneComponent
  },
  {
    path: 'orders', component: OrdersDroneComponent
  },
  {
    path: 'settings', component: SettingsDroneComponent
  },
  {
    path: 'myteams/team', component: MyTeamDroneComponent
  },
  {
    path: 'myteams', component: MyTeamsDroneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroneGuyRoutingModule { }
