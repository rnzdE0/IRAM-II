import { Component } from '@angular/core';
import { ReadmeComponent } from '../home/readme/readme.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-and-updates',
  imports: [],
  templateUrl: './news-and-updates.component.html',
  styleUrl: './news-and-updates.component.scss'
})
export class NewsAndUpdatesComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

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

readme() {
    console.log('Opening dialog...');
      this.dialog.open(ReadmeComponent, {
        maxWidth: '180vh',
      });
  }

}
