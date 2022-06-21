import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikishotDetailComponent } from './wikishot-detail.component';

describe('WikishotDetailComponent', () => {
  let component: WikishotDetailComponent;
  let fixture: ComponentFixture<WikishotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikishotDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikishotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
