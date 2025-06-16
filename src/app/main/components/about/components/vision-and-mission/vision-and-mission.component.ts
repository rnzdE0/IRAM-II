import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebContentService, WebContent } from '../../../../../services/web-content.service';

@Component({
  selector: 'app-vision-and-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-and-mission.component.html',
  styleUrls: ['./vision-and-mission.component.scss']
})
export class VisionAndMissionComponent implements OnInit {
  visionContent: string = '';
  missionContent: string = '';
  coreValuesContent: string = '';

  constructor(private contentService: WebContentService) {}

  ngOnInit(): void {
    this.contentService.getBySection('Vision').subscribe(data => {
      this.visionContent = data?.content || 'Vision content not available.';
    });
    this.contentService.getBySection('Mission').subscribe(data => {
      this.missionContent = data?.content || 'Mission content not available.';
    });
    this.contentService.getBySection('Core Values').subscribe(data => {
      this.coreValuesContent = data?.content || 'Core Values content not available.';
    });
  }
}