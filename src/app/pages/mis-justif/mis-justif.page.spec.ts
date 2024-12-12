import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisJustifPage } from './mis-justif.page';

describe('MisJustifPage', () => {
  let component: MisJustifPage;
  let fixture: ComponentFixture<MisJustifPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisJustifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
