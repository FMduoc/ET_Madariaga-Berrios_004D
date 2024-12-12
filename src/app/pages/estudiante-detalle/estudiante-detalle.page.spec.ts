import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteDetallePage } from './estudiante-detalle.page';

describe('EstudianteDetallePage', () => {
  let component: EstudianteDetallePage;
  let fixture: ComponentFixture<EstudianteDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
