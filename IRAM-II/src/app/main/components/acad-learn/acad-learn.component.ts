import { Component } from '@angular/core';

@Component({
  selector: 'app-acad-learn',
  imports: [],
  templateUrl: './acad-learn.component.html',
  styleUrl: './acad-learn.component.scss'
})
export class AcadLearnComponent {
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

}
