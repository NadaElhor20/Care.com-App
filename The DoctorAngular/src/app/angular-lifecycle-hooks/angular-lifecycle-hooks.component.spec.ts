import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifecycleHooksComponent } from './angular-lifecycle-hooks.component';

describe('AngularLifecycleHooksComponent', () => {
  let component: AngularLifecycleHooksComponent;
  let fixture: ComponentFixture<AngularLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
