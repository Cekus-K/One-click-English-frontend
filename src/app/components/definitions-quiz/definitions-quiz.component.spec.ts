import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsQuizComponent } from './definitions-quiz.component';

describe('DefinitionsQuizComponent', () => {
  let component: DefinitionsQuizComponent;
  let fixture: ComponentFixture<DefinitionsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
