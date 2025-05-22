import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection: any;
  setActiveSection: any;
  announcements: any;
  addAnnouncement: any;
  logout: any;
  newAnnouncement: any;
}
