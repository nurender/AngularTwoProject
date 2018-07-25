import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatchdataComponent } from './fatchdata.component';

describe('FatchdataComponent', () => {
  let component: FatchdataComponent;
  let fixture: ComponentFixture<FatchdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatchdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
