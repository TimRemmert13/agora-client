import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((response) => {
      this.router.navigateByUrl('/home');
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
