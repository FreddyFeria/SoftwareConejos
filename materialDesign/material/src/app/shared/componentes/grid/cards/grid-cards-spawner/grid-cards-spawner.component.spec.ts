import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardsSpawnerComponent } from './grid-cards-spawner.component';

describe('GridCardsSpawnerComponent', () => {
  let component: GridCardsSpawnerComponent;
  let fixture: ComponentFixture<GridCardsSpawnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCardsSpawnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCardsSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
