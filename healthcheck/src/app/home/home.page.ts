import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  result;
  constructor(public translateService: TranslateService) { }

  doahealthcheck(url) {
    this.http.get(url, { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) }).subscribe(
      result => {
        this.result = 'success' + JSON.stringify(result);
      },
      error => {
        this.result = 'error' + JSON.stringify(error);
      }
    );
  }

  onSubmit() {
    this.feedbackService.submit({}).subscribe(xx => {
      this.translateService.get(_('FEEDBACK.thankyou-msg')).subscribe((message: string) => {
        this.toastController.create({
          message,
          duration: 3000
        }).then(x => x.present());
      });
      this.form.reset();
      this.isRated = false;
      this.router.navigate(['/']);
    });
  }
}
