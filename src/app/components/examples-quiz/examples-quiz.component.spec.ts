import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesQuizComponent } from './examples-quiz.component';

describe('ExamplesQuizComponent', () => {
  let component: ExamplesQuizComponent;
  let fixture: ComponentFixture<ExamplesQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
