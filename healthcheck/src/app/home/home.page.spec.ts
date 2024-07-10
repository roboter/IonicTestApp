import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { HomePage } from './home.page';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [HomePage],
    imports: [IonicModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    httpTestingController = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send htpp request on doahealthcheck ang get success result', () => {
    component.doahealthcheck('http://google.com');
    const req = httpTestingController.expectOne('http://google.com');

    expect(req.request.method).toEqual('GET');
    req.flush('result');
    expect(component.result).toEqual('success"result"');
  });

  it('should send htpp request on doahealthcheck ang get error result', () => {
    component.doahealthcheck('http://google.com');
    const req = httpTestingController.expectOne('http://google.com');

    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('error'));
    expect(component.result).toEqual('error{"headers":{"normalizedNames":{},"lazyUpdate":null,"headers":{}},"status":0,"statusText":"Unknown Error","url":"http://google.com","ok":false,"name":"HttpErrorResponse","message":"Http failure response for http://google.com: 0 ","error":{"isTrusted":false}');
  });
});
