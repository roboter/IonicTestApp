import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AppVersion } from '@ionic-native/app-version/ngx';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

// import { Plugins } from '@capacitor/core';
// import { DatePickerPluginInterface } from '@capacitor-community/date-picker';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// const DatePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;
// const selectedTheme = 'light';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  version;
  result;
  constructor(private http: HttpClient) //  private appVersion: AppVersion,
  //private qrScanner: QRScanner,
  // private barcodeScanner: BarcodeScanner
  {
    // this.appVersion
    //   .getVersionNumber()
    //   .then((v) => {
    //     console.log(v);
    //     this.version = v;
    //   })
    //   .catch((error) => console.log(error));
    // Pass a custom class to each select interface for styling
    const selects = document.querySelectorAll('.custom-options') as NodeListOf<HTMLIonSelectElement>; ;
    console.log(selects.length);
    for (var i = 0; i < selects.length; i++) {
      selects[i].interfaceOptions = {
        cssClass: 'my-custom-interface',
      };
    }
  }
  // Pass a custom class to each select interface for styling

  // scanQR() {
  //   this.barcodeScanner
  //     .scan()
  //     .then((barcodeData) => {
  //       console.log('Barcode data', barcodeData);
  //     })
  //     .catch((err) => {
  //       console.log('Error', err);
  //     });
  //   // Optionally request the permission early
  //   this.qrScanner
  //     .prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted

  //         // start scanning
  //         const scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //           console.log('Scanned something', text);

  //           this.qrScanner.hide(); // hide camera preview
  //           scanSub.unsubscribe(); // stop scanning
  //         });
  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       }
  //     })
  //     .catch((e: any) => console.log('Error is', e));
  // }

  doahealthcheck(url) {
    this.http
      .get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
        }),
      })
      .subscribe(
        (result) => {
          this.result = `success${JSON.stringify(result)}`;
        },
        (error) => {
          this.result = `error${JSON.stringify(error)}`;
        }
      );
  }

  calendar() {
    // DatePicker.present({
    //   mode: 'date',
    //   locale: 'pt_BR',
    //   format: 'dd/MM/yyyy',
    //   date: '13/07/2019',
    //   theme: selectedTheme,
    // }).then((date) => alert(date.value));
  }
}
