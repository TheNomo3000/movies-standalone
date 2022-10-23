import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      class="navbar is-flex is-align-items-center is-justify-content-space-between"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          [routerLink]="['/']"
          routerLinkActive="router-link-active"
        >
          <img src="assets/movie-logo.png" alt="movie logo" />
        </a>
      </div>
      <button class="button mr-2 is-danger" (click)="closeSession()">
        <span class="icon is-small">
          <i class="fa-solid fa-right-from-bracket"></i>
        </span>
      </button>
    </nav>
  `,
  styles: [
    `
      .logo {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  closeSession(): void {
    localStorage.removeItem('userType');
    this.router.navigate(['/']);
  }
}
