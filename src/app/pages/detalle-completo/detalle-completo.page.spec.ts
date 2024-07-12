import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCompletoPage } from './detalle-completo.page';

describe('DetalleCompletoPage', () => {
  let component: DetalleCompletoPage;
  let fixture: ComponentFixture<DetalleCompletoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCompletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
