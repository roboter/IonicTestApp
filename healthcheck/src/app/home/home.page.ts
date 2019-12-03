import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  result;
  constructor(private http: HttpClient) {}

  doahealthcheck(url) {
    this.http.get(url).subscribe(
      result => {
        this.result = 'success' + JSON.stringify(result);
      },
      error => {
        this.result = 'error' + JSON.stringify(error);
      }
    );
  }
}
