import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseFinderComponent } from './phrase-finder.component';

describe('PhraseFinderComponent', () => {
  let component: PhraseFinderComponent;
  let fixture: ComponentFixture<PhraseFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
