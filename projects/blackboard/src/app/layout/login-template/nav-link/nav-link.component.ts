import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() nav!: NavLink;
}

export interface NavLink {
  label: string;
  icon: string;
  link: string;
}
