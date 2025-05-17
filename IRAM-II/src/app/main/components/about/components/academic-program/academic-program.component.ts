import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../module/material/material.module';

@Component({
  selector: 'app-academic-program',
  imports: [MaterialModule],
  templateUrl: './academic-program.component.html',
  styleUrl: './academic-program.component.scss'
})
export class AcademicProgramComponent {
    selectedLevel = 'basicEd';

    onLevelChange(newLevel: string): void {
    this.selectedLevel = newLevel;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
