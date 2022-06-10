import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteCarteComponent } from './vente-carte.component';

describe('VenteCarteComponent', () => {
  let component: VenteCarteComponent;
  let fixture: ComponentFixture<VenteCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
