import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // form = {
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // };

  // constructor(private http: HttpClient) {}

  // sendEmail() {
  //   this.http.post('https://your-backend-domain.com/api/send-email', this.form).subscribe({
  //     next: () => alert('Email sent successfully!'),
  //     error: () => alert('Failed to send email.')
  //   });
  // }
}
