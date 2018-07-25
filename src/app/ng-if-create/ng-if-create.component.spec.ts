import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfCreateComponent } from './ng-if-create.component';

describe('NgIfCreateComponent', () => {
  let component: NgIfCreateComponent;
  let fixture: ComponentFixture<NgIfCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
