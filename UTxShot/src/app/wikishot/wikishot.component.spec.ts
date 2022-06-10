import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikishotComponent } from './wikishot.component';

describe('WikishotComponent', () => {
  let component: WikishotComponent;
  let fixture: ComponentFixture<WikishotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikishotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikishotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
