import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GridCard} from '../grid-card';

@Component({
  selector: 'app-grid-cards-spawner',
  templateUrl: './grid-cards-spawner.component.html',
  styleUrls: ['./grid-cards-spawner.component.scss']
})
export class GridCardsSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: GridCard) {
    if (!data) {
      return;
    }
    const inputProviders = Object.keys(data.input).map((inputName) => {
      return {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []};
    });
    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }
  
  ngOnInit() {
  }

}
