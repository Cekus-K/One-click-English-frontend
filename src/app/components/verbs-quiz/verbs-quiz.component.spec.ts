import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsQuizComponent } from './verbs-quiz.component';

describe('VerbsQuizComponent', () => {
  let component: VerbsQuizComponent;
  let fixture: ComponentFixture<VerbsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
