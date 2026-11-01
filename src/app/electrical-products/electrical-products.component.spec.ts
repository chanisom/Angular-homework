import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalProductsComponent } from './electrical-products.component';

describe('ElectricalProductsComponent', () => {
  let component: ElectricalProductsComponent;
  let fixture: ComponentFixture<ElectricalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
