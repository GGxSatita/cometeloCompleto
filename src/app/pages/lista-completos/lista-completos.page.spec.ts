import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCompletosPage } from './lista-completos.page';

describe('ListaCompletosPage', () => {
  let component: ListaCompletosPage;
  let fixture: ComponentFixture<ListaCompletosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCompletosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
