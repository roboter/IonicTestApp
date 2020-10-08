import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [AuthRoutingModule, FormsModule, IonicModule],
    exports: [AuthRoutingModule],
    declarations: [LoginComponent]
})
export class AuthModule { }
