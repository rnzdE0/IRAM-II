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