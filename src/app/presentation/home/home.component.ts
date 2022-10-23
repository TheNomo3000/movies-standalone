import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserType } from 'src/app/domain/models/user-type.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="home-body">
      <div class="container is-fluid">
        <div class="modal-date">
          <div class="is-flex is-justify-content-center mb-4">
            <figure class="image is-128x128 ">
              <img
                class="is-rounded"
                src="assets/movie-logo.png"
                alt="movie icon"
              />
            </figure>
          </div>
          <div class="field is-vertical">
            <div class="field-label">
              <label class="label">Fecha de Nacimiento</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input [(ngModel)]="birthdate" class="input" type="date" />
                </p>
              </div>
            </div>
          </div>
          <button
            class="button is-fullwidth is-primary"
            (click)="confirmBirthdate()"
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .home-body {
        width: 100%;
        height: 100vh;
      }
      .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        box-shadow: 1px 3px 5px 1px rgba(42, 55, 70, 0.4);
      }
      .modal-date {
        max-width: 500px;
        border-radius: 8px;
        padding: 24px;
        background-color: #f7f7f7;
        box-shadow: 0 30px 60px 0 rgba(42, 55, 70, 0.4);
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  birthdate!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  confirmBirthdate(): void {
    let type: UserType = UserType.KID;
    const ageDifMs = Date.now() - new Date(this.birthdate).getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age >= 18) {
      type = UserType.ADULT;
    }

    localStorage.setItem('userType', type.toString());

    this.router.navigate(['/movies']);
  }
}
