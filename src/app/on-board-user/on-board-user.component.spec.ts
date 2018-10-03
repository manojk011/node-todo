import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardUserComponent } from './on-board-user.component';

describe('OnBoardUserComponent', () => {
  let component: OnBoardUserComponent;
  let fixture: ComponentFixture<OnBoardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
