import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
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
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    
    this.philippineTime = new Intl.DateTimeFormat('en-PH', options).format(now);
  }
}
