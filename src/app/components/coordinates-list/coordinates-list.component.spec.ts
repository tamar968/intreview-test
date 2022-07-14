import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesListComponent } from './coordinates-list.component';

describe('CoordinatesListComponent', () => {
  let component: CoordinatesListComponent;
  let fixture: ComponentFixture<CoordinatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
