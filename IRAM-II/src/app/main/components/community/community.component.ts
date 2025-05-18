import { Component } from '@angular/core';
import { MaterialModule } from '../../../module/material/material.module';

@Component({
  selector: 'app-community',
  imports: [MaterialModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  philippineTime: string = '';
  
  ngOnInit(): void {
    this.updatePhilippineTime();
    // Update the time every second
    setInterval(() => this.updatePhilippineTime(), 1000);
  }
  
  updatePhilippineTime(): void {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Manila',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  const parts = new Intl.DateTimeFormat('en-PH', options).formatToParts(now);

  this.philippineTime = parts.map(part => part.value).join('');

  this.philippineTime = this.philippineTime.replace(parts.find(p => p.type === 'weekday')?.value || '', 
    (parts.find(p => p.type === 'weekday')?.value || '') + ',');
}


   selectedCategory = 'parent';

    onLevelChange(newLevel: string): void {
    this.selectedCategory = newLevel;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
