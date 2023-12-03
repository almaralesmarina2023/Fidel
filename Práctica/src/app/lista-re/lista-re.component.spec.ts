import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReComponent } from './lista-re.component';

describe('ListaReComponent', () => {
  let component: ListaReComponent;
  let fixture: ComponentFixture<ListaReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReComponent]
    });
    fixture = TestBed.createComponent(ListaReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
