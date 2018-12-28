import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from '../core/servicios/'

@Component({
  selector: 'app-root',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  title = 'Software conejos';
  menuData: Object;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private menuCatalog: CatalogService) {
    this.menuData = this.menuCatalog.getMenuLateral();
  }

  ngOnInit() {
  }

  onItemSelected() {
  }
}
