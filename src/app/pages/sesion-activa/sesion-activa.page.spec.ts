import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionActivaPage } from './sesion-activa.page';

describe('SesionActivaPage', () => {
  let component: SesionActivaPage;
  let fixture: ComponentFixture<SesionActivaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionActivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
