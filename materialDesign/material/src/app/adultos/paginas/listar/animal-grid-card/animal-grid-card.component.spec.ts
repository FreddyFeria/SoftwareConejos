import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGridCardComponent } from './animal-grid-card.component';

describe('AnimalGridCardComponent', () => {
  let component: AnimalGridCardComponent;
  let fixture: ComponentFixture<AnimalGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
