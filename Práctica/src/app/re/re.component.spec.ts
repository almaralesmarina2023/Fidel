import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReComponent } from './re.component';

describe('ReComponent', () => {
  let component: ReComponent;
  let fixture: ComponentFixture<ReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReComponent]
    });
    fixture = TestBed.createComponent(ReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
