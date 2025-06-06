import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionAndMissionComponent } from './vision-and-mission.component';

describe('VisionAndMissionComponent', () => {
  let component: VisionAndMissionComponent;
  let fixture: ComponentFixture<VisionAndMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionAndMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionAndMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
