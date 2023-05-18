import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescritionComponent } from './product-descrition.component';

describe('ProductDescritionComponent', () => {
  let component: ProductDescritionComponent;
  let fixture: ComponentFixture<ProductDescritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
