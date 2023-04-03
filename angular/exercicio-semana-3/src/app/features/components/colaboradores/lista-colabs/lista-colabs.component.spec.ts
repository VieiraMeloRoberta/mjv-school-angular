import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColabsComponent } from './lista-colabs.component';

describe('ListaColabsComponent', () => {
  let component: ListaColabsComponent;
  let fixture: ComponentFixture<ListaColabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaColabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
