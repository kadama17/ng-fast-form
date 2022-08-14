import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFastFormComponent } from './ng-fast-form.component';

describe('NgFastFormComponent', () => {
  let component: NgFastFormComponent;
  let fixture: ComponentFixture<NgFastFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFastFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
