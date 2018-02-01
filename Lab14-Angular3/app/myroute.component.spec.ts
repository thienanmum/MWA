import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrouteComponent } from './myroute.component';

describe('MyrouteComponent', () => {
  let component: MyrouteComponent;
  let fixture: ComponentFixture<MyrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
