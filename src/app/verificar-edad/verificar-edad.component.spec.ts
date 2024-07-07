import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEdadComponent } from './verificar-edad.component';

describe('VerificarEdadComponent', () => {
  let component: VerificarEdadComponent;
  let fixture: ComponentFixture<VerificarEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarEdadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
