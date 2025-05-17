import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../module/material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReadmeComponent } from './readme/readme.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  philippineTime: string = '';
  
  ngOnInit(): void {
    this.updatePhilippineTime();
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

  readme() {
    console.log('Opening dialog...');
      this.dialog.open(ReadmeComponent, {
        maxWidth: '180vh',
      });
  }

  View() {
     this.router.navigate(['/NewsNUpdates']);
  }



  slides = [
    { img: 'assets/image/1.png' },
    { img: 'assets/image/2.png' },
    { img: 'assets/image/3.png' },
    { img: 'assets/image/4.png' },
    { img: 'assets/image/5.png' },
    { img: 'assets/image/6.jpg' },
  ];


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  };
}


