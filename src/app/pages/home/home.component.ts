import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public auth0: AuthService) {}

  ngOnInit(): void {
    this.auth0.getAccessTokenSilently().subscribe((t) => console.log(t));
  }
}
