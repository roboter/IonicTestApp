import { Component, OnInit } from '@angular/core';
import { UserOptions } from '../user.options';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: UserOptions = { username: '', password: '' };
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    
  }
}
