import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizzessComponent } from './show-quizzess.component';

describe('ShowQuizzessComponent', () => {
  let component: ShowQuizzessComponent;
  let fixture: ComponentFixture<ShowQuizzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowQuizzessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowQuizzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
