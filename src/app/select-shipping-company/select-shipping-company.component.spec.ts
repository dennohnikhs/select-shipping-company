import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShippingCompanyComponent } from './select-shipping-company.component';

describe('SelectShippingCompanyComponent', () => {
  let component: SelectShippingCompanyComponent;
  let fixture: ComponentFixture<SelectShippingCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectShippingCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectShippingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
