import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../../../module/material/material.module';

@Component({
  selector: 'app-academic-program',
  imports: [MaterialModule],
  templateUrl: './academic-program.component.html',
  styleUrls: ['./academic-program.component.scss']
})
export class AcademicProgramComponent implements OnInit {
    selectedLevel = 'basicEd';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const level = params['level'];
            if (level) {
                this.selectedLevel = level;
            }
        });
    }

    onLevelChange(newLevel: string): void {
        this.selectedLevel = newLevel;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
