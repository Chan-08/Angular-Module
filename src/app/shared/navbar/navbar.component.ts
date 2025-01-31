import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentRoute: string = '';
  pageTitle: string = ''; // Text-based logo
  buttonText: string = '';
  buttonAction: Function = () => {}; // Default function

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.updateNavbar();
    });
  }

  updateNavbar() {
    if (this.currentRoute === '/dashboard') {
      this.pageTitle = 'Dashboard';
      this.buttonText = 'Go to Home';
      this.buttonAction = () => this.router.navigate(['/home']);
    } else if (this.currentRoute === '/home') {
      this.pageTitle = 'Home';
      this.buttonText = 'Back to Dashboard';
      this.buttonAction = () => this.router.navigate(['/dashboard']);
    }
  }

  onButtonClick() {
    this.buttonAction();
  }
}
