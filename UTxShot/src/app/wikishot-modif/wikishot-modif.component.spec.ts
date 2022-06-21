import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikishotModifComponent } from './wikishot-modif.component';

describe('WikishotModifComponent', () => {
  let component: WikishotModifComponent;
  let fixture: ComponentFixture<WikishotModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikishotModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikishotModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
