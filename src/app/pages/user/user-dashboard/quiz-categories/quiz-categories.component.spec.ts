import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoriesComponent } from './quiz-categories.component';

describe('QuizCategoriesComponent', () => {
  let component: QuizCategoriesComponent;
  let fixture: ComponentFixture<QuizCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
