import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuizzessComponent } from './all-quizzess.component';

describe('AllQuizzessComponent', () => {
  let component: AllQuizzessComponent;
  let fixture: ComponentFixture<AllQuizzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllQuizzessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllQuizzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
