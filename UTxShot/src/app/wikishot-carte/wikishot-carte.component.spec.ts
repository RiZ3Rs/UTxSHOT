import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikishotCarteComponent } from './wikishot-carte.component';

describe('WikishotCarteComponent', () => {
  let component: WikishotCarteComponent;
  let fixture: ComponentFixture<WikishotCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikishotCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikishotCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
