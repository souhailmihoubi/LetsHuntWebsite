import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  token!: string;
  newPassword!: string;
  confirmPassword!: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
  
    const apiUrl = 'https://af633.playfabapi.com/Admin/ResetPassword';
    
    const requestBody = {
      Token: this.token,
      Password: this.newPassword
    };
  
    console.log('Request Body:', requestBody);
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-SecretKey': 'OQX9AT7RKF31UNRTN8FIOEJ5QR9X1ZM3US3UENTW53J5CO7RXW'
    });
  
    this.http.post(apiUrl, requestBody, { headers }).subscribe(
      response => {
        console.log('Password reset successfully!', response);
      },
      error => {
        console.error('Failed to reset password!', error);
      }
    );
  }
}
