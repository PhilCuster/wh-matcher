import { Component } from '@angular/core';
import { RouterLinks } from 'src/model/router-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'wh-matcher';

  routerLinks: RouterLinks[] = [
    { label: 'Search for Game', path: '/search' },
    { label: 'View Games', path: '/games' },
    { label: 'About', path: '/about' },
  ];
}
