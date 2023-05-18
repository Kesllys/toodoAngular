import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodoListComponent } from './toodo-list.component';

describe('ToodoListComponent', () => {
  let component: ToodoListComponent;
  let fixture: ComponentFixture<ToodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
