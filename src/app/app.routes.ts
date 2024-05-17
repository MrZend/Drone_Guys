import { Routes } from '@angular/router';
import { LoginComponent } from './modules/public/auth/login/login.page';
import { ForgotComponent } from './modules/public/auth/forgot/forgot.page';
import { RolePickerComponent } from './modules/public/auth/role-picker/role-picker.page';
import { RegistrationComponent } from './modules/public/auth/registration/registration.page';
import { OtpComponent } from './modules/public/auth/otp/otp.page';
import { DroneGuyRoutingModule } from './routes/drone_guy/drone-guy-routing.module';
import { DroneGuyComponent } from './routes/drone_guy/drone-guy.component';

export const routes: Routes = [
      {
        path: 'auth/login', component: LoginComponent,
      },
      {
        path: 'auth/forgot', component: ForgotComponent,
      },
      {
        path: 'auth/register/role', component: RolePickerComponent,
      },
      {
        path: 'auth/register/data', component: RegistrationComponent,
      },
      {
        path: 'auth/register/otp', component: OtpComponent,
      },
      {
        path: 'drone',
        component: DroneGuyComponent,
        loadChildren: () => DroneGuyRoutingModule,
      },
      // {
      //   path: '', component: RootPageComponent,
      // },
      {
        path: '**',
        redirectTo: '',
      },
];
