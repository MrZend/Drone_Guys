import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';

const hidden = {
  border: 'solid',
  content: '',
  display: 'inline-block',
  padding: '2px',
  position: 'absolute',
  right: '1.5rem',
  top: '1.4rem',
  transform: 'rotate(-135deg)'
};

const visible = {
  transform: 'rotate(45deg)'
}

const timing = 'all .2s ease-out';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('openClose',[
      transition(':enter', [
        style(hidden),
        animate(timing, style(visible))
      ]),
      transition(':leave', [
        style(visible),
        animate(timing, style(hidden))
      ])
    ])
  ]
})
export class SidebarComponent {
  protected menuOpen = false;
}
