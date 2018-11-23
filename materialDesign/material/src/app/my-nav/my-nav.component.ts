import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from '../catalog.service'
import { menuListButton } from "../animations/animations";

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
  animations: [menuListButton]
})
export class MyNavComponent {
  menuData: Object;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private menuCatalog: CatalogService) {
    this.menuData = this.menuCatalog.getMenuLateral();
  }

  onItemSelected() {
  }

}
