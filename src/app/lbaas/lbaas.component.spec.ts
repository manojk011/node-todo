import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbaasComponent } from './lbaas.component';

describe('LbaasComponent', () => {
  let component: LbaasComponent;
  let fixture: ComponentFixture<LbaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
