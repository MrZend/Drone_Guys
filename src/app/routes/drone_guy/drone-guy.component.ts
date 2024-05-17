import { Component } from '@angular/core';
import { LayoutsModule } from '../../modules/drone_guy/layouts/layouts.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drone-guy',
  standalone: true,
  imports: [LayoutsModule, RouterOutlet],
  templateUrl: './drone-guy.component.html',
  styleUrl: './drone-guy.component.scss'
})
export class DroneGuyComponent {

}
