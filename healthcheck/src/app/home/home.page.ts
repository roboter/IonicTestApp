import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  version;
  result;
  constructor(private http: HttpClient, private appVersion: AppVersion) {
    this.appVersion
      .getVersionNumber()
      .then(v => {
        console.log(v);
        this.version = v;
      })
      .catch(error => console.log(error));
  }

  doahealthcheck(url) {
    this.http
      .get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
      })
      .subscribe(
        result => {
          this.result = 'success' + JSON.stringify(result);
        },
        error => {
          this.result = 'error' + JSON.stringify(error);
        }
      );
  }
}
