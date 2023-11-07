import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { DevicesPageComponent } from './devices-page/devices-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { DevicesEditComponent } from './devices-edit/devices-edit.component';
import { DevicesAddComponent } from './devices-add/devices-add.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AdminAuthGuard, UserAuthGuard } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminPageComponent,
    ClientPageComponent,
    NavbarComponent,
    DevicesPageComponent,
    UsersEditComponent,
    DevicesEditComponent,
    DevicesAddComponent,
    UserPageComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserAuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
