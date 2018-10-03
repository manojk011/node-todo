import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbaasComponent } from './dbaas.component';

describe('DbaasComponent', () => {
  let component: DbaasComponent;
  let fixture: ComponentFixture<DbaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
