import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GridCard} from '../grid-card';

@Component({
  selector: 'app-grid-cards-spawner',
  templateUrl: './grid-cards-spawner.component.html',
  styleUrls: ['./grid-cards-spawner.component.scss']
})
export class GridCardsSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;
  @Input() card: GridCard;

  constructor(private resolver: ComponentFactoryResolver) {
    this.setCard();
  }


  setCard(){
    if (!this.card) {
      return;
    }
    const inputProviders = Object.keys(this.card.input).map((inputName) => {
      return {provide: this.card.input[inputName].key, useValue: this.card.input[inputName].value, deps: []};
    });
    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(this.card.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }
  
  ngOnInit() {
  }

}
