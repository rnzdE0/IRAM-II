import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  philippineTime: string = '';
  showScrollButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.updatePhilippineTime();
    setInterval(() => {
      this.updatePhilippineTime();
    }, 1000);
    
    // Check initial scroll position
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    // Show button when scrolled down 300px from the top
    this.showScrollButton = window.pageYOffset > 300;
    
    // Update button visibility
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
      if (this.showScrollButton) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  updatePhilippineTime() {
    // Philippine time is GMT+8
    const now = new Date();
    const philippineTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    
    let hours = philippineTime.getUTCHours();
    const minutes = philippineTime.getUTCMinutes();
    const seconds = philippineTime.getUTCSeconds();
    
    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format the time as HH:MM:SS AM/PM
    this.philippineTime = 
      hours.toString().padStart(2, '0') + ':' + 
      minutes.toString().padStart(2, '0') + ':' + 
      seconds.toString().padStart(2, '0') + ' ' + 
      ampm;
  }

  // Button actions
  callNow() {
    // Implement call functionality or open phone dialer
    window.location.href = 'tel:09XXXXXXXXX';
  }

  emailNow() {
    // Open email client
    window.location.href = 'mailto:sample@gmail.com';
  }

  viewMap() {
    // Toggle map visibility (replace placeholder with actual map)
    const mapPlaceholder = document.querySelector('.map-placeholder');
    const mapContainer = document.querySelector('.map-container');
    
    if (mapPlaceholder && mapContainer) {
      // mapPlaceholder.style.display = 'none';
      // mapContainer.style.display = 'block';
    }
  }

  chatNow() {
    // Implement chat functionality or redirect to chat page
    console.log('Chat functionality would be implemented here');
    // For example: window.location.href = '/chat';
  }
}