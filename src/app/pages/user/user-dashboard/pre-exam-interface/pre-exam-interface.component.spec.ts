import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreExamInterfaceComponent } from './pre-exam-interface.component';

describe('PreExamInterfaceComponent', () => {
  let component: PreExamInterfaceComponent;
  let fixture: ComponentFixture<PreExamInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreExamInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreExamInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
