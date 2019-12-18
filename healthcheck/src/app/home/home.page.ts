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
  constructor(public feedbackService: TranslateService) { }


  onSubmit() {

    this.feedbackService.get(_('FEEDBACK.thankyou-msg')).subscribe((message: string) => {
    //
    });

  }
}
