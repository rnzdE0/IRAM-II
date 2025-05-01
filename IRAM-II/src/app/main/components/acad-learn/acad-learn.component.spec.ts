import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadLearnComponent } from './acad-learn.component';

describe('AcadLearnComponent', () => {
  let component: AcadLearnComponent;
  let fixture: ComponentFixture<AcadLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcadLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
