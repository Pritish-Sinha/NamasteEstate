import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { loggedInUserSelector } from 'src/app/features/auth/store/auth.selectors';

@Component({
  selector: 'app-navbar',
  template: `
    <!-- template Start -->
    <nav class="navbar-container">
      <ul class="navbar-item-container">
        <li class="hotels-section">
          <button class="hotels-button" routerLink="/hotel-listing">
            <svg
              class="bi bi-buildings"
              fill="white"
              height="22"
              viewBox="0 0 16 16"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"
              />
              <path
                d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"
              />
            </svg>
            Find Hotels
          </button>
        </li>
        <li class="company-name">
          <h3 routerLink="/">Namaste Stays Booking</h3>
        </li>

        <li
          class="button-section"
          *ngIf="!(loggedInUser$ | async); else loggedInTrue"
        >
          <button class="login-button" routerLink="/login">Login</button>
          <button class="sign-up-button" routerLink="/sign-up">Sign Up</button>
        </li>
        <ng-template #loggedInTrue>
          <div class="logged-in-container" [ngClass]="{ active: menuActive }">
            <img src="assets/icons/heart.svg" alt="heart" class="heart-img" />
            <span class="user-favourites">Favourites </span>
            <span class="user-avatar" routerLink="/account">{{
              firstName | logo
            }}</span>
            <span class="user-name" routerLink="/account">
              <ng-container *ngIf="menuActive; else showFirstName"
                >Settings</ng-container
              >
              <ng-template #showFirstName>{{ firstName }}</ng-template>
            </span>
          </div>
        </ng-template>
      </ul>
    </nav>

    <!-- template End -->
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedInUser$ = this.store.select(loggedInUserSelector);
  firstName: string = '';
  menuActive = false;
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser && loggedInUser.length > 0) {
        this.firstName = loggedInUser[0].user.firstName;
      } else {
        console.log('User is not logged in');
      }
    });
  }
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
